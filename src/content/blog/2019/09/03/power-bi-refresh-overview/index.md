---
title: "Power BI Refresh Overview"
excerpt: "There are different ways you can connect to a multitude of different data sources. I’ve written about the different connection types before and you ca..."
date: "2019-09-03"
authors:
  - "Seth Bauer"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

There are different ways you can connect to a multitude of different data sources. I’ve written about the different connection types before and you can find those articles [here](https://powerbi.tips/?s=Power+bi+connection) if you are unfamiliar with what I’m talking about.

When you import data and publish a Power BI report to the Power BI Service you need to schedule a dataset refresh in order for the report data to be updated. This can be done manually by refreshing the PBIX and re-publishing the file, but for any production report that you want to set a schedule for, you need to ensure that you set up things to automatically update without further intervention.

The first thing you need to check is whether or not you need a gateway. For any data source that is located within your company servers, on a local machine, or within certain types of cloud infrastructures are considered “on-premises”. When a data source is on-premises you require a gateway in order to refresh the data. If your data is in a cloud source such as OneDrive or SharePoint Online, then you will not need a gateway to refresh.

Once you determine whether or not you require a gateway, you need to understand that there are two different types. The first is called a personal gateway, this gateway will allow you to use the majority of Power BI data sources with no configuration. After you install this gateway and publish your report using a data source that is supported by that gateway you can set up a dataset refresh in the Power BI Service without any additional setup. The second type of gateway used to be called the “Enterprise Gateway”, but now it is just the gateway that is not (personal mode).

Install a gateway from here: [https://powerbi.microsoft.com/en-us/gateway/](https://powerbi.microsoft.com/en-us/gateway/)

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/gateway-installer-300x198.png)

_gateway installer_

This gateway is designed for use in your enterprise wide reports. It has a lot more data sources that it supports for refresh (That list can be found [here](https://docs.microsoft.com/en-us/power-bi/refresh-scheduled-refresh#data-source)) It also requires some additional setup, configuration and management from an Administrator. Let’s walk through how you set one of these up so that you understand how to do it, or how you can request to have it done for your organization. It is highly recommended that you install the “Enterprise Gateway” on a server that will never shut down or be on a scheduled maintenance cycle. You can download this gateway to your local computer, but if the computer is off, so is your gateway, and the reports will not refresh.

**Installing the gateway:**

Installation is very similar to the personal gateway, except you have options to add the gateway to a cluster or incorporate a recovery key. ALWAYS set a recovery key and SAVE IT! This key will allow you to move the gateway at a later date if you need to without impacting any of your reports. This key is GOLD, treat it like it and you will save yourself a bunch of headaches in the future. Outside of that, the install of the gateway should be really straightforward, if you do run into issues there is a comprehensive guide to troubleshooting the problems that you can find [here](https://docs.microsoft.com/en-us/power-bi/service-gateway-onprem-tshoot). I recommend using an administrative account to set up the gateway because the ownership of the gateway in the Service will begin with this user. If you have one account that manages all the Enterprise Gateways, then you’ll save yourself a ton of pain down the road from an administration standpoint in discover-ability. If you aren’t the admin, be sure to either have an admin set up an account for you or let them know that you have an Enterprise gateway set up using your account and have them securely store the gateway recovery key. Alternatively, if an admin account is not used, be sure to add an IT admin as a gateway administrator in the next step as you configure the gateway.

**Configuring the gateway:**

After the installation of a gateway you need to log in to the Power BI Service (app.powerbi.com) with the user that you configured the gateway with. Go to Settings > Manage gateways and you will see several different configuration options that will affect how end users can see and interact with data sources on this gateway. The main call-out I have in these options is the first one. More often then not, you will want to make sure that you allow users to “mix” cloud and on premises data sources.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/gateway-options.png)

_gateway options_

If Gateway Administrators want other people to be able to access and create new data sources on the gateway for others to use it requires that every on-premises data source be setup and configured (Unlike the personal gateway). This means that the data source can use a single user/permission set for a data source and the report and end users will inherit the read permissions of that user. (A caveat to that would be the application of row level security, or a live connection, but that is beyond this overview).

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/data-source-1024x680.png)

_data source_

After the data source has been configured, the administrator needs to add any users to the data source so that they can deploy reports using the gateway. This is an ideal use case for using Active Directory security groups, this allows administrators to apply a single group and add and remove users from that group verses managing all the data sources in Power BI. If a user is not added to the data source on the gateway, the report publisher will not be able to setup a refresh using that gateway.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/data-source-users.png)

_data source users_

**Scheduling a Report dataset to refresh:**

Now that you have completed the set-up of the gateway and added your users (including yourselves) to the gateway, you can publish a Power BI Desktop report and schedule a refresh.

First, publish the report from the Power BI Desktop to the workspace that you want the report to live in.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/publish.png)

_publish_

Next navigate to the workspace and select datasets, follow the dataset ribbon to the right and click on the ellipses:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/dataset-location.png)

_dataset location_

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/dataset-settings.png)

_dataset settings_

Navigate to Datasets and expand the Gateway connection section. Enable the use of the gateway if it is not enabled already. All your source will be listed here, and if you have any data source connections strings that do not match exactly in your PBIX file it will become apparent very quickly that you have a broken dataset. All data sources in the gateway need to match exactly to what is in your PBIX file.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/enable-gateway.png)

_enable gateway_  

Once the gateway is enabled and all your data sources are working, you can schedule a refresh.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/schedule-refresh.png)

_schedule refresh_

One thing in particular to note here, when you deploy your report from your local time to the Power BI Service all times are stored in UTC times. So, if you are doing time specific calculations you may need to take some time zone things into consideration. Reza Rad has a good article outlining some methods to sort this problem out, you can find that [here](https://radacad.com/solving-dax-time-zone-issue-in-power-bi).

A recent update to the dataset refresh now also allows us to add in email enabled groups or other specific users to the refresh failure section. This is extremely helpful in ensuring a wider audience of users can be notified any refresh fails.

I hope you found this overview helpful, stay tuned for more blogs that walk through specific data source connection and refresh setups that will help ease the process of connecting to, and refreshing all your various data sources in Power BI.
