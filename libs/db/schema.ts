import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  numeric,
  boolean,
} from "drizzle-orm/pg-core";


// export const usersTable = pgTable("users", {
//   id: text("id").primaryKey(),
//   name: text("name"),
//   email: text("email"),
//   emailVerified: boolean("email_verified").default(false),
//   password: text("password"),
//   createdAt: timestamp("created_at"),
//   updatedAt: timestamp("updated_at"),
// });

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const budgetsTable = pgTable("budgets", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  category: text("category").notNull(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  minAmount: numeric("min_amount", { precision: 10, scale: 2 })
    .default("0")
    .notNull(),
  theme: text("theme").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const potsTable = pgTable("pots", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  target: numeric("target", { precision: 10, scale: 2 }).notNull(),
  currentAmount: numeric("current_amount", { precision: 10, scale: 2 })
    .default("0")
    .notNull(),
  theme: text("theme").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const transactionsTable = pgTable("transactions", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  budgetId: integer("budget_id").references(() => budgetsTable.id, {
    onDelete: "set null",
  }),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  note: text("note"),
  date: timestamp("date").defaultNow().notNull(),
  counterparty: text("counterparty").notNull(),
  type: text("type").notNull(),
});

export const billsTable = pgTable("bills", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  recurrence: text("recurrence").notNull(),
  startDate: timestamp("start_date").notNull(),
  nextDueDate: timestamp("next_due_date").notNull(),
  endDate: timestamp("end_date"),
  isPaid: boolean("is_paid").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Types
export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type InsertSession = typeof session.$inferInsert;
export type SelectSession = typeof session.$inferSelect;
export type InsertAccount = typeof account.$inferInsert;
export type SelectAccount = typeof account.$inferSelect;
export type InsertVerification = typeof verification.$inferInsert;
export type SelectVerification = typeof verification.$inferSelect;
export type InsertBudgets = typeof budgetsTable.$inferInsert;
export type SelectBudgets = typeof budgetsTable.$inferSelect;
export type InsertPots = typeof potsTable.$inferInsert;
export type SelectPots = typeof potsTable.$inferSelect;
export type InsertTransactions = typeof transactionsTable.$inferInsert;
export type SelectTransactions = typeof transactionsTable.$inferSelect;
export type InsertBills = typeof billsTable.$inferInsert;
export type SelectBills = typeof billsTable.$inferSelect;
