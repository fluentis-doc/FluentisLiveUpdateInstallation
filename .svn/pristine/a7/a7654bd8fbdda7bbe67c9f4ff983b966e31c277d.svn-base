---
title: Update 
sidebar_position: 2
---

### Update Powershell Script

:::tip Complete script for Fluentis Live Update update via Powershell administrative shell 
``` powershell title="powershell"
[Net.ServicePointManager]::SecurityProtocol +='tls12';`
curl https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForWindows -o UpdateFluentisLiveUpdate.ps1;`
.\UpdateFluentisLiveUpdate.ps1;`
Remove-Item .\UpdateFluentisLiveUpdate.ps1;
```
:::

To update Fluentis Live Update, open PowerShell with administrative privileges and :

Ensure TLS 1.2 is enabled:

``` powershell title="powershell"
[Net.ServicePointManager]::SecurityProtocol +='tls12'
```

Download update script:

``` powershell title="powershell"
curl https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForWindows -o UpdateFluentisLiveUpdate.ps1
```

Then launch the script and wait until its done:

``` powershell title="powershell"
.\UpdateFluentisLiveUpdate.ps1
```

Delete the update script:

``` powershell title="powershell"
Remove-Item .\UpdateFluentisLiveUpdate.ps1
```

