---
title: Fluentis Installer Service on Linux Docker
sidebar_position: 0
---

:::danger Warning
In Linux environments with Docker, it is necessary to first install the FluentisInstallerService and then FluentisLiveUpdate.
:::

## Prerequisites

Make sure the **Fluentis installation folder** exists in the recommended installation path, you can check it by command below:

```bash
sudo ls -l /opt/fluentis/
```

## Run complete script for Fluentis Installer Service Installation 

``` bash
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisInstallerScriptForLinux -o UpdateFluentisInstaller.sh && \
sudo chmod +x UpdateFluentisInstaller.sh && \
sudo ./UpdateFluentisInstaller.sh && \
sudo rm -f ./UpdateFluentisInstaller.sh
```


:::note
After the execution of the bash script, an API key will be released, which must be kept for the **FluentisInstaller** registration within **FluentisLiveUpdate**.  
**FluentisInstaller** service on **Linux** is configured by default on port **6423**.
:::

To make a test after the installation or to get the installer version you can use this link
``` bash title="link"
http://serverName:6423/FluentisInstallerService/Api/install/Getversion
```
## Re-Installation 
It is posibile that you have to re install the installer service, especially if you don't remember the apikey during the first installation
First you have to stop the service.
``` bash
sudo systemctl stop fluentisInstallerService
```

Then you have to disable it.
``` bash
sudo systemctl disable fluentisInstallerService
```

Remove the file of the service.
``` bash
sudo rm /etc/systemd/system/fluentisInstallerService.service
```

And now reload the daemon.
``` bash
sudo systemctl daemon-reload
```

Finally delete the fluentisInstallerService installation folder.
``` bash
sudo rm -r /opt/fluentis/fluentisInstallerService
```
Now you can start the installation again and you'll get a new ApiKey

## Updating Fluentis Installer Service on Linux

To updating Fluentis Installer Service on Linux run this script on terminal

```bash
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisInstallerScriptForLinux -o UpdateFluentisInstaller.sh && \
sudo chmod +x UpdateFluentisInstaller.sh && \
sudo ./UpdateFluentisInstaller.sh && \
sudo rm -f ./UpdateFluentisInstaller.sh
```