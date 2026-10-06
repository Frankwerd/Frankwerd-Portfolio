---
title: Building a 5-module ERP on Google Apps Script
date: 2026-05-10
summary: How I replaced a tangle of manual workflows for a US hardware launch with an ERP built on Google Sheets, Apps Script and live Shopify and HubSpot integrations.
tags: Automation, Google Apps Script, Operations
---

As USA Marketing Lead for G·GRIP at SGLAB, I kept running into the same problem: the US operation ran on disconnected, manual workflows. Orders were in Shopify, customers and leads were in HubSpot, and pulling it all together took hand work.

So I designed and built an ERP end to end. Not a big-box system, but one built on tools the team already used.

## Five modules, one source of truth

The system has five modules:

- **Inventory management**: stock levels by product line, updated as orders move.
- **Order fulfillment**: every order from Shopify, with its status from placed to delivered.
- **Revenue tracking**: what came in, from where, and when.
- **CRM**: customer and lead records synced with HubSpot.
- **Reporting**: the views leadership actually asked for, generated from the four modules above.

## Why Google Sheets and Apps Script

> The best system is the one the team already knows how to open.

Google Sheets is the operational database, so there was no new platform to buy or learn. Google Apps Script sits on top and does the real work: it talks to the **Shopify** and **HubSpot** REST APIs and keeps the modules in sync.

It's also modular, so pieces can be added on their own. I built a [standalone barcode scanner](https://github.com/Frankwerd/standalone-scanner) as a separate module that syncs scan events with the inventory data.

## What I'd tell anyone building one

Start with the workflow that hurts most, not the data model. Make the spreadsheet the interface people already trust. And integrate with the tools the team won't give up (for us, Shopify and HubSpot) instead of trying to replace them.

Want the details on any module? Ask my AI twin.
