---
id: WINDOWSFAQ
title: Frequently Asked Questions 
sidebar_position: 1
sidebar: FaqSidebar
---
## Windows Installation

### Fluentis Live Update is unreachable and remains loading endlessly
---

### Solution: 
Microsoft has decided to make SIMD (Single Instruction Multiple Data) technology mandatory (for performance reasons) for
Blazor starting with .NET 8.  
This means having a relatively new browser and hardware (processor) that is not exaggeratedly dated.  
To check the technologies supported by your browser use https://webassembly.org/features/ by looking at the
Your Browser column. If it does not support SIMD it explains why the problem occurs. As it is already doing in this case it should be used
liveUpdate from a browser on another machine that supports that technology.


### FluentisLiveUpdate does not download Arm e/ Fluentis installation packages
---

### Solution:
It is probably due to lack of read and write permissions on the relevant folder that is to contain them.  
The solution is to assign read and write permissions to the Repository folder, and make sure that you have correctly entered the
(valid) license serial in Fluentis Live Update (See the license management slide).  


### FluentisLiveUpdate is not avaiable (Internal Server Error - 500):
---

### Solution
The error is probably due to the lack of dependencies necessary for the web application to function; specifically
ASP NET CORE 8.0 in particular.  
It is recommended to proceed to the installation of that package by downloading the installer from the repositories
Microsoft's official repositories.

---

## Linux (Docker) Installation

### I need to copy a file from the server to the Docker container, how can I do it? 

we identify the Id of the container we want to identify by command below: 

```bash
sudo docker ps
```

```bash
sudo docker cp /home/path/to/myfile.bak Id_Container:/opt/
```
---

### How can I assign read and write permissions for all users to a folder?

```bash
sudo chmod -R 777 /path/to/myFolder
```
