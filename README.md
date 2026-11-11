# FreshTrack

Smart Food Shelf-Life & Preservation Analytics — a TypeScript monorepo containing the public website, researcher/admin dashboard, mobile app starter, and central API.

## Included
- `apps/web`: Next.js App Router public website + admin/researcher interface.
- `apps/mobile`: Expo / React Native mobile application starter.
- `backend`: Express API + Prisma + PostgreSQL schema and seed script.
- Forest Green + Warm White design system, responsive layouts, public sample lookup demo, dashboard navigation, forms and demo data.

## Requirements
- Node.js 20.10+ (Node 22 LTS recommended)
- npm 10+
- Docker Desktop (for local PostgreSQL) or a PostgreSQL 15+ instance
- Expo Go on a phone for the mobile starter

## Quick start
1. Copy `.env.example` to `backend/.env` and `apps/web/.env.local` (adjust values if needed).
2. Start PostgreSQL: `docker compose up -d db`
3. Install dependencies: `npm install`
4. Generate Prisma client: `npm run db:generate`
5. Apply schema: `npm run db:migrate`
6. Seed demo data: `npm run db:seed`
7. Start web + API: `npm run dev`
8. Open `http://localhost:3000` (web) and `http://localhost:4000/api/health` (API).
9. Start mobile separately: `npm run dev:mobile`.

## Demo sign-in
The UI currently uses a local demo sign-in so you can inspect the screens without a configured database. Demo credentials: `admin@freshtrack.local` / `FreshTrack@123`. This is **not production authentication**. The API auth route is a starter endpoint and must be completed, rate-limited, and security-reviewed before deployment.

## Main routes
Public: `/`, `/about`, `/how-it-works`, `/track`, `/research`, `/features`, `/contact`, `/faq`, `/privacy`, `/terms`.
Dashboard: `/login`, `/forgot-password`, `/dashboard`, `/dashboard/experiments`, `/dashboard/samples`, `/dashboard/qr-management`, `/dashboard/iot-monitoring`, `/dashboard/daily-observations`, `/dashboard/indicator-analysis`, `/dashboard/comparison-analytics`, `/dashboard/shelf-life-analysis`, `/dashboard/alerts`, `/dashboard/reports`, `/dashboard/users`, `/dashboard/storage`, `/dashboard/profile`, `/dashboard/settings`, `/dashboard/audit-logs`.

## Important scientific and product notes
- Sensor values shown in demo mode are illustrative simulated readings, not real device measurements.
- Sample freshness status and shelf-life findings are demo data. Do not publish them as validated research results.
- RGB colour readings alone are not scientific proof. Use controlled lighting and calibrated references for meaningful colour analysis.
- Public sample pages should expose only researcher-approved fields. Implement and test authorization before real data is published.
- Add secure QR identifiers, audit logging, backups, HTTPS, secrets management, and privacy review before production deployment.

## Build status
This is a complete starter scaffold with the visual system, navigation, responsive page templates, demo interactions, API foundation and database model. Real ESP32/MQTT ingestion, production-grade authentication, validated scientific calculations, cloud file storage, push notifications, and store-ready mobile release workflows remain integration milestones.
