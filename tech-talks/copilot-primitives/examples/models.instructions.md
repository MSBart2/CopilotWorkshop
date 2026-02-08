---
applyTo: "src/models/**/*.ts"
---

# Database Model Instructions

When working with database models in this project:

## Prisma ORM Conventions

1. Use Prisma schema definitions in `prisma/schema.prisma`
2. Include JSDoc comments with field descriptions
3. Define relationships explicitly with `@relation`
4. Add indexes for foreign keys
5. Use snake_case for database column names, camelCase in TypeScript
6. Always include audit fields: `createdAt` and `updatedAt`

## Example Model

```typescript
/**
 * User account with authentication and profile information
 */
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  // Relationships
  posts     Post[]
  comments  Comment[]

  @@map("users")
  @@index([email])
}

/**
 * Blog post created by a user
 */
model Post {
  id        String   @id @default(uuid())
  title     String
  content   String   @db.Text
  published Boolean  @default(false)
  authorId  String   @map("author_id")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  // Relationships
  author    User      @relation(fields: [authorId], references: [id], onDelete: Cascade)
  comments  Comment[]

  @@map("posts")
  @@index([authorId])
  @@index([published, createdAt])
}
```

## Migration Guidelines

- Generate migrations with: `npx prisma migrate dev --name descriptive_name`
- Review generated SQL before applying
- Test migrations on development database first
- Always include rollback plan in migration PR description
