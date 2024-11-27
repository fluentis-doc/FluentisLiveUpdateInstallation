---
title: Update
sidebar_position: 1
---

Start by downloading the bash script:

``` bash title="bash"
sudo curl -L https://liveupdate.fluentis.com/api/updates/GetUpdateFluentisLiveUpdateScriptForLinux -o UpdateFluentisLiveUpdate.sh
```

Give the needed execute permission on the file:

``` bash title="bash"
sudo chmod +x UpdateFluentisLiveUpdate.sh
```

Run the bash script:

``` bash title="bash"
sudo ./UpdateFluentisLiveUpdate.sh
```

Remove the unnecessary bash script:

``` bash title="bash"
sudo rm -f ./UpdateFluentisLiveUpdate.sh
```

:::info
After the execution of the bash script, an API key will be released, which must be kept for the *FluentisInstaller* registration within *FluentisLiveUpdate*.
:::