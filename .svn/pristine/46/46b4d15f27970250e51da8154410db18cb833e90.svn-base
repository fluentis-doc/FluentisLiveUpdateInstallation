---
title: Maintenance Plan
sidebar_position: 3
---

## Introduction

In this guide will be shown **how to create two maintenance plans** for Fluentis database.  
The first maintenance plan makes database **backups** and deletes old ones automatically.   
The second one **boosts** the general performance of Fluentis program and **shrinks** the database.

:::important Important
As these events are scheduled in SQL, an active and working Sql Server Agent is mandatory.
:::


## Automatic backups maintenance plan

To create a maintenance plan, open **Sql Server Management Studio** and right click on **maintenance plans**.

![maintenance-plan](/img/neutral/sql-server-installation/windows/maintenance/1.png)

Click on **New maintenance plan**...

![new-plan](/img/neutral/sql-server-installation/windows/maintenance/2.png)

Choose a **name** for the plan.

![new-plan-name](/img/neutral/sql-server-installation/windows/maintenance/3.png)

This is the starting screen for the maintenance plan configuration.

![starting-screen](/img/neutral/sql-server-installation/windows/maintenance/4.png)

On the left of the screen there is the **toolbox** from where you can **create the maintenance plan actions**.

![toolbox](/img/neutral/sql-server-installation/windows/maintenance/5.png)

Click on the toolbox to open it, now you can **drag and drop the actions from the list**.

![actions-list](/img/neutral/sql-server-installation/windows/maintenance/6.png)

To make the backup plan you should use an action that backups the database and another action that cleans the disk from old backups.    
**The actions will be executed according to the order set by the arrows**.

![inizio-progettazione](/img/neutral/sql-server-installation/windows/maintenance/7.png)

Connect the actions so the second one begins as the first one ends. **Right click** on a task and click **edit** to set.

![edit-task](/img/neutral/sql-server-installation/windows/maintenance/8.png)

In the Back Up Database Task you should **define which databases will be backed up**. Include Fluentis database for sure.

![choose-database](/img/neutral/sql-server-installation/windows/maintenance/9.png)

In the second tab (**Destination**) you should specify the backup files path and the file extension which is usually **.bak**

![backup-destination-path](/img/neutral/sql-server-installation/windows/maintenance/10.png)

In the last tab (**Options**) set the backup **compression**. If needed the backup **expiration date** can be set too.

![backup-compression](/img/neutral/sql-server-installation/windows/maintenance/11.png)

Then configure the **Maintenance Cleanup Task**, that will **delete old backups** based on configuration rules.

![backup-cleanup](/img/neutral/sql-server-installation/windows/maintenance/12.png)

Set the **path** of the existing backups, the **file extension** and **how old must be a backup to be deleted**.    
In the image is configured to delete backups older than 3 days.

Now **it must be scheduled** so it can be executed by the Sql Server Agent.     
Click on the button shown in the image.

![schedule-button](/img/neutral/sql-server-installation/windows/maintenance/13.png)

**Set the schedule**, backups are suggested to be made everyday in the evening.

![schedule](/img/neutral/sql-server-installation/windows/maintenance/14.png)

Eventually click **save**.

![save-button](/img/neutral/sql-server-installation/windows/maintenance/15.png)

Check the successful scheduling of the job by clicking on **SQL Server Agent > Jobs**.

![check-job](/img/neutral/sql-server-installation/windows/maintenance/16.png)


## Index Maintenance Plan

Click on new plan and add a name.   
**Insert the actions and connect them like in the image**.

![new-plan-index](/img/neutral/sql-server-installation/windows/maintenance/17.png)

**Rebuild Index Task**  
Edit the action and configure it like in the image, choosing on which database it should be executed.

![rebuild-index-task](/img/neutral/sql-server-installation/windows/maintenance/18.png)

**Reorganize Index Task**  
Edit the action and configure it like in the image, choosing on which database it should be executed.

![reorganize-index-task](/img/neutral/sql-server-installation/windows/maintenance/19.png)

**Update Statistics Task**  
Edit the action and configure it like in the image, choosing on which database it should be executed.

![update-statistic-task](/img/neutral/sql-server-installation/windows/maintenance/20.png)

**Shrink Database Task**  
Edit the action and configure it like in the image, choosing on which database it should be executed.

![shrink-database-task](/img/neutral/sql-server-installation/windows/maintenance/21.png)

**Schedule the job like the previous one**, so it will be executed everyday in the evening

![schedule-index-task](/img/neutral/sql-server-installation/windows/maintenance/22.png)

Check the successful scheduling of the job by clicking on **SQL Server Agent > Jobs**.

## Conclusion

The maintenance plans in this page are **not mandatory** for Fluentis but **highly recommended**.    
Further info in the Microsoft documentation:
[Create a maintenance plan](https://docs.microsoft.com/it-it/sql/relational-databases/maintenance-plans/create-a-maintenance-plan?view=sql-server-ver15)