---
title: MSSQL On Linux
siderbar_position: 1
---

### Prerequisites

Unlikely SQL Server installation on Docker container, this SQL Server 2022 installation is installed directly in Ubuntu server.
Regarding installation, refer to the official Microsoft documentation. [Microsoft SQL Server 2022 Official Documentation](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver16&tabs=ubuntu2004)

:::danger Incompatible
If you have Ubuntu 22.10 or higher, at the moment, Microsoft doesn't provide support.
:::

***To install SQL Server on Ubuntu, you need the 64-bit version of one of these Ubuntu versions:***

* Ubuntu Jammy 22.04 (LTS)
* Ubuntu Focal 20.04 (LTS)

*updated at 02/09/2024*




1.  Update the system packages to their latest version by this command.

``` bash 
sudo apt update && sudo apt upgrade
```

2.	Import Microsoft GPG Key for ensure authenticity of the packages we’ll be downloading.

``` bash
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg
```

1. If you see a public key unavailable warning, you can use the following command:

``` bash 
curl https://packages.microsoft.com/keys/microsoft.asc | sudo tee /etc/apt/trusted.gpg.d/microsoft.asc
```
4.	Manually download and register the SQL Server Ubuntu repository:

``` bash
curl -fsSL https://packages.microsoft.com/config/ubuntu/22.04/mssql-server-2022.list | sudo tee /etc/apt/sources.list.d/mssql-server-2022.list
```
5.	And finally.

``` bash
sudo apt-get update
sudo apt-get install -y mssql-server
```

6.	Configure Microsoft SQL Server 2022 and choose the edition.
``` bash 
sudo /opt/mssql/bin/mssql-conf setup
```
![Alt text](/img/neutral/sql-server-installation/windows/sqlonlinux.png)

7. Once setup is complete, verify that the service is running:

``` bash title="bash"
systemctl status mssql-server --no-pager
```
### Now sql is running. To make a test use a SSMS to connect to it.


### Tips

You can stop MSSQL service by command below:

``` bash
sudo systemctl stop mssql-server
```


You can restart MSSQL service by command below:


``` bash
sudo systemctl restart mssql-server
```












