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

The application is configured for static export (`output: 'export'`). Build artifacts are emitted to the `dist/` directory and can be deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

## Security

- Never commit secrets or `.env` files.
- Use least-privilege for all API keys and service accounts.
- Keep dependencies up to date; review `npm audit` output regularly.

## Observability

- Application logs are written to stdout/stderr.
- Error tracking and performance monitoring will be added as we scale.
