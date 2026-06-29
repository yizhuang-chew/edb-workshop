---
next:
  text: 'Exercise 1: Prompt Builder'
  link: '/prompt-builder/overview'
---

# Exercise 0: Pre-Setup Checklist

Before you start the hands-on exercises, complete the setup below to claim your
environment and prepare the sample data.

In this workshop, a **company** is represented as an **Account**, with a **Contact** as
your point of contact there. The company's research notes live on the **Account
Description**. This lets us reuse standard Salesforce objects while we focus on the AI.

## 1: Keep This Workbook Open

1. Keep this tab open — you'll use it as your workbook throughout the session.
2. You'll refer to it and copy details from it as you work through the exercises.

## 2: Claim Environment

1. Go to [https://orgfarm.salesforce.com/signup](https://orgfarm.salesforce.com/signup)
2. Fill in the **Event Code** (your facilitator will share this during the session).
3. Fill in the remaining details and click **Submit**.
4. Select **Open Your Salesforce Org** in the pop-up window.

## 3: Create the Company Account

1. Load the Salesforce org.
2. Open the **App Launcher** (top-left) and select **Sales Console**. This is the app
   you'll work in throughout the workshop.

   ![Open the Sales Console app](/screenshots/edb-sales-console.png)

3. Select **Accounts** in the tabs.
4. Click **New** to create a new Account.
5. When prompted to choose a record type, select **Customer Account** and click **Next**.
6. Fill in the following details (you can leave Type, Industry, and Website blank — we'll
   research them):

   | Field | Value |
   | --- | --- |
   | Account Name | Proxima Fusion |
   | Description | *(see the sample research notes below)* |

   ::: tip Proxima Fusion is a real company
   We use **Proxima Fusion** — a real Munich-based fusion-energy startup — as the example
   throughout this guide, so the **web search action** has something real to find. If you'd
   prefer, enter another **real company name** and substitute it wherever you see "Proxima
   Fusion."
   :::

   ::: details Sample Research Notes (paste into the Account Description field)
   Proxima Fusion — met their corp dev lead at a clean-energy summit, rough notes below.
   Munich-based fusion startup, spun out of the Max Planck plasma physics institute, pretty
   young (founded ~2023). Building stellarator-based fusion reactors. Small but seriously
   technical team, lots of PhDs. Raised a big early round (talked tens of millions, EU
   deep-tech funds + public money).

   Why interesting for us: scaling fast and starting to think about where to put future
   engineering + supply chain operations. APAC came up — said they're curious about
   Singapore for an R&D / partnerships foothold but very early days. Care a lot about access
   to deep-tech talent, research partnerships (unis / A*STAR type institutes), and long-term
   capital.

   Concerns: it's a long-horizon, capital-heavy play; they're wary of anywhere without a
   real fusion / advanced-materials research base. Also asked about IP protection and
   whether the ecosystem is deep enough. No timeline — "exploratory."

   Next steps from my side: figure out if they fit our deep-tech / R&D priorities, pull
   together what we could offer (research tie-ups, talent, grants), and send a proper intro
   before someone else gets to them.
   :::

7. Click **Save**. A new account called **Proxima Fusion** has been created.

![Create the Account](/screenshots/edb-new-account.png)

## 4: Create the Contact

We'll add your point of contact at the company — the person you met.

1. Select **Contacts** in the tabs.
2. Click **New** to create a new Contact.
3. When prompted to choose a record type, select **Business Contact** and click **Next**.
4. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | First Name | Lukas |
   | Last Name | Vogel |
   | Account Name | Proxima Fusion |
   | Email | {Your own email} |

5. Click **Save**. A new contact called **Lukas Vogel** has been created.

![Create the Contact](/screenshots/edb-business-contact.png)

## 5: Turn on Einstein

1. Click the **Setup** (gear) icon in the top-right corner and select **Setup**.
2. Type **Einstein Setup** in the **Quick Find**.
3. Select **Einstein Setup**.

   ![Einstein Setup in Quick Find](/screenshots/pre-einstein-setup.png)

4. Check that **Turn on Einstein** is **On**. Otherwise, toggle it On.

![Turn on Einstein](/screenshots/pre-turn-on-einstein.png)

## 6: Grant Permissions

1. Type **Users** in the **Quick Find** and select **Users**.
2. Select **EPIC, OrgFarm** (your login user).
3. Scroll down to **Permission Set Assignments** and click **Edit Assignments**.
4. Assign the following permissions:
   - Einstein Sales Email
   - Agentforce Coworker Admin
   - Agentforce Coworker User

![Permission set assignments](/screenshots/edb-permissions.png)

## 7: Turn on Data 360

1. In the Setup **Quick Find**, type **Data Cloud Setup** and select it.

   ![Data Cloud Setup](/screenshots/edb-data-cloud-setup.png)

2. Click **Set Up Data Cloud** (or **Get Started**).

   ![Data Cloud Get Started](/screenshots/pre-data-cloud-get-started.png)

3. Follow the prompts to provision **Data 360 / Data Cloud** for the org.

::: tip
Provisioning can take a few minutes — kicking it off now lets it finish in the background
while you work through the exercises. Data 360 isn't required for the prompt exercises, but
it's used by **Exercise 2: Agentforce Coworker**.
:::

::: tip You're ready!
With your org claimed, the Proxima Fusion Account and Lukas Vogel Contact created, and
Einstein enabled, continue to **Exercise 1: Prompt Builder**.
:::
