---
title: Docker Engine Install
sidebar_position: 2
---

### Prerequisites

A linux server machine. See [OS Installation](/docs/os-installation/getting-started) section.

### Step 1 - Preparation

Disable swap:

``` bash title="bash"
sudo swapoff -a
```

Then reboot the machine.

``` bash title="bash"
sudo reboot
```

### Step 2 - Installing Docker

To ensure we get the latest version, we will install Docker from the official Docker repository. To do that, we will add a new package source, add the GPG key from Docker to ensure the downloads are valid, and then install the package.

First, update the existing list of packages:

``` bash title="bash"
sudo apt update
```

Install some needed packages necessary for the installation:

``` bash title="bash"
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release
```

Install Docker GPG Key:

``` bash title="bash"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Add Docker Repository:

``` bash title="bash"
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Again, update the existing list of packages:

``` bash title="bash"
sudo apt update
```

Finally, install Docker:

``` bash title="bash"
sudo apt install docker-ce docker-ce-cli containerd.io
```

Check Docker version:

``` bash title="bash"
docker --version
```

Unlike the **Docker Desktop** version on _Windows_, the **Docker Engine** version on _Linux_ does not install Docker Compose. Proceed by checking the version first, by visiting the [Github repository](https://github.com/docker/compose/releases).

Then, install it:

``` bash title="bash"
sudo mkdir -p /usr/local/lib/docker/cli-plugins/
sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/lib/docker/cli-plugins/docker-compose
```

Changes privileges to docker-compose file:

``` bash title="bash"
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
```

Ultimately, check the version to assure is all fine:

``` bash title="bash"
docker compose version
```

### Step 3 - Creation of a separate partition for Docker

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

