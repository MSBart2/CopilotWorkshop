#!/usr/bin/env node

/**
 * Slide Generator for CopilotWorkshop
 * 
 * Generates Slidev presentation slides from module README files.
 * 
 * Usage:
 *   node generate-slides.js ../modules/01-repository-instructions
 *   node generate-slides.js --all
 *   node generate-slides.js --stale
 */

const fs = require('fs');
const path = require('path');

class SlideGenerator {
  constructor() {
    this.modulesPath = path.join(__dirname, '../../modules');
    this.outputPath = path.join(__dirname, '../modules');
  }

  /**
   * Parse module README and extract key sections
   */
  parseModuleReadme(readmePath) {
    const content = fs.readFileSync(readmePath, 'utf-8');
    
    const extracted = {
      title: this.extractTitle(content),
      timing: this.extractTiming(content),
      story: this.extractSection(content, '📖 The Story'),
      objectives: this.extractSection(content, '🎯'),
      personas: this.extractPersonas(content),
      beforeAfter: this.extractBeforeAfter(content),
      keyConcepts: this.extractSection(content, '📚 Key Concepts'),
      exercises: this.extractExercises(content),
      quotes: this.extractQuotes(content),
      metrics: this.extractMetrics(content),
      nextUp: this.extractSection(content, '➡️ Next Up'),
    };

    return extracted;
  }

  /**
   * Extract title from README
   */
  extractTitle(content) {
    const match = content.match(/^# (.+)$/m);
    return match ? match[1] : 'Module';
  }

  /**
   * Extract timing context (e.g., "⏰ 10:30 AM")
   */
  extractTiming(content) {
    const match = content.match(/## ⏰[^—]*—\s*(.+)$/m);
    return match ? match[1] : '';
  }

  /**
   * Extract a section by heading
   */
  extractSection(content, heading) {
    const regex = new RegExp(`## ${heading}[^\\n]*\\n([\\s\\S]*?)(?=\\n##|$)`, 'm');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
  }

  /**
   * Extract persona mentions and quotes
   */
  extractPersonas(content) {
    const personas = [];
    
    // Look for persona patterns like **Sarah** or **David**
    const personaMatches = content.matchAll(/\*\*(\w+)\*\*\s*\([^)]+\)[^>]*>\s*"([^"]+)"/g);
    
    for (const match of personaMatches) {
      personas.push({
        name: match[1],
        quote: match[2],
      });
    }

    return personas;
  }

