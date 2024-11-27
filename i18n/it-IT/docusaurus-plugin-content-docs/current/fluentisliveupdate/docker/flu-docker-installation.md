---
title: Installation
sidebar_position: 0
---

In this article is described step by step the installation of **FluentisLiveUpdate** on *Docker*.

### Prerequisites

Before proceeding to install, you must have the following prerequisites:

- A *Linux* server with a *SQLServer Instance* installed;
- [*Fluentis* installation folder](../../os-installation/ubuntu-server/post-installation.md) in the recommended path;

### Docker Configuration

Download the starting *Docker* folder for *FluentisLiveUpdate*:

``` bash title="bash"
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetFluDockerFolder -o flu.tar.gz
```

To unzip the file:
``` bash title="bash"
sudo tar -xvzf flu.tar.gz
```

To delete the zip file no longer need:
``` bash title="bash"
sudo rm -f flu.tar.gz
```

Step into the downloaded folder:
``` bash title="bash"
cd flu
```

Modify the *docker-compose.yml* file to change the port number (it doesn't need to be on port 3080, in this article is used a random one):
``` bash title="bash"
nano docker-compose.yml
```

``` yaml title="docker-compose.yml"
...
        ports:
          - 3080:3080
volumes:
...
```

:::info
To create the starting **FluentisLiveUpdate database**, uncomment the two lines below - in the *docker-compose.yaml* file - and add a user - in the *Fluentis.FluentisLiveUpdate.Server.dll.config* - that does not yet exist on the *SQL Server* instance (therefore different from the user *sa*):

``` yaml title="docker-compose.yml"
...
            - TZ=${TIME_ZONE}
            # Enable for automatic database creation
#            - DB_SETUP_USER=YOUR_USER                   # <---- uncomment this line
#            - DB_SETUP_PASSWORD=YOUR_PASSWORD           # <---- uncomment this line
        volumes:
            - flu-01:/var/opt/flu-respository
...
```

``` xml title="Fluentis.FluentisLiveUpdate.Server.dll.config"
...
<connectionStrings>
        <add name="Default" connectionString="Server=192.168.20.62;Database=FluentisLiveUpdate;User=FluentisLiveUpdateUser;Pwd=saPWD2017;TrustServerCertificate=True"/>        
</connectionStrings>
...
```
:::

The other parameters inside the *docker-compose.yml* file, can be changed by modifing the *.env* file:

``` bash title="bash"
nano .env
```

By default the *.env* file has *FLU_VERSION* and *TIME_ZONE* parameters.

Next, change the port number inside the *nginx.conf* file, according to the port number inside the *docker-compose.yml* file:

``` bash title="bash"
nano nginx/nginx.conf
```

``` bash title="nginx.conf"
...
 server {
    #enable for SSL
    #listen *:443 ssl http2;
    listen *:3080;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name default;
...
```

Lastly, modify the connection string inside the *FluentisLiveUpdate* configuration file:

``` bash title="bash"
nano flu/Fluentis.FluentisLiveUpdate.Server.dll.config
```

``` xml title="Fluentis.FluentisLiveUpdate.Server.dll.config"
...
<connectionStrings>
    <add name="Default" connectionString="Server=YOUR_SERVER_NAME;Database=FluentisLiveUpdate;User=FluentisLiveUpdateUser;Pwd=YOUR_PASSWORD;TrustServerCertificate=True"/>
</connectionStrings>
...
```

### Cluster Creation

Configured all the aforementioned files, we can move to the final step where the *FLU* cluster is created. The cluster will be composed by *Nginx* and *FluentisLiveUpdate* containers.

First login to the *Fluentis Docker Registry*:

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

Then create the cluster:

``` bash title="bash"
sudo docker compose up -d
```

If no error messages are displayed, the creation went successful and *FluentisLiveUpdate* cluster is up and running.

:::tip
To shut down the cluster use the following command:

``` bash title="bash"
sudo docker compose down
```

To update all the containers contained in the cluster use the following command:

``` bash title="bash"
sudo docker compose pull
```
:::

:::info
*FluentisLiveUpdate* app on *Linux* is configured by default on port *6425*.
:::