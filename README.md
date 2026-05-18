# SAR

Ship fast. Iterate faster.

## Getting Started

### Prerequisites

- Node.js >= 18.17.0
- npm (bundled with Node.js)

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run deploy` | Deploy to production (Vercel) |
| `npm run deploy:preview` | Deploy preview to Vercel |

## Architecture Decisions

See [docs/adr/](docs/adr/) for architectural decision records (ADRs).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **CI/CD**: GitHub Actions

## Deployment

The application uses Next.js API routes (`/api/waitlist`, `/api/analytics`) and requires a Node.js server runtime.

### Recommended: Vercel (one-command deploy)

```bash
npm run deploy   # npx vercel --prod
```

The `vercel.json` at the project root auto-detects the Next.js framework.

### Alternative: Any Node.js host

1. `npm run build`
2. `npm start` — serves on port 3000
3. Proxy traffic from your domain to `localhost:3000`

## Security

- Never commit secrets or `.env` files.
- Use least-privilege for all API keys and service accounts.
- Keep dependencies up to date; review `npm audit` output regularly.

## Observability

- Application logs are written to stdout/stderr.
- Error tracking and performance monitoring will be added as we scale.

<!-- SAR-11: trigger deploy -->
