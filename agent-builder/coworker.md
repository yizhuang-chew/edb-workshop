# 2.1 Agentforce Coworker

**Agentforce Coworker** is your AI **copilot** inside Salesforce — surfaced through the
**Agentforce Coworker** button next to the app's search bar. Ask it a question in plain
language and it answers inline, drawing on what it can reach. Later, in **Exercise 3**,
you'll build a custom agent that Coworker can delegate to for richer, action-driven
answers.

::: tip Prerequisite
You only need **Exercise 0** complete — Agentforce Coworker works out of the box. The
custom **EDB Account Research Agent** comes in Exercise 3, and anything you build into it
automatically becomes available here.
:::

## 2.1.1 Set Up Agentforce Coworker

::: tip Permission set already assigned
The **Agentforce Coworker Admin** and **Agentforce Coworker User** permission sets were
assigned to your user back in **Exercise 0**, so you can go straight to turning the
feature on.
:::

### Turn on Agentforce Coworker

1. In the Setup **Quick Find**, search for **Agentforce Coworker** and select **Get
   Started with Agentforce Coworker**, then click **Get Started**.

   ![Get Started with Agentforce Coworker](/screenshots/cw-get-started.png)

2. Under **Turn On Agentforce Coworker**, click **Turn On** and **Confirm**.

   ![Turn on Agentforce Coworker](/screenshots/cw-turn-on.png)

   ::: warning
   It takes a few minutes to provision Agentforce Coworker.
   :::

### Turn on the End User Experience

1. Turn on **End User Experience**.
2. Turn on **Global Search Bar**.
3. Under **Global Search Bar**, click **Manage**.
4. Accept the **Terms and Conditions** and click **Turn On**.

   ![Turn on the End User Experience](/screenshots/cw-end-user-experience.png)

## 2.1.2 Use Agentforce Coworker

1. Open the **App Launcher** and navigate to the **Sales** app.
2. Click the **Agentforce Coworker** button located next to the search bar.

   ![Agentforce Coworker next to the search bar](/screenshots/cw-search-bar.png)

3. Ask it a question about your data, for example:
   - `Summarise what we know about Helios Robotics.`
   - `Which of my accounts are prospects in manufacturing?`

   ![Agentforce Coworker answering inline](/screenshots/cw-review.png)

4. Review the grounded response Coworker returns, inline next to the search bar.

::: tip This is your Copilot
Agentforce Coworker works alongside you in plain language. Right now it answers from what
it can reach out of the box. In **Exercise 3**, you'll build a custom **EDB Account
Research Agent** with its own actions — and Coworker will be able to delegate to it for
deeper, action-driven answers.
:::

## 2.1.3 Now make it your own

Try a few prompts of your own and see how Coworker responds:

- `What's the latest activity on Helios Robotics?`
- `Draft a quick note to follow up with Lukas Vogel.`
- Ask it something specific to *your* accounts or your own follow-up question.

::: tip 🎉 Coworker is live
You turned on Agentforce Coworker and used it as a copilot right beside the search bar.
Next, in **Exercise 3**, you'll build the autonomous agent that powers richer answers
here. 👇
:::
