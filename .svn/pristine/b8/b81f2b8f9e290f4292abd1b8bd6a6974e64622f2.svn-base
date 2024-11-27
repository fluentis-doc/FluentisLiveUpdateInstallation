---
title: Ubuntu Post Installation
sidebar_position: 1
---

### Optional - Disable sudo prompt for password

Disable sudo password if you're working on a **test machine** (the system will ask for password every x minutes, could be annoying), by modifing the `/etc/sudoers` file:

``` bash title="bash"
sudo visudo
```

Add at the end of the file (just for the sake of the article, we will use a fictional user, named example-user):

``` text title="etc/sudoers"
example-user ALL=(ALL) NOPASSWD:ALL
```

### Update APT Packages

Download an updated list of packages to install and then upgrade them:

```bash
sudo apt update && sudo apt upgrade
```

This operation has to be done periodically if you want to install the latest security (and not only) updates. Sometimes requires the reboot of the machine.

### Configure timezone:

:::warning 
It is **crucial** to set the correct timezone before installing Sql Server and Fluentis. If you do not change the timezone
it could end up in wrong dates and hours in important documents like invoices, production orders and so on.
:::

``` bash title="bash"
sudo dpkg-reconfigure tzdata
```
![alt text](\img\neutral\folder-configuration\timezone.png)

![alt text](\img\neutral\folder-configuration\timezone2.png)



### Disable automatic update

To disable the system automatic updates (to improve system stability in production environment), modify the `/etc/apt/apt.conf.d/20auto-upgrades` file:

``` bash title="bash"
sudo nano /etc/apt/apt.conf.d/20auto-upgrades
```

By changing "1" to "0" in the last row of the file:

``` text title="/etc/apt/apt.conf.d/20auto-upgrades"
...

APT::Periodic::Unattended-Upgrade "0"

...
```

### Disable multipath for virtual environments

Sometimes, in virtualization scenarios (at least using VMWare), the hypervisor is not sending the information (disk id) needed by multipath service. In this scenario multipath is not required and it can be disabled for virtual disks:

Edit `multipath.conf` file:

``` bash title="bash"
sudo nano /etc/multipath.conf
```

Add the following rows to the file:

``` text title="/etc/multipath.conf"
...

blacklist {
    devnode "^(ram|raw|loop|fd|md|dm-|sr|scd|st|sd[a-z])[0-9]*"
}
...
```

Restart `multipathd` service:

``` bash title="bash"
sudo systemctl reload multipathd
```

Cleanup system log:

``` bash title="bash"
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
```
