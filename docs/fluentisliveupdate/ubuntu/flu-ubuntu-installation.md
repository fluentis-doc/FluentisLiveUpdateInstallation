---
title: Installation
sidebar_position: 0
---

In this article is described step by step the installation of **FluentisLiveUpdate** on *Ubuntu*.

### Prerequisites

Before proceeding to install, you must have the following prerequisites:

- A *Linux* server with a *SQLServer Instance* installed;
- *Fluentis* installation folder in the recommended path, that is `/opt/` (the full path would be like so `/opt/fluentis/`);

# Installation On Existing Database

Download bash script file for *FluentisLiveUpdate*:

``` bash title="bash"
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForLinux -o UpdateFluentisLiveUpdate.sh
```

Give to the downloaded file execution permission:

``` bash title="bash"
sudo chmod +x UpdateFluentisLiveUpdate.sh
```

Provide to the script the **ConnectionString** as a parameter, and run the script:

``` bash title="bash"
sudo ./UpdateFluentisLiveUpdate.sh --ConnectionString="Server=XXX;Database=XXX;User=XXX;Pwd=XXX;TrustServerCertificate=True"
```

Delete the remaining unnecessary file:

``` bash title="bash"
sudo rm -f ./UpdateFluentisLiveUpdate.sh
```

### Installation On New Database

Download bash script file for *FluentisLiveUpdate*:

``` bash title="bash"
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForLinux -o UpdateFluentisLiveUpdate.sh
```

Give to the downloaded file execution permission:

``` bash title="bash"
sudo chmod +x UpdateFluentisLiveUpdate.sh
```

Export the defined variables to which the correct values (*SQL credentials*) have been assigned:

``` bash title="bash"
export DB_SETUP_USER=sa
```

``` bash title="bash"
export DB_SETUP_PASSWORD=XXX
```

Provide to the script the **ConnectionString** as a parameter, and run the script:

``` bash title="bash"
sudo -E ./UpdateFluentisLiveUpdate.sh --ConnectionString="Server=XXX;Database=XXX;User=XXX;Pwd=XXX;TrustServerCertificate=True"
```

Once the installation is completed is recommended to remove the DB_SETUP_USER and DB_SETUP_PASSWORD settings from the daemon configuration:

``` bash title="bash"
sudo nano /etc/systemd/system/fluentisLiveUpdate.service
```

Remove lines starting with `Environment=DB_SETUP_USER` and `Environment=DB_SETUP_PASSWORD` and save the file. Run:

``` bash title="bash"
sudo systemctl daemon-reload
sudo systemctl restart fluentisLiveUpdate.service
```

Delete the remaining unnecessary file:

``` bash title="bash"
sudo rm -f ./UpdateFluentisLiveUpdate.sh
```

:::info
*FluentisLiveUpdate* app on *Linux* is configured by default on port *6425*.
:::