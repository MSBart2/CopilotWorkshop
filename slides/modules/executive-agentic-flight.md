---
theme: default
background: https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## No Instruments, No Flight
  The Enterprise Agentic Imperative - Executive Briefing
drawings:
  persist: false
transition: slide-left
title: No Instruments, No Flight - Executive Briefing
mdc: true
---

# No Instruments, No Flight
## The Enterprise Agentic Imperative

<div class="pt-12">
  <span class="text-6xl">
    ✈️
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Executive Briefing for Technical Leaders</span>
</div>

---
layout: center
class: text-center
---

# The Core Message

<div class="mt-8 text-2xl max-w-3xl mx-auto">

*"Vibe coding is for hobbyists.*

*Enterprises are litigation targets.*

*AI agents are autopilot—they multiply what a single developer can deliver.*

*But you can't fly on autopilot without instruments."*

</div>

---

# ✈️ The Shift: From Typists to Pilots

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-red-50 dark:bg-red-900/30 rounded-lg">
  <h3 class="text-xl font-bold mb-4">❌ Old Model: Developer as Typist</h3>

  - Productivity = lines of code
  - Bottleneck = typing speed
  - Value = syntax knowledge
  - AI = faster autocomplete
</div>

<div class="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <h3 class="text-xl font-bold mb-4">✅ New Model: Developer as Pilot</h3>

  - Productivity = missions completed
  - Bottleneck = instrument capacity
  - Value = judgment & decisions
  - AI = autopilot (you still fly)
</div>

</div>

---

# 👨‍✈️ What Pilots Actually Do

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded text-center">
  <div class="text-3xl mb-2">🗺️</div>
  <h4 class="font-bold">Plan the Mission</h4>
  <p class="text-sm">Route, fuel, weather</p>
</div>

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded text-center">
  <div class="text-3xl mb-2">✅</div>
  <h4 class="font-bold">Go/No-Go Decisions</h4>
  <p class="text-sm">Is it safe to fly?</p>
</div>

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded text-center">
  <div class="text-3xl mb-2">🎛️</div>
  <h4 class="font-bold">Monitor Instruments</h4>
  <p class="text-sm">Situational awareness</p>
</div>

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded text-center">
  <div class="text-3xl mb-2">🔄</div>
  <h4 class="font-bold">Intervene When Needed</h4>
  <p class="text-sm">Handle anomalies</p>
</div>

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded text-center">
  <div class="text-3xl mb-2">🛬</div>
  <h4 class="font-bold">Execute Critical Phases</h4>
  <p class="text-sm">Takeoff & landing</p>
</div>

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded text-center">
  <div class="text-3xl mb-2">📝</div>
  <h4 class="font-bold">Take Responsibility</h4>
  <p class="text-sm">Accountable for outcomes</p>
</div>

</div>

<div class="mt-8 text-center text-xl">

**This is exactly what developers become in an agentic world.**

</div>

---
layout: center
---

# 🎛️ The Cockpit: Your Primary Six

```mermaid {scale: 0.7}
flowchart TB
    subgraph cockpit["🎛️ DEVELOPER INSTRUMENT PANEL"]
        direction TB
        subgraph row1[" "]
            direction LR
            test["🧪 TEST HEALTH<br/>━━━━━━━━━━<br/>Coverage: 94%<br/>Passing: 847/847<br/>🟢 ALL CLEAR"]
            security["🔒 SECURITY<br/>━━━━━━━━━━<br/>Critical: 0<br/>High: 0<br/>🟢 CLEAN SCAN"]
            perf["⚡ PERFORMANCE<br/>━━━━━━━━━━<br/>P95: 142ms<br/>Baseline: 150ms<br/>🟢 WITHIN BOUNDS"]
        end
        subgraph row2[" "]
            direction LR
            compliance["📋 COMPLIANCE<br/>━━━━━━━━━━<br/>SOC2: Current<br/>FedRAMP: Current<br/>🟢 ATTESTED"]
            deploy["🚀 DEPLOY WINDOW<br/>━━━━━━━━━━<br/>Status: Open<br/>Next freeze: 14d<br/>🟢 CLEAR"]
            deps["📦 DEPENDENCIES<br/>━━━━━━━━━━<br/>CVEs: 0<br/>Updates: 2 minor<br/>🟢 HEALTHY"]
        end
    end
```

*Six readings that determine flight readiness. All green = cleared for deployment. Any red = grounded.*

---

# 🧪 Primary Six: Detailed View

