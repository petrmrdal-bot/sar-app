'use client';

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { track, getUtmParams } from '@/lib/track';

type WaitlistState = 'idle' | 'loading' | 'success' | 'error';

function WaitlistForm({ source = 'landing-page' }: { source?: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<WaitlistState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMsg('Please enter a valid email address');
        return;
      }

      setState('loading');
      setErrorMsg('');

      try {
        const utm = getUtmParams();
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source, ...utm }),
        });

        if (!res.ok) {
          throw new Error('Failed to sign up');
        }

        track('waitlist_signup', { source, email_domain: email.split('@')[1] });
        setState('success');
      } catch {
        setErrorMsg('Something went wrong. Try again?');
        setState('error');
      }
    },
    [email, source]
  );

  if (state === 'success') {
    return (
      <div className="rounded-xl border border-success-500/30 bg-success-50 px-6 py-8 text-center animate-fade-in-up">
        <p className="text-lg font-semibold text-success-700">You&apos;re on the list!</p>
        <p className="mt-2 text-sm text-success-600">
          We&apos;ll let you know when SAR is ready. In the meantime, tell a friend.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          disabled={state === 'loading'}
        />
      </div>
      <Button type="submit" size="lg" disabled={state === 'loading'}>
        {state === 'loading' ? 'Joining...' : 'Join the waitlist'}
      </Button>
      {errorMsg && (
        <p className="col-span-full text-sm text-error-600">{errorMsg}</p>
      )}
    </form>
  );
}

function Header({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" className="text-lg font-bold tracking-tight text-neutral-900">
          SAR
        </a>
        <nav className="flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Features
          </a>
          <Button size="sm" onClick={onJoinWaitlist}>Join waitlist</Button>
        </nav>
      </div>
    </header>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-8 text-primary-600" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-8 text-primary-600" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-8 text-primary-600" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.389 3.353m-4.445 1.445-.828 1.004a2.547 2.547 0 0 0 .05 3.571l1.828 1.828" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} SAR. All rights reserved.
        </p>
        <nav className="flex items-center gap-6" aria-label="Footer">
          <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    track('page_view', { page: 'landing' });
  }, []);

  const handlePrimaryCta = useCallback(() => {
    track('cta_click', { cta: 'get_early_access', section: 'hero' });
  }, []);

  const handleSecondaryCta = useCallback(() => {
    track('cta_click', { cta: 'see_how_it_works', section: 'hero' });
  }, []);

  const handleFinalCta = useCallback(() => {
    track('cta_click', { cta: 'join_waitlist', section: 'final_cta' });
  }, []);

  const scrollToWaitlist = useCallback(() => {
    handleFinalCta();
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  }, [handleFinalCta]);

  const scrollToWaitlistFromHero = useCallback(() => {
    handlePrimaryCta();
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  }, [handlePrimaryCta]);

  return (
    <div className="flex flex-col">
      <Header onJoinWaitlist={scrollToWaitlist} />

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
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-4">
            <Button size="lg" onClick={scrollToWaitlistFromHero} className="w-full sm:w-auto">
              Get early access
            </Button>
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
              <a href="#features" onClick={handleSecondaryCta}>
                See how it works
              </a>
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
                <div className="mb-3">
                  <RocketIcon />
                </div>
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
                <div className="mb-3">
                  <EyeIcon />
                </div>
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
                <div className="mb-3">
                  <WrenchIcon />
                </div>
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

      {/* Social proof */}
      <section className="border-t border-neutral-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium italic text-neutral-900">
            &ldquo;We went from zero to live in 10 minutes.&rdquo;
          </blockquote>
          <p className="mt-4 text-neutral-600">
            — <span className="font-semibold">Beta user</span>
          </p>
          <p className="mt-8 text-sm text-neutral-400">
            Have a story to share? We&apos;d love to hear it.
          </p>
        </div>
      </section>

      {/* Final CTA + Waitlist */}
      <section
        id="waitlist"
        className="bg-neutral-900 px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop configuring. Start shipping.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Join the teams who ship daily without a platform engineer.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
