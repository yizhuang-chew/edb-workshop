# Exercise 3: Agent Builder

## Overview

Now we'll build an autonomous, employee-facing agent in the **new Agentforce Builder** to
support EDB investment officers. Its mission is to handle the "research tail" of account
management: it doesn't just answer questions, it reasons through the steps to **look up an
account**, **assess investment fit**, and **research the company into a structured
profile** — then surfaces through Agentforce Coworker.

You will:

- **3.1 — Create a New Agent in Agentforce Builder:** create the agent in Agentforce
  Studio, explore Canvas and Agent Script, configure its system messages and Agent Router,
  then commit and activate it.
- **3.2 — Account Research Subagent:** add a custom **subagent** with the actions to look
  up an account and research it — watching the reasoning engine decide when to find the
  company, pull its details, and generate the Smart Account Profile.

::: tip Subagents vs. Actions
Think of a **subagent** as a focused area of expertise (e.g. "Account Research") that the
**Agent Router** transitions to, and an **action** as a specific task it can perform (e.g.
"Research Account").
:::

Continue to **3.1 Create a New Agent in Agentforce Builder** below.
