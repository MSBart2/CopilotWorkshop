---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 0: The Challenge — Building FanHub in 8 Hours

  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: "Module 0: The Challenge — Building FanHub in 8 Hours"
mdc: true
controls: true
---

<style>
.slide-number {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.875rem;
  opacity: 0.5;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  pointer-events: none;
}
</style>

# Module 0: The Challenge — Building FanHub in 8 Hours

<div class="pt-12">
  <span class="text-6xl">
    📚
  </span>
</div>

<div class="pt-6">
  <h2 class="text-xl opacity-80">Monday, 9:00 AM — A skeptical senior developer throws down a challenge</h2>
</div>


---

# 🎯 Learning Objectives

By the end of this module, you will have:

- **Experienced "the struggle"** — Building with AI that doesn't understand your codebase
- **Mastered context variables** — `#file`, `@workspace`, `#codebase`, `#fetch`, images
- **Understood the shift** — From Syntax Wizards to Markdown Whisperers
- **Mapped customization options** — When to use Repo Instructions vs. Agents vs. Skills
- **Set up your development environment** — FanHub running locally with your chosen show

<div class="pt-8">
  <h3 class="text-lg opacity-70">This isn't about features—it's about a fundamental shift in how you build software</h3>
</div>


---

# 📖 The Personas You'll Meet

<div class="grid grid-cols-2 gap-8 text-sm">

<div>
  <h3>💭 Sarah — The Skeptical Senior (15 years)</h3>
  <p><em>"I've seen too many 'revolutionary' tools that waste time. Prove it with metrics."</em></p>

  <h3>🔧 Marcus — The DevOps Developer (5 years)</h3>
  <p><em>"This is going to take days to understand this codebase."</em></p>

  <h3>🏗️ David — The Seasoned Architect (20 years)</h3>
  <p><em>"Another codebase with no architecture decisions recorded."</em></p>
</div>

<div>
  <h3>🧪 Elena — The Quality Champion (8 years)</h3>
  <p><em>"I don't even know where to start with testing this."</em></p>

  <h3>📋 Rafael — The Product Visionary (10 years)</h3>
  <p><em>"How do we scope features when we don't understand the system?"</em></p>
</div>

</div>

<div class="pt-6 text-center">
  <p class="text-lg font-bold">Sarah smiles: "You've got Copilot. Let's see if it helps or just suggests more confusion."</p>
</div>


---

# 🔄 The Evolution: Syntax Wizards → Markdown Whisperers

<div class="grid grid-cols-3 gap-6 text-sm">

<div class="text-center">
  <h3 class="text-lg font-bold">🧙‍♂️ Syntax Wizards</h3>
  <p class="opacity-80">(1990-2015)</p>
  <ul class="text-left mt-4">
    <li>✗ Syntax mastery</li>
    <li>✗ Clever solutions</li>
    <li>✗ Knowledge hoarding</li>
    <li>✗ Fast typing</li>
  </ul>
</div>

<div class="text-center">
  <h3 class="text-lg font-bold">🤠 YAML Cowboys</h3>
  <p class="opacity-80">(2015-2020)</p>
  <ul class="text-left mt-4">
    <li>⚠️ Configuration complexity</li>
    <li>⚠️ Tool multiplication</li>
    <li>⚠️ Copy-paste engineering</li>
    <li>⚠️ Infrastructure as Code</li>
  </ul>
</div>

<div class="text-center">
  <h3 class="text-lg font-bold">✍️ Markdown Whisperers</h3>
  <p class="opacity-80">(2020-Now)</p>
  <ul class="text-left mt-4">
    <li>✅ Clarity over cleverness</li>
    <li>✅ Intent over implementation</li>
    <li>✅ Documentation as leverage</li>
    <li>✅ AI amplifies clarity</li>
  </ul>
</div>

</div>


---

# 🗺️ The Copilot Customization Map

<div class="text-sm">

| I want Copilot to... | Use | File Location | When Loaded |
|---------------------|-----|---------------|-------------|
| **Know our project basics** | Repo Instructions | `.github/copilot-instructions.md` | Always, every request |
| **Apply rules to specific files** | Custom Instructions | `.github/instructions/*.instructions.md` | By file pattern |
| **Run a specific task I trigger** | Prompts | `.github/prompts/*.prompt.md` | When you invoke `/prompt-name` |
| **Act as a specialist persona** | Agents | `.github/agents/*.agent.md` | When you @ mention it |
| **Know our domain automatically** | Skills | `.github/skills/*/SKILL.md` | Automatically when relevant |

</div>

<div class="pt-6 text-center">
  <h3 class="text-lg font-bold">The Question: "What am I trying to teach Copilot?"</h3>
</div>


---

# ❌ The "Before" State — Experience the Struggle

<div class="grid grid-cols-2 gap-8">

<div>
  <h3 class="text-lg font-bold text-red-400">What You'll Experience</h3>
  <ul class="text-sm">
    <li>✗ Generic suggestions that don't match architecture</li>
    <li>✗ Inconsistent code styles</li>
    <li>✗ Show-generic content ("John Doe" characters)</li>
    <li>✗ Uncertainty about patterns to follow</li>
    <li>✗ Multiple attempts to get what you want</li>
  </ul>
</div>

<div>
  <h3 class="text-lg font-bold text-red-400">The Codebase Reality</h3>
  <ul class="text-sm">
    <li>Database schema is generic</li>
    <li>API endpoints are inconsistent</li>
    <li>Frontend components mix styles</li>
    <li>Zero documentation</li>
    <li>No tests or standards</li>
    <li>Generic placeholder content</li>
  </ul>
</div>

</div>

<div class="pt-8 text-center">
  <p class="text-lg font-bold text-yellow-400">This frustration is intentional. You need to feel the "before" to appreciate the transformation.</p>
