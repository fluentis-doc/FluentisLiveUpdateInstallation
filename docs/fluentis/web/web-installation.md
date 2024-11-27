---
title: Fluentis Web Installation
sidebar_position: 0
---


Fluentis 2023 is available in a Web version through the use of the Blazor framework.
You can run Fluentis Web by different Operative Systems such as: **MacOs**, **Linux Distros**, **Microsoft Windows**.
The recommended browser to run Fluentis Web is Mozilla Firefox, you can download latest version of Mozilla Firefox Browser by Link Below:

```
https://www.mozilla.org/it/firefox/new/
```
The Windows Server instance dedicated to the FluentisWeb part must mandatorily have the following parameterization enabled:
- Webserver IIS.
- Websocket Protocol.

If we use a **Ubuntu** server as our blazor machine, The Blazor part will be managed by a Docker container separate from the Wpf part. It is therefore necessary, from Fluentis Live Update, to parameterize a separate docker instance, Indicating the server address (or hostname) dedicated to the web part.
When parameterizing the docker instance we will have to indicate the absolute path where the files will be copied.
We recommend choosing a folder within the “fluentis” directory that was created during the initial installation.
Let us make sure that such a folder has all read/write permissions for the current user.

![alt text](/img/neutral/webInstallation/image-3.png)

To proceed with the installation of the Web part we will have to connect to Fluentis Live Update, select the Fluentis cluster and create a dedicated application pool, taking care to select from the combobox, Installation Type, the value FluentisWebAppServer.

![alt text](/img/neutral/webInstallation/image-4.png)

In case the cluster was previously installed for the WPF pool, in order to proceed with the installation of the Web part we would have to reset the release and patch values saved to DB.
The system detecting an already active release for the WPF part, would in fact, only allow us to perform UPDATE and UPGRADE actions and not to do an INSTALLATION from scratch.
To reset these values we will have to set the FLUCLS_REL_Id and FlUCLS_PATCH_Id fields of the FluentisLiveUpdate.FLU_FluentisCluster table to NULL by filtering the relative row of the cluster based on the code with which it was created.

![alt text](/img/neutral/webInstallation/image-5.png)

Now proceed with the installation of Fluentis Web.

We will be able to reach the login screen by typing the Web server address into the Mozilla Firefox address bar.

![alt text](/img/neutral/webInstallation/image-6.png)