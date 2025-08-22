import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  numeric,
  boolean,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const budgetsTable = pgTable("budgets", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  category: text("category").notNull(), // validate via enum in code
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(), // Max/Planned
  minAmount: numeric("min_amount", { precision: 10, scale: 2 })
    .default("0")
    .notNull(),
  theme: text("theme").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const potsTable = pgTable("pots", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
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
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  budgetId: integer("budget_id").references(() => budgetsTable.id, {
    onDelete: "set null",
  }),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  note: text("note"),
  date: timestamp("date").defaultNow().notNull(),
  // New: Recipient or Sender name
  counterparty: text("counterparty").notNull(), // e.g., "Netflix", "John Doe"
  // Transaction type: income or expense
  type: text("type").notNull(), // values: 'income', 'expense'
});

export const billsTable = pgTable("bills", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  recurrence: text("recurrence").notNull(), // e.g., "monthly", "weekly", "Yearly"
  // The base due date (first occurrence)
  startDate: timestamp("start_date").notNull(),
  // Track the next due date dynamically
  nextDueDate: timestamp("next_due_date").notNull(),
  // Optional: End date for recurrence (null means indefinite)
  endDate: timestamp("end_date"),
  // Status for the current cycle
  isPaid: boolean("is_paid").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
//
export type InsertBudgets = typeof budgetsTable.$inferInsert;
export type SelectBudgets = typeof budgetsTable.$inferSelect;
//
export type InsertPots = typeof potsTable.$inferInsert;
export type SelectPots = typeof potsTable.$inferSelect;
//
export type InsertTransactions = typeof transactionsTable.$inferInsert;
export type SelectTransactions = typeof transactionsTable.$inferSelect;
//
export type InsertBills = typeof billsTable.$inferInsert;
export type SelectBills = typeof billsTable.$inferSelect;
