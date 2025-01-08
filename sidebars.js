/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebar = {
  'Hardware Requirements': [
    {
      type: 'category',
      label: 'Hardware Requirements',
      items: [
        { type: 'doc', id: 'specifications/getting-started', label: 'Overview' },
        { type: 'doc', id: 'specifications/server/linux-specifications', label: 'Server' },
        { type: 'doc', id: 'specifications/server/windows-specifications', label: 'Client' },
        { type: 'doc', id: 'specifications/Fluentis Web/specifications', label: 'FluentisWeb' },
        { type: 'doc', id: 'specifications/FluentisMobile/specification', label: 'FluentisMobile' },
      ],
    },
  ],

  'Software Requirements': [
    {
      type: 'category',
      label: 'Software Requirements',
      items: [
        { type: 'doc', id: 'os-installation/softwareRequirements', label: 'Overview' },
        { type: 'doc', id: 'os-installation/ubuntu-server/ubuntu-server-install', label: 'Ubuntu Server' },
        { type: 'doc', id: 'os-installation/photon-os/photon-os-install', label: 'Photon OS' },
      ],
    },
  ],

  'Docker Installation': [
    {
      type: 'category',
      label: 'Docker Installation',
      items: [
        { type: 'doc', id: 'docker-installation/getting-started', label: 'Overview' },
        { type: 'doc', id: 'docker-installation/linux/docker-engine-install', label: 'Docker Engine Install' },
        { type: 'doc', id: 'docker-installation/windows/docker-desktop-install', label: 'Docker Desktop Install' },
      ],
    },
  ],

  'MSSQL Installation': [
    {
      type: 'category',
      label: 'MSSQL Installation',
      items: [
        { type: 'doc', id: 'sql-server-installation/getting-started', label: 'Overview' },
        { type: 'doc', id: 'sql-server-installation/docker/sql-server-docker', label: 'SQL on Docker' },
        { type: 'doc', id: 'sql-server-installation/windows/sql-server-windows', label: 'SQL on Windows' },
        { type: 'doc', id: 'sql-server-installation/SQL on Linux/sql-server-linux', label: 'SQL on Linux' },
        { type: 'doc', id: 'sql-server-installation/Take-database-from-docker/take-db-from-docker', label: 'Take Database from Docker' },
        { type: 'doc', id: 'sql-server-installation/Delete on docker/delete-on-docker', label: 'Delete Database Backup from Docker' },
        { type: 'doc', id: 'sql-server-installation/Restoring/restore-on-docker', label: 'Restore Database Backup in Docker' },
        { type: 'doc', id: 'sql-server-installation/docker/sql-server-docker-multiple', label: 'SQL on Docker (Multiple Istances)' },
      ],
    },
  ],

  'LiveUpdate Installation': [
    {
      type: 'category',
      label: 'LiveUpdate Installation',
      items: [
        { type: 'doc', id: 'fluentisinstaller/getting-started', label: 'Overview' },
        { type: 'doc', id: 'fluentisinstaller/linux/fluentisinstaller-linux', label: 'Fluentis Installer Service on Linux Docker' },
        { type: 'doc', id: 'fluentisinstaller/windows/fluentisinstaller-windows', label: 'Fluentis Live Update on Windows Server' },
        { type: 'doc', id: 'fluentisliveupdate/docker/flu-docker-installation', label: 'Fluentis Live Update on Docker' },
        { type: 'doc', id: 'fluentisinstaller/windows/fluentisinstaller-windows-update', label: 'Updating Fluentis Installer Service On Windows' },
        { type: 'doc' , id: 'fluentisliveupdate/windows/flu-windows-update', label: 'Updating Fluentis Live Update On Windows '},
        { type: 'doc', id: 'fluentisliveupdate/menu/licenses', label: 'License'},
      ],
    },
  ],

  'Fluentis': [
    {
      type: 'category',
      label: 'Fluentis',
      items: [
        { type: 'doc', id: 'fluentis/getting-started', label: 'Overview' },
        { type: 'doc', id: 'fluentis/docker/fluentis-docker-installation', label: 'Fluentis on Docker' },
        { type: 'doc', id: 'fluentis/windows/fluentis-standard-installation', label: 'Fluentis on Windows' },
        { type: 'doc', id: 'fluentis/web/web-installation', label: 'Fluentis Web Installation' },
        { type: 'doc', id: 'fluentis/clients-installation/windows', label: 'Fluentis Client Installation' },
        { type: 'doc', id: 'fluentis/clients-installation/fluentis-web', label: 'Fluentis Web Client Installation' },
        { type: 'doc', id: 'fluentis/clients-installation/fluentis-xamarin', label: 'Fluentis Mobile Client Installation' },
      ],
    },
  ],

  'Installation Scenarios': [
    {
      type: 'category',
      label: 'Installation Scenarios',
      items: [
        { type: 'doc', id: 'installation-scenarios/scenarios', label: 'Overview' },
        { type: 'doc', id: 'installation-scenarios/windows-only', label: 'Windows' },
        { type: 'doc', id: 'installation-scenarios/ubuntu-docker', label: 'Ubuntu (Docker)' },
        { type: 'doc', id: 'installation-scenarios/mixed-windows-ubuntu-docker', label: 'Windows and Ubuntu (Docker)' },
        { type: 'doc', id: 'installation-scenarios/mixed-windows-ubuntu-docker', label: 'Docker - 1 Arm, More Fluentis Cluster' },
      ],
    },
  ],

  'Tips & Tricks': [
    {
      type: 'category',
      label: 'Tips & Tricks',
      items: [
        { type: 'doc', id: 'particular-cases/getting-started', label: 'Overview' },
        { type: 'doc', id: 'particular-cases/linux-docker/different-mtu', label: 'Different MTU' },
        { type: 'doc', id: 'particular-cases/linux-docker/internet-connectivity-test', label: 'Internet connectivity test' },
        { type: 'doc', id: 'particular-cases/linux-docker/test-dll-debug', label: 'Test dll in debug' },
        { type: 'doc', id: 'particular-cases/linux-docker/ftp', label: 'Ftp Server Installation' },
        { type: 'doc', id: 'particular-cases/linux-docker/ufw', label: 'UFW Firewall' },
        { type: 'doc', id: 'particular-cases/linux-docker/mappingWindowsFolder', label: 'Mapping Windows Folder' },

      ],
    },
  ],

  FAQ: [
    {
      type: 'doc',
      id: 'FAQ/WINDOWSFAQ',
      label: 'FAQ',
    },
  ],

  'Release Notes': [
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        { type: 'link', label: '1.2.71', href: '#' },
        { type: 'link', label: '1.2.70', href: '#' },
      ],
    },
  ],
};

module.exports = sidebar;
