---
title: Windows Client Installation
sidebar_position: 1
---

### Client Installation Requirements

**Minimum requirements:**
>
- Windows 10 v.1607
- CPU Intel Core i5 2.40Ghz
- 8 GB RAM
- SSD, 10 GB free space 
- Monitor: 24" full HD

**Recommended requirements:**
>
- Windows 11
- CPU Intel Core i7 3.60Ghz
- 16 GB RAM
- SSD, 10 GB free space 
- Monitor: 24" full HD
- Graphic card with hardware acceleration

**Network**

- **Cloud/On premises (minimum)**
    - Download: 512K per user

## How to install

  You can find the .msi files by connecting to the following cdn 
[LINK](https://cdn.fluentis.com/products/)

- ARM (Application Resource Manager);
- Fluentis Cloud;
- Fluentis Workstation;
- Fluentis Report Designer.

![Alt text](/img/neutral/client-installation/image-1.png)


Download the one(s) you need and copy it on the computer where you want to install the client. Double click to start the installation.


![flu-installer](/img/neutral/client-installation/flu-wizard.png)


The first thing the installation wizard will do is to check if you have installed on your PC additional software you need to run the application (.NET Framework). If you don't have it on your computer, it will install that for you.
After that you will go through wizard steps in which it will ask you the installation folder and other few things.

![flu-installer](/img/neutral/client-installation/flu-wizard2.png)


:::danger important 
The user that runs the application **must have writing rights** on the folder where the client is installed: right click on the folder>Security tab>Modify...>Add Autenticated Users group and give them writing rights.
:::


### Update

If the client needs to be updated, It will ask you automatically, as soon as you log in, to restart the application so that can be updated. On the bar at the bottom you will see the status:


![flu-installer](/img/neutral/client-installation/restart-app.png)


![flu-installer](/img/neutral/client-installation/app-ok.png)


Or you can do it manually by moving inside the ```Update``` folder in the installation folder (e.g. ```C:\Program Files (x86)\Fluentis S.R.L\Fluentis607\Update```) and execute the ```.exe``` file with the use of command prompt, passing as parameter the server URL.

Example:

```bash 
cd C:\Program Files (x86)\Fluentis S.R.L\Fluentis607\Update
```

``` bash title="Fluentis"
Fluentis.Portal.Wpf.UpdateTool.exe http://serverName/Fluentis/
```


``` bash title="Arm"
Fluentis.Arm.Wpf.UpdateTool.exe http://serverName/Arm/
```

serverName is IP address of Fluentis / Arm server or domain if you using DNS Server.  
You can check your **Fluentis serverName** (Fluentis Server Url) by **Arm** > **Home** > **Connections**.

![alt text](image-1.png)

:::info
Launching the update a second time will perform a cleanup of unnecessary files.
:::

