---
title: Update 
sidebar_position: 2
---

Open a command prompt and download the needed powershell script for the FLU update:

``` bash title="powershell"
curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForWindows -o UpdateFluentisLiveUpdate.ps1
```
Execute the script:

``` bash title="powershell"
powershell .\UpdateFluentisLiveUpdate.ps1
```

Delete the no longer needed script:

``` bash title="powershell"
del /f .\UpdateFluentisLiveUpdate.ps1
```