# 3.2 Account Research (Subagent & Actions)

In the new Agentforce Builder, capabilities are organized into **subagents** (each a focused
area of expertise) that the **Agent Router** transitions to, plus **actions** (the work a
subagent can perform). Here we'll create an **Account Research** subagent, give it the
actions to look up a company and research it, and test the reasoning.

## 3.2.1 Create the Account Research Subagent

1. Open your **EDB Account Research Agent** in **Agentforce Builder** (from **Agentforce
   Studio**, or **Setup > Agentforce Agents > Open in Builder**).
2. Click **New Version** (top right) to create a new working version you can edit. The
   active version stays live while you build.
3. In the explorer, click the **+** beside **Subagents** and select **Create new
   subagent**.
4. Set these values:

   | Field | Value |
   | --- | --- |
   | Name | Account Research |
   | Describe the job you want the subagent to do | Look up a company account, research it, and generate a structured Smart Account Profile with an investment-fit assessment and recommended next steps. |

5. Click **Create and Open**.

   ![Create the Account Research subagent](/screenshots/a2-add-subagent.png)

6. Paste into the **Instructions** section:

   ```text
   Help the officer research a company account.
   1. Ask for the company name if you don't have it.
   2. Call @actions.Identify_Record_by_Name to resolve the company's Account from its name.
   3. Call @actions.Query_Records to fetch that Account's details (including the research
      notes in the Description) before taking any further action.
   4. When asked to research, summarize, or profile the account, call
      @actions.Research_Account, passing the account fetched by @actions.Query_Records.
   ```

   ::: tip Reference actions with the `@` picker
   The `@actions.<ActionName>` references tell the reasoning engine exactly which action to
   call — far more reliable than describing it in plain words. Don't type them by hand:
   where an action belongs, type **`@`**, and pick the action from the menu so the builder
   inserts the correct reference. (We'll add the actions in 3.2.3, then finalise these
   references in 3.2.6.)
   :::

7. Click **Save**.

   ![Subagent instructions](/screenshots/a2-instructions.png)

## 3.2.2 Test Subagent Routing

1. Click **Preview**.
2. Enter: `Can you help me research a company?`
3. Press **Enter**.
4. In the **Interaction Details** panel, click the entry next to **Transition to
   Subagent** and confirm the router transitioned to **Account Research**.

   ![Subagent routing in preview](/screenshots/a2-preview-routing.png)

## 3.2.3 Add the Standard Actions

1. In the explorer, select the **Account Research** subagent.
2. Click the **+** beside **Actions** and select **Add an action**.
3. From the asset library, add the following standard actions, then click **Save**:
   - **Identify Record by Name**
   - **Query Records**

   ![Add standard actions from the asset library](/screenshots/a2-add-actions.png)

::: tip How the agent decides to call an action
The action's **Description** and the subagent **Instructions** give the reasoning engine
the cue to call an action — but describing it in plain words isn't always reliable. To
make it dependable, we reference each action explicitly with `@actions.<ActionName>` in the
instructions (see 3.2.6).
:::

## 3.2.4 Create the Prompt Template Action

We'll use the **Research Account** prompt (built in Exercise 1.1) as the action — it is
grounded on the **Account**, so it chains cleanly from the account fetched by Query Records.

1. With the **Account Research** subagent selected, click the **+** beside **Actions** and
   select **Create an action**.
2. Set these values:

   | Field | Value |
   | --- | --- |
   | Name | Research Account |
   | Description | Generates a structured Smart Account Profile for a company, including a company profile, strategic intent, an investment-fit assessment (Strong/Moderate/Weak), risks, recommended levers, and next steps. You must use the Query Records action to fetch the account before executing this action. |
   | Reference Action Type | Prompt Template |
   | Reference Action | Research Account |

3. Click **Create and Open**.

   ![Create the Research Account action](/screenshots/a2-add-enrich-action.png)

4. For the **Account** input, set the Instructions to:

   > Must be a valid JSON representing the account info, chained from having executed the
   > Query Records action.

   ![Configure the Account input](/screenshots/a2-contact-input.png)

5. For the **Prompt Response** output, check **Show in conversation**.

   ![Show the prompt response in conversation](/screenshots/a2-prompt-response.png)

6. Click **Save**.

## 3.2.5 Confirm Actions Available for Reasoning

Before wiring the sequence, confirm the subagent has all its actions available.

1. In the explorer, select the **Account Research** subagent.
2. Under **Actions Available For Reasoning**, confirm all three actions are listed:
   **Identify Record by Name**, **Query Records**, and **Research Account**.
3. Expand each action to review its inputs. By default the inputs are set so the **LLM
   selects** which value to pass at runtime.
4. Click **Save**.

   ::: tip
   These actions are now *available* to the subagent, but availability alone doesn't
   guarantee the agent calls them in the right order. In the next step we'll reference
   them explicitly with `@actions` in the instructions to make the sequence dependable.
   :::

## 3.2.6 Reference the Actions with `@actions`

Naming actions in plain words ("use the Query Records action") isn't always reliable — the
reasoning engine may skip a step. The fix stays in **Canvas**: reference each action
explicitly in the **Instructions** using the `@` picker, in the order you want them called.

::: tip Insert with the `@` picker — don't type it
Don't type the `@actions.…` text by hand. In the **Instructions**, type **`@`** where the
action should go — a picker appears — then **select the action** and the builder inserts the
correct `@actions.<ActionName>` reference for you. This guarantees the real API name.
:::

1. With the **Account Research** subagent selected, open its **Instructions**.
2. At each step where an action belongs, delete any plain-text action name, type **`@`**,
   and pick the matching action so it inserts the proper reference. Do this for all three,
   in order:
   - `@actions.Identify_Record_by_Name` — resolve the company's Account from its name.
   - `@actions.Query_Records` — fetch that Account's details.
   - `@actions.Research_Account` — generate the profile, passing the account fetched by
     Query Records.
3. Click **Save**.

   ![Actions referenced in the subagent canvas](/screenshots/a2-canvas-actions.png)

## 3.2.7 Test in Preview

1. Click **Preview**. If the preview was already open, **refresh** it so it picks up your
   latest changes.
2. Enter:
   - `Research Helios Robotics and tell me if they're a fit.`
3. Press **Enter**.
4. In **Interaction Details**, watch the agent reason: it transitions to **Account
   Research**, calls **Identify Record by Name** and **Query Records** to fetch the company,
   then calls **Research Account** to generate the structured profile.

   ![Agent reasoning in Interaction Details](/screenshots/a2-builder-preview.png)
5. Click **Commit Version** and confirm to save your changes.
6. Click **Activate**. Confirm if prompted.

## 3.2.8 Test in the Console

1. Open the **App Launcher** and return to the **Sales** app.
2. Refresh — the **Agentforce** icon appears in the utility bar.
3. Click the **Agentforce** icon and ask:
   - `Research Helios Robotics and assess their investment fit.`

   ![Agent response in the console](/screenshots/a2-console-preview.png)

::: tip 🎉 Workshop complete
You created an agent in the new Agentforce Builder, added an **Account Research** subagent,
gave it standard actions and a prompt-template action, and watched the reasoning engine
chain them together. Combined with Agentforce Coworker from Exercise 2, you now have a
research copilot that works right beside your team. See **Resources** to continue your
Agentblazer journey.
:::
