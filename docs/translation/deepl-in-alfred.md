---
title: Using DeepL in Alfred
sidebar_position: 3
---

This document describes how to integrate [DeepL](https://www.deepl.com/zh/translator) into [Alfred](https://www.alfredapp.com/) so that you can quickly translate your content without having to open the DeepL app or website. With this integration, everything can be done on your keyboard with ease.

:::info
DeepL is a machine translation tool that is trusted and used by many users around the world, and Alfred is a powerful tool that boosts productivity on Mac.
:::

## Prerequisites

Before you start, ensure that you have

- A DeepL API key.
- Installed Alfred and the **Workflows** feature is available.

## Installing the Workflow

1. Download the [DeepL Alfred workflow](https://github.com/AlexanderWillner/deepl-alfred-workflow2/releases/tag/v1.11).
1. Open **Alfred Preferences** and click the **Workflows** tab.
1. Drag the workflow downloaded in **Step 1** to the panel.
1. Paste your DeepL API key to the **API Key** field, set your target and source languages as needed, and click **Save**. Now you should have your workflow successfully configured.

## Using the Workflow

To use the workflow:

1. Press **CMD+SPACE** on your keyboard (your shortcut might be different from this one. If it doesn't open your Alfred bar, check your Alfred shortcut settings).
1. Type `dl` with a space appended to it (i.e., `dl `).
1. Type or paste in the content that you need to translate.
1. Press **ENTER**.

After this, you should see the translation provided by DeepL in the Alfred bar.
