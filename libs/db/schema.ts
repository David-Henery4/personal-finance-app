import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  numeric,
  boolean,
} from "drizzle-orm/pg-core";

// Reference Neon Auth's existing users table
export const usersTable = pgTable("neon_auth.users_sync", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  deletedAt: timestamp("deleted_at"),
  rawJson: text("raw_json"),
});

export const budgetsTable = pgTable("budgets", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
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
    .references(() => usersTable.id, { onDelete: "cascade" }),
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
    .references(() => usersTable.id, { onDelete: "cascade" }),
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
    .references(() => usersTable.id, { onDelete: "cascade" }),
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
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
export type InsertBudgets = typeof budgetsTable.$inferInsert;
export type SelectBudgets = typeof budgetsTable.$inferSelect;
export type InsertPots = typeof potsTable.$inferInsert;
export type SelectPots = typeof potsTable.$inferSelect;
export type InsertTransactions = typeof transactionsTable.$inferInsert;
export type SelectTransactions = typeof transactionsTable.$inferSelect;
export type InsertBills = typeof billsTable.$inferInsert;
export type SelectBills = typeof billsTable.$inferSelect;
