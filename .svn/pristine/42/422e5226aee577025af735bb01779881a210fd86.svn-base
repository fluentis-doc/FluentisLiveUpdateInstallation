---
title: Docker Engine Install
sidebar_position: 2
---

### Prerequisites

A linux server machine. See OS Installation section.
A correct DNS configuration. When you install sql server, in the file you have to put the server name, if you use the ip address is not the best way. To use the server name, the it of the client should configure it correctly in the dns. It's also possible to use Alias, it depends on what the client wants.

### Step 1 - Installing Docker Engine

#### Install using the APT repository

Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker repository.  
Afterward, you can install and update Docker from the repository.

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

To install the latest version, run:  
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
Check Docker version:

``` bash title="bash"
docker --version
```

### Step 2 - Install **Docker Compose**

#### Complete script for Docker Compose installation
``` bash title="bash"
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

Check Docker compose version to assure is all fine:
``` bash title="bash"
docker compose version
```


## Step 3 - Separate partion for Docker Engine  (Optional)

#### Disable swap:

``` bash
sudo swapoff -a
```

Then reboot the server.

``` bash
sudo reboot
```


It is a well known best-practice to store all Docker data (located in `/var/lib/docker`) in a separate disk partition. So in this section we will dedicate a separate partition to Docker.

First add the disk to the machine.

Then, check the correct name of the disk by displaying them all (just for the sake of the article, we will use the sdb disk (the second disk), if your disk is different replace sdb with your disk name):

``` bash title="bash"
sudo fdisk -l
```

Identify the name of the disk, and make the partition of `gpt` type:

``` bash title="bash"
sudo parted /dev/sdb mklabel gpt
```

Finalize the partition:

``` bash title="bash"
sudo parted -a optimal /dev/sdb mkpart DATA 0% 100%
```

Format the partition previously created, with `ext4` file system:

``` bash title="bash"
sudo mkfs -t ext4 /dev/sdb1
```

Verify the partition:

``` bash title="bash"
sudo fdisk -l
```

Retrieve the partition *universally unique indentifier*, also known as *UUID* (we will use it later when we mount the partition):

``` bash title="bash"
sudo blkid
```

``` text title="e.g. UUID"
UUID="d5e960d2-7f93-46d7-b63d-957c3b2bbcfd"
```

Now we need to copy Docker data to the new partition, and use the new partition for Docker. But at this time the partition is inaccessible due to the fact that is not mounted yet.

Stop Docker services

``` bash title="bash"
sudo systemctl stop containerd.service docker.service docker.socket
```

We create the temporary folder _newPart_:

``` bash title="bash"
mkdir /tmp/newPart
```

Then, mount the partition inside the folder _newPart_:

``` bash title="bash"
sudo mount /dev/sdb1 /tmp/newPart
```

Copy all Docker files from the default path to the path of the previously created (temporary) folder:

``` bash title="bash"
sudo rsync -aqxP /var/lib/docker/ /tmp/newPart
```

Rename **docker** folder in **docker.old** (we keep the old folder for safety, in case we did something wrong): 

``` bash title="bash"
sudo mv /var/lib/docker/ /var/lib/docker.old/
```

Unmount the temporary folder:

``` bash title="bash"
sudo umount /tmp/newPart
```

Create an empty folder:

``` bash title="bash"
sudo mkdir /var/lib/docker/
```

Delete the temporary folder previously created:

``` bash title="bash"
rm -Rd /tmp/newPart
```

In order to create a new folder with the docker data which will resist even the reboot, we need to add a new row at the end of the file `fstab`:

``` bash title="bash"
sudo nano /etc/fstab
```

``` text title="/etc/fstab"
/dev/disk/by-uuid/d5e960d2-7f93-46d7-b63d-957c3b2bbcfd /var/lib/docker/ ext4 defaults 0 0
```

:::info
The file `fstab` also known as filesystem table, works as a configuration table designed to ease the burden of mounting and unmounting file systems to a machine. It is a set of rules used to control how different filesystems are treated each time they are introduced to a system.
:::

Then, we mount the partition:

``` bash title="bash"
sudo mount -a
```

Start Docker services

``` bash title="bash"
sudo systemctl start containerd.service docker.service docker.socket
```

Remove backup folder
``` bash title="bash"
sudo rm -Rd /var/lib/docker.old/
```


We make sure that the folder `/var/lib/docker/` is still there with mc, and finally we check if the partition has some used space in memory:

``` bash title="bash"
sudo df -H
```