  /**
   * Extract before/after comparisons
   */
  extractBeforeAfter(content) {
    // Look for sections with ❌ and ✨
    const before = [];
    const after = [];

    const beforeSection = content.match(/❌[^#]*?([-•]\s*.+)/gm);
    const afterSection = content.match(/✨[^#]*?([-•]\s*.+)/gm);

    if (beforeSection) {
      beforeSection.forEach(item => {
        const cleaned = item.replace(/^[-•]\s*/, '').trim();
        if (cleaned) before.push(cleaned);
      });
    }

    if (afterSection) {
      afterSection.forEach(item => {
        const cleaned = item.replace(/^[-•]\s*/, '').trim();
        if (cleaned) after.push(cleaned);
      });
    }

    return { before, after };
  }

  /**
   * Extract exercises table
   */
  extractExercises(content) {
    const exercises = [];
    
    // Look for exercise table rows
    const tableMatches = content.matchAll(/\|\s*\[?(\d+\.\d+)\]?[^|]*\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|/g);
    
    for (const match of tableMatches) {
      exercises.push({
        number: match[1],
        title: match[2].trim(),
        lead: match[3].trim(),
        support: match[4].trim(),
        time: match[5].trim(),
        topic: match[6].trim(),
      });
    }

    return exercises;
  }

  /**
   * Extract persona quotes and realizations
   */
  extractQuotes(content) {
    const quotes = [];
    
    // Look for blockquotes with attribution
    const quoteMatches = content.matchAll(/>\s*"([^"]+)"[^—\n]*—\s*\*?\*?([^*\n,]+)/g);
    
    for (const match of quoteMatches) {
      quotes.push({
        text: match[1],
        author: match[2].trim(),
      });
    }

    return quotes;
  }

  /**
   * Extract numeric metrics (time, counts, etc.)
   */
  extractMetrics(content) {
    const metrics = [];
    
    // Look for patterns like "15 minutes" or "3 review rounds"
    const metricMatches = content.matchAll(/(\d+)\s*(minutes?|mins?|hours?|hrs?|rounds?|violations?|seconds?)/gi);
    
    for (const match of metricMatches) {
      metrics.push({
        value: match[1],
        unit: match[2],
      });
    }

    return metrics;
  }

  /**
   * Generate Slidev markdown from extracted data
   */
  generateSlides(data) {
    let slides = this.generateFrontmatter(data);
    slides += this.generateCoverSlide(data);
    slides += this.generateStorySlide(data);
    slides += this.generateObjectivesSlide(data);
    slides += this.generatePersonaSlide(data);
    slides += this.generateBeforeAfterSlide(data);
    slides += this.generateKeyConceptsSlide(data);
    slides += this.generateExercisesSlide(data);
    slides += this.generateQuoteSlide(data);
    slides += this.generateMetricsSlide(data);
    slides += this.generateNextUpSlide(data);
    slides += this.generateEndSlide(data);

    return slides;
  }

  generateFrontmatter(data) {
    return `---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## ${data.title}
  CopilotWorkshop Training
drawings:
  persist: false
transition: slide-left
title: ${data.title}
mdc: true
---

`;
  }

  generateCoverSlide(data) {
    return `# ${data.title}
${data.timing ? `## ${data.timing}` : ''}

<div class="pt-12">
  <span class="text-6xl">
    📚
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">CopilotWorkshop Training</span>
</div>

---

`;
  }

  generateStorySlide(data) {
    if (!data.story) return '';
    
    return `# 📖 The Story

${this.formatMarkdown(data.story, 100)}

---

`;
  }

  generateObjectivesSlide(data) {
    if (!data.objectives) return '';

    return `# 🎯 Learning Objectives

${this.formatMarkdown(data.objectives, 100)}

---

`;
  }

  generatePersonaSlide(data) {
    if (!data.personas || data.personas.length === 0) return '';

    const personaCards = data.personas.map(p => `
<div class="persona-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
  <h3 class="text-xl font-bold">${p.name}</h3>
  <blockquote class="mt-2 text-sm italic">"${p.quote}"</blockquote>
</div>
`).join('\n');

    return `# 👥 Key Personas

<div class="grid grid-cols-2 gap-6 mt-8">
${personaCards}
</div>

---

`;
  }

  generateBeforeAfterSlide(data) {
    if (!data.beforeAfter || (data.beforeAfter.before.length === 0 && data.beforeAfter.after.length === 0)) {
      return '';
    }

    const beforeList = data.beforeAfter.before.slice(0, 3).map(item => `- ${item}`).join('\n');
    const afterList = data.beforeAfter.after.slice(0, 3).map(item => `- ${item}`).join('\n');

    return `---
layout: two-cols
---

# ❌ The "Before"

${beforeList}

::right::

# ✨ The "After"

${afterList}

---

`;
  }

  generateKeyConceptsSlide(data) {
    if (!data.keyConcepts) return '';

    return `# 📚 Key Concepts

${this.formatMarkdown(data.keyConcepts, 150)}

---

`;
  }

  generateExercisesSlide(data) {
    if (!data.exercises || data.exercises.length === 0) return '';

    const rows = data.exercises.map(ex => 
      `| **${ex.number}** | ${ex.title} | ${ex.lead} | ${ex.time} |`
    ).join('\n');

    return `# 🔨 Exercises

<div class="mt-8">

| # | Exercise | Lead | Time |
|---|----------|------|------|
${rows}

</div>

---

`;
  }

  generateQuoteSlide(data) {
    if (!data.quotes || data.quotes.length === 0) return '';

    const quote = data.quotes[0]; // Use first quote

    return `---
layout: center
class: text-center
---

# 💭 Realization

<div class="text-2xl mt-12 max-w-3xl mx-auto">

> "${quote.text}"

</div>

<div class="mt-8 text-sm opacity-50">
— ${quote.author}
</div>

---

`;
  }

  generateMetricsSlide(data) {
    // Use extracted before/after data to show transformation
    if (!data.beforeAfter || data.beforeAfter.before.length === 0) return '';

    return `# 📊 Transformation

<div class="text-center mt-12">

## The Impact

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-red-50 dark:bg-red-900 rounded-lg">
  <div class="text-2xl font-bold text-red-600 dark:text-red-400">Before</div>
  <div class="text-sm mt-2">${data.beforeAfter.before[0] || 'Manual process'}</div>
</div>

<div class="p-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
  <div class="text-2xl font-bold">→</div>
</div>

<div class="p-6 bg-green-50 dark:bg-green-900 rounded-lg">
  <div class="text-2xl font-bold text-green-600 dark:text-green-400">After</div>
  <div class="text-sm mt-2">${data.beforeAfter.after[0] || 'Improved workflow'}</div>
</div>

</div>

</div>

---

`;
  }

  generateNextUpSlide(data) {
    if (!data.nextUp) return '';

    return `# ➡️ Next Up

${this.formatMarkdown(data.nextUp, 100)}

---

`;
  }

  generateEndSlide(data) {
    return `---
layout: end
class: text-center
---

# Module Complete! ✅

<div class="abs-br m-6 text-sm opacity-50">
  Questions? Check the README or ask in chat
</div>
`;
  }

  /**
   * Format markdown, truncating if needed
   */
  formatMarkdown(text, maxLength = 200) {
    let formatted = text.trim();
    if (formatted.length > maxLength) {
      formatted = formatted.substring(0, maxLength) + '...';
    }
    return formatted;
  }

  /**
   * Generate slides for a module
   */
  generateForModule(modulePath) {
    const readmePath = path.join(modulePath, 'README.md');
    
    if (!fs.existsSync(readmePath)) {
      console.error(`README not found: ${readmePath}`);
      return;
    }

    console.log(`Generating slides for ${path.basename(modulePath)}...`);

    const data = this.parseModuleReadme(readmePath);
    const slides = this.generateSlides(data);

    const moduleName = path.basename(modulePath);
    const outputFile = path.join(this.outputPath, `${moduleName}.md`);

    fs.writeFileSync(outputFile, slides, 'utf-8');
    console.log(`✓ Generated: ${outputFile}`);
  }

  /**
   * Generate slides for all modules
   */
  generateAll() {
    const modules = fs.readdirSync(this.modulesPath)
      .filter(name => name.match(/^\d+/))
      .map(name => path.join(this.modulesPath, name));

    modules.forEach(modulePath => {
      this.generateForModule(modulePath);
    });
  }

  /**
   * Generate slides only for stale modules (README newer than slides)
   */
  generateStale() {
    const modules = fs.readdirSync(this.modulesPath)
      .filter(name => name.match(/^\d+/))
      .map(name => path.join(this.modulesPath, name));

    modules.forEach(modulePath => {
      const moduleName = path.basename(modulePath);
      const readmePath = path.join(modulePath, 'README.md');
      const slidePath = path.join(this.outputPath, `${moduleName}.md`);

      if (!fs.existsSync(slidePath)) {
        console.log(`New module: ${moduleName}`);
        this.generateForModule(modulePath);
        return;
      }

      const readmeStat = fs.statSync(readmePath);
      const slideStat = fs.statSync(slidePath);

      if (readmeStat.mtime > slideStat.mtime) {
        console.log(`Stale slides: ${moduleName}`);
        this.generateForModule(modulePath);
      }
    });
  }
}

// CLI
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help')) {
  console.log(`
Usage:
  node generate-slides.js <module-path>     Generate slides for specific module
  node generate-slides.js --all             Generate slides for all modules
  node generate-slides.js --stale           Update only stale slides
  node generate-slides.js --help            Show this help
  `);
  process.exit(0);
}

const generator = new SlideGenerator();

if (args.includes('--all')) {
  generator.generateAll();
} else if (args.includes('--stale')) {
  generator.generateStale();
} else {
  generator.generateForModule(args[0]);
}
