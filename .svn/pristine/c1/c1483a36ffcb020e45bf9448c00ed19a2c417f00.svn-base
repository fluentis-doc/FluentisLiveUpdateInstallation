---
title: Restore Database in Linux (Docker)
sidebar_position: 2
---
### Prerequisites
* Make sure you have an instance of **SQL Server Engine** into Ubuntu Server by Docker Engine.
* Make sure you have the database backup file (.bak file) you want to restore.
* Make sure you have the **FTP Daemon** installed in your Server.
* Make sure you have the **FTP Client** installed in your local computer.

### How it works
Sql Server Mangement Studio can't see your folders in your Ubuntu server because the SQL Server Engine Istance is installed on docker then it will see docker container file system.

* You have to find the position of your database backup in Ubuntu Filesystem; Once you've found bak file you have to give the **777 permission** to the target file by command below
```bash
sudo chmod -R 777 YourDatabaseBackup.bak
```

* Each docker container is identified by a unique property called **Container Id**. To see it, run the command below

```bash
sudo docker ps
```
![Alt text](/img/neutral/sql-server-installation/dockerps.png)


* You can copy your database backup (.bak) from folder /home/user to **sql docker-container** by command below.

```bash
    sudo docker cp /home/ubuntu/DemoItalia2023.bak 3199f08c3697:/opt/mssql/
```
![Alt text](/img/neutral/docker-installation/copy-docker.png)


* Now, you can restore database by SQL Server Management by browse files in the SQL docker container.



