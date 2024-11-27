---
title: Fluentis on Docker
sidebar_position: 0
---

This article will describe how to manage the Fluentis/ARM installation, assuming that the article *[FluentisLiveUpdate Installation](../../fluentisliveupdate/docker/flu-docker-installation.md)* has been followed, and so *FluentisLiveUpdate* web app is up and running.


### FluentisLiveUpdate Authentication

First, check from a web browser of a client machine if the *FluentisLiveUpdate* web app is reachable, by typing the address *http://flu-604:3080/FluentisLiveUpdate* (*flu-604* is a dns name, replace it with yours or with an IP address).

![flu-login](/img/neutral/fluentis/flu-login.png)

At this point, proceed with login, the credentials are:

- Username : *LiveUpdate*
- Password : *LiveUpdate*

:::info
The process to enter the needed configuration is the same across different tabs of the *FLU* web app. Adding a row by clicking the **+** button on the grid and insert the needed data, then proceed to save the changes by clicking the green floppy button on the top right corner of the screen.
:::

### Installer Services

It's needed then to codify *FluentisInstaller/s*, by going in the left side menu *Installer Services*. Add the correct *Server Name* (for both *SQL* and *Fluentis/ARM* servers) - it can be either a DNS name or an IP address - and the *Api Key* obtained during the installation / update of *FluentisInstaller* (at the moment just for *Linux* servers):

![installer-services](/img/neutral/fluentis/installer-services.png)

### Docker Installations

Continue on the next tab *Docker Installations*, adding the *Server Name* where the *ARM/Fluentis* should be installed, the *Local Folder* of the *Fluentis/ARM* installation (should be /opt/Company/**Application**) and lastly the *Project Name*:

:::danger REMEMBER
If sql is also installed under docker you have to add also server name, folder and project about that installation!
:::

![docker-installations](/img/neutral/fluentis/docker-installations.png)

:::info
The **Application** folder (earlier specified in the *Local Folder* column) doesn't need to be created manually, but instead will be created by FluentisLiveUpdate for Fluentis.
For sql is already created so it should be putted that one. 
:::

### ARM

Now move on the *Environments* tab to set up the *ARM* server and database:

![environments-arm](/img/neutral/fluentis/environments-arm.png)

First insert the *ARM* database lastly the *ARM* server, paying attention on all the inserted data as it's crucial for the installation:

![arm-database-configuration](/img/neutral/fluentis/arm-database-configuration.png)

![arm-server-configuration](/img/neutral/fluentis/arm-server-configuration.png)

:::tip
Remember to select the correct **Environment Type** based on your needs (*e.g.* *Development*, *Production*, etc...), either for **Fluentis** and **Arm** installations.
:::

At this point if no error messages have been displayed, click the arrow next to *Environments* and select **Install** from the dropdown list:

![arm-install](/img/neutral/fluentis/arm-install.png)

![arm-install-2](/img/neutral/fluentis/arm-install-2.png)

Insert all the request data and click *Install* button and wait for the installation to finish. Lastly, check with **SSMS** if the *ARM* database has been created.

![arm-database](/img/neutral/fluentis/arm-database.png)

### Fluentis

#### Cluster Creation

:::danger[IMPORTANT]
For each docker installation you have to make the login to the container registry of Fluentis. See steps below.
:::

Go with ssh to the docker installation folder and login to the *Fluentis Docker Registry*:

``` bash title="bash"
sudo docker login cr.fluentis.com 
```

With credentials:

- Username : *Fluentis602*
- Password : *FluentisDocker*

It should be displayed the following:

``` bash title="bash"
...
Username: Fluentis602
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
...
```

#### LiveUpdate Configuration for Fluentis

Now, go back into Live Update and click onto the newly created *ARM* server row and click the **Clusters** button to proceed with the set up of Fluentis cluster, pool and database.

![environments-fluentis](/img/neutral/fluentis/environments-fluentis.png)

First insert the *Fluentis* cluster lastly the *Fluentis* pool, paying attention on all the inserted data as it's crucial for the installation:

![fluentis-cluster-configuration](/img/neutral/fluentis/fluentis-cluster-configuration.png)

![fluentis-pool-configuration](/img/neutral/fluentis/fluentis-pool-configuration.png)

Once the cluster and the pool have been codified, click onto the newly created *Fluentis* cluster row and click the **Databases** button to proceed with the set up of *Fluentis* database.

![environments-fluentis-databases](/img/neutral/fluentis/environments-fluentis-databases.png)

Insert the *Fluentis* database, paying attention on all the inserted data as it's crucial for the installation:

:::info Backup folder Linux
Usually on linux the backup folder is this: /opt/var/mssql/backup
:::

![fluentis-database-configuration](/img/neutral/fluentis/fluentis-database-configuration.png)

At this point if no error messages have been displayed, go back to the *Clusters* page and click the arrow next to *Cluster for [ServerName]* and select **Install** from the dropdown list:

![fluentis-install](/img/neutral/fluentis/fluentis-install.png)

Insert all the request data and click *Install* button and wait for the installation to finish. Lastly, check with **SSMS** if the *Fluentis* database has been created and if the login from the client works.

![fluentis-database](/img/neutral/fluentis/fluentis-database.png)
