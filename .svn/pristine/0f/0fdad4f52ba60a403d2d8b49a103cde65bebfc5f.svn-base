---
title: MSSQL On Docker (Multiple Instances)
sidebar_position: 2
---

You can drive multiple instances of MSSQL through a docker engine in a Linux distribution-based server.  
Each MSSQL instance is piloted through a docker container.  

In this example scenario we create two MSSQL instances on a single server based of Linux distribution.  

1. Create an .env file indicating the TCP port of each MSSQL instance.

```bash
sudo nano /opt/fluentis/fluentis-sql-01/.env
```

2. Paste the following content (In my example Instance #1 is binded 1433, Instance #2 is binded 1434).

```yml
SQL_SERVER_PORT_1=1433
SQL_SERVER_PORT_2=1434
```

3. Make sure the firewall is not blocking the indicated ports.

4. Create an docker-compose.yml file indicating the data for each MSSQL istance.

```bash
sudo nano /opt/fluentis/fluentis-sql-01/docker-compose.yml
```

```YML
services:
  fluentis-sql-instance1:
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
      - sql-instance1-data:/var/opt/mssql
    restart: always
    ports:
      - ${SQL_SERVER_PORT_1}:1433

  fluentis-sql-instance2:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=saPWD2024!
      - MSSQL_PID=Standard
      - MSSQL_TCP_PORT=1434
      - MSSQL_AGENT_ENABLED=True
      - TZ=Europe/Rome
    hostname: client-flu-sql-2
    volumes:
      - sql-instance2-data:/var/opt/mssql
    restart: always
    ports:
      - ${SQL_SERVER_PORT_2}:1434

volumes:
  sql-instance1-data:
    name: sql-instance1-data
  sql-instance2-data:
    name: sql-instance2-data
```

5. Make the docker image pull.

```bash
sudo docker compose pull
```

6. Start the containers.

```bash
sudo docker compose up -d
```

### Now MSSQL is running, try to connect by SSMS 


![alt text](image.png)

