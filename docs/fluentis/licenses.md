---
title: Licenses
sidebar_position: 4
---

### Introduction

Fluentis 2021 and next versions licenses will work with Company Description, Nation and Vat Reference Number.
These are the only three data, that if modified will invalidate the license.

As Always to get a Fluentis License, ask your account manager.

### How to add a Company to an existing license

If you want to add a company to a license, first you have to configure it in Fluentis, then in Arm and then there are 3 scenarios:

- **Adding a real company with Vat Reference Number**

In this case you have got 30 days to open us a ticket with the result of this query
``` bash title="sql"
Select SHCNTR_IsoCode, SHC_VATRegistrationNumber, SHC_FiscalCode, SHC_Description
from Fluentis.SH_Companies Join Fluentis.SH_Countries on SHC_Country_SHCNTR_Id = SHCNTR_Id
Order by 1,2,3
```
We will add the new company to the license and we advise you by closing the ticket.

:::tip TIP
Open the ticket with the result of the query ASAP. Better the moment after you create the company.
:::

- **Adding a company without Vat Reference Number**

In this case you don't have to do nothing with the Fluentis Support. The company is ready to work!

- **Adding a company with particular Vat Reference Number**

We have got a range of vat reference number that we can insert to make some test. The range is between 99999999990 - 99999999999. When you put a vat reference number in this range you don't have to do nothing, the company is ready to work.

### How to make a Demo Environment

To make a demo environment you don't need any license. **You have to use the internal use license**, this is a license that you can use in your production environment and for the demo. In this license is already in your produciton company, then you can add as many Demo company as you want. Read the previus chapter to know how.

### What to do with the license when you restore a client's database in your internal sever

You don't have to do nothing with the license. The client's license is ok.
