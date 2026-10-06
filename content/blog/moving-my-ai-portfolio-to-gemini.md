---
title: Why I moved my AI portfolio from OpenAI to Gemini
date: 2026-10-06
summary: My portfolio's AI twin now runs on Google Gemini. Here's why I switched, and the deploy bug that turned out to have nothing to do with the SDK.
tags: AI, Gemini, Next.js
---

This site isn't a static résumé. You can chat with an AI version of me that knows my work, my projects and my history. It's built with Next.js and the Vercel AI SDK, and until this week it ran on OpenAI.

Now it runs on **Google Gemini**.

## Why Gemini

I already build with Gemini everywhere else: CareerSuite's email parsing, my email stress-testing tool, the January chatbot template. Running my own portfolio on the same model family means one set of keys, one set of quirks to know, and a generous free tier for a site like this one.

The switch itself was small. The Vercel AI SDK puts every provider behind the same interface, so swapping `@ai-sdk/openai` for `@ai-sdk/google` was a few lines. The model is set by an environment variable, so I can change it later without touching code.

## The bug that wasn't the SDK

Every time I'd tried to update this site, the Vercel deploy failed, and I'd assumed the Google SDK was the problem. It wasn't. Even a branch that only changed text failed.

The real cause: the site was pinned to an old Next.js version with a known critical security vulnerability, and Vercel refuses to deploy affected versions. Bumping Next.js and React to their patched releases, same minor versions, fixed it. The very next build, Gemini included, went straight through.

The lesson: when a deploy fails, check whether *anything* deploys before blaming the newest change.

Go ahead and ask my AI twin something. It's running on Gemini now.
