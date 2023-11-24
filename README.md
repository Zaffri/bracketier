# Bracketier

Bracketier is an application that allows users to create tournaments and generate brackets in various styles such as round robin or elimination.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Todo

* Unit and e2e tests. At the moment I've been ignoring tests as I'm trying to learn Next.js quickly.
* Optimise components to use server components (rsc) where possible.
* Restructure folder based on best practises https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-strategies
* NextJS security recommendations https://nextjs.org/blog/security-nextjs-server-components-actions