| Instrument | 🔴 Red (No Takeoff) | 🟡 Yellow (Caution) | 🟢 Green (Clear) |
|------------|---------------------|---------------------|------------------|
| **Test Health** | Tests failing | Coverage declining | All passing, stable |
| **Security Posture** | Critical vulnerability | Medium findings | Clean scan |
| **Performance** | Regression detected | Near threshold | Within bounds |
| **Compliance Gates** | Attestation expired | Renewal approaching | Current |
| **Deploy Window** | Blocked/frozen | Restricted hours | Open |
| **Dependencies** | CVE in deps | Updates available | All current |

<div class="mt-6 text-center">

**Without instruments, you're flying blind in clouds.**

**Spatial disorientation sets in within seconds. Accidents follow within minutes.**

</div>

---
layout: center
---

# ✈️ The Flight: Phases of Agentic Delivery

```mermaid {scale: 0.65}
flowchart LR
    subgraph preflight["✈️ PRE-FLIGHT"]
        p1["📋 Check instruments"]
        p2["🗺️ File flight plan"]
        p3["⛽ Verify resources"]
        p4["✅ Go/No-go decision"]
    end

    subgraph takeoff["🛫 TAKEOFF"]
        t1["🎯 Define task scope"]
        t2["🤖 Initialize agent"]
        t3["📍 Set guardrails"]
        t4["▶️ Begin execution"]
    end

    subgraph cruise["✈️ CRUISE"]
        c1["👁️ Monitor instruments"]
        c2["🔄 Steer as needed"]
        c3["⚠️ Handle turbulence"]
        c4["🤖 AI executes"]
    end

    subgraph landing["🛬 LANDING"]
        l1["✅ Verify completion"]
        l2["📊 Check all instruments"]
        l3["🔐 Attest quality"]
        l4["🚀 Deploy"]
    end

    preflight --> takeoff --> cruise --> landing
```

<div class="mt-4 text-center">

🔵 **Blue phases** = Human authority required | 🟢 **Green phase** = AI autonomy with monitoring

</div>

---

# 🛫 Flight Phases Explained

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Pre-Flight (Human)
- Check all six instruments
- File the flight plan (task scope)
- **Go/no-go decision**

### Takeoff (Human)
- Define bounded instructions
- Set guardrails
- Initialize the agent

</div>

<div>

### Cruise (AI + Monitoring)
- Agent writes code, runs tests
- Human monitors instruments
- Steer when off course

### Landing (Human)
- Verify completion
- Final instrument check
- **Sign off and deploy**

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded text-center">

**The developer who "starts an agent and walks away" is the pilot who "engages autopilot and takes a nap."**

*It works—until it doesn't. And when it doesn't, you don't have time to wake up.*

</div>

---
layout: center
---

# 🚀 The Multiplier: One Pilot, Multiple Aircraft

```mermaid {scale: 0.6}
flowchart TB
    pilot["👨‍✈️ DEVELOPER<br/>━━━━━━━━━━<br/>Monitoring 3 flights<br/>All instruments visible<br/>Intervention ready"]

    subgraph flights["CONCURRENT AGENTIC SESSIONS"]
        direction LR

        subgraph f1["Flight 1: Feature A"]
            a1["🤖 Agent working"]
            a2["🧪 Tests: 🟢"]
            a3["🔒 Security: 🟢"]
        end

        subgraph f2["Flight 2: Feature B"]
            b1["🤖 Agent working"]
            b2["🧪 Tests: 🟡"]
            b3["🔒 Security: 🟢"]
        end

        subgraph f3["Flight 3: Bug Fix"]
            c1["🤖 Agent working"]
            c2["🧪 Tests: 🟢"]
            c3["🔒 Security: 🟢"]
        end
    end

    pilot --> f1
    pilot --> f2
    pilot --> f3
```

*Throughput limited by instrument monitoring capacity, not typing speed.*

---

# 📈 The Labor Multiplier

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-6 bg-red-50 dark:bg-red-900/30 rounded text-center">
  <h3 class="text-lg font-bold mb-2">No Instruments</h3>
  <div class="text-4xl font-bold text-red-600">1x</div>
  <p class="mt-2 text-sm">One developer<br/>One task<br/>Manual verification<br/>High risk</p>
</div>

<div class="p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded text-center">
  <h3 class="text-lg font-bold mb-2">Basic Instruments</h3>
  <div class="text-4xl font-bold text-yellow-600">1-2x</div>
  <p class="mt-2 text-sm">One developer<br/>One agentic session<br/>Automated checks<br/>Managed risk</p>
