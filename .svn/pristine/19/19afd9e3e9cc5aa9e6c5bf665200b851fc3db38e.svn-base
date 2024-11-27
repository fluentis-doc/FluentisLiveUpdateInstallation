---
title: IIS Installation on Windows Server
sidebar_position: 0
---

Before proceeding to install *FluentisLiveUpdate*, a server must have installed the following:

- Latest *Windows* updates;
- *SQL Server* with the latest version available, possibly with the latest cumulative update;

If multiple servers are used, the roles and features described below must be installed on each server.

:::tip
If the license includes more than 1 concurrent user, it is recommended to use multiple servers, one for the Web work and one for the SQL work, in this way you can share the load and improve performance.
:::


### Install Roles and Features

Install from **Server Manager** > **Manage** > **Add Roles And Features** and proceed to following the installation setup leaving the options already selected, unchanged.

> Under *Server Roles* tab, add:
- **IIS Web Server**

> Under *Features* tab, add:
- **Asp .Net X.X** (latest version available, from *.NET Framework X.X Features);
    - **HTTP Activation** (from the *WCF Services* sub-group)

> Under *Role Services* tab, select the other features to install:
- **Request Monitor** (from *Health and Diagnostic*)
- **Dynamic Content Compression** (from *Performance*)
- **WebSocket Protocol** (from *Application Development*)

Then press *Next*, and continue to accept until the end of the guided procedure.

### Install SQL Server

To correctly proceed with the installation of SQL Server, its application port must be opened. Proceed to add a new rule on **Windows Firewall** - by going in *Control Panel > Windows Firewall > Advanced Settings > right click on Inbound Rules > Port* - with the following configuration:

>Port Number : **1433**  
Rule Name : **SQL Server**  

After adding the new rule in the firewall we proceed to open the SQL Server executable and start the installation setup by selecting **New SQL Server stand-alone installation or add features to an existing installation**. Some steps of the setup installation are not documented because are trivial and not needed. 

Inside the **Feature Selection** step, select:

> - **Database Engine Services**
- **Analysis Services**
- **Integration Services**
- **SQL Client Connectivity SDK**
- **Master Data Services**
- **Client Tools Connectivity**
- **Client Tools SDK**

Inside **Server Configuration** step, set:

> - **SQL Server Agent** in *Automatic*
- **SQL Server Browser** in *Automatic*

Inside **Database Engine Configuration** step, insert password for *sa*, and add the current user. Jump then on the **Data Directories** and **TempDB** tab to modify the path where SQL Server will store its data. 

Inside **Analysis Services Configuration** step, select **Multidimensional and Data Mining Mode** from the availables radiobuttons, and add the current user by pressing the **Add Current User** button.

Proceed till the end of the installation setup to end the installation.

:::tip
To ensure the installation went fine, go under *Services* and verify if the services realted to the newly created instance of *SQL Server* are active (*e.g.* SQL Server Agent (NewlyCreatedInstanceName)).
:::

Make sure the **TCP/IP protocol** is **Enabled** under the **Protocols for the newly installed** SQL Server **instance**.

![sql-configuration](../../../static/img/neutral/fluentisliveupdate/sql-configuration.png)

After the installation, don't forget to install the [latest cumulative update available](https://docs.microsoft.com/it-it/sql/database-engine/install-windows/latest-updates-for-microsoft-sql-server?view=sql-server-ver15). The server is now ready to install **FluentisLiveUpdate**.
