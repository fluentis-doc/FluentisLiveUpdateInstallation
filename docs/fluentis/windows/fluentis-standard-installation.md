---
title: Fluentis on Windows
sidebar_position: 0
---

This article will describe how to manage the Fluentis/ARM installation, assuming that the article *[FluentisLiveUpdate Installation](../../fluentisliveupdate/windows/flu-windows-installation.md)* has been followed, and so *FluentisLiveUpdate* web app is up and running.

![flu-login](/img/neutral/fluentis/flu-login.png)

At this point, proceed with login, the credentials are:

- Username : *LiveUpdate*
- Password : *LiveUpdate*

:::info
The process to enter the needed configuration is the same across different tabs of the *FLU* web app. Adding a row by clicking the **+** button on the grid and insert the needed data, then proceed to save the changes by clicking the green floppy button on the top right corner of the screen.
:::

### ARM

Now move on the *Environments* tab to set up the *ARM* server and database:

![environments-arm](/img/neutral/fluentis/windows/environments-arm.jpg)

First insert the *ARM* database lastly the *ARM* server, paying attention on all the inserted data as it's crucial for the installation:

![arm-database-configuration](/img/neutral/fluentis/windows/arm-database-configuration.png)

![arm-server-configuration](/img/neutral/fluentis/windows/arm-server-configuration.jpg)

:::tip
Remember to select the correct **Environment Type** based on your needs (*e.g.* *Development*, *Production*, etc...), either for **Fluentis** and **Arm** installations..
:::

At this point if no error messages have been displayed, click the arrow next to *Environments* and select **Install** from the dropdown list:

![arm-install](/img/neutral/fluentis/arm-install.png)

![arm-install-2](/img/neutral/fluentis/arm-install-2.png)

Insert all the request data and click *Install* button and wait for the installation to finish. Lastly, check with **SSMS** if the *ARM* database has been created.

### Fluentis

Now click onto the newly created *ARM* server row and click the **Clusters** button to proceed with the set up of Fluentis cluster, pool and database.

![environments-fluentis](/img/neutral/fluentis/windows/environments-fluentis.jpg)

First insert the *Fluentis* cluster lastly the *Fluentis* pool, paying attention on all the inserted data as it's crucial for the installation:

![fluentis-cluster-configuration](/img/neutral/fluentis/fluentis-cluster-configuration.png)

![fluentis-pool-configuration](/img/neutral/fluentis/windows/fluentis-pool-configuration.png)

:::info
The *Installation Folder* name must match the folder name located inside the Docker installation folder (*e.g.* /opt/fluentis/fluentis2021/**fluentis**).
:::

Once the cluster and the pool have been codified, click onto the newly created *Fluentis* cluster row and click the **Databases** button to proceed with the set up of *Fluentis* database.

![environments-fluentis-databases](/img/neutral/fluentis/windows/environments-fluentis-databases.jpg)

Insert the *Fluentis* database, paying attention on all the inserted data as it's crucial for the installation:

![fluentis-database-configuration](/img/neutral/fluentis/windows/fluentis-database-configuration.png)

At this point if no error messages have been displayed, go back to the *Clusters* page and click the arrow next to *Cluster for [ServerName]* and select **Install** from the dropdown list:

![fluentis-install](/img/neutral/fluentis/fluentis-install.png)

Insert all the request data and click *Install* button and wait for the installation to finish. Lastly, check with **SSMS** if the *Fluentis* database has been created and if the login from the client works.