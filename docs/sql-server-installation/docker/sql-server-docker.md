---
title: MSSQL On Docker
sidebar_position: 1
---

## Folder

To install SQL server on docker you need to configure inside /opt/fluentis a folder for sql.

Go to /opt/fluentis/ folder

``` bash
cd /opt/fluentis/
```
Create a folder for sql.

``` bash
sudo mkdir fluentis-sql-01
```
You need the permission to copy/edit file inside.

``` bash
sudo chown -R user /opt/fluentis/fluentis-sql-01/
```
---

## File for installation
Now you can install it in 2 ways.  
1- Create the .env file and the docker-compose.yml.  
2- Copy the 2 files from an existing installation and modify the docker-compose.yml file.  

``` bash
sudo nano .env
```
The .env file has got only 2 row. One is a comment the other one is the port where sql will run.  
Copy the content below inside .env file and save.

```title="env"
# SQL Server machine configuration
SQL_SERVER_PORT=1433
```
:::tip
If you want to see hidden files inside in a folder user the following command
``` bash
ls -a
```
:::
**Create file docker-compose.yml**
``` bash
sudo nano docker-compose.yml 
```

The docker-compose.yml file is made like this.
Copy the content below inside docker-compose.yml file and save.
```title="docker-compose.yml"
services:
    fluentis-sql:
        image: mcr.microsoft.com/mssql/server:2022-latest
        environment:
            - ACCEPT_EULA=Y    
            - SA_PASSWORD=saPWD2024!
            - MSSQL_PID=Standard
            - MSSQL_TCP_PORT=1433
            - MSSQL_AGENT_ENABLED=True
            - TZ=Europe/Rome
        hostname: client-flu-sql-1
        volumes:
            - sql-01-data:/var/opt/mssql
        restart: always
        ports: 
          - ${SQL_SERVER_PORT}:1433
volumes:
    sql-01-data:
        name: sql-01-data
```
:::warning WARNING
When you modify the docker-compose.yml watchout for the spacing. Do not use TAB button only space, and it SHOULD BE all aligned as in the example!
:::
:::danger WARNING
Remember that the password for sa should have at least one number, one lowercase letter, one uppercase letter and a non-alphanumeric characters. Also it should be at least 8 char long. 

It's all specified [at this link](https://learn.microsoft.com/en-us/sql/relational-databases/security/password-policy?view=sql-server-ver16). 
:::

### Installation

First step is doing the pull for the docker image
``` bash
sudo docker compose pull
```

Then run the docker engine instance
``` bash
sudo docker compose up -d
```

#### Now sql is running. To make a test use a SSMS to connect to it.
---
### Update SQL Server from 2019 to 2022

To update sql server version you need to take down the instance
``` bash
sudo docker compose down
```

Edit the docker-compose.yml file, for example to update from sql 2019 to sql 2022

**Let's take only the part of the file we need to modify for the example**
The file will be this
``` bash title="docker-compose.yml"
services:
    fluentis-sql:
        image: mcr.microsoft.com/mssql/server:2019-latest
```

We change the version directly, and save
``` bash title="docker-compose.yml"
services:
    fluentis-sql:
        image: mcr.microsoft.com/mssql/server:2022-latest
```

At the the end just run the instance and it will be updated
``` bash
sudo docker compose up -d
```
