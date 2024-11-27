---
title: Prerequisites
sidebar_position: 0
---

### Introduction

Before proceeding to install Fluentis a server must have installed the following.
- Latest windows update
- Sql server the latest version available, possibly with the latest cumulative update

:::important Important
If multiple servers are used, the roles and features described below must be installed on each
server.
:::

:::tip Tip
If the license includes more than 1 concurrent user it is recommended to use multiple servers, one for
the web part and one for the sql part, in this way you can divide the load and you have a
performance improvement
:::

### Installation of roles and features

Install from Server Manager, Add roles and Features and proceed following the wizard.
In server roles add **IIS Web Server**

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture1.png)

In features add: 
- Asp .Net 4.6 (or latest version)
- .Net Framework 3.5
- Http Activation 
(Add the functionalities required by this features)

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture2.png)

Next install: 
- Requests Monitor (Healt and Diagnostic)
- Dynamic Compression (Performance)
- WebSocket protocol (Application development)

Then press Next, Next install until you get to the end.

:::important Important
If we forget to add the features and install the role, doing the same again
procedure we can add them from the roles. Under IIS just expand the various features.
:::

### SQL server installation

The first step if you have the SQL server ISO is to mount the disk and start the installation setup by selecting: New stand alone installation.

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture3.png)

Then add an inbound rule on the windows firewall.

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture4.png)

Open control panel, go into windows firewall, advanced settings and right click on inbound rules and select port as the image below

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture5.png)

Port number: 1433
Rule name: SQL Server


Go on with the setup of sql server, in the "Features Selection" part select:
- Database Engine Services
- Analysis Services
- Client Tools Connectivity
- Integration Services
- Client tools SDK
- SQL Client Connectivity SDK
- Master Data Services

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture6.png)

In the "Server Configuration" part set:
- SQL Server Agent in Automatic
- SQL Server Browser in Automatic

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture7.png)

Then enter the SA password and add the current user. Then go to the DataDirectories and TempDB tab and modify the paths where SQL will put the Data files.

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture8.png)

Go to select the Multidimensional and Data Mining Mode radio button and add the user
current by pressing on "Add Current User"

![](/img/neutral/fluentisliveupdate/basic/flu-prerequisites-installation/picture9.png)

For a final check, go to services and check that the services related to the instance are there and are active
just created. To check this open the task manager, in the services section, check that there are
active services related to SQL Server (Ex. SQLAgent $ ”NomeDellaNostraIstanza”).

:::danger Take care
After installation, always install the latest cumulative update available for safety reasons.
If it's possibile take sql server up to date also after the installation.
:::

https://docs.microsoft.com/it-it/sql/database-engine/install-windows/latest-updates-for-microsoft-sql-server?view=sql-server-ver16

At this link you can find all the latest cumulative updates for each version of sql server.
To install it, the executable must be downloaded and then launched by going forward, then install.

### Conclusion

At this point the machine is ready to install LiveUpdate and Installer Service