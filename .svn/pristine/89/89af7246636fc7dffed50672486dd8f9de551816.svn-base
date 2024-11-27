---
title: Take database from Docker
sidebar_position: 1
---

### How it works

This guide shows how to copy a database backup from the docker container to the remote machine (ubuntu server).  
since docker has a separate filesystem compared to ubuntu it is necessary to obtain the id of the container on which the database backup is saved.
   
* This command below shows your id containers list in docker.

``` bash
$ sudo docker ps
```
![Alt text](/img/neutral/docker-installation/docker-id.png)
* Now you can copy the database backup (.bak) from Sql docker container to your Linux machine by command below.
   
``` bash
$ sudo docker cp 5ea70fb81244:/opt/mssql/backup/DemoItalia2023.bak /home/ubuntu
```
![Alt text](/img/neutral/docker-installation/docker-copy.png)


* Now you can copy the database backup by FTP Client from server to your local computer.

![Alt text](/img/neutral/docker-installation/ftp2.png)