export const siteConfig = {
  name: "Your Friend's Name",
  role: "Comic Artist · Storyteller · Creative",
  location: "Toronto, Canada",
  email: "hello@example.com",
  phone: "+1 000 000 0000",
  availability: "Open for commissions and collaborations",
  intro:
    "I create character-driven comics, short visual stories, and original worlds. This site is a simple home for my introduction, resume, and comic portfolio.",
  about: [
    "My work blends visual storytelling, worldbuilding, and clean composition. I care about expressive characters, memorable pacing, and making each page feel intentional.",
    "This website is designed to be easy to maintain: update the bio here, replace the resume PDF, and drop new comics into the comics folder to have them show up automatically."
  ],
  highlights: [
    {
      title: "Visual Storytelling",
      text: "Short comics, longer narratives, and portfolio-ready page layouts."
    },
    {
      title: "Character Design",
      text: "Distinct silhouettes, expressive faces, and strong scene mood."
    },
    {
      title: "Professional Work",
      text: "Resume-ready presentation for applications, clients, and collaborators."
    },
    {
      title: "Easy Updates",
      text: "Push a new comic folder to GitHub and Vercel will redeploy automatically."
    }
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "Instagram", href: "https://instagram.com/your-handle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" }
  ],
  resumeSummary: {
    intro:
      "A compact overview of experience, education, and selected strengths. Replace the sample text below with your friend's real details.",
    experience: [
      {
        title: "Freelance Comic Artist",
        period: "2024 — Present",
        description:
          "Created short comics, commission work, and concept art for clients and personal projects."
      },
      {
        title: "Illustration / Design Work",
        period: "2022 — 2024",
        description:
          "Worked on visual assets, layouts, and storytelling-focused creative work across digital formats."
      }
    ],
    education: [
      {
        title: "BFA / Illustration / Animation",
        period: "Add years here",
        description:
          "Replace this with school, program, and relevant awards or coursework."
      }
    ],
    skills: ["Comic storytelling", "Page composition", "Character design", "Digital illustration", "Visual development"]
  }
} as const;
