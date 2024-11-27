---
title: Docker Desktop Install
sidebar_position: 1
---

:::caution Disclaimer
This installation is intented to be used **only** for demo purposes.
:::

### Prerequisites

- Windows 10 64-bit: Home or Pro 2004 (build 19041) or higher, or Enterprise or Education 1909 (build 18363) or higher

- 64-bit processor, 8GB system RAM and BIOS-level hardware virtualization support must be enabled in the BIOS settings

:::info Tip
To enable *virtualization* make sure *Hypervisor* flag is enabled under *Windows Features*:

 ![hypervisor-enabled](/img/neutral/docker-installation/Windows/hyperv-enabled.png)

Now under *Task manager* > *Performance* tab, check if the *virtualization* is *enabled*:

 ![virtualization-enabled](/img/neutral/docker-installation/Windows/virtualization-enabled.png)
:::

### Step 1 - Installing WSL

Before installing Docker Desktop, we have to make sure that WSL (Windows Subsytem for Linux version) is installed on the machine:

You can check if it was previously installed:

``` powershell title="PowerShell"
wsl -l -v
```

Otherwise if not, set default version of WSL to WSL2:

``` powershell title="PowerShell"
wsl --set-default-version 2
```

Then, install it with Ubuntu distribution:

:::caution note 
Ubuntu distribution is recommended for this guide but not mandatory, it is possible to choose another Linux distribution, but there will not be support from the Fluentis Support Team.
:::

``` powershell title="PowerShell"
wsl --install -d Ubuntu
```

:::info 
If WSL version 1 was inadvertently installed, search the exact name of the linux distribution, then convert it to version 2, by running:

``` powershell title="PowerShell"
wsl --list
wsl --set-version [distribution_name] 2
```
:::

Lastly, it will be prompted to restart the machine.

### Step 2 - Installing Docker Desktop

To install Docker Desktop we need to download the installer. It can be found inside their [website](https://docs.docker.com/desktop/windows/install/).
Execute the installer and go through all the required steps. Afterwards it will be prompted to restart the machine.

Now, open Docker Desktop an make sure to enable this flags and then apply the changes:

 ![docker-desktop-settings](/img/neutral/docker-installation/Windows/docker-desktop-settings.png)

### Step 3 - Pulling Docker images, create/run Docker containers

In order to pull images, we need to log into the Docker Registry:

``` bash title="command prompt"
docker login cr.fluentis.com
```

We will be prompted to authenticate using the Docker Registry username and password. If we specified the correct password, authentication should succeed.

:::info
Be aware that in Windows Command Prompt you will **not see the password** as you type in, neither asterisks or dots, obviously for security reasons.
:::

Once authenticated, we need to change directory (the one downloaded from FTP or received by Fluentis Support Team). It is recommended that you move the folder in the same path where the apps are installed (just for the sake of the article, we will use a fictional directory, named *FluentisDockerInstallation*):

``` bash title="command prompt"
cd C:\\Program Files (x86)\\Fluentis2021\\FluentisDockerInstallation
```

Then, we are ready to launch `compose` command:

``` bash title="command prompt"
docker compose up -d
```

:::info
Docker Compose is a tool for defining and running multi-container Docker applications. With `compose`, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.
:::

At this point, all the things needed to run Fluentis and ARM are up and running with all the needed things. If we wish to shut down all the containers:

``` bash title="command prompt"
docker compose down
```