</div>


---

# 📊 Context Variables — The Foundation

<div class="text-sm">

**The Problem:** Marcus asks: *"How do I add a character to the database?"*
**Copilot's Response:** Generic SQL syntax (useless!)

**The Solution:** Provide the right context

| Context Type | Usage | What It Does |
|-------------|--------|-------------|
| `#file:schema.sql` | Reference specific files | Copilot reads that file's content |
| `@workspace` | Include workspace context | Searches across all project files |
| `#codebase` | Reference entire codebase | Broad project understanding |
| `#fetch:url` | Include web content | Fetch documentation or examples |
| Images | Upload screenshots/diagrams | Visual context for layouts |

</div>

<div class="pt-6 text-center">
  <h3 class="text-lg font-bold">Quality of AI responses = Quality of context you provide</h3>
</div>


---

# 🔨 Key Exercises

<div class="grid grid-cols-2 gap-8 text-sm">

<div>
  <h3 class="text-lg font-bold">📋 Exercise 0.1: Master Context Variables</h3>
  <ul>
    <li><strong>Time:</strong> 20 minutes</li>
    <li><strong>Lead:</strong> Everyone ⭐</li>
    <li><strong>Goal:</strong> Learn #file, @workspace, #codebase, #fetch, images</li>
    <li><strong>Outcome:</strong> Effective AI collaboration foundation</li>
  </ul>
</div>

<div>
  <h3 class="text-lg font-bold">😤 Exercise 0.2: Experience "The Struggle"</h3>
  <ul>
    <li><strong>Time:</strong> 15 minutes</li>
    <li><strong>Lead:</strong> Everyone ⭐</li>
    <li><strong>Goal:</strong> Build without configuration or documentation</li>
    <li><strong>Outcome:</strong> Feel the frustration (important!)</li>
  </ul>
</div>

</div>

<div class="pt-8 text-center">
  <p class="text-lg">Total Module Time: <strong>35 minutes</strong></p>
</div>


---

# 🎭 Your FanHub Journey Begins

<div class="text-center">
  <h3 class="text-2xl font-bold mb-6">Choose Your Show Theme</h3>

  <div class="grid grid-cols-3 gap-4 text-sm">
    <div>📺 The Office (US)</div>
    <div>🔦 Stranger Things</div>
    <div>🧪 Breaking Bad</div>
    <div>🛡️ The Mandalorian</div>
    <div>🐉 Game of Thrones</div>
    <div>🚀 The Expanse</div>
  </div>
</div>

<div class="pt-8">
  <h3 class="text-lg font-bold">Tech Stack You'll Master</h3>
  <div class="grid grid-cols-2 gap-6 text-sm mt-4">
    <div>
      <strong>Backend:</strong> Node.js + Express, PostgreSQL, GraphQL API, JWT auth
    </div>
    <div>
      <strong>Frontend:</strong> React 18, React Router, Mixed styling approaches
    </div>
  </div>
</div>


---

# ✅ Success Criteria

<div class="grid grid-cols-2 gap-8">

<div>
  <h3 class="text-lg font-bold text-green-400">Environment Setup</h3>
  <ul class="text-sm">
    <li>☐ FanHub app running locally</li>
    <li>☐ Show theme chosen</li>
    <li>☐ Context variables mastered</li>
    <li>☐ Development environment ready</li>
  </ul>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400">Experience Gained</h3>
  <ul class="text-sm">
    <li>☐ Attempted Character Detail Challenge</li>
    <li>☐ Felt the frustration (essential!)</li>
    <li>☐ Understand customization map</li>
    <li>☐ Ready for Module 01 transformation</li>
  </ul>
</div>

</div>

<div class="pt-8 text-center">
  <p class="text-lg opacity-80">The next 8 hours will transform how you work. The struggle ends here.</p>
</div>


---

# 💭 Mindful Moment: Before the Transformation

<div class="grid grid-cols-2 gap-8 text-sm">

<div>
  <h3 class="text-lg font-bold">What The Team Thinks</h3>
  <ul>
    <li><strong>Marcus:</strong> "Is Copilot even helping? This feels like fighting with autocomplete."</li>
    <li><strong>Priya:</strong> "If I can't get good results, maybe I'm not using it right?"</li>
    <li><strong>David:</strong> "Will AI make my 20 years of expertise obsolete?"</li>
    <li><strong>Elena:</strong> "How do I trust AI-generated tests to catch real bugs?"</li>
  </ul>
</div>

<div>
  <h3 class="text-lg font-bold">Sarah's Challenge</h3>
  <blockquote class="border-l-4 border-yellow-400 pl-4 italic">
    "I was skeptical because I've seen too many 'revolutionary' tools that waste more time than they save. You've got 8 hours to prove that AI-assisted development delivers real, measurable value."
  </blockquote>
</div>

</div>


---

# ➡️ Next Up: Module 01 — Repository Instructions

<div class="text-center">
  <h3 class="text-2xl font-bold mb-6">The Transformation Begins</h3>

  <p class="text-lg mb-8">In Module 01, you'll add the first layer of context: Repository Instructions</p>

  <div class="grid grid-cols-2 gap-8 text-sm">
    <div>
      <h4 class="font-bold">You'll Learn</h4>
      <ul>
        <li>How to create copilot-instructions.md</li>
        <li>Project context that's always loaded</li>
        <li>Coding standards and architecture patterns</li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold">You'll Experience</h4>
      <ul>
        <li>Sarah's first "I'm convinced" moment</li>
        <li>Consistent code suggestions</li>
        <li>Show-specific content automatically</li>
      </ul>
    </div>
  </div>
</div>

<div class="pt-8 text-center opacity-70">
  <p>Ready to turn frustration into force multiplication?</p>
</div>


<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>
