import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Fluentis Suite Installation',
  tagline: 'Fluentis Suite Installation',
  url: 'https://docs.fluentis.com',
  baseUrl: 'Advanced/FluentisLiveUpdate/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fluentis-32x32px.png',
  organizationName: 'Fluentis srl',
  projectName: 'Fluentis Suite Installation',
  i18n: 
  {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {},
  },

  themeConfig: {
    navbar: {
      title: 'Fluentis Suite Installation',
      logo: {
        alt: 'Fluentis Logo',
        src: 'img/fluentis.svg',
      },
      items: [
        {
          label: 'Hardware Requirements',
          position: 'left',
          items: [
            { to: 'docs/specifications/getting-started', activeBasePath: 'docs', label: 'Overview' },
            { to: 'docs/specifications/server/linux-specifications', activeBasePath: 'docs', label: 'Server' },
            { to: 'docs/specifications/server/windows-specifications', activeBasePath: 'docs', label: 'Client' },
            { to: 'docs/specifications/Fluentis%20Web/specifications', activeBasePath: 'docs', label: 'FluentisWeb' },
            { to: 'docs/specifications/FluentisMobile/specification', activeBasePath: 'docs', label: 'FluentisMobile' },
          ]
        },
        {
          label: 'Software Requirements',
          position: 'left',
          items: [
            { to: 'docs/os-installation/softwareRequirements', activeBasePath: 'docs', label: 'Overview' },
            { to: 'docs/os-installation/ubuntu-server/ubuntu-server-install', activeBasePath: 'docs', label: 'Ubuntu Server' },
            { to: 'docs/os-installation/photon-os/photon-os-install', activeBasePath: 'docs', label: 'Photon OS' },
          ]
        },
        {
          position: 'left',
          label: 'Docker Installation',
          items: [
            { to: 'docs/docker-installation/getting-started', activeBasePath: 'docs', label: 'Overview' },
            { to: 'docs/docker-installation/linux/docker-engine-install', activeBasePath: 'docs', label: 'Docker Engine Install' },
            { to: 'docs/docker-installation/windows/docker-desktop-install', activeBasePath: 'docs', label: 'Docker Desktop Install' }
          ]
        },
        {
          position: 'left',
          label: 'MSSQL Installation',
          items: [
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/getting-started', label: 'Overview' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/docker/sql-server-docker', label: 'SQL on Docker' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/windows/sql-server-windows', label: 'SQL on Windows' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/SQL%20on%20Linux/sql-server-linux', label: 'SQL on Linux' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/Take-database-from-docker/take-db-from-docker', label: 'Take Database from Docker' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/Delete%20on%20docker/delete-on-docker', label: 'Delete Database Backup from Docker' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/Restoring/restore-on-docker', label: 'Restore Database Backup in Docker' },
            { activeBasePath: 'docs', to: 'docs/sql-server-installation/docker/sql-server-docker-multiple', label: 'SQL on Docker (Multiple Istances)' }
          ]
        },
        {
          position: 'left',
          label: 'LiveUpdate Installation',
          items: [
            { activeBasePath: 'docs', to: 'docs/fluentisinstaller/getting-started', label: 'Overview' },
            { activeBasePath: 'docs', to: 'docs/fluentisinstaller/linux/fluentisinstaller-linux', label: 'Fluentis Installer Service on Linux Docker' },
            { activeBasePath: 'docs', to: 'docs/fluentisinstaller/windows/fluentisinstaller-windows', label: 'Fluentis Live Update on Windows Server' },
            { activeBasePath: 'docs', to: 'docs/fluentisliveupdate/docker/flu-docker-installation', label: 'Fluentis Live Update on Docker' },
            { activeBasePath: 'docs', to: 'docs/fluentisinstaller/windows/fluentisinstaller-windows-update/', label: 'Updating Fluentis Installer Service On Windows' },
            { label: 'Updating Fluentis Live Update On Windows ', to: 'docs/fluentisliveupdate/windows/flu-windows-update/' },
            { activeBasePath: 'docs', to: 'docs/fluentisliveupdate/menu/licenses', label: 'License' },

          ]
        },
        {
          position: 'left',
          label: 'Fluentis',
          items: [
            { activeBasePath: 'docs', to: 'docs/fluentis/getting-started', label: 'Overview' },
            { activeBasePath: 'docs', to: 'docs/fluentis/docker/fluentis-docker-installation', label: 'Fluentis on Docker' },
            { activeBasePath: 'docs', to: 'docs/fluentis/windows/fluentis-standard-installation', label: 'Fluentis on Windows' },
            { activeBasePath: 'docs', to: 'docs/fluentis/web/web-installation', label: 'Fluentis Web Installation' },
            { activeBasePath: 'docs', to: 'docs/fluentis/clients-installation/windows', label: 'Fluentis Client Installation' },
            { activeBasePath: 'docs', to: 'docs/fluentis/clients-installation/fluentis-web', label: 'Fluentis Web Client Installation' },
            { activeBasePath: 'docs', to: 'docs/fluentis/clients-installation/fluentis-xamarin', label: 'Fluentis Mobile Client Installation' },
          ],
        },
        {
          position: 'left',
          label: 'Installation Scenarios',
          items: [
            { activeBasePath: 'docs', to: 'docs/installation-scenarios/scenarios', label: 'Overview' },
            { activeBasePath: 'docs', to: 'docs/installation-scenarios/windows-only', label: 'Windows' },
            { activeBasePath: 'docs', to: 'docs/installation-scenarios/ubuntu-docker', label: 'Ubuntu (Docker)' },
            { activeBasePath: 'docs', to: 'docs/installation-scenarios/mixed-windows-ubuntu-docker', label: 'Windows and Ubuntu (Docker)' },
            { activeBasePath: 'docs', to: 'docs/installation-scenarios/mixed-windows-ubuntu-docker', label: 'Docker - 1 Arm, More Fluentis Cluster' }
          ]
        },
        {
          position: 'left',
          label: 'Tips & Tricks',
          items: [
            { activeBasePath: 'docs', to: 'docs/particular-cases/getting-started', label: 'Overview' },
            { activeBasePath: 'docs', to: 'docs/particular-cases/linux-docker/different-mtu', label: 'Different MTU' },
            { activeBasePath: 'docs', to: 'docs/particular-cases/linux-docker/internet-connectivity-test', label: 'Internet connectivity test' },
            { activeBasePath: 'docs', to: 'docs/particular-cases/linux-docker/test-dll-debug', label: 'Test dll in debug' },
            { activeBasePath: 'docs', to: 'docs/particular-cases/linux-docker/ftp', label: 'Ftp Server Installation' },
            { activeBasePath: 'docs', to: 'docs/particular-cases/linux-docker/ufw', label: 'UFW Firewall' },
            { activeBasePath: 'docs', to: 'docs/particular-cases/linux-docker/mappingWindowsFolder', label: 'Mapping Windows Folder' }

          ],
        },
        {
          to: 'docs/FAQ/WINDOWSFAQ',
          label: 'FAQ',
          position: 'right',
        },
        {
          to: '#',
          label: 'Release Notes',
          position: 'right',
          items: [
            {
              label: '1.2.71',
              href: '#'
            },
            {
              label: '1.2.70',
              href: '#',
            },
          ],
        },
      ]
    },
    




    footer: {
      style: 'dark',
      links: [
        {

          title: 'Fluentis Documentation',
          items: [
            {
              label: 'Fluentis Academy',
              href: 'https://docs.fluentis.com/FluentisErp/',
            },
            {
              label: 'ARM',
              href: 'https://docs.fluentis.com/Arm/',
            },
            {
              label: 'Fluentis Live Update',
              href: 'https://docs.fluentis.com/FluentisLiveUpdate/',
            },
          ],
        },
        {
          title: 'Fluentis Advanced',
          items: [
            {
              label: 'Fluentis Suite Installation',
              href: 'https://docs.fluentis.com/Advanced/FluentisLiveUpdate/',
            },
            {
              label: 'Integrations',
              href: 'https://docs.fluentis.com/Integration/',
            },
            {
              label: 'Customizations',
              href: 'https://internal-docs.fluentis.com/Partners/Customization/',
            },
          ],
        },

        {
          title: 'Fluentis Training',
          items: [
            {
              label: 'Training',
              href: 'https://training.fluentis.com/',
            },
          ],
        },
        {
          title: 'About Fluentis',
          items: [
            {
              label: ' Web Site',
              href: 'https://www.fluentis.com/it/',
              className: 'icon bi bi-arrow-up-right-circle-fill',
            },
            {
              label: ' Instagram',
              href: 'https://www.instagram.com/fluentis.erp/',
              className: 'icon bi bi-instagram',
            },
            {
              label: ' Facebook',
              href: 'https://www.facebook.com/FluentisSrl',
              className: 'icon bi bi-facebook',
            },
            {
              label: ' Youtube',
              href: 'https://www.youtube.com/@formazionefluentis',
              className: 'icon bi bi-youtube',
            },
          ],
        },
      ],
      copyright: `FLUENTIS SRL ${new Date().getFullYear()} | C.F. e P.IVA IT01720550936`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') }
      }
    ]
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        indexPages: false,
        language: ['en'],
        style: undefined,
        maxSearchResults: 64,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,
          b: 0.75,
          k1: 1.2,
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2
        }
      }
    ]
  ]
};

export default config;
