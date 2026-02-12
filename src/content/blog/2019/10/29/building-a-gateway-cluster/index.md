---
title: "Building a Gateway Cluster"
excerpt: "Power BI requires a gateway for refreshing on premises data sources. There are a myriad of different data sources that you can create and two differen..."
date: "2019-10-29"
authors:
  - "Seth Bauer"
categories:
  - "Sharing And Administration"
tags:
  - "power-bi"
featuredImage: "./assets/featured.png"
---

Power BI requires a gateway for refreshing on premises data sources. There are a myriad of different data sources that you can create and two different ways you can set up the gateway. The first way you can install a gateway is in the “personal mode”. The second method for installation uses the “On-premises data gateway (recommended)” (OPDG), this used to be called the “Enterprise Gateway”. The second gateway method is what you need to set up and configure appropriately in order to manage permissions. The recommended gateway to use when deploying reports to a wider audience is the OPDG.

Over the course of time enhancements to the gateway have increased the usability and functionality. Such as, being able to connect to cloud and on premises data in the same report, allowing custom connectors and the ability to create and distribute workloads across multiple gateways that you have clustered together. You can toggle all these settings in the gateway in the Power BI Service.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/settings-1024x101.png)

By setting up a gateway cluster you ensure that your reports are going to refresh even if there is some maintenance activity or if a server goes offline unexpectedly. This article will explain how we can configure this set up and outline a few gotcha’s related to managing this setup that aren’t so intuitive.

## **Setup**

**For DR (Disaster Recovery)**

            The name of the game here is to choose servers that are not near each other. While this may not be ideal from a refresh performance perspective this will provide a better recovery choice if something catastrophic happens to the server.

**For Load Balancing**

            The goal in this gateway setup would be to choose several servers nearest the data sources and choose different servers to distribute the refresh load for improved performance.

In an a perfect world we could combine DR with load balancing. At this point in time you can either distribute the load across all gateways or choose not to distribute load and it will default to DR. There is no combination of both methods.

**Install the Gateway**

The install of the gateway should be pretty straight forward provided you follow the guidelines here [https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-install](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-install)

What I’ve found with installing the gateway is that if it isn’t easy, its hard. When it is hard, you will likely need to do a bunch of troubleshooting to resolve the issues. A great helper guide for troubleshooting a bunch of common and not so common things can be found here – [https://docs.microsoft.com/en-us/power-bi/service-gateway-onprem-tshoot](https://docs.microsoft.com/en-us/power-bi/service-gateway-onprem-tshoot) . Install the gateway on the initial server once you get past the initial couple screens you will hit this one

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/gateway-register.png)

You want to register a new one gateway and be sure to Set and **SAVE** your recovery key. The key is the most important part of how you both recover, and create a cluster.

_(Note: You can always add a new gateway to an existing gateway, this doesn’t have to be a net new process)_

## **Adding the Clustered Gateway**

After you have the first gateway installed, login to the second server, where you will follow the exact same process. Except this time when you hit the next screen you will want to toggle the “Add to an existing gateway cluster” and enter in the same recovery key.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/gateway-cluster.png)

By adding the recovery key and checking the box you have declared to Power BI that this gateway should be linked to the other gateway and thus create a cluster. Like the first gateway, it now shows up in the Service and we can set up the data sources to match our other gateway. At this point we can configure the settings of the gateway to distribute or by default it will just be for DR.

Once you have your gateways deployed you can manage them via the Power Platform Admin Center – [https://admin.powerplatform.microsoft.com](https://admin.powerplatform.microsoft.com/)

Be aware that it does require appropriate permissions to see and manage the gateways, so check more out in the documentation here – [https://docs.microsoft.com/en-us/power-platform/admin/onpremises-data-gateway-management](https://docs.microsoft.com/en-us/power-platform/admin/onpremises-data-gateway-management) Since gateways can be used for other products, this is where you can see what is installed and where and figure out who has access.

I’m hoping that now that we have an admin center that in the future we’ll be able to manage upgrading, clusters and all “admin” related activities from this interface. As of this writing, we are still relegated to using APIs and cmdlets to manage these objects. Just recently, the Power BI team did release a whole slew of PowerShell cmdlets to help out administrators manage gateways, be sure to check out the preview release notes here. [https://powerbi.microsoft.com/en-us/blog/on-premises-data-gateway-management-via-powershell-public-preview/](https://powerbi.microsoft.com/en-us/blog/on-premises-data-gateway-management-via-powershell-public-preview/)

## **Removal**

If you are like me, when I installed a gateway and then needed to remove it, you receive all kinds of errors after the fact in the Service related to those defunct gateway.  Truth be told, you will need to manually remove the gateway from the cluster.  You can do this by utilizing a PowerShell script.  This does not mean uninstall the gateway, this means you need to run a PowerShell script _Remove-OnPremisesDataGateway_ to detach the gateway from the Power BI Service. If you don’t, it will still remain there. I just recently uncovered this while upgrading a gateway and was still getting error messages saying that previous gateways that I had previously deleted after testing out clustered gateway were out of date… which of course they were, they were gone! But alas, to remove these errors you need to follow the instructions here to fully remove the gateway. [https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-powershell-support](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-powershell-support)

## **Summary**

All in all, it is fantastic that we have the ability to provide more stability to our data refreshes, there is a ton more information that can be provided and outlined for data gateways. I hope this post gave you some good tips/tricks around gateway clustering and how to clean up after yourself when deploying clustered gateways.
