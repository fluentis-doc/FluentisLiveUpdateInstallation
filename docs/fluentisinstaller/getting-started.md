---
title: Overview
sidebar_position: 0
---



Fluentis Live Update is the management tool for Fluentis installations and updates.  
Fluentis Live Update consists of two parts, the **Web part** and the **FluentisInstallerService**.

## Dependencies

**Fluentis Live Update** was built using the ASP .NET Core framework, which is a technology introduced by Microsoft regarding web development.  
For Fuentis Live Update to work properly, it is essential to make sure that you have in your server:  

**.NET Runtime**  

For Windows servers, where it is not already present, this dependency is automatically installed when installing Fluentis Live Update. For servers based on linux distribution this dependency is automatically installed during installation of FluentisInstallerService.  
 

## Fluentis Installer Service

Fluentis Installer Service is a dedicated service that must be installed on each server involved in the installation, so that all environments can be visible and piloted from the Fluentis Live Update Web Application.  
For example, in the case of distributed installation on two servers (1 server for MSSQL, 1 server for application part), it is necessary to install FluentisInstallerService on both machines.


## Fluentis Live Update

Fluentis Live Update is the web application with which you can manage installations, updates, and porting of Fluentis and Arm environments.  
This section will explain the installation of Fluentis Live Update components in both Windows Server and Linux environments with Docker.  
In Linux environments with Docker, it is necessary to first install the **FluentisInstallerService** and then **FluentisLiveUpdate**, while in Windows Server environments the installation of these two components is done contextually via the installation wizard downloadable from the **Fluentis CDN**.  





