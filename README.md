# Personal Website + Comic Portfolio

This project combines the **dark vCard-style personal site** from the first codebase with the **comic-library idea** from the second one, but strips it down into something much easier to deploy on **Vercel**.

## What it includes
- Main introduction page
- Resume page
- Comic portfolio page
- Individual comic detail pages
- Automatic comic listing from the repo itself

## Why this version is simpler
The Parker project is powerful, but it is a full comic server. That is much heavier than you need for a personal Vercel site.

This version keeps the polished portfolio feel while making content updates easy:
- edit text in `lib/site-config.ts`
- replace `public/resume.pdf`
- add comic folders inside `public/comics`

## Install
```bash
npm install
npm run dev
```

## Deploy to Vercel
Push this repo to GitHub and import it into Vercel.

## How to add a resume
Add a file named:
```bash
public/resume.pdf
```

## How to add comics
Create a new folder inside `public/comics`.

Recommended naming style:
```bash
public/comics/
  02-my-new-comic/
    cover.jpg
    01.jpg
    02.jpg
    03.jpg
    info.json
    comic.pdf   # optional
```

### Folder naming rule
Use:
```bash
[number]-[slug]
```
Example:
```bash
03-midnight-city
```
The number controls the display order.

### File naming rule inside each comic folder
- `cover.jpg` or `cover.png` for the preview card
- numbered page files like `01.jpg`, `02.jpg`, `03.jpg`
- optional `comic.pdf`
- optional `info.json`

### Optional `info.json`
```json
{
  "title": "Midnight City",
  "year": "2026",
  "summary": "A short cyberpunk comic about memory, surveillance, and identity.",
  "tags": ["Sci-fi", "Short Story", "Portfolio"]
}
```

## Main files to edit
- `lib/site-config.ts` → personal details and resume text
- `public/avatar.svg` → avatar / profile image
- `public/resume.pdf` → resume PDF
- `public/comics/*` → comic uploads
