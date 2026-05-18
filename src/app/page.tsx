import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Ship today. Iterate tomorrow.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            SAR turns your commits into live URLs in minutes—no config, no ops
            team, no waiting.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button size="lg">Get early access</Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#features">See how it works</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-neutral-50 px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Built for velocity
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Everything you need to ship fast, and nothing you don&apos;t.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Push-to-deploy</CardTitle>
                <CardDescription>
                  Connect your repo. Every commit gets a production-ready URL.
                  No YAML required.
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Instant previews</CardTitle>
                <CardDescription>
                  Share live preview links for every pull request. Stakeholders
                  review before you merge.
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Zero config</CardTitle>
                <CardDescription>
                  No Dockerfiles, no Terraform, no bash scripts. Just push code
                  and go.
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </div>
        </div>
      </section>

      {/* Social proof placeholder */}
      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium italic text-neutral-900">
            &ldquo;We went from zero to live in 10 minutes.&rdquo;
          </blockquote>
          <p className="mt-4 text-neutral-600">
            — <span className="font-semibold">[Customer name]</span>, [Title]
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-neutral-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop configuring. Start shipping.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Join the teams who ship daily without a platform engineer.
          </p>
          <div className="mt-10">
            <Button size="lg">Join the waitlist</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
