---
title: Delete Database Backup from Docker Container
sidebar_position: 1
---
If you need to delete a backup file (.bak) from a database inside a Docker container, you'll have to enter the container with **administrator privileges**.  
Follow the step below:

Get the id of the container where SQL Server instance is installed.

```bash
sudo docker ps
```
This command shows the id's of each docker-conteiner exists in the Linux-machine.

The output is similar to this:
![alt text](image.png)

Now, we can enter the container with aministrator privileges by command below:
```bash
sudo docker exec -it --privileged --user root IdOfContainer /bin/bash.
```
Where
* **root** is the default user of docker container;
* **IdOfContainer** is the unique number that identify the specific container.

Now we can browse docker-container filesystem by terminal.
Search the backup file, then delete it, by command below.
```bash
rm -rf nameOfBackup.bak
```
![alt text](image-1.png)