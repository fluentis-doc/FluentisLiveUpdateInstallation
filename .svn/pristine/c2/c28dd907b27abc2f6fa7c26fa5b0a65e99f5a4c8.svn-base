---
title: Test dll in debug
sidebar_position: 0
---

### Problem 1
The developer gives you a dll compiled in debug to make a temporary test in the client environment. You have to load the dll and after the installation of the next patch the temporary dll should delete.

### Solution 1: nextUpdate, temporary modification
You've got nextUpdate.yml file that is empyt (it contains only "{}"). You have to creare a new folder called nextUpdate where you will put the dll.

In the nextUpdate.yml file you should write (the name of the dll change case by case)

``` bash title="nextUpdate.yml"
services:
    fluentis:
        volumes:
            - ./nextUpdate/Fluentis.FluentisErp.Core.SD.SalesOrders.dll:/app/Model/Fluentis.FluentisErp.Core.SD.SalesOrders.dll:ro
```

:::note[Important]
After every patch update or version upgrade, the folder nextUpdate will be deleted and the file nextUdpate.yml will be reset by default.
:::

### Problem 2
You have to make a modification with a dll (the case seen before in this page) or you have to add somenthing in all the yml of the container.
You want this modification to be fixed, after a patch udpate or versione upgrade the modification has NOT to be deleted.

### Solution 2: extra, fixed modification 
You've got extra folder and extra.yml file. This folder and file will not be deleted. You can write in the extra.yml file for example

``` bash title="extra.yml"
networks:
  default:
    driver: bridge
    driver_opts:
      com.docker.network.driver.mtu: 1450
```

When you reload the container, they all have this part of networks added.