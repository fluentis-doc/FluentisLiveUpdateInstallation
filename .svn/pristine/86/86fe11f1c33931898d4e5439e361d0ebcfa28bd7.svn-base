---
title: Ubuntu Installation
sidebar_position: 0
---

:::caution Important
Use always a Long Term Support (LTS) release of Ubuntu Server. They are 'enterprise grade' releases that are supported for **5** years at no cost. See [The Ubuntu lifecycle and release cadence](https://ubuntu.com/about/release-cycle) for more information.

This article is based on Ubuntu Server 22.04 release and is using VMWare as hypervisor.
:::

:::caution Important
DO NOT INSTALL MINIMAL VERSION. Install the complete version!
:::

### Prerequisites

- The Ubuntu Server LTS (64-bit) ISO image file (currently 24.04). You can download it from [Ubuntu official website](https://ubuntu.com/download/server).

### Step 1 - Installing Ubuntu

Using your preferred virtualization software (e.g. VMware Workstation Player, vSphere) or a physical machine, use the ISO image file at startup of the machine and run it.

Once the machine has started, several options of the OS will need to be properly configured. Follow the images below as a guide.

 - Chose a system language, **English** in this case:

![language-select](/img/neutral/os-installation/ubuntu-server-install/language-select.png)

 - Choose to **update the installer** (if you skipped this step, it will be available in any case once the machine configuration is done):

![installer-update](/img/neutral/os-installation/ubuntu-server-install/installer-update.png)

 - Choose a preferred **keyboard layout** and confirm:

![keyboard-configuration](/img/neutral/os-installation/ubuntu-server-install/keyboard-configuration.png)

 - Select **DHCP** configuration from the available options in the list, and confirm:

![network-connections](/img/neutral/os-installation/ubuntu-server-install/network-connections.png)

 - No proxy configuration is needed, proceed by confirming:

![proxy-configuration](/img/neutral/os-installation/ubuntu-server-install/proxy-configuration.png)

 - Confirm the automatically proposed archive mirror from where it will download the updates (it is localized, in this case in Italy):

![mirror-configuration](/img/neutral/os-installation/ubuntu-server-install/mirror-configuration.png)

 - Confirm the storage configuration:

![storage-configuration](/img/neutral/os-installation/ubuntu-server-install/storage-configuration.png)

 - Confirm the storage recap:

![storage-configuration-recap](/img/neutral/os-installation/ubuntu-server-install/storage-configuration-recap.png)

 - Confirm the alert that warns us of the destructive action we are taking:

![storage-configuration-confirm](/img/neutral/os-installation/ubuntu-server-install/storage-configuration-confirm.png)

 - Enter the credentials, paying attention to the **server name**, **username** and **password**, then confirm:

![profile-setup](/img/neutral/os-installation/ubuntu-server-install/profile-setup.png)

 - Tick the **OpenSSH** installation flag (necessary to connect via SSH to the machine) and confirm:

![ssh-setup](/img/neutral/os-installation/ubuntu-server-install/ssh-setup.png)

 - Do not install any additional packages and confirm:

![install-additional-packages](/img/neutral/os-installation/ubuntu-server-install/install-additional-packages.png)

 - At this point installation will start:

![installing-system](/img/neutral/os-installation/ubuntu-server-install/installing-system.png)

 - Once the installation is complete, confirm the **reboot** of the machine:

![install-complete](/img/neutral/os-installation/ubuntu-server-install/install-complete.png)

 - The system will asks us to remove the CD or the ISO image file used for the installation, use the **ENTER** key to accomplish this: 

![remove-install-iso](/img/neutral/os-installation/ubuntu-server-install/remove-install-iso.png)

 - After the rebooting, use **ENTER** key to continue:

![enter-to-login](/img/neutral/os-installation/ubuntu-server-install/enter-to-login.png)

 - Login with the previously created credentials:

![system-login](/img/neutral/os-installation/ubuntu-server-install/system-login.jpg)

 - If the previous steps have been correctly performed, the machine will be ready to be used:

![system-login-succeded](/img/neutral/os-installation/ubuntu-server-install/system-login-succeded.jpg)

Lastly, to connect via SSH, take note of the **machine's IP address** and continue with Step 2 of this article.

``` bash title="bash"
ip route
```

### Step 2 - Connect to Ubuntu with SSH

The safest, simplest and most reliable way to connect to the machine is via **SSH connection**. 
First, we need to open the Windows command prompt and use SSH command with the server user and the server IP:

``` bash title="command prompt"
ssh test-user@your-ip-addr
```

 ![ssh-login](/img/neutral/os-installation/ubuntu-server-install/ssh-login.png)

Then, it will then ask us to check whether that machine corresponds to that IP (if this is not the case, it would consider it a security problem), so confirm:

 ![ssh-login-confirm](/img/neutral/os-installation/ubuntu-server-install/ssh-login-confirm.png)

We should now be connected to the previously created Ubuntu Server machine.

![ssh-login-succeded](/img/neutral/os-installation/ubuntu-server-install/ssh-login-succeded.jpg)