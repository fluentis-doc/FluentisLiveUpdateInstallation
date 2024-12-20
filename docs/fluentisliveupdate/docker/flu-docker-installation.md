---
title: Fluentis Live Update on Docker
sidebar_position: 0
---

In this article is described step by step the installation of **FluentisLiveUpdate** on **Docker**.

### Prerequisites

Before proceeding to install, you must have the following prerequisites:

- A **Linux** server with a **SQLServer Instance** installed;
- **Fluentis** installation folder in the recommended path, that is `/opt/` (the full path would be like so `/opt/fluentis/`);

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

The `flu` folder contains the following files/folders:

<ul>
    <li>
        <p>flu</p>
        <ul>
            <li>flu</li>
            <li>flu-nginx.yml</li>
            <li>flu.yml</li>
            <li>nginx</li>
            <li>nginx-http.yml</li>
            <li>nginx-https.yml</li>
            <li>nginx.yml</li>
        </ul>
    </li>
</ul>

Both `flu` folder and `nginx` folders contains configuration files respectively for connection strings (i.e. `Fluentis.FluentisLiveUpdate.Server.dll.config`) and nginx server blocks and generic configuration (i.e. `nginx.conf`).

The rest of the files that ends with the *.yml* extension - which are not in the aforementioned folders - are *Docker Compose* configuration files. 

To proceed with the installation of *Fluentis Live Update*, there are two options available: 

1. Starting from scratch, **without a copy/backup** of the *Fluentis Live Update* database
2. Starting **with a copy/backup** of *Fluentis Live Update* database

### Setup starting from scratch, create a new empty database of FLU

For this second case, to automatically create the database, you need to add some values in the `.env` file besides the timezone and the ports, which are:

- Timezone (if it's needed, by default is set to Europe/Rome timezone)
- HTTP and HTTPS ports
- Sysadmin database **username** and **password** (these are the credential used to create the database and the user set on FLU config file)

:::info
*Fluentis Live Update* app on *Linux* needs to be configured by default on port *6425*.
:::

``` bash title="bash"
nano .env
```

``` text title=".env"
...
# Linux timezone for containers. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
TIME_ZONE=Europe/Rome
...
# Automatic database creation
DB_SETUP_USER=sa
DB_SETUP_PASSWORD=saPWD2024!
...
HTTP_PORT=6425
HTTPS_PORT=443
...
```

And the connection string (with a sql user that is not existing) for `Fluentis.FluentisLiveUpdate.Server.dll.config` file:

:::danger IMPORTANT
DO NOT USE *sa* as sql user in the config file. You can just put a new user like FluentisLiveUpdateUser and a password.
When you run the instance, the user will be automatically created.
:::

``` bash title="bash"
nano flu/Fluentis.FluentisLiveUpdate.Server.dll.config
```

``` xml title="Fluentis.FluentisLiveUpdate.Server.dll.config"
...
<connectionStrings>
        <add name="Default" connectionString="Server=server_name;Database=FluentisLiveUpdate;User=FluentisLiveUpdateUser;Pwd=FluPwd23!;TrustServerCertificate=True"/>        
</connectionStrings>
...
```

:::tip The .config file
This file: flu/Fluentis.FluentisLiveUpdate.Server.dll.config is dedicated only to FLU. So the sql user inserted is used only to work with FLU database.
:::

### Setup with existing database of FLU

For this case, modify some basic values in the `.env` file, which are:

- Timezone (if it's needed, by default is set to Europe/Rome timezone)
- HTTP and HTTPS ports

``` bash title="bash"
nano .env
```

``` text title=".env"
...
# Linux timezone for containers. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
TIME_ZONE=Europe/Rome
...
HTTP_PORT=6425
HTTPS_PORT=443
...
```
And the connection string in the `Fluentis.FluentisLiveUpdate.Server.dll.config` file:

:::danger IMPORTANT
DO NOT USE *sa* as sql user in the config file. You can just put a new user like FluentisLiveUpdateUser and a password.
When you run the instance, the user will be automatically created.
:::

``` bash title="bash"
nano flu/Fluentis.FluentisLiveUpdate.Server.dll.config
```

``` xml title="Fluentis.FluentisLiveUpdate.Server.dll.config"
...
<connectionStrings>
        <add name="Default" connectionString="Server=server_name;Database=FluentisLiveUpdate;User=sysadmin_username;Pwd=sysadmin_password;TrustServerCertificate=True"/>        
</connectionStrings>
...
```

:::note Database RE-creation
If you put ***sa*** ad sysadmin user in the connection string or something goes wrong during the installation of the database, to do again this steps you can:
1. Take down the instance (*sudo docker compose down*)
2. Delete the database
3. Correct the connectionstring
4. Run the instance (*sudo docker compose up-d*)

And now the database will be created again.
:::

### Start LiveUpdate Container

Use this command to start the LiveUdpate container:

``` bash title="bash"
sudo docker compose up -d
```

If no error messages are displayed, the creation went successful and *FluentisLiveUpdate* container is up and running.

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

:::tip
To **get a log** of the running instance you can use this command.

``` bash title="bash"
sudo docker compose logs
```
:::

:::danger[IMPORTANT]
For each docker installation you have to make the login to the container registry of Fluentis. See steps below.
:::

### Login container registry

You have to do this step on the first installation and the for all the docker installation you've got on the machine.
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
---
## Updating Fluentis Live Update on Docker



Start by downloading the bash script:

``` bash title="bash"
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForLinux -o UpdateFluentisLiveUpdate.sh
```

Give the needed execute permission on the file:

``` bash title="bash"
sudo chmod +x UpdateFluentisLiveUpdate.sh
```

Run the bash script:

``` bash title="bash"
sudo ./UpdateFluentisLiveUpdate.sh
```

Remove the unnecessary bash script:

``` bash title="bash"
sudo rm -f ./UpdateFluentisLiveUpdate.sh
```

:::info
After the execution of the bash script, an API key will be released, which must be kept for the *FluentisInstaller* registration within *FluentisLiveUpdate*.
:::