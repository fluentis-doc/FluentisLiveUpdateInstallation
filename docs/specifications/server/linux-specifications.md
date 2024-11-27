---
title: Linux Server Requirements
position: 1
---
Below you will find all server sizing specifications tables for Linux operating systems.

  <summary>Docker on Linux - Customer sizing up to <b>15/20</b> users.</summary>
  <p>
    Let's assume a sizing of an installation on Linux servers (Ubuntu distribution) divided in two machines, one for the web server and one for the database, both with Docker. Let's consider in the example an average customer with about 20 users.
  </p>
  <div>
    <table>
      <tr>
        <th></th>
        <th>Web Server</th>
        <th>Database Server </th>
      </tr>
      <tr>
        <td>Operating System</td> 
        <td>Ubuntu LTS 20.04 or higher</td>
        <td>Ubuntu LTS 20.04 or higher</td>
      </tr>
      <tr>
        <td>Virtual CPU</td> 
        <td>4/8 Core</td>
        <td>4/8 Core</td>
      </tr>
      <tr>
        <td>RAM</td> 
        <td>16GB</td>
        <td>32GB</td>
      </tr>
      <tr>
        <td>Storage</td> 
        <td>SSD 16GB for OS partition + 20GB Docker partition  + Space for database  </td>
        <td>SSD 16GB for OS partition + 20GB Docker partition  + Space for database </td>
      </tr>
      <tr>
        <td> Database Engine </td> 
        <td>-</td>
        <td> Microsoft SQL Server 2022 for Linux</td>
      </tr>
    </table>
  </div>
