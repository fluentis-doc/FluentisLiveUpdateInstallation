---
title: Internet connectivity test
sidebar_position: 1
---

### Problem
The Container of Fluentis Live Update is not downloading anything. If you do the pull of the container you'll see that nothing is pulled.

### Connectivity Test
To make a general connectivity test, not with FLU container but a classic ubuntu container to demostrate that is not a Fluentis problem run this command

``` bash title="bash"
sudo docker run --rm -it --entrypoint bash ubuntu
```

:::danger[Important]
If this command failed, the host docker (so the linux machine where docker is installed) doesn't go out on the net. The IT manager should see by themselves
:::

When the container is installed go inside it with command docker exec -it idContainer bash.
Inside it launch

``` bash title="bash"
apt update
```
:::danger[Important]
If this command failed, the container doesn't go out on the net, we can't do anything else, cause we can't install diagnostic tools. The IT manager should see by themselves
:::

If these 2 upper stuff are ok you can check by a ping where's the problem. Launch 2 command and see the result.

``` bash title="bash"
apt install net-tools iputils-ping
```
``` bash title="bash"
ping liveupdate.fluentis.com
```