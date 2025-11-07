import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://michaeluzukwu.dev',
  integrations: [
    starlight({
      title: 'Michael Uzukwu',
      description: 'Technical writer & documentation engineer',
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mike-4-prog' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-uzukwu/' }
      ],
      // Empty sidebar for single-page layout
      sidebar: [],
      logo: {
        src: './src/assets/m-logo.svg',
        alt: 'Michael Uzukwu Logo'
      },
      // Custom CSS
      customCss: ['./src/styles/custom.css']
    })
  ],
  // Add redirects configuration
  redirects: {
    // This ensures the root path serves our custom portfolio
    // No need for explicit redirect since we're using src/pages/index.astro
  }
});








