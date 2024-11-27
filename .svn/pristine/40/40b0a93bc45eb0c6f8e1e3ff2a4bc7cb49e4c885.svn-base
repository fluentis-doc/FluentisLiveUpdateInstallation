---
title: FLU on Windows 
sidebar_position: 1
---

In this article is described step by step the installation of **FluentisLiveUpdate** on a *Standard* environment (*i.e.* all *Fluentis* software are installed under *Windows* OS).

**Download** the **Kits2021** folder containing the *FluentisLiveUpdate* installation **executable**, from partners's **FTP Area**. Then, start the installation wizard and click *Next*:

:::info
ASP.NET Core Runtime version may vary depending on the actual version of the executable.
:::

![flu-wizard-1](/img/neutral/fluentisliveupdate/flu-wizard-1.png)

Flag the checkbox, to install of **ASP.NET Core 6.0 Runtime** and click *Next*:

![flu-wizard-2](/img/neutral/fluentisliveupdate/flu-wizard-2.png)

Accept the **End-User License Agreements** selecting the radio button and click *Next*:

![flu-wizard-3](/img/neutral/fluentisliveupdate/flu-wizard-3.png)

Now make sure that **all the features** are selected and click *Next*:

![flu-wizard-4](/img/neutral/fluentisliveupdate/flu-wizard-4.png)

Finally, insert the **credentials** (if the server is under domain, insert it before the admin user like so "domain\user") for the current machine where *FluentisLiveUpdate* will be installed and click *Next* and wait until the installation wizard has completed the process:

![flu-wizard-5](/img/neutral/fluentisliveupdate/flu-wizard-5.png)

Check if the *FluentisLiveUpdate* is correctly installed by opening IIS (i.e. Internet Information Services).

---
## Updating Fluentis Live Update on Windows 

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

