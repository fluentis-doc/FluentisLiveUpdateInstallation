import React from 'react';
import clsx from 'clsx';
import '/src/css/custom.css';

const NavbarLinks = [
  {
    title: 'Hardware Requirements',
    items: [
      { label: 'Overview', to: 'docs/specifications/getting-started' },
      { label: 'Server', to: 'docs/specifications/server/linux-specifications' },
      { label: 'Client', to: 'docs/specifications/server/windows-specifications' },
      { label: 'FluentisWeb', to: 'docs/specifications/Fluentis%20Web/specifications' },
      { label: 'FluentisMobile', to: 'docs/specifications/FluentisMobile/specification' },
    ],
  },
  {
    title: 'Software Requirements',
    items: [
      { label: 'Overview', to: 'docs/os-installation/softwareRequirements' },
      { label: 'Ubuntu Server', to: 'docs/os-installation/ubuntu-server/ubuntu-server-install' },
      { label: 'Photon OS', to: 'docs/os-installation/photon-os/photon-os-install' },
    ],
  },
  {
    title: 'Docker Installation',
    items: [
      { label: 'Overview', to: 'docs/docker-installation/getting-started' },
      { label: 'Docker Engine Install', to: 'docs/docker-installation/linux/docker-engine-install' },
      { label: 'Docker Desktop Install', to: 'docs/docker-installation/windows/docker-desktop-install' },
    ],
  },
  {
    title: 'MSSQL Installation',
    items: [
      { label: 'Overview', to: 'docs/sql-server-installation/getting-started' },
      { label: 'SQL on Docker', to: 'docs/sql-server-installation/docker/sql-server-docker' },
      { label: 'SQL on Windows', to: 'docs/sql-server-installation/windows/sql-server-windows' },
      { label: 'SQL on Linux', to: 'docs/sql-server-installation/SQL%20on%20Linux/sql-server-linux' },
      { label: 'Take Database from Docker', to: 'docs/sql-server-installation/Take-database-from-docker/take-db-from-docker' },
      { label: 'Delete Database Backup from Docker', to: 'docs/sql-server-installation/Delete%20on%20docker/delete-on-docker' },
      { label: 'Restore Database Backup in Docker', to: 'docs/sql-server-installation/Restoring/restore-on-docker' },
      { label: 'SQL on Docker (Multiple Istances)', to: 'docs/sql-server-installation/docker/sql-server-docker-multiple' },
    ],
  },
  {
    title: 'LiveUpdate Installation',
    items: [
      { label: 'Overview', to: 'docs/fluentisinstaller/getting-started' },
      { label: 'Fluentis Installer Service on Linux Docker', to: 'docs/fluentisinstaller/linux/fluentisinstaller-linux' },
      { label: 'Fluentis Live Update on Windows Server', to: 'docs/fluentisinstaller/windows/fluentisinstaller-windows' },
      { label: 'Fluentis Live Update on Docker', to: 'docs/fluentisliveupdate/docker/flu-docker-installation' },
      { label: 'Updating Fluentis Installer Service On Windows', to: 'docs/fluentisinstaller/windows/fluentisinstaller-windows-update/' },
      { label: 'Updating Fluentis Live Update On Windows ', to: 'docs/fluentisliveupdate/windows/flu-windows-update/' },
      { label: 'License', to: 'docs/fluentisliveupdate/menu/licenses' },
    ],
  },
  {
    title: 'Fluentis',
    items: [
      { label: 'Overview', to: 'docs/fluentis/getting-started' },
      { label: 'Fluentis on Docker', to: 'docs/fluentis/docker/fluentis-docker-installation' },
      { label: 'Fluentis on Windows', to: 'docs/fluentis/windows/fluentis-standard-installation' },
      { label: 'Fluentis Web Installation', to: 'docs/fluentis/web/web-installation' },
      { label: 'Fluentis Client Installation', to: 'docs/fluentis/clients-installation/windows' },
      { label: 'Fluentis Web Client Installation', to: 'docs/fluentis/clients-installation/fluentis-web' },
      { label: 'Fluentis Mobile Client Installation', to: 'docs/fluentis/clients-installation/fluentis-xamarin' },
    ],
  },
  {
    title: 'Installation Scenarios',
    items: [
      { label: 'Overview', to: 'docs/installation-scenarios/scenarios' },
      { label: 'Windows', to: 'docs/installation-scenarios/windows-only' },
      { label: 'Ubuntu (Docker)', to: 'docs/installation-scenarios/ubuntu-docker' },
      { label: 'Windows and Ubuntu (Docker)', to: 'docs/installation-scenarios/mixed-windows-ubuntu-docker' },
      { label: 'Docker - 1 Arm, More Fluentis Cluster', to: 'docs/installation-scenarios/mixed-windows-ubuntu-docker' },
    ],
  },
  {
    title: 'Tips & Tricks',
    items: [
      { label: 'Overview', to: 'docs/particular-cases/getting-started' },
      { label: 'Different MTU', to: 'docs/particular-cases/linux-docker/different-mtu' },
      { label: 'Internet connectivity test', to: 'docs/particular-cases/linux-docker/internet-connectivity-test' },
      { label: 'Test dll in debug', to: 'docs/particular-cases/linux-docker/test-dll-debug' },
      { label: 'Ftp Server Installation', to: 'docs/particular-cases/linux-docker/ftp' },
      { label: 'UFW Firewall', to: 'docs/particular-cases/linux-docker/ufw' },
      { label: 'Mapping Windows Folder', to: 'docs/particular-cases/linux-docker/mappingWindowsFolder' },

    ],
  },
];

function Feature({ title, items }) {
  return (
    <div className={clsx('col col--3 margin-bottom--lg')}>
      <h4 className="description margin-bottom--md">{title}</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.to}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container margin-top--lg padding-top--lg">
      <div className="row">
        {NavbarLinks.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
