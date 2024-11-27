---
title: Update
sidebar_position: 1
---

### Update Powershell Script

:::tip Complete script for Fluentis Installer update via Powershell administrative shell 
``` powershell title="powershell"
[Net.ServicePointManager]::SecurityProtocol +='tls12';`
curl https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisInstallerScriptForWindows -o UpdateFluentisInstaller.ps1;`
.\UpdateFluentisInstaller.ps1;`
Remove-Item .\UpdateFluentisInstaller.ps1;
```
:::

To update FluentisInstaller, open PowerShell with administrative privileges and :

Ensure TLS 1.2 is enabled:

``` powershell title="powershell"
[Net.ServicePointManager]::SecurityProtocol +='tls12'
```

Download update script:

``` powershell title="powershell"
curl https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisInstallerScriptForWindows -o UpdateFluentisInstaller.ps1
```

Then launch the script and wait until its done:

``` powershell title="powershell"
.\UpdateFluentisInstaller.ps1
```

Delete the update script:

``` powershell title="powershell"
Remove-Item .\UpdateFluentisInstaller.ps1
```

To conclude the FI update process is necessary to check Installer service version from **Fluentis Live Update**. Open the app, login, and from the left menu select **Installer services** page:

![fi-8](/img/neutral/fluentisinstaller/fi-8.png)

Select the row of the updated Installer service, then open the combobox from the arrow beside the *Installer services* title, and select **Check installer**.

![fi-9](/img/neutral/fluentisinstaller/fi-9.png)

At the end of the procedure the column corresponding to the version of the Installer service will be updated.

![fi-10](/img/neutral/fluentisinstaller/fi-10.png)