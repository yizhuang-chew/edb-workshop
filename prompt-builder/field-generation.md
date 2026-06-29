# 1.1 Smart Account Research (Field Generation)

Field Generation prompts dynamically generate custom field values on a record based on
the record's data. Instead of an officer reading through scattered research notes, the
prompt intelligently "scans" the text — and the web — to produce a structured account
profile automatically.

This is the heart of **Smart Account Research**: instead of leaving raw notes to gather
dust, our prompt extracts a clean, structured summary that's ready to brief a colleague or
drive the next outreach.

We'll build the prompt up in **levels** so you can see how the output changes as we add
more to it. After each level you'll **Preview** the prompt and observe the difference:

1. **Level 1 — A Simple Instruction:** see the prompt run (and guess).
2. **Level 2 — Ground in the Account:** add real record data.
3. **Level 3 — Add Structured Instructions:** shape it into a clean profile.
4. **Level 4 — Add a Web Search Action:** enrich it from the web.

::: tip How to read each level
Each level shows you the **prompt to use** and then asks you to **Preview & Observe**.
Don't skip the preview — the whole point is to *see* how the same prompt gets better as
we add grounding and instructions.
:::

## 1.1.1 Create the Smart Account Profile Field

The profile describes the company, so we create the field on the **Account** object to
receive the generated results.

1. Open the **Account** record for **Proxima Fusion**.
2. Click the **Setup** (gear) icon and select **Edit Object**. *Salesforce opens the
   Account object in Setup.*

   ![Edit the Account object](/screenshots/pb-edit-contact-object.png)

3. Click the **Fields & Relationships** tab on the left.
4. Click **New**. *Salesforce navigates to the New Custom Field page.*
5. Select the **Text Area (Long)** data type and click **Next**.
6. Enter the following:

   | Field | Value |
   | --- | --- |
   | Field Label | Smart Account Profile |
   | Length | 1000 |
   | # Visible Lines | 25 |
   | Field Name | *(auto-generated)* |
   | Description | AI-enriched Smart Account Profile |
   | Help Text | *(leave blank)* |

7. Click **Next** through the remaining steps, then **Save**.
8. Refresh the browser.

![Smart Account Profile custom field](/screenshots/pb-add-field.png)

## 1.1.2 Create the Field Generation Prompt

1. Click the **Setup** (gear) icon and select **Setup**.
2. Type **Prompt** in the **Quick Find** and select **Prompt Builder**.

   ![Open Prompt Builder in Setup](/screenshots/pb-prompt-builder-setup.png)

3. Click **New Prompt Template**.
4. Enter the following:

   | Field | Value |
   | --- | --- |
   | Prompt Template Type | Field Generation |
   | Prompt Template Name | Research Account |
   | API Name | *(auto-generated)* |
   | Template Description | Researches the account from its notes and the web. |
   | Object | Account |
   | Object Field | Smart Account Profile |

   ::: warning
   If the **Smart Account Profile** field does not appear, clear your cache.
   :::

5. Click **Next**. *Salesforce displays the Prompt Builder interface — this is where we'll
   build the prompt up level by level.*

![New Field Generation prompt template](/screenshots/pb-new-prompt-template.png)

## 1.1.3 Level 1 — A Simple Instruction

Let's start with the simplest possible prompt, with **no grounding at all**, just to see
the prompt mechanism working.

1. Enter the following in the **Prompt Editor**:

   ```text
   Write a short research summary for a company.
   ```

2. Click **Save**.

::: details Preview & Observe
3. Click **Preview**.
4. Enter the **Account** (e.g. `Proxima Fusion`) in the **Account** search box.

   ![Enter the Account in the preview](/screenshots/pb-contact-input.png)

5. Click **Preview** again to run the prompt.
6. Review the **Resolution** and the generated **Response**.

   ![Level 1 preview — generic output](/screenshots/pb-level1-preview.png)

**What to notice:** the prompt runs and produces a summary — but it's completely
**generic**. The model is *guessing*, because it knows nothing about Proxima Fusion. It
could be about any company. This is what an *ungrounded* prompt looks like.
:::

## 1.1.4 Level 2 — Ground in the Account

Now we connect the prompt to live record data so it speaks from facts, not assumptions.
We ground it in the **Account record** — including the research notes in the Description.

1. In the **Prompt Editor**, type the first line:

   ```text
   Write a short research summary for this company:
   ```

2. On the next line, click **Insert Resource > Account > Record Snapshot**. This physically
   inserts the account's record snapshot:

   ```text
   {!$RecordSnapshot:Account.snapshot}
   ```

3. Confirm the prompt is now grounded in the account record.
4. Click **Save**.

::: details Preview & Observe
5. With the **Account** still selected, click **Preview**.
6. Review the **Resolution** — notice the company's real details and research notes are now
   merged into the prompt — and the generated **Response**.

   ![Level 2 preview — grounded output](/screenshots/pb-level2-preview.png)

**What to notice:** the summary is now about *Proxima Fusion specifically* — it
references their real details and the notes you captured. Same simple instruction, but
**grounding** turned a generic guess into a factual summary.
:::

## 1.1.5 Level 3 — Add Structured Instructions

The grounded output is factual, but it's a loose paragraph. Now we add **instructions** to
shape it into a clean, consistent, structured account profile.

