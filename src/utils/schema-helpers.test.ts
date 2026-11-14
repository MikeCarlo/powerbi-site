import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  extractFaqItems,
  isFaqQuestionHeading,
  plainTextExcerpt,
  unwrapHeadingMarkup,
} from './schema-helpers.ts';

test('unwrapHeadingMarkup strips wrapping bold', () => {
  assert.equal(unwrapHeadingMarkup('**What are Scrims?**'), 'What are Scrims?');
});

test('isFaqQuestionHeading requires a trailing question mark after unwrap', () => {
  assert.equal(isFaqQuestionHeading("What We're Building"), false);
  assert.equal(isFaqQuestionHeading("What We're Building?"), true);
  assert.equal(isFaqQuestionHeading('Why Use the Power BI Scanner API'), false);
  assert.equal(isFaqQuestionHeading('**What are Scrims?**'), true);
  assert.equal(isFaqQuestionHeading('Import vs DirectQuery refresh?'), true);
  assert.equal(isFaqQuestionHeading('How do I build a Pareto chart in Power BI?'), true);
  assert.equal(isFaqQuestionHeading('Do all columns in DAX have a data type?'), true);
  assert.equal(isFaqQuestionHeading('How it started / How it’s going'), false);
});

test('extractFaqItems drops What We are Building and keeps real trailing-? FAQs', () => {
  const md = `## What We're Building

Below you will see an image of the final Pareto chart, long enough to have been picked up.

## How do I build a Pareto chart in Power BI?

**TL;DR.** A Pareto chart shows each category as a bar and a cumulative percent as a line.

### Which DAX measures support the Pareto chart?

Ranking, Cumulative Total, Total Sales, and Cumulative Percent.

## Why Use the Power BI Scanner API

The Scanner API lets an admin pull tenant metadata, which is more than twenty characters.
`;
  const items = extractFaqItems(md);
  assert.deepEqual(
    items.map((i) => i.question),
    [
      'How do I build a Pareto chart in Power BI?',
      'Which DAX measures support the Pareto chart?',
    ],
  );
});

test('extractFaqItems cleans bold question headings and does not append a second ?', () => {
  const md = `## **What are Scrims?**

Scrims are printed background images that sit behind your report visuals, long enough.
`;
  const items = extractFaqItems(md);
  assert.equal(items.length, 1);
  assert.equal(items[0].question, 'What are Scrims?');
});

test('plainTextExcerpt strips heading markers, links, and emphasis, but not mid-sentence hash', () => {
  assert.equal(
    plainTextExcerpt('### **Introducing the New Feature**  In the dynamic landscape...'),
    'Introducing the New Feature In the dynamic landscape...',
  );
  assert.equal(
    plainTextExcerpt('They show us why **DAX Studio is the ultimate tool...'),
    'They show us why DAX Studio is the ultimate tool...',
  );
  assert.equal(
    plainTextExcerpt('We announce [Community Jam](https://jam.powerbi.tips/), today.'),
    'We announce Community Jam, today.',
  );
  assert.equal(
    plainTextExcerpt("Fabric's new `DeltaLake.Table` M function and C# scripting in ep #286."),
    "Fabric's new DeltaLake.Table M function and C# scripting in ep #286.",
  );
});
