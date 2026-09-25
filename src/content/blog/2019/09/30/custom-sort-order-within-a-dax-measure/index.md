---
title: "Custom Sort Order Within a DAX Measure"
excerpt: "How do I set a custom sort order inside a DAX measure?"
date: "2019-09-30"
authors:
  - "Mike Carlo"
categories:
  - "Building Reports"
tags:
  - "power-bi"
featuredImage: "./assets/featured.png"
---

## How do I set a custom sort order inside a DAX measure?

**TL;DR.** Prefix each text label in the measure with invisible zero-width spaces using `UNICHAR(8203)` and `REPT()`. More spaces sort earlier alphabetically, so you can order Bad, Warning, Good without a Sort by Column that affects every visual.

### What problem does this solve?

You need a text measure sorted in a custom order (for example Bad, then Warning, then Good) in one table, without changing sort behavior on every other visual.

### Why not use Sort by Column?

A conditional column plus Sort by Column can work, but it can get complicated on complex measures and it sorts every visual that uses that column. This pattern keeps the order inside one measure.

### Which DAX functions create the invisible prefix?

`UNICHAR(8203)` returns a zero-width space (invisible, still a character). `REPT()` repeats that character. Concatenate with `&` in front of each label.

### How do more zero-width spaces change the order?

Spaces sort before letters. Repeating the zero-width space more times pushes that label earlier in an alphabetical ascending sort. Example in the post: Bad three times, Warning twice, Good once.

### How do I apply the sort in the visual?

Add the measure to a table, then sort that visual by the measure ascending. The invisible prefixes control alphabetical order without showing extra characters.

Related: [Using Variables within DAX](https://powerbi.tips/2017/05/05/using-variables-within-dax/), [Power BI Field Finder](https://powerbi.tips/2020/01/29/power-bi-field-finder/), [Creating A DAX Calendar](https://powerbi.tips/2017/11/01/creating-a-dax-calendar/), and [Power BI Theme Generator](https://powerbi.tips/power-bi-theme-generator/).

This post will answer how to sort a measure that returns text values to a custom order, without affecting other columns. It will utilize the DAX functions of REPT() and UNICHAR(8203) – a Zero width space.

### The requirements

I’ve been working at a florist! In this example, I have been in charge of looking after four plants, named A, B, C and D. The florist owner is a big Power BI fan, and asked me to measure how much water I have been giving them a day to put in a report. They need at least 20ml to survive, but over 50ml will stop them growing as well.

Create a table with the flowing:  
The flowers get under 20 ml, label as **Bad**.  
When the flowers get 20 – 50 ml, label as **Good**.  
Finally, if the flowers receive over 50 ml, label as **Warning**.  
I’ve been asked to show them in order of Bad, Warning then Good. This is vital so the plants needing attention are at the top of the table.

### Creating the table

Here is the measure I create:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/image-7.png)

Adding this to a table:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/image-4.png)

Now comes the question, how can I order this to put Bad and Warning together? If I order by Water Target measure, this will be alphabetical. Sorting by WaterIntake can not give me the correct order either.  
One option would be to make a conditional column and use the “Sort by Column”. However, this may be a complicated calculation, especially on more complex measures. In addition it will sort every visual by this column, when I only want to sort in this one table.

### Creating the custom sort

My solution? Make use of the [UNICHAR()](https://docs.microsoft.com/en-us/dax/unichar-function-dax) function. For those unaware of this function, UNICHAR() can return characters based on their UNICODE number. This can include more text characters not included on the standard keyboard.

A character that can help is UNICHAR(8203). This is a “Zero width space”. This is a space that has not width, so it is essentially invisible and will not be visible in the measure. The Zero width space is still recognized as a character by DAX. Spaces come before any letter in the alphabet. Two spaces comes before one, and so on.

The second function I will utilize is [REPT()](https://docs.microsoft.com/en-us/dax/rept-function-dax). REPT() or replicate, simply repeats text multiple times. It takes two arguments, the text and the times to repeat.

For example: REPT( "Hi", 3 ) will return the text "HiHiHi"

To change the sort order, I will repeat the Zero width space in front of the text. The text I want to appear first will have the space repeated the most amount of times. This will put it first in an alphabetical list. I will use the & symbol to concatenate the Zero width spaces and the text.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/image-5.png)

Now, “Bad” has the Zero width space repeated three times in front of it. This now puts it first in an alphabetical list. Warning has the Zero width space repeated twice, putting it second. “Good” has it once putting it third.

### Applying the sort

Now I can arrange my table by Water Target (alphabetical), in an ascending order:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/image-8.png)

And success! I’ve added a custom sort to my text measure, without making any other measures or columns.
