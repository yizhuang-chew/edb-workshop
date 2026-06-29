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
2. Open the **App Launcher** (top-left) and select **Sales**. This is the app you'll work
   in throughout the workshop.

   ![Open the Sales app](/screenshots/pre-service-console.png)

3. Select **Accounts** in the tabs.
4. Click **New** to create a new Account.
5. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | Account Name | Helios Robotics |
   | Type | Prospect |
   | Industry | Manufacturing |
   | Website | *(leave blank — we'll research it)* |
   | Description | *(see the sample research notes below)* |

   ::: tip Use a real company if you like
   We use the fictional **Helios Robotics** as the example throughout this guide. If you'd
   prefer, enter a **real company name** — later, the **web search action** will look it up
   online, which makes the demo come alive. Just substitute your company wherever you see
   "Helios Robotics."
   :::

   ![Enter the Account details](/screenshots/pre-new-contact.png)

   ::: details Sample Research Notes (paste into the Account Description field)
   Helios Robotics — spoke w/ their VP Corp Dev at the Hannover expo, scribbled notes
   below. Founded 2016, HQ in Munich. ~320 staff, mostly engineers. Build warehouse
   automation arms + some agritech pilots. Series C closed last yr (~€80m, led by a couple
   of EU growth funds). Revenue "north of 50m" he said, growing fast but burning.

   Why interesting for us: actively scouting an APAC base, said Singapore + Vietnam both on
   the shortlist. Want a regional HQ + a small R&D team near customers. Talked a lot about
   needing engineering talent and proximity to electronics supply chain. Sounded keen on
   gov support / co-investment, asked about grants twice.

   Concerns: worried abt cost of ops in SG, also IP protection, and whether they can hire
   fast enough. No firm timeline but "next 12-18 months" for the APAC decision. Decision
   makers: the CEO (ex-Siemens) + the VP I met. Competitor we're up against: they're also
   talking to an agency in another country (didn't say which).

   Next steps from my side: pull together what we can offer (incentives, talent pipeline,
   site options), figure out if they fit our advanced manufacturing priorities, and send a
   proper follow-up before they cool off.
   :::

6. Click **Save**. A new account called **Helios Robotics** has been created.

![Account Description with the sample notes](/screenshots/pre-contact-description.png)

## 4: Create the Contact

We'll add your point of contact at the company — the person you met.

1. Select **Contacts** in the tabs.
2. Click **New** to create a new Contact.
3. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | First Name | Lukas |
   | Last Name | Vogel |
   | Account Name | Helios Robotics |
   | Title | VP Corporate Development |
   | Email | {Your own email} |

4. Click **Save**. A new contact called **Lukas Vogel** has been created.

![Create the Contact](/screenshots/pre-new-case.png)

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
   - Einstein Sales Email User
   - Einstein for Sales
   - Agentforce Coworker Admin
   - Agentforce Coworker User

![Permission set assignments](/screenshots/pre-permissions.png)

## 7: Turn on Data 360

1. In the Setup **Quick Find**, type **Data Cloud Setup** and select it.

   ![Data Cloud Setup](/screenshots/pre-data-cloud-setup.png)

2. Click **Set Up Data Cloud** (or **Get Started**).

   ![Data Cloud Get Started](/screenshots/pre-data-cloud-get-started.png)

3. Follow the prompts to provision **Data 360 / Data Cloud** for the org.

::: tip
Provisioning can take a few minutes — kicking it off now lets it finish in the background
while you work through the exercises. Data 360 isn't required for the prompt exercises, but
it's used by **Exercise 2: Agentforce Coworker**.
:::

::: tip You're ready!
With your org claimed, the Helios Robotics Account and Lukas Vogel Contact created, and
Einstein enabled, continue to **Exercise 1: Prompt Builder**.
:::
