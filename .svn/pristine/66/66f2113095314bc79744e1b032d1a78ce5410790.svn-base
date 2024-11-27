---
title: Installation & Update
sidebar_position: 0
---

### Prerequisites

Make sure the [*Fluentis* installation folder](../../os-installation/ubuntu-server/post-installation.md) exists in the recommended installation path.

### Installation & Update

Unlike installation on *Windows* OS, on *Linux* OS there is no possibility to use an installation wizard, so is done entirely from the command line.
Moreover, the procedure for installing *FluentisInstaller* is the same as for updating it.  

Start by downloading the bash script:

``` bash title="bash"
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisInstallerScriptForLinux -o UpdateFluentisInstaller.sh
```

Give the needed execute permission on the file:

``` bash title="bash"
sudo chmod +x UpdateFluentisInstaller.sh
```

Launch the bash script:

``` bash title="bash"
sudo ./UpdateFluentisInstaller.sh
```

Remove the unnecessary bash script:

``` bash title="bash"
sudo rm -f ./UpdateFluentisInstaller.sh
```

:::info
After the execution of the bash script, an API key will be released, which must be kept for the *FluentisInstaller* registration within *FluentisLiveUpdate*.
:::

:::info
*FluentisInstaller* service on *Linux* is configured by default on port *6423*.
:::