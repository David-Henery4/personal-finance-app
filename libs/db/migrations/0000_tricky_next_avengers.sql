CREATE TABLE "bills" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"category" text NOT NULL,
	"recurrence" text NOT NULL,
	"start_date" timestamp NOT NULL,
	"next_due_date" timestamp NOT NULL,
	"end_date" timestamp,
	"is_paid" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "budgets" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"min_amount" numeric(10, 2) DEFAULT '0' NOT NULL,
	"theme" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pots" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"target" numeric(10, 2) NOT NULL,
	"current_amount" numeric(10, 2) DEFAULT '0' NOT NULL,
	"theme" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"budget_id" integer,
	"amount" numeric(10, 2) NOT NULL,
	"category" text NOT NULL,
	"note" text,
	"date" timestamp DEFAULT now() NOT NULL,
	"counterparty" text NOT NULL,
	"type" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "neon_auth.users_sync" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	"deleted_at" timestamp,
	"raw_json" text
);
--> statement-breakpoint
ALTER TABLE "bills" ADD CONSTRAINT "bills_user_id_neon_auth.users_sync_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."neon_auth.users_sync"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_user_id_neon_auth.users_sync_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."neon_auth.users_sync"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pots" ADD CONSTRAINT "pots_user_id_neon_auth.users_sync_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."neon_auth.users_sync"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_neon_auth.users_sync_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."neon_auth.users_sync"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_budget_id_budgets_id_fk" FOREIGN KEY ("budget_id") REFERENCES "public"."budgets"("id") ON DELETE set null ON UPDATE no action;