---
title: MSSQL On Windows
sidebar_position: 2
---

If you have the SQL server **ISO file** the first step is to **mount the disk**.    
Next you have to start the setup by selecting: **New stand-alone installation**.

![sql-installation](/img/neutral/sql-server-installation/windows/1.png)

Then add a **windows firewall rule** so the previous warning will disappear.
**Now open the port for the SQL server**.

![install-rules](/img/neutral/sql-server-installation/windows/2.png)

*Control Panel > Windows Firewall > Advanced Settings > Right Click on Inbound Rules > Port*

![rule-type](/img/neutral/sql-server-installation/windows/3.png)

**Port number:** 1433   
**Rule name:** SQL Server

In "**Features Selection**" choose:
- Database Engine Services
- Analysis Services
- Client Tools Connectivity
- Integration Services 
- Client Tools SDK
- SQL Client Connectivity SDK
- Master Data Services

![feature-selection](/img/neutral/sql-server-installation/windows/4.png)

In "**Server Configuration**" set:
- SQL Server Agent in **Automatic** 
- SQL Server Browser in **Automatic** 

![server-configuration](/img/neutral/sql-server-installation/windows/5.png)

Then insert the **SA password** and add the current user. 
Then go in the **DataDirectories** tab and **TempDB** and modify the path where SQL will insert Data file.

![database-engine-configuration](/img/neutral/sql-server-installation/windows/6.png)

Select **Multidimensional and Data Mining Mode** radio button and add the current user by clicking on **Add Current User**.

![analysis-services-configuration](/img/neutral/sql-server-installation/windows/7.png)

To make a final check, go in **services** and verify that the services of the just created instance are there and are activated.
To verify that, open the **task manager**, in services' tab, verify that there are the active services of SQL Server
**(ex. SQLAgent$"NameOfOurInstance")**.

Finally after the installation, always install the last cumulative update available.

[SQL Server latest updates](https://docs.microsoft.com/it-it/sql/database-engine/install-windows/latest-updates-for-microsoft-sql-server?view=sql-server-ver15)

In this link is possible to find all the last cumulative update for each version of SQL server.    
To **install** that, you have to download the exe file and then click: **next, next, install**.