1. Replace the **Prompt Editor** contents with the fuller instruction set below. The
   grounded resource stays the same — insert it with **Insert Resource** (don't type the
   merge field by hand): **Account > Record Snapshot**.

   ```text
   Analyze this company:
   {!$RecordSnapshot:Account.snapshot}

   Generate a structured Smart Account Profile using the following standardised headers.

   COMPANY PROFILE: Summarise what the company does, where it's based, size, funding, and
   stage based on the notes.

   STRATEGIC INTENT: Capture what the company is looking for (e.g. regional HQ, R&D, talent,
   supply chain proximity) and any timeline mentioned.

   INVESTMENT FIT: Assess fit against EDB's priorities (e.g. advanced manufacturing, R&D
   intensity, jobs created, anchoring activities). State whether they are a Strong, Moderate,
   or Weak fit, with a one-line reason.

   RISKS & CONCERNS: List the company's stated concerns (cost, IP, talent, timeline) and any
   competitive risk (other locations or agencies in play).

   WEB INSIGHTS: Summarise any relevant public information found in the web search results —
   for example recent funding, products, leadership, or news. If nothing relevant is found,
   state 'No public information found'.

   RECOMMENDED LEVERS: Based on the company's intent and fit, recommend 2-3 EDB incentives,
   programmes, or support levers (e.g. grants, talent pipeline, site options) and briefly
   explain why each fits.

   ACTION ITEMS: List the outstanding next steps / follow-ups for the officer as a bulleted
   checklist (e.g. confirm timeline, prepare incentive options, line up a site visit, send
   follow-up).

   Constraint: If a specific header has no relevant information in the notes, state 'No
   information provided' for that section.
   Include a break line after each section.
   Keep the entire response within 2200 characters including break lines and spaces.
   Do not include confidential figures verbatim; summarise ranges instead.
   ```

2. Click **Save**.

::: details Preview & Observe
3. With the **Account** still selected, click **Preview**.
4. Review the generated **Response**.

   ![Level 3 preview — structured profile](/screenshots/pb-level3-preview.png)

**What to notice:** the output is now a **structured profile** with consistent headers —
Company Profile, Strategic Intent, Investment Fit, Risks, and recommended levers. Same
grounded data, but **instructions** made it usable and repeatable.
:::

## 1.1.6 Level 4 — Add a Web Search Action

Finally, we enrich the profile from the **web** — for example recent funding, products, or
news about the company — by adding a **web search action** to the prompt.

1. Place your cursor directly **after the record snapshot line**
   (`{!$RecordSnapshot:Account.snapshot}`) and add a guardrail line so the model treats web
   results carefully. On a new line there, type:

   ```text
   And their web presence:
   WEB CONTEXT: Use the following web search results to corroborate or enrich the profile
   where relevant:
   ```

2. With your cursor on the next line (still right after the snapshot section), open
   **Insert Resource**, scroll down to **Configure**, and select **Configure Action**.

   ![Insert Resource — Configure Action](/screenshots/pb-configure-action.png)

3. Select **Search the Web**.

   ![Select Search the Web](/screenshots/pb-search-the-web.png)

4. For the **search input**, enter the query below — the company name plus a couple of
   relevant terms (a bare name search often returns no useful results):

   ```text
   {!$Input:Account.Name} company funding investment
   ```

5. Set the **Search Provider** to **Openai**.
6. Click **Apply and Insert**. *The web search action is inserted after your guardrail
   line.*

   ![Apply and Insert the web search action](/screenshots/pb-web-search-apply-insert.png)

7. Click **Save**.

::: details Preview & Observe
8. With the **Account** still selected, click **Preview**.
9. Review the updated **Resolution** (it now includes web context) and the generated
   **Response**.

   ![Level 4 preview — web-enriched profile](/screenshots/pb-level4-preview.png)

**What to notice:** the profile is now enriched with corroborating detail pulled from the
web — beyond what your notes alone contained. This is the difference between an *internal*
summary and a *Smart* account profile.
:::

## 1.1.7 Choose a Model & Activate

1. Click the **Models** dropdown and select **Anthropic Claude Haiku 4.5**, then click
   **Preview** to run the prompt.

   ![Change the model](/screenshots/pb-change-model.png)

2. Try other LLMs and **Save** the one you prefer.
3. Click **Activate**.

## 1.1.8 Assign the Prompt to the Field

Now connect the field to the prompt so officers can research an account automatically.

::: details Assumptions
- The **Smart Account Profile** field is created on the Account object
- The **Research Account** prompt is activated
:::

1. Go to the **Sales Console** app and open the **Proxima Fusion** Account record detail.
2. Refresh the browser. *You should see the new **Smart Account Profile** field in the
   record detail.*
3. Click the **Setup** (gear) icon and select **Edit Page**. *The Lightning App Builder
   opens.*

   ![Edit the Account record page](/screenshots/pb-edit-page.png)

4. Search for **AI Summary** under Components on the left.
5. **Drag and drop AI Summary** onto the middle of the page (after the Account Header).

   ![Drag and drop the AI Summary component](/screenshots/pb-ai-summary-drag.png)

6. Check that the **Research Account** prompt is selected as the Prompt Template on the
   right panel.
7. Click **Save**.
8. Click **Back** to return to the record detail view.
9. Click the **Research Account** button. *Agentforce executes the prompt and shows the
   results.*

   ![Research Account button on the record](/screenshots/pb-enrich-button.png)

10. Click the **copy** button to copy the results into the field. *The researched profile
    is posted to the **Smart Account Profile** field.*

::: tip What you learned
You built a Field Generation prompt up in levels — watching it go from a generic guess, to
a grounded factual summary, to a structured profile, to a web-enriched **Smart Account
Profile** — and then used it to populate the field on the Account. You saw firsthand how
**grounding** and **instructions** each change the output. Next, you'll apply the same
Prompt Builder skills to draft investor outreach. 👇
:::
