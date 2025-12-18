# Module 03 Exercise: The Inherited E-Commerce Platform

## 📖 The Story

**Meet Marcus.** He just joined TechMart Inc. as a developer, excited to work on their e-commerce platform. On his first day, his manager drops a bombshell:

> "The original team left six months ago. We've been in maintenance mode since then. The platform works—mostly—but nobody really understands how it all fits together. Your first task is to figure out how orders flow through the system."

Marcus opens the codebase and feels his stomach drop. Five microservices. No documentation. Each service seems to handle errors differently. Some use `snake_case`, others use `camelCase`. The tests—where they exist—follow different patterns.

**Sound familiar?**

This exercise puts you in Marcus's shoes. You'll explore a realistic (but intentionally messy) e-commerce platform and discover firsthand why documentation isn't just "nice to have"—it's essential for team productivity and sanity.

---

## 🎯 Learning Objectives

By completing these exercises, you will:

1. Experience the frustration of navigating undocumented code
2. Identify patterns (and anti-patterns) in a multi-service architecture
3. Create living documentation that captures architectural decisions
4. Understand how documentation serves as "leverage" for future developers

---

## 🏗️ The Platform Architecture

The TechMart e-commerce platform consists of five microservices:

```
┌─────────────────────────────────────────────────────────────────┐
│                        E-Commerce Platform                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────┐    HTTP     ┌──────────────┐                 │
│   │ user-service │◄───────────►│ order-service│                 │
│   └──────────────┘             └───────┬──────┘                 │
│          │                             │                         │
│          │                    HTTP     │    HTTP                 │
│          │              ┌──────────────┼──────────────┐         │
│          │              ▼              ▼              ▼         │
│          │    ┌──────────────┐ ┌──────────────┐ ┌────────────┐ │
│          │    │  inventory-  │ │   payment-   │ │notification│ │
│          │    │   service    │ │   service    │ │  -service  │ │
│          │    └──────────────┘ └──────────────┘ └────────────┘ │
│          │                                              ▲       │
│          │                     Events                   │       │
│          └──────────────────────────────────────────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Services Overview

| Service              | Purpose                                     | Port |
| -------------------- | ------------------------------------------- | ---- |
| user-service         | User registration, authentication, profiles | 3001 |
| order-service        | Order creation, status management           | 3002 |
| inventory-service    | Stock levels, product availability          | 3003 |
| payment-service      | Payment processing, refunds                 | 3004 |
| notification-service | Email/SMS notifications (event-driven)      | 3005 |

---

## ⚠️ What You'll Discover

As you explore this codebase, you'll notice some... inconsistencies:

- **Error Handling**: Each service handles errors differently
- **Naming Conventions**: Most use `camelCase`, but one service has `snake_case` mixed in
- **Testing Styles**: Tests range from well-structured to chaotic
- **Documentation**: What documentation? 😅

These inconsistencies are **intentional**. They represent what real inherited codebases often look like—not broken, but inconsistent. Your job is to:

1. Understand the current state
2. Document what exists
3. Propose conventions for the future

---

## 📁 Folder Structure

```
ecommerce-platform/
├── docs/                    # Your documentation goes here!
│   └── README.md           # Placeholder for your work
├── shared/                  # Shared utilities
│   ├── common-types/       # DTOs and type definitions
│   ├── events/             # Event emitter and constants
│   └── http-client/        # Inter-service HTTP wrapper
└── services/               # The five microservices
    ├── user-service/
    ├── order-service/
    ├── inventory-service/
    ├── payment-service/
    └── notification-service/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Basic understanding of Express.js
- Curiosity and patience 😊

### Running the Platform

```bash
# Navigate to the platform root
cd exercises/module-03/ecommerce-platform

# Install dependencies
npm install

# Start all services (in separate terminals or use the start script)
npm run start:all
```

### Running Individual Services

```bash
# Example: Start just the user service
cd services/user-service
npm install
npm start
```

---

## 📝 Your Mission

Return to **Module 03: Documentation as Leverage** to complete the exercises. You'll:

1. **Exercise 1**: Create an `ARCHITECTURE.md` that maps how orders flow through the system
2. **Exercise 2**: Create a `PATTERNS.md` documenting the (inconsistent) patterns you discover
3. **Exercise 3**: Create a `CONVENTIONS.md` proposing standards for future development

Remember Marcus's situation. The documentation you create today saves hours of confusion for the next developer—who might be you in six months!

---

## 💭 Marcus's First Day Reflection

> _"I spent three hours just figuring out that order-service calls user-service to validate customers before processing. That information should have been in a diagram somewhere. When I asked why inventory-service uses snake_case, nobody knew—the original developer is long gone. This is exactly why documentation matters. Not for bureaucracy, but for sanity."_

Good luck, and remember: **clarity beats cleverness**.
