---
title: Install-Update Arm-Fluentis
sidebar_position: 2
---

### Introduction

This guide shows how to proceed with a first installation of Fluentis and Arm, an update and an upgrade of the environment.
Please note that to proceed you must have the Fluentis Live Update and the Fluentis Installer Service updated
to the latest version.

### Installation

**Arm**

For the first installation you need to set 3 things:

- Arm Server
- Fluentis Cluster
- Fluentis Database

You can do it with the purpose default button, and then check that all the data are correct, for example the user that will make the query should be "sa" or a user with the highest privilege on the database.

You can also insert manually all the data needed to install. Let's start with ARM database first.
Go in the environments section, and click on the plus button to add an arm database as shown below.

![](/img/neutral/fluentisliveupdate/basic/flu-install-fluentis/picture1.png)

- Code, description are only need for the LiveUpdate to identify that arm database
- Server name is the sql server name where the database will be created
- Docker installation **Use only in docker installation**, put the docker installation of the sql servere that you already made in the Docker Installation section of FLU
- User, password are the credentials to access and make query in sql server. 

![](/img/neutral/fluentisliveupdate/basic/flu-install-fluentis/picture3.png)

:::tip Sql Server User
Is better to use sa or a user with similar privileges to not get any type of error due to permission problem
:::

:::tip Number of Arm database
You can use only one arm database for different version (or different arm server), because the structure of the arm database doesn't change. Only the dll does.
:::

Now configure the web part on the uppure side of environments

- Code, description are only need for the LiveUpdate to identify that arm server
- Server name the web server where Arm will be installed
- Arm Database select the ones you've insert before from the combo box
- Environment type can be: production, test or development
- Application Pool, Url path usually are the same. They are the pool and the site of arm, and FLU will create it on iis
- Installation Folder is the physical path where the dll of Arm will be installed
- Product is the version of Fluentis you need to install
- Docker installation **Use only in docker installation**, put the docker installation of the web server that you already made in the Docker Installation section of FLU
- Web site, Public url are never used for arm. You can use it if you want to publish the pool of Arm

![](/img/neutral/fluentisliveupdate/basic/flu-install-fluentis/picture2.png)

Once you've configured the arm server, select it and press the arrow to make and action, in the case of the installation you have to press install.

FLU will propose use the first user that will have access to ARM and it is:
- User: LiveUpdate
- Password: LiveUpdate

You can change it in this phase or from the client when you already install.

Finally FLU propose the version and the patch, always better to install directly the last one avaiable. Press install and the installation will start.

When you get this message the installation of Arm is done.

**Fluentis**



### Update Patch

### Upgrade Release

### How to correct errors

### Conclusion