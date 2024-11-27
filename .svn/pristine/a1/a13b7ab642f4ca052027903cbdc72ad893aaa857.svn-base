---
title: Different MTU
sidebar_position: 2
---

### Problem
The MTU (Maximum trasmission unit), the max byte of the package that you could sent over the net, by default is 1500 Byte. The value in the case is 1450 Byte. If the value is not the default one, the container of FLU will not download anything.

:::note[Important]
The value is changed by the IT manager of the server
:::

### Solution
Modify the file extra.yml adding this rows to modify the mtu for all the docker container.

``` bash title="extra.yml"
networks:
  default:
    driver: bridge
    driver_opts:
      com.docker.network.driver.mtu: 1450
```