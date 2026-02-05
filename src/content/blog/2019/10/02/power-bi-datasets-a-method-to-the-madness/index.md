---
title: "PowerBI.tips"
excerpt: "As report authors we sometimes get caught up in how easy it is to create a report and provide value to the business. Each report is an opportunity to..."
date: "2019-10-02"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

As report authors we sometimes get caught up in how easy it is to create a report and provide value to the business. Each report is an opportunity to make a big contribution to the organization. Power BI makes it easier than ever to turn many of those reports around quickly. This is a good thing of course. But, sometimes we can get caught up in the madness of turning out another report with only a flash of recall that we could have used the same or similar model done in a different report. The internal monologue kicks in.

_“Pffft! Re-use a model, that is way to much work! Why do that?, when we can just create a copy of the PBIX (Desktop file) and have two models to manage with the two reports for the same business area! That sounds like fun!”_

Hmm… Or does this actually sound awfully similar to the challenges one might face with sprawling Excel solution. Where variants of logic are buried in different files. Only the composer knows how to bring order from the chaos. Might I suggest that we spare ourselves that sort of pain. Just learn how we can easily leverage our already hard fought model work. Avoid tedious updates without having to over complicate our nirvana of sticking to the business world, but how would we do that?

**The Answer**

Power BI datasets. Power BI datasets allow us to re-use our model across multiple reports. This simplifies and speeds up future report authoring. Also this gives us the building blocks for sharing that dataset to a wider audience.

**How do we create one**?

Technically, we’ve likely already created many. You see, when we publish a Power BI report, we publish a dataset along with it. This dataset is stored in the Power BI Service, and our deployed report relies on it now. But the connector “Power BI datasets” allows us to connect directly to any of these datasets that we have permission to edit. This means that we have the ability to extend a single model across multiple reports without the need of standing up a separate Analysis Services server anywhere. This is a big deal, this allows the everyday business user to leverage a reusable model. A single change or update to a calculation can update multiple reports at the same time. One measure or calculation addition can be done in one place instead of many.

All we need to do to create a dataset that we can connect to is publish a PBIX file that contains data. I’ve adopted a practice recently and rather than generating my first report and reusing that model, I now upload a PBIX file that ONLY contains the model and I name it something like “Sales-Model”. Now I have an object that I’ll know serves the purpose of just being a model instead of a report. This makes it easier from a trace-ability standpoint when looking at the related objects in the Service or selecting it from my list of options when choosing my dataset.

**How do we use one?**

Using the Power BI dataset is one of the most straightforward connections in Power BI. Selecting Get Data -> “Power BI datasets”

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/Get-Data.png)

This brings up the menu of all the datasets in the Power BI Service. The list that is shown are the datasets that our user account has access to use. The great thing about these datasets are we now have the ability to connect to and use a dataset from a different workspace provided we have permissions to edit them. This feature is called a Shared Dataset. Select the dataset and your report is automatically connected to dataset.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/Select-Power-BI-dataset-1024x653.png)

Now, what we’ll notice here is that using this feature automatically pulls in a model for us and we can start building our report. This data source connection behaves exactly the same as if we created our own “live” connection to an Analysis Services instance we would set up. Probably not shocking to any reader here. But, that is exactly what is happening in this case as well. We get the benefit of Microsoft handling all that painful work for us while we reap the benefits of a streamlined process.

As with any “easy button” solution, there are pro’s and con’s. What I mean is that in our new reports we do have easy access to the model. Now you can start building reports immediately. We don’t have the ability to modify the model or the ETL processes. If we want to edit then we need to go back to the original dataset to make those changes.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/Report-Only.png)

But the minor inconvenience of having 2 PBIX files open if we need to in order to make updates to the model is trivial compared to being able to connect many reports to that single model. The live connection does still allow the report author the ability to create measures. So, if there are measures that are only suited to our report and not the overall model we still have the ability to add them.

Once we’ve completed our report, we just publish as we normally would, only this time the dataset is already out in the Service and only our report is published. There are so many things we can now do to share that dataset, but we’ll leave that to another article.

If you’ve never used this method before, I would highly encourage you to try it out. Any time you can save yourself now with reducing the number of models you maintain, the faster you can produce more reports. You now spend less time maintaining all the reports you are publishing.

#### Happy report building!
