---
id: ufw
title: UFW - Uncomplicated Firewall
sidebar_position: 4
---

The default firewall configuration tool for Ubuntu is ufw.  
Developed to ease iptables firewall configuration, ufw provides a user friendly way to create an IPv4 or IPv6 host-based firewall.  

Enable ufw:
```bash
sudo ufw enable
```
To see the rules currently enabled use the following command:  

```bash
sudo ufw status
```
For example, To open 8000 port use the following command:

```bash
sudo ufw allow 8000
```
For example, To close 8000 port use the following command:

```bash
sudo ufw deny 8000
```

Below are the ports that must be open for the fluentis suite to function

<table>
    <thead>
        <tr>
            <th>Port</th>
            <th>Service</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>6423</td>
            <td>FluentisInstallerService</td>
        </tr>
        <tr>
            <td>6425</td>
            <td>FluentisLiveUpdate</td>
        </tr>
        <tr>
            <td>1433</td>
            <td>MSSQL</td>
        </tr>
        <tr>
            <td>443</td>
            <td>HTTPS - nginx</td>
        </tr>
        <tr>
            <td>80</td>
            <td>HTTP - nginx</td>
        </tr>
        <tr>
            <td>21</td>
            <td>SSH</td>
        </tr>
        <tr>
            <td>22</td>
            <td>FTP</td>
        </tr>
    </tbody>
</table>
