---
title: Photon Post Installation
sidebar_position: 1
---

:::caution
Some operation requires root privileges and by default, Photon OS on the minimal version, does not include sudo program installation. To download it, run:

```bash title="bash"
sudo tdnf install sudo
```

You can read more on this topic by visiting Photon OS [documentation](https://vmware.github.io/photon/assets/files/html/3.0/photon_admin/root_account_and_sudo_commands.html).
:::

After completing the installation process we can proceed to login with root user. Now create a new user:

```bash title="bash"
useradd -m -G sudo [user_name]
```

Set a password for it:

```bash title="bash"
passwd [user_name]
```

Now run the following, to upgrade all the installed packages:

```bash title="bash"
sudo tdnf upgrade
```

:::info
The **tdnf** (Tiny Dandified Yum, or the more known Yum) package manager in *Photon* is the equivalent of **apt** (Aptoide) package manager for *Ubuntu* distro.
:::

At this point a reboot of the machine is required:

```bash title="bash"
sudo reboot now
```

Login with the new user, change the timezone (according to the list of timezones that can be found at the path **/usr/share/zoneinfo**) and check if it was set correctly, by running:

```bash title="bash"
set Europe/Rome timezone
sudo ln -lf /usr/share/zoneinfo/Europe/Rome /etc/localtime
date
```

:::tip 
By default the nano editor is not installed, to download it, run:

```bash title="bash"
sudo tdnf install nano
```
:::