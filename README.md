# Swiftware Solutions

Swiftware is the digital services and software products division of Swift House (Pty) Ltd.

## Structure

- `client/`: React 18, Vite, React Router, and the public site foundation.
- `server/`: Express API foundation and planned application modules.

## Run the client

```sh
cd client
npm install
npm run dev
```

## Run the API

```sh
cd server
npm install
copy .env.example .env
npm run dev
```

The API currently exposes `GET /api/health`. Auth, database models, and business routes are scaffolded as the next implementation stage.
