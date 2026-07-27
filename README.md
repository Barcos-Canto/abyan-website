# ☁️ ABYAN MGT Webpage 
As of July 2026, this is a standalone webpage providing a front facing, online presence for ABYAN MGT Services Corp. Built with Nuxt and NuxtUI.

# 💻 Local Development

>[!IMPORTANT]
>If you are an employee of ABYAN and you are in the main office, please request access to the company laptop from HR. Included in that laptop is the main/admin account for the github repo of this website.
>This is to ensure the company still has internal access to the website.
>You cannot proceed to the rest of the development without it.

## How to get started
1. Clone repo
```bash
    git clone "https/shs/etc."
```
2. Install dependencies
```bash
    npm install
```

3. Run local server
```bash
    npm run dev
```

# 💬 Recommendations
## Development
This project uses nuxt/nuxtui. It is recommended to read both respective documentation. [nuxt](https://nuxt.com/docs/4.x/getting-started/introduction) / [nuxt.ui](https://ui.nuxt.com/docs/getting-started)
Moreover, nuxtui is built with tailwind, so it is also recommended to have read [tailwind documentation](https://tailwindcss.com/).

## OJT Developer's Notes 
>[!NOTE]
>This part can be removed in the future. 

- nuxt/nuxtui is mostly used for front end design
- properly implement nuxtui components to optimally make use of nuxt/nuxtui
- properly implement @theme, :root, and everything in /assets/main.cs for a more consistent design system
- when applying a custom theme for the webpage, properly implement it in app.config.ts. this also changes every instance of whatever component it modified.
- when nuxtui defaults need to be changed, either change them in isolation (inside per .vue file with tailwind) or in the app.config.ts
