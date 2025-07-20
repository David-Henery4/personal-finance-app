import { createClient } from "@libsql/client";

const client = createClient({
  url: "file:./local-users-db.sqlite",
});

const result = await client.execute(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)"
);



export default client;
