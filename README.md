<p align="center">
    <img src="https://i.ibb.co/QJ8fhsq/fosscu.png?s=96" alt="FOSSCU Logo" width="100" />
</p>

# FOSSConf India 2023 website

> The repo for the FOSSConf India website, based on
> Astro.js and Typescript.


## Contribution Guidelines

1. **Fork the Repository:** Start by forking the [fossconf repository](https://github.com/FOSS-Community/fossconf) to your own GitHub account.

2. **Create a Feature Branch:** Create a descriptive branch in your forked repository that corresponds to the feature or issue you are working on.

3. **Work on Your Contribution:**
   - Follow the coding style and conventions of the project.
   - Ensure your code is well-documented and your comments are clear and concise.

4. **Test Your Changes:** Thoroughly test your code to ensure it functions correctly and doesn't introduce new bugs. If applicable, add unit tests to cover your code.

5. **Update Documentation:** If your changes affect the project's usage or behavior, update the project's documentation. This includes the README and relevant documentation files.

## Creating a Pull Request

6. **Create a Pull Request:**
   - When you're satisfied with your changes, create a pull request (PR) from your feature branch to the main repository's `main` branch.
   - In the PR description, explain the purpose and details of your changes. Mention the issue your PR addresses if applicable.

7. **Issue Checklist:**
   - Ensure your PR includes an updated issue checklist within the PR comment section.
   - Mark off completed tasks and provide any additional information that helps reviewers understand your work.

Thank you for being a part of the fossconf community. Your contributions make this project better for everyone!


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |


## directories structure
.
├── astro.config.mjs
├── bun.lockb
├── netlify.toml
├── package.json
├── public
│   ├── favicon.png
│   ├── fossconf-dark.svg
│   ├── fossconf-green.png
│   ├── images
│   │   ├── bgsquare.svg
│   │   └── iiitdelhi.svg
│   └── manifest.webmanifest
├── README.md
├── src
│   ├── components
│   │   ├── external.svg
│   │   ├── Footer.astro
│   │   :
│   ├── data
│   │   ├── cfp.ts
│   │   ├── date.ts
│   │   ├── images
│   │   │   ├── speakers
│   │   │   │   ├── nikita.jpg
│   │   │   │   ├── shreya.png
│   │   │   │   ├── Shruti.jpeg
│   │   │   │   :
│   │   │   └── sponsors
│   │   │       ├── microsoft.png
│   │   │       :
│   │   ├── links.ts
│   │   └── schedules
│   │       ├── current.ts
│   │       ├── index.ts
│   │       └── speakers.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── globals.css
│   │   └── Layout.astro
│   ├── pages
│   │   ├── _
│   │   │   ├── About.astro
│   │   │   ├── CallForPaper.astro
│   │   │   ├── CodeOfConduct.astro
│   │   │   ├── Console
│   │   │   │   ├── Code.astro
│   │   │   │   ├── Controls.astro
│   │   │   │   └── index.astro
│   │   │   ├── Diversity.astro
│   │   │   ├── FAQpage.astro
│   │   │   ├── Hero
│   │   │   │   ├── Console.svelte
│   │   │   │   :
│   │   │   ├── Keynotes
│   │   │   │   ├── index.astro
│   │   │   │   ├── Keynotes.svelte
│   │   │   │   └── Keynote.svelte
│   │   │   ├── Live
│   │   │   │   └── index.astro
│   │   │   ├── Organisers
│   │   │   │   ├── images
│   │   │   │   │   ├── abhinav.jpeg
│   │   │   │   │   ├── aditya.jpg
│   │   │   │   │   ├── akshat.jpg
│   │   │   │   │   :
│   │   │   │   └── index.astro
│   │   │   ├── Panelists
│   │   │   │   ├── index.astro
│   │   │   │   ├── Panelists.svelte
│   │   │   │   └── Panelist.svelte
│   │   │   ├── Partners
│   │   │   │   ├── index.astro
│   │   │   │   └── logos
│   │   │   │       └── superteam.webp
│   │   │   ├── Schedule
│   │   │   │   ├── _
│   │   │   │   │   └── Schedules.svelte
│   │   │   │   ├── index.astro
│   │   │   │   └── schedule.astro
│   │   │   ├── Speakers
│   │   │   │   ├── index.astro
│   │   │   │   ├── speakers.astro
│   │   │   │   ├── Speakers.svelte
│   │   │   │   └── Speaker.svelte
│   │   │   ├── Sponsors
│   │   │   │   ├── index.astro
│   │   │   │   └── logos
│   │   │   │       ├── googleLogo.png
│   │   │   │       ├── solanaLogo.svg
│   │   │   │       └── Vector.svg
│   │   │   ├── Testimonials
│   │   │   │   ├── index.astro
│   │   │   │   ├── Tweet.astro
│   │   │   │   └── Tweets.astro
│   │   │   ├── Ticket
│   │   │   │   ├── index.astro
│   │   │   │   └── ticket.png
│   │   │   ├── Tickets.astro
│   │   │   ├── venue.astro
│   │   │   └── Volunteers
│   │   │       ├── images
│   │   │       │   ├── Aashima.jpeg
│   │   │       │   ├── Akaash.jpeg
│   │   │       │   :
│   │   │       └── index.astro
│   │   ├── 404.astro
│   │   ├── coc.astro
│   │   ├── discord.astro
│   │   ├── diversity.astro
│   │   ├── faq.astro
│   │   ├── index.astro
│   │   :
│   └── utils
│       ├── date-format.ts
│       ├── prefer-reduced-motion.ts
│       └── text-to-html.ts
└── tsconfig.json