</div>

<div class="p-6 bg-green-50 dark:bg-green-900/30 rounded text-center">
  <h3 class="text-lg font-bold mb-2">Excellent Instruments</h3>
  <div class="text-4xl font-bold text-green-600">3-5x</div>
  <p class="mt-2 text-sm">One developer<br/>Multiple sessions<br/>Comprehensive visibility<br/>Controlled risk</p>
</div>

</div>

<div class="mt-8 text-center text-xl font-bold">

**You cannot fly multiple aircraft without instruments.**

</div>

---
layout: center
---

# 🗼 The Tower: Who Flies What

```mermaid {scale: 0.55}
flowchart TB
    subgraph atc["🗼 AIR TRAFFIC CONTROL<br/>(CTO / VP Engineering)"]
        atc1["Strategic coordination"]
        atc2["Airspace allocation"]
        atc3["Conflict resolution"]
        atc4["System-wide visibility"]
    end

    subgraph ground["🔧 GROUND CREW<br/>(Platform / DevOps)"]
        g1["Maintain instruments"]
        g2["Prepare runways"]
        g3["Fuel aircraft"]
        g4["Service between flights"]
    end

    subgraph faa["🏛️ FAA<br/>(Security / Compliance)"]
        f1["Set regulations"]
        f2["Certify aircraft"]
        f3["Audit operations"]
        f4["Enforce standards"]
    end

    subgraph pilots["👨‍✈️ PILOTS<br/>(Developers)"]
        p1["Fly missions"]
        p2["Monitor instruments"]
        p3["Make go/no-go calls"]
        p4["Take responsibility"]
    end

    atc --> pilots
    ground --> pilots
    faa --> atc
    faa --> ground
    faa --> pilots
```

---

# 🏢 Organizational Roles

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
  <h3 class="font-bold mb-2">🗼 ATC: CTO / VP Engineering</h3>

  - Coordinate multiple flights
  - Allocate airspace (codebase ownership)
  - Resolve conflicts (deployment slots)
  - System-wide visibility
</div>

<div class="p-4 bg-orange-50 dark:bg-orange-900/30 rounded">
  <h3 class="font-bold mb-2">🔧 Ground Crew: Platform / DevOps</h3>

  - Maintain instruments (dashboards, pipelines)
  - Prepare runways (deployment targets)
  - Fuel aircraft (provision resources)
  - Service between flights
</div>

<div class="p-4 bg-purple-50 dark:bg-purple-900/30 rounded">
  <h3 class="font-bold mb-2">🏛️ FAA: Security / Compliance</h3>

  - Set regulations (security standards)
  - Certify aircraft (approve tooling)
  - Audit operations
  - Enforce standards
</div>

<div class="p-4 bg-green-50 dark:bg-green-900/30 rounded">
  <h3 class="font-bold mb-2">👨‍✈️ Pilots: Developers</h3>

  - Fly missions (deliver features)
  - Monitor instruments
  - Make go/no-go calls
  - **Take responsibility**
</div>

</div>

---

# 🚫 No-Fly Zones: What AI Must Never Do Alone

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 bg-red-50 dark:bg-red-900/30 rounded">
  <h4 class="font-bold">🚫 Production Schema Changes</h4>
  <p>Irreversible at scale. Data loss cascades.</p>
  <p class="italic mt-1">Agent proposes → Human authorizes</p>
</div>

<div class="p-3 bg-red-50 dark:bg-red-900/30 rounded">
  <h4 class="font-bold">🚫 Security Control Bypasses</h4>
  <p>"Skip the scan" is how breaches happen.</p>
  <p class="italic mt-1">Agent iterates until it passes</p>
</div>

<div class="p-3 bg-red-50 dark:bg-red-900/30 rounded">
  <h4 class="font-bold">🚫 Unapproved Dependencies</h4>
  <p>Supply chain attacks (Log4j, XZ Utils).</p>
  <p class="italic mt-1">Approved list only</p>
</div>

<div class="p-3 bg-red-50 dark:bg-red-900/30 rounded">
  <h4 class="font-bold">🚫 Production Config Changes</h4>
  <p>Feature flags can change behavior dramatically.</p>
  <p class="italic mt-1">Human review required</p>
</div>

<div class="p-3 bg-red-50 dark:bg-red-900/30 rounded">
  <h4 class="font-bold">🚫 Access Control Modifications</h4>
  <p>Self-elevating permissions = trust violation.</p>
  <p class="italic mt-1">Minimum permissions only</p>
