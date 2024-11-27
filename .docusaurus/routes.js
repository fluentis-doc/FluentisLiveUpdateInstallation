import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug', 'af7'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug/config',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug/config', '5f6'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug/content',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug/content', '6ed'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug/globalData',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug/globalData', 'df9'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug/metadata',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug/metadata', '210'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug/registry',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug/registry', 'cbe'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/__docusaurus/debug/routes',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/__docusaurus/debug/routes', '25c'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/markdown-page',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/markdown-page', 'df8'),
    exact: true
  },
  {
    path: '/Advanced/FluentisLiveUpdate/docs',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs', '91a'),
    routes: [
      {
        path: '/Advanced/FluentisLiveUpdate/docs',
        component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs', '5be'),
        routes: [
          {
            path: '/Advanced/FluentisLiveUpdate/docs',
            component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs', '1fe'),
            routes: [
              {
                path: '/Advanced/FluentisLiveUpdate/docs/docker-installation/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/docker-installation/getting-started', '59a'),
                exact: true,
                sidebar: "Docker Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/docker-installation/linux/',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/docker-installation/linux/', '4af'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/docker-installation/linux/docker-engine-install',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/docker-installation/linux/docker-engine-install', '94f'),
                exact: true,
                sidebar: "Docker Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/docker-installation/windows/docker-desktop-install',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/docker-installation/windows/docker-desktop-install', '09f'),
                exact: true,
                sidebar: "Docker Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/FAQ/WINDOWSFAQ',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/FAQ/WINDOWSFAQ', '208'),
                exact: true,
                sidebar: "FAQ"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis-on-docker/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis-on-docker/getting-started', 'ace'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/clients-installation/fluentis-web',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/clients-installation/fluentis-web', '82b'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/clients-installation/fluentis-xamarin',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/clients-installation/fluentis-xamarin', '693'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/clients-installation/windows',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/clients-installation/windows', '9f2'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/docker/fluentis-docker-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/docker/fluentis-docker-installation', '3e7'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/getting-started', '50f'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/licenses',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/licenses', 'f4c'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/web/web-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/web/web-installation', '401'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentis/windows/fluentis-standard-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentis/windows/fluentis-standard-installation', '9f0'),
                exact: true,
                sidebar: "Fluentis"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/getting-started', '0f3'),
                exact: true,
                sidebar: "LiveUpdate Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/linux/fluentisinstaller-linux',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/linux/fluentisinstaller-linux', '477'),
                exact: true,
                sidebar: "LiveUpdate Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/windows/fluentisinstaller-windows',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/windows/fluentisinstaller-windows', 'c58'),
                exact: true,
                sidebar: "LiveUpdate Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/windows/fluentisinstaller-windows-update',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisinstaller/windows/fluentisinstaller-windows-update', '607'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/docker/flu-docker-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/docker/flu-docker-installation', '788'),
                exact: true,
                sidebar: "LiveUpdate Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/docker/flu-docker-update',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/docker/flu-docker-update', '112'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/docker-installations',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/docker-installations', '2de'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/environments',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/environments', '2d6'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/installer-services',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/installer-services', 'a63'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/licenses',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/licenses', '12c'),
                exact: true,
                sidebar: "LiveUpdate Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/repository',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/repository', 'a83'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/settings',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/menu/settings', '59c'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/ubuntu/flu-ubuntu-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/ubuntu/flu-ubuntu-installation', '77d'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/ubuntu/flu-ubuntu-update',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/ubuntu/flu-ubuntu-update', '627'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/windows/flu-windows-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/windows/flu-windows-installation', '02a'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/windows/flu-windows-update',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/windows/flu-windows-update', 'bf2'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/windows/prerequisites',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/fluentisliveupdate/windows/prerequisites', '5a2'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/installation-scenarios/docker-more-clusters',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/installation-scenarios/docker-more-clusters', '4fb'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/installation-scenarios/mixed-windows-ubuntu-docker',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/installation-scenarios/mixed-windows-ubuntu-docker', 'f53'),
                exact: true,
                sidebar: "Installation Scenarios"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/installation-scenarios/scenarios',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/installation-scenarios/scenarios', '511'),
                exact: true,
                sidebar: "Installation Scenarios"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/installation-scenarios/ubuntu-docker',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/installation-scenarios/ubuntu-docker', '853'),
                exact: true,
                sidebar: "Installation Scenarios"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/installation-scenarios/windows-only',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/installation-scenarios/windows-only', 'daf'),
                exact: true,
                sidebar: "Installation Scenarios"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/intro',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/intro', '1c0'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/kb/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/kb/getting-started', '0e6'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/os-installation/photon-os/photon-os-install',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/os-installation/photon-os/photon-os-install', 'd0b'),
                exact: true,
                sidebar: "Software Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/os-installation/photon-os/photon-post-installation',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/os-installation/photon-os/photon-post-installation', 'b43'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/os-installation/softwareRequirements',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/os-installation/softwareRequirements', '328'),
                exact: true,
                sidebar: "Software Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/os-installation/ubuntu-server/ubuntu-server-install',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/os-installation/ubuntu-server/ubuntu-server-install', '208'),
                exact: true,
                sidebar: "Software Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/os-installation/ubuntu-server/ubuntu-server-post-install',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/os-installation/ubuntu-server/ubuntu-server-post-install', 'df9'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/particular-cases/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/particular-cases/getting-started', '876'),
                exact: true,
                sidebar: "Tips & Tricks"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/different-mtu',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/different-mtu', 'd13'),
                exact: true,
                sidebar: "Tips & Tricks"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/ftp',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/ftp', '0d6'),
                exact: true,
                sidebar: "Tips & Tricks"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/internet-connectivity-test',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/internet-connectivity-test', '877'),
                exact: true,
                sidebar: "Tips & Tricks"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/test-dll-debug',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/test-dll-debug', 'f7b'),
                exact: true,
                sidebar: "Tips & Tricks"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/ufw',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/particular-cases/linux-docker/ufw', 'edb'),
                exact: true,
                sidebar: "Tips & Tricks"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/specifications/client/client-specifications',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/specifications/client/client-specifications', 'd14'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/specifications/Fluentis Web/specifications',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/specifications/Fluentis Web/specifications', 'b6b'),
                exact: true,
                sidebar: "Hardware Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/specifications/FluentisMobile/specification',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/specifications/FluentisMobile/specification', 'd72'),
                exact: true,
                sidebar: "Hardware Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/specifications/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/specifications/getting-started', '56f'),
                exact: true,
                sidebar: "Hardware Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/specifications/server/linux-specifications',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/specifications/server/linux-specifications', '186'),
                exact: true,
                sidebar: "Hardware Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/specifications/server/windows-specifications',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/specifications/server/windows-specifications', '3b0'),
                exact: true,
                sidebar: "Hardware Requirements"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Delete on docker/delete-on-docker',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Delete on docker/delete-on-docker', '644'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/docker/sql-server-docker',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/docker/sql-server-docker', '290'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/docker/sql-server-docker-multiple',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/docker/sql-server-docker-multiple', '8ee'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/getting-started',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/getting-started', '2b5'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Restoring/restore-on-docker',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Restoring/restore-on-docker', 'e63'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Restoring/Restoring-existing-db-windows',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Restoring/Restoring-existing-db-windows', '748'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/SQL on Linux/sql-server-linux',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/SQL on Linux/sql-server-linux', 'd1b'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Take-database-from-docker/take-db-from-docker',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/Take-database-from-docker/take-db-from-docker', 'd53'),
                exact: true,
                sidebar: "MSSQL Installation"
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/windows/sql-server-maintenance',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/windows/sql-server-maintenance', 'fc9'),
                exact: true
              },
              {
                path: '/Advanced/FluentisLiveUpdate/docs/sql-server-installation/windows/sql-server-windows',
                component: ComponentCreator('/Advanced/FluentisLiveUpdate/docs/sql-server-installation/windows/sql-server-windows', '4d5'),
                exact: true,
                sidebar: "MSSQL Installation"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Advanced/FluentisLiveUpdate/',
    component: ComponentCreator('/Advanced/FluentisLiveUpdate/', 'ab8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
