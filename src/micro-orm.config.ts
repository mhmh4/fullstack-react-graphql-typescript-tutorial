import path from "path";

import { MikroORM } from "@mikro-orm/core";

import { Post } from "./entities/Post";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  debug: true,
} as Parameters<typeof MikroORM.init>[0];