</div>

<div class="p-3 bg-red-50 dark:bg-red-900/30 rounded">
  <h4 class="font-bold">🚫 External System Integrations</h4>
  <p>Data flows, security exposures, compliance.</p>
  <p class="italic mt-1">Human approval for connections</p>
</div>

</div>

<div class="mt-4 text-center font-bold">

**The flight plan protects the flight.**

</div>

---

# ⚖️ The Enterprise Reality

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-6 bg-gray-100 dark:bg-gray-800 rounded">
  <h3 class="text-xl font-bold mb-4">🚀 Startups ("Vibe Coding")</h3>

  - Let AI write whatever
  - Ship without checks
  - Figure it out later
  - **Nothing to lose**
</div>

<div class="p-6 bg-blue-100 dark:bg-blue-900 rounded">
  <h3 class="text-xl font-bold mb-4">🏢 Enterprises</h3>

  - Every decision can be subpoenaed
  - Every deployment can be audited
  - Every breach has legal consequences
  - **Everything to lose**
</div>

</div>

<div class="mt-8 p-4 bg-red-100 dark:bg-red-900/50 rounded text-center text-xl">

**Enterprises are litigation targets.**

You don't get to "move fast and break things" when breaking things means regulatory fines, customer lawsuits, and congressional hearings.

</div>

---
layout: center
class: text-center
---

# 💰 The Investment Framing

<div class="mt-8 text-2xl">

Your investment in **observability**, **compliance automation**, and **quality infrastructure** isn't overhead.

</div>

<div class="mt-8 text-4xl font-bold text-blue-600 dark:text-blue-400">

It's flight clearance.

</div>

<div class="mt-8 text-xl">

No instruments = No multiplier

**The organizations that win aren't those with the most developers.**

**They're those whose developers can safely fly the most planes.**

</div>

---

# ✅ Readiness Checklist

| Question | If No... |
|----------|----------|
| Automated test suites with meaningful coverage? | Agents ship bugs you can't catch |
| Automated security scanning in pipeline? | Agents ship vulnerabilities you can't detect |
| Performance baselines and regression detection? | Agents ship slowdowns you can't measure |
| Compliance gates that block non-compliant code? | Agents ship violations you can't prevent |
| Clear deployment windows and change management? | Agents ship at dangerous times |
| Dependency management and supply chain visibility? | Agents ship risks you can't trace |
| Developers understand the pilot model? | Agents fly without supervision |
| Leadership understands the ATC role? | Flights conflict and crash |

<div class="mt-4 text-center">

**Every "no" is a gap in your instrument panel.**

</div>

---

# 🧭 The Metaphor Map

| Aviation | Enterprise Development |
|----------|----------------------|
| Pilot | Developer |
| Autopilot | AI Agent (Copilot) |
| Instruments | Test/Security/Compliance dashboards |
| Pre-flight check | Instrumentation & flight plan verification |
| Takeoff | Starting agentic session |
| Cruise | Monitor instruments, steer as necessary |
| Landing | Code complete, attestable, deployment-ready |
| Flight plan | Task scope, acceptance criteria, guardrails |
| ATC | CTO/VP Eng (strategic coordination) |
| Ground crew | Platform/DevOps (maintain instruments) |
| FAA | Security/Compliance (regulatory framework) |

---
layout: center
class: text-center
---

# 🎯 Final Thought: The Pilot's Seat

<div class="mt-8 max-w-3xl mx-auto text-xl">

There's a reason pilots still command premium compensation decades into the autopilot era.

It's not because they're better at mechanical flying than automation.

**It's because someone has to be responsible.**

</div>

<div class="mt-8 text-2xl">

Someone has to make the go/no-go call.

Someone has to interpret the instruments.

Someone has to be accountable for the outcome.

</div>

<div class="mt-8 text-xl font-bold text-blue-600 dark:text-blue-400">

Your developers aren't becoming obsolete. They're becoming pilots.

</div>

---
layout: center
class: text-center
---

# ✈️ The Imperative

<div class="mt-12 text-2xl max-w-3xl mx-auto">

Make sure they have **instruments**.

Make sure they have **training**.

Make sure they have the **support structure** to fly safely at scale.

</div>

<div class="mt-12 text-3xl font-bold">

And then let them fly.

</div>

<div class="mt-12 p-6 bg-blue-100 dark:bg-blue-900 rounded text-xl">

*"The organizations that win aren't those with the most developers.*

*They're those whose developers can safely fly the most planes."*

</div>
