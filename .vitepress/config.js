import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'EDB Agentforce Workshop',
  description: 'Hands-on workshop: Prompt Builder, Agentforce Coworker & Agents for Smart Account Research',

  // Deploying to GitHub Pages at https://<user>.github.io/edb-workshop/
  base: '/edb-workshop/',

  themeConfig: {
    nav: [
      { text: 'Start the Workshop', link: '/setup' },
    ],

    // Left sidebar — gives the module > exercise tree AND the
    // automatic prev/next pager at the bottom of every page.
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Exercise 0: Pre-Setup Checklist', link: '/setup' },
        ],
      },
      {
        text: 'Exercise 1: Prompt Builder',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/prompt-builder/overview' },
          { text: '1.1 Smart Account Research', link: '/prompt-builder/field-generation' },
          { text: '1.2 Investor Outreach Email', link: '/prompt-builder/email-prompt' },
        ],
      },
      {
        text: 'Exercise 2: Agentforce Coworker',
        collapsed: false,
        items: [
          { text: '2.1 Agentforce Coworker', link: '/agent-builder/coworker' },
        ],
      },
      {
        text: 'Exercise 3: Agent Builder',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/agent-builder/overview' },
          { text: '3.1 Create a New Agent', link: '/agent-builder/default-topics' },
          { text: '3.2 Account Research Subagent', link: '/agent-builder/topics-and-actions' },
        ],
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Want to learn more?', link: '/resources' },
        ],
      },
    ],
  },
})
