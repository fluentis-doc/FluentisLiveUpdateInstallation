---
title: Install-Update LiveUpdate
sidebar_position: 1
---

### Introduction
Fluentis Live Update is the new Fluentis installation and update management tool
introduced with version 539.
With this tool is possibile to install Arm and Fluentis and do other stuff like install bizLink, install a patch, update the compile folder and so on.

Let's see in details how it works, starting from the installation.

### Fluentis Live Update

Fluentis Live Update consists of two parts, the website and the installer. The first is the user interface which it is possible to configure and execute the commands and must be installed only in the location from which it is desired to control the program. The second is the executive part, the Installer Service, and must be installed on all servers that need to be controlled by the LiveUpdate, including the location where the website is installed. 
The program is equipped with its own database, in case you plan to install the website in a workstation
other than the db server, the database must be installed in advance.
Both the website and the installer part rely on a pool of IIS to function so it is necessary that
this feature is present on all servers where they are installed, including the db server.
The technology used is .NET Core, the installer installs the runtimes if the need is identified.

### Installation

To be installed LiveUpdate requires a SQL Server database and IIS features on all servers that need to be managed.
If the SQL server is separate from the one in which the website will be installed, the installation must be performed
**first** in the SQL server and then in the application server, in the following we will specify which components
install respectively.

It is possible to download the installation program from the Kits folder of the Fluentis FTP area, the file is an .exe type, so you can take and launch in every machine you need to install.

:::note Path of the file in the ftp area
/Partners/Kits2021/FluentisLiveUpdate - 1.47.0
:::

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture1.png)

Double click on the setup to launch it.
The only prerequisite is the last version of .Net6, so when you launch the setup if is not installed this will be the first component to be installed. Just press next, next install.

Now the real Fluentis Live Update installation starts, first accept the license agreement, then choose custom installation.
At this point of the installation you can select witch component you want to install in the server you are in.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture5.png)

- **1 Scenario**: There is only one server (web + sql), so you can just press next.
- **2 Scenario**: There are 2 server, 1 for sql and 1 for the web part, install first the sql ones without the website part then the web ones without the database part
- **3 Scenario**: There are 3 or more servers, do the same stuff as *2 Scenario* but in other server like test or dev server install only Fluentis Installer component.

Now you have to set the parameter for the LiveUpdate.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture6.png)

**Parameters to connect to the database, for his creation or update**
- SQL Instance: the name of the sql server, you can get it from sql managment studio doing *select @@servername*
- SQL Database: the name of Live Update database.
- SQL User: The user has to access to the server and database previus written to create the database. Usually is better to put sa
- SQL Password: The password of the SQL User inserted before

**Parameters to connect to the database**
- User: SQL user that makes the query to the database. Usually you can leave FluentisLiveUpdateUser
- Password: The password of the SQL User inserted before

Fluentis Installer
- User: Windows User that is Local Administrator of the machine where the setup is running. It should have all the privileges because the Fluentis Installer will use it to work on the file system
- Password: The password of the Windows User inserted before

**Client's identification data**
- License code: Fluentis license code. You can leave 0 if in the moment of the installation you don't have it yet. The code you insert here it will be used when you will install Fluentis, Live Update put that license code. You can always change it from Arm - License 

### Fluentis Live Update - Execution

When the installation is finished, in the website server you will have a new icon in the desktop. Double click on it to open Live Updatee.
Also you can just browse: <http://serverName/FluentisLiveUpdate>

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture9.png)

The login page needs a user and a password. For the first access area always: 
- User: LiveUpdate
- Password: LiveUpdate

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture10.png)

If you want you can change this user or add other users from the settings.

### Fluentis Live Update - Settings

In this section you can change the program settings.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture11.png)

- DownloadNewVersionsAutomatically: if is yes when you open LiveUpdate, it will check if there are new patches or releases and automatically download it.
- LocalRepositoryFolder: this is the path of folder where Live Update download the files for patches and releases

Then finally you've got the users section where you can managed the user to login to Live Update.

### Fluentis Live Update - Licenses

In this section you can insert a Fluentis License that will be put directly in the database when you install an environment.
You can also just leave it blank and insert manually from arm the license.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture7.png)

### Fluentis Live Update - Environments

In Environments there are all the Fluentis installation. First there are the arm servers, then for each arm server all the related fluentis cluster and finally for each cluster there are the releated databases.

In this section you will install and update your Fluentis installations.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture12.png)


### Fluentis Live Update - Repository

In Repository you can check if a patch or a relase is already donwloaded. You can do this selecting the product (Fluentis, Live Update, Installer), then select the release and the patch in case you need to check that. Up in the page there are two buttons: Release components and Patch components.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture13.png)

Pressing that button you'll know if the file are downloaded or not by the column Is Downloaded.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture14.png)

### Fluentis Live Update - Installer Services

The installer service, is the first section you have to compile before installing arm or fluentis. Here for all servers where's the installer you have to report it.
You just have to insert the server name and the api key (get it only from linux installation), the version of the installer will be autodetected.

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture15.png)

### Fluentis Live Update - Docker installations

Docker installations, as the name suggest, it will be use only in case you use docker. Put the server name, the path of the folder and the folder where Fluentis is installed, 

![](/img/neutral/fluentisliveupdate/basic/flu-install-liveupdate/picture16.png)

### Tips

:::tip Getting the Fluentis Installer Service Version
To check the version of the installer service launch this link, replacing with the correct server name. <http://serverName/FluentisInstallerService/Api/install/Getversion>
:::

### Conclusion

Now you are ready to install Arm and Fluentis, go to next page.