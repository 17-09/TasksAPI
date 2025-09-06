# AI tools and models used

Primary assistant
- OpenAI ChatGPT (GPT-5 class)


Steps I did:

1. Rewrite requirements into good shape for AI to generate code:
- Prompt: Rewrite this requirement into good format to generate code
```
<<Requirements>>
```

2. Review & update the generated requirements
Final here
```
Project: Task Manager (GraphQL) with Real-Time Sync

Goal
- Build a minimal full-stack app with real-time task updates. Time-box: ~1 hour using AI-assisted workflows.

Tech stack
- Backend: .NET 8 (ASP.NET Core), GraphQL (Hot Chocolate), EF Core
- Database: SQLite (default, fastest) or SQL Server (container)
- Frontend: React 18 + TypeScript; UI with Adobe React Spectrum preferred
- GraphQL client: Relay preferred; Apollo acceptable
- Docker + Docker Compose

Functional requirements

Backend (ASP.NET Core + GraphQL)
- Data model: Task
  - id: GUID (ID!)
  - title: string (required, max 200)
  - description: string (optional, max 1000)
  - status: enum { PENDING, COMPLETED } (default: PENDING)
- GraphQL schema
  - type Task { id: ID!, title: String!, description: String, status: TaskStatus! }
  - enum TaskStatus { PENDING, COMPLETED }
  - type Query { getAllTasks: [Task!]! }
  - type Mutation {
      createTask(title: String!, description: String): Task!
      updateTaskStatus(id: ID!, status: TaskStatus!): Task!
    }
  - Real-time (subscriptions) for sync:
    - subscription {
        taskCreated: Task!
        taskUpdated: Task!
      }
    - Implementation: Hot Chocolate subscriptions with in-memory pub/sub; expose WS endpoint
- Behavior
  - createTask: validates non-empty title; sets status=PENDING
  - updateTaskStatus: returns error if id not found
  - Mutations return the affected Task
- Persistence
  - Default: SQLite file tasks.db persisted to a mounted volume
  - Optional: SQL Server container with EF Core migrations
  - Initialize DB on startup (EnsureCreated or simple migrations)

Frontend (React)
- Features
  - Display list of tasks with title, description, status
  - Create task (title required, description optional)
  - Toggle status between Pending and Completed
  - Real-time updates: new tasks and status changes appear without manual refresh (via GraphQL subscriptions)
- UI
  - Prefer Adobe React Spectrum components
- GraphQL client
  - Relay with queries, mutations, and subscriptions
- Connectivity
  - HTTP endpoint: /graphql
  - WebSocket endpoint for subscriptions

Dockerization
- Services orchestrated via Docker Compose
  - api: ASP.NET Core app
    - Ports: 8080:8080
    - Env: ASPNETCORE_URLS=http://0.0.0.0:8080; ConnectionStrings__Default=...
    - Volume: ./data:/app/data (for SQLite) to persist tasks.db
  - web: React app
    - Ports: 5173:5173 (or your chosen dev/prod port)
    - Env: GRAPHQL_HTTP_URL=http://api:8080/graphql; GRAPHQL_WS_URL=ws://api:8080/graphql
  - db (optional if using SQL Server)
    - Image: mcr.microsoft.com/mssql/server:2022-latest
    - Ports: 1433:1433
    - Env: SA_PASSWORD=..., ACCEPT_EULA=Y
    - Volume: sql_data:/var/opt/mssql
- Compose profiles
  - default profile: api + web + SQLite volume
  - sql profile (optional): adds SQL Server container and uses SQL connection string

Acceptance criteria
- docker compose up --build starts all services
- Backend available at http://localhost:8080/graphql (GraphQL IDE enabled in Development)
- Frontend available at http://localhost:5173
- Creating a task and toggling status works from the UI
- Opening two browser windows shows real-time sync of new tasks and status changes
- Data persists across container restarts (SQLite volume or SQL container volume)

Example GraphQL operations
- Query:
  query { getAllTasks { id title description status } }
- Mutations:
  mutation { createTask(title: "Demo", description: "First") { id title status } }
  mutation { updateTaskStatus(id: "GUID-HERE", status: COMPLETED) { id status } }
- Subscriptions:
  subscription { taskCreated { id title status } }
  subscription { taskUpdated { id title status } }

Project structure (suggested, minimal)
- backend/
  - Program.cs
  - TaskDbContext.cs
  - Entities/TaskEntity.cs
  - GraphQL/Query.cs, Mutation.cs, Subscription.cs
  - Dockerfile
- frontend/
  - src/ (React app with Spectrum components and GraphQL client)
  - vite.config.ts or CRA config
  - Dockerfile
- docker-compose.yml
- README.md

Non-functional requirements
- Code is clean, simple, and easy to follow
- Minimal configuration; sensible defaults
- Keep dependencies limited to those listed or required by chosen client/UI
```

3. Start generating code & bug fixes
- Genereate backend
- Genereate frontend
- Genereate dockerfile & docker compose

(This project's scope is small so we can generate backend or frontend at one prompt call, but for large project, should build skeleton structure, then focus on each sub-domain to produce better output with AI)
