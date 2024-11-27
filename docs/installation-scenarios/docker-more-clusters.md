---
title: Docker - 1 Arm, More Fluentis Clusters
sidebar_position: 4
---

This is a particular case, where you need to manage more clusters at the same version in one server.
The goal is to have one Arm Server, and linked to that server n fluentis clusters for each client.
In this case every client could have it's own customizations.

These are the steps to get this scenario:

- In the dns server write the record for the complete server name like: server.fluentis.com
- Inside LiveUdpate, in the installer service section add the installer service with the complete domain name
- In the docker installation section also write the complete domain name in the server column
- You can install by LiveUpdate now writing in every server areas (Arm and Fluentis) the complete domain name
- You should check that in Fluentis config file, inside the docker folder, there is the complete domain name as server name
- Also in Arm - Connection the url should be with complete domain name as server name. Like http://server.fluentis.com/FluentisClient1/
- For each cluster, the FLuentis container should be exposed in a different port. For example client1 works with port number 80, client2 with port 81 and so on.. The port can be changed in the .env file