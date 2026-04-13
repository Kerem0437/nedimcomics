import { promises as fs } from "fs";
import path from "path";

export type Comic = {
  slug: string;
  title: string;
  order: number;
  year?: string;
  summary?: string;
  tags: string[];
  coverSrc: string;
  pageSrcs: string[];
  pdfSrc?: string;
};

const comicsRoot = path.join(process.cwd(), "public", "comics");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

function isImage(fileName: string) {
  return imageExtensions.has(path.extname(fileName).toLowerCase());
}

function titleFromSlug(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function parseFolderName(folderName: string) {
  const match = folderName.match(/^(\d+)-(.+)$/);
  if (!match) {
    return { order: Number.MAX_SAFE_INTEGER, title: titleFromSlug(folderName) };
  }

  return { order: Number(match[1]), title: titleFromSlug(match[2]) };
}

async function readJsonFile<T>(filePath: string): Promise<T | null> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

export async function getAllComics(): Promise<Comic[]> {
  try {
    const entries = await fs.readdir(comicsRoot, { withFileTypes: true });
    const comicDirs = entries.filter((entry) => entry.isDirectory());

    const comics = await Promise.all(
      comicDirs.map(async (dir) => {
        const folderPath = path.join(comicsRoot, dir.name);
        const files = await fs.readdir(folderPath);
        const info = await readJsonFile<Partial<Comic>>(path.join(folderPath, "info.json"));
        const fallback = parseFolderName(dir.name);

        const coverFile = files.find((file) => /^cover\./i.test(file) && isImage(file));

        const pageFiles = files
          .filter((file) => isImage(file) && file !== coverFile)
          .sort((a, b) => collator.compare(a, b));

        const pdfFile = files.find((file) => file.toLowerCase().endsWith(".pdf"));

        return {
          slug: dir.name,
          title: info?.title || fallback.title,
          order: typeof info?.order === "number" ? info.order : fallback.order,
          year: typeof info?.year === "string" ? info.year : undefined,
          summary: typeof info?.summary === "string" ? info.summary : undefined,
          tags: Array.isArray(info?.tags) ? info.tags.filter((tag): tag is string => typeof tag === "string") : [],
          coverSrc: coverFile ? `/comics/${dir.name}/${coverFile}` : "/comic-placeholder.svg",
          pageSrcs: pageFiles.map((file) => `/comics/${dir.name}/${file}`),
          pdfSrc: pdfFile ? `/comics/${dir.name}/${pdfFile}` : undefined
        } satisfies Comic;
      })
    );

    return comics.sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order;
      }
      return collator.compare(a.title, b.title);
    });
  } catch {
    return [];
  }
}

export async function getComicBySlug(slug: string) {
  const comics = await getAllComics();
  return comics.find((comic) => comic.slug === slug) ?? null;
}

export async function getResumeExists() {
  try {
    await fs.access(path.join(process.cwd(), "public", "resume.pdf"));
    return true;
  } catch {
    return false;
  }
}
