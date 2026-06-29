# 1.2 Investor Outreach Email

A "company-first" outreach means a clear, credible, personalized note — one that shows
you've done your homework. Our research notes are written in shorthand; this prompt turns
them into a polished email to your contact.

Building on the Prompt Builder skills from Exercise 1.1, you'll now create a **Sales Email
Prompt** that drafts a personalized outreach email **straight to your contact at the
company**, drawing on what you know about the account.

## 1.2.1 Create the Email Prompt

1. Click the **Setup** (gear) icon in the top-right corner and select **Setup**.
2. Type **Prompt** in the **Quick Find**.
3. Select **Prompt Builder** under the **Einstein Generative AI** group.
4. Click **New Prompt Template**. *Salesforce opens the New Prompt Template dialog.*
5. Enter the following:

   | Field | Value |
   | --- | --- |
   | Prompt Template Type | Sales Email |
   | Prompt Template Name | Investor Outreach |
   | API Name | *(auto-generated)* |
   | Template Description | Drafts a personalized investor outreach email to a company contact. |
   | Object | Contact |

6. Click **Next**. *Salesforce displays the Prompt Builder interface.*

   ![New Sales Email prompt template](/screenshots/email-new-prompt.png)

7. Enter the following prompt in the **Prompt Editor**:

   ```text
   You are an Investment Officer at the Singapore Economic Development Board (EDB).
   Write an outreach email to <Recipient Name> at <Account Name>. Personalize it using
   what we know about the company and their plans, from the account notes: <Account Notes>.

   Use the following directions in generating the email:
   Length Limit: Less than 250 words.
   Format: Multi-paragraph with bullet points for clarity.
   Tone: Professional, warm, and credible — show you understand their business.
   Opening: Reference a specific detail about their company or plans, and why Singapore is
   relevant to them.
   Content: Clearly list the "Next Steps" or ways EDB can support them (e.g. incentives,
   talent pipeline, site options, an introductory call), based on their intent.
   Closing: Invite them to a short call and let them know EDB is here to support their
   regional plans.
   Signature: <Sender Name>, Singapore Economic Development Board.
   ```

8. Now substitute dynamic values for the **\<placeholder\>** keywords. Highlight
   **\<Recipient Name\>**, delete the text, and click **Insert Resource > Recipient >
   Full Name**.
9. Do the same for each remaining placeholder:

   | Placeholder | Replacement |
   | --- | --- |
   | `<Recipient Name>` | Recipient > Full Name |
   | `<Account Name>` | Recipient > Account Name |
   | `<Account Notes>` | Recipient > Account > Description |
   | `<Sender Name>` | Sender > Full Name |

10. Confirm each placeholder has been replaced with the grounded field.

    ![Prompt with grounded merge fields inserted](/screenshots/email-prompt-inserted.png)

11. Click **Save**.
12. Test your prompt by entering your contact (e.g. `Lukas Vogel`) in the **Recipient**
    search box and click **Preview**.
13. Review the **Resolution** — the dynamically grounded prompt — and the generated email
    response.

    ![Email prompt preview](/screenshots/email-prompt-preview.png)

14. Click **Activate** to make the prompt available for use.

## 1.2.2 Test the Prompt on the Contact Record

We've tested the prompt in Prompt Builder; now let's see how users will use it in their
daily work.

1. Return to the **Sales Console** app (via the App Launcher, top-left).
2. Open the **Contact** record for **Lukas Vogel**.
3. On the **Activity** tab, click **Email**. *Salesforce opens the email composer.*
4. Click the **Draft with AI** button.

   ![Draft with AI on the Contact email](/screenshots/email-draft-with-ai.png)

5. Select the **Investor Outreach** prompt. *Einstein executes the prompt and returns the
   completed email.*

   ![Generated Investor Outreach email](/screenshots/email-outreach-result.png)

6. Notice the email has everything described in the prompt:
   - References a specific detail about the company
   - Lists relevant ways EDB can support them
   - Invites them to a call with a credible close
7. Review the draft — we don't need to actually send the email.

::: tip Exercise 1 complete
You've grounded two prompts in live account data — one to research the Smart Account
Profile, one to draft investor outreach. Next, you'll put a copilot beside your team with
**Agentforce Coworker**. 👇
:::
