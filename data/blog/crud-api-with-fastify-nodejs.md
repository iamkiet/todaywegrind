---
title: "Building a CRUD API with Fastify and Node.js"
date: "2024-11-10"
readTime: "9 min read"
slug: "crud-api-with-fastify-nodejs"
---

# Building a CRUD API with Fastify and Node.js

Fastify is a fast and low-overhead web framework for Node.js. In this post, we'll build a simple CRUD (Create, Read, Update, Delete) API for a todo app.

## Why Fastify?

- **Performance**: One of the fastest web frameworks for Node.js
- **Schema-based**: Built-in JSON schema validation
- **Developer Experience**: Great plugin ecosystem and TypeScript support

## Project Setup

```bash
npm init -y
npm install fastify fastify-plugin fastify-cors
```

## Basic Server

```js
const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
```

## CRUD Endpoints

Let's add endpoints for managing todos:

```js
let todos = [];

fastify.post("/todos", async (request, reply) => {
  const todo = { id: Date.now(), ...request.body };
  todos.push(todo);
  return todo;
});

fastify.get("/todos", async () => todos);

fastify.get("/todos/:id", async (request) => {
  return todos.find((t) => t.id == request.params.id);
});

fastify.put("/todos/:id", async (request) => {
  const idx = todos.findIndex((t) => t.id == request.params.id);
  if (idx === -1) return { error: "Not found" };
  todos[idx] = { ...todos[idx], ...request.body };
  return todos[idx];
});

fastify.delete("/todos/:id", async (request) => {
  todos = todos.filter((t) => t.id != request.params.id);
  return { success: true };
});
```

## Testing the API

Use Postman or curl to test your endpoints:

```bash
curl -X POST http://localhost:3000/todos -H 'Content-Type: application/json' -d '{"title":"Learn Fastify"}'
curl http://localhost:3000/todos
```

## Conclusion

Fastify makes it easy to build high-performance APIs in Node.js. Try adding authentication or connecting to a real database next!
