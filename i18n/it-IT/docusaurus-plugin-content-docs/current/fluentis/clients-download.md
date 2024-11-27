---
title: Clients Download
sidebar_position: 3
---

After the installation, **download** the **Kits2021** folder from partners's **FTP Area** (if not previously downloaded), containing the folders *ARM Updater .NET 6* and *Fluentis Updater .NET 6*.

Once downloaded the folder, move with the use of command prompt inside the *ARM Updater .NET 6 > **Update** folder and execute the *.exe* file passing as parameter the server URL:

``` bash title="command prompt"
Fluentis.Arm.Wpf.UpdateTool.exe http://192.168.20.35:3090/Arm
```

Move then inside the *Fluentis Updater .NET 6 > **Update*** folder and repeat the same process:

``` bash title="command prompt"
Fluentis.Portal.Wpf.UpdateTool.exe http://192.168.20.35:3090/Fluentis
```

:::info
Launching again the command to download the client, will perform a folder cleanup.
:::