export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <GradientBackground />
        <header className="relative border-b border-white/10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                S2
              </span>
              <div>
                <p className="text-lg font-semibold text-white">Sora 2 Studio</p>
                <p className="text-xs text-white/60">
                  Watermark-free AI video powerhouse
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
              <a className="hover:text-white" href="#features">
                Features
              </a>
              <a className="hover:text-white" href="#workflow">
                Workflow
              </a>
              <a className="hover:text-white" href="#pricing">
                Pricing
              </a>
              <a className="hover:text-white" href="#faq">
                FAQ
              </a>
            </div>
            <div className="hidden lg:block">
              <a
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:bg-indigo-200"
                href="#get-started"
              >
                Launch Studio
              </a>
            </div>
            <a
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white lg:hidden"
              href="#get-started"
            >
              Start
            </a>
          </nav>
        </header>

        <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 py-16 lg:px-12 lg:py-24">
          <section className="grid items-center gap-10 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                New in Sora 2
              </div>
              <h1 className="text-4xl font-semibold text-white sm:text-6xl">
                Unlimited cinematic AI video. Absolutely no watermark.
              </h1>
              <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                Sora 2 Studio gives you the full creative firepower of the
                latest diffusion-video architecture with zero limits. Render in
                4K, collaborate in real time, and export production-ready clips
                free forever.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="flex items-center justify-center gap-2 rounded-full bg-indigo-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/40 transition hover:scale-105 hover:bg-indigo-300"
                  href="#get-started"
                >
                  Generate Your First Video
                </a>
                <a
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                  href="#workflow"
                >
                  See How It Works
                </a>
              </div>
              <dl className="grid gap-6 text-sm text-white/60 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <dt className="text-xs font-semibold uppercase text-indigo-200">
                    Render Speed
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">
                    12x faster
                  </dd>
                  <p className="mt-2 text-xs">
                    GPU burst nodes spin up instantly, delivering 45s videos in
                    under a minute.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <dt className="text-xs font-semibold uppercase text-indigo-200">
                    Export Quality
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">
                    Native 4K
                  </dd>
                  <p className="mt-2 text-xs">
                    Master files in ProRes, H.265, or GIF—ready for any
                    delivery pipeline.
                  </p>
                </div>
              </dl>
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute -inset-6 rounded-3xl bg-indigo-500/40 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <VideoPreview />
              </div>
            </div>
          </section>

          <section
            id="features"
            className="space-y-12 rounded-[2.5rem] border border-white/10 bg-white/5 p-10"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                What&apos;s inside
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                A full suite designed for fearless storytellers
              </h2>
              <p className="max-w-3xl text-lg text-white/70">
                From pre-visualization to final delivery, Sora 2 Studio keeps
                everything inside your browser, backed by enterprise-grade
                privacy controls.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-indigo-400/60 hover:bg-indigo-950/40"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-400/20 text-indigo-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </div>
                  <ul className="mt-auto space-y-2 text-xs text-white/50">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-indigo-300" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="workflow"
            className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                Creation flow
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                From prompt to premiere in under five minutes
              </h2>
              <p className="text-lg text-white/70">
                An intuitive canvas with prompt engineering copilot, storyboard
                lanes, and live preview scrubbers keeps your team locked in from
                concept to render.
              </p>
              <div className="space-y-4">
                {WORKFLOW_STEPS.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-indigo-400/20 text-sm font-semibold text-indigo-100">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col justify-center">
              <div className="absolute -inset-6 rounded-[2.75rem] bg-indigo-400/20 blur-3xl" />
              <div className="relative space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8">
                <h3 className="text-xl font-semibold text-white">
                  Prompt Composer
                </h3>
                <div className="grid gap-4 text-sm">
                  {PROMPT_EXAMPLES.map((snippet) => (
                    <div
                      key={snippet.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">
                        {snippet.label}
                      </p>
                      <p className="mt-3 text-white/80">{snippet.prompt}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/50">
                  Each prompt is tuned for the Sora 2 transformer stack and
                  automatically expands into camera moves, lighting cues, and
                  actor direction hints.
                </p>
              </div>
            </div>
          </section>

          <section
            id="pricing"
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10"
          >
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-200">
                  Free forever
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Unrestricted access, zero billing surprises
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Sora 2 Studio is completely free. Unlimited renders, no
                  watermark, full-resolution exports. We monetize through
                  optional add-on render nodes for agencies when you need to
                  scale beyond the free tier.
                </p>
                <div className="mt-8 flex items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
                    ✓ Unlimited HD & 4K renders
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
                    ✓ Commercial license
                  </span>
                </div>
              </div>
              <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 lg:col-span-3">
                <div className="flex items-end gap-2 text-5xl font-semibold text-white">
                  $0
                  <span className="text-base font-medium text-white/50">
                    per creator • forever
                  </span>
                </div>
                <ul className="mt-8 grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                  {PERKS.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="size-2 rounded-full bg-lime-300" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  id="get-started"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-lime-300 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-lime-500/30 transition hover:scale-105 hover:bg-lime-200"
                  href="https://studio.sora2.video/signup"
                >
                  Create Free Account
                </a>
                <p className="mt-4 text-xs text-white/50">
                  Agency mode unlocks extra render clusters, voice cloning, and
                  API access whenever you need to scale for campaigns.
                </p>
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="grid gap-12 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 lg:grid-cols-2"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                Answers
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Everything you need to go watermark-free
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Sora 2 Studio removes friction so you can craft, iterate, and
                publish cinematic AI stories without compromise.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2.5rem] border border-indigo-300/20 bg-indigo-400/10 p-10 text-center">
            <div className="absolute -bottom-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to ship your next viral story?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Join thousands of filmmakers and creative teams embracing Sora 2
              Studio to draft, iterate, and deliver breathtaking AI video
              experiences without watermarks or fine print.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:scale-105"
                href="https://studio.sora2.video/signup"
              >
                Launch Sora 2 Studio
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                href="https://studio.sora2.video/api"
              >
                Explore the API
              </a>
            </div>
          </section>
        </main>

        <footer className="relative border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <p className="text-white">Sora 2 Studio</p>
              <p>© {new Date().getFullYear()} Sora Labs. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="hover:text-white" href="mailto:team@sora2.video">
                team@sora2.video
              </a>
              <a className="hover:text-white" href="https://status.sora2.video">
                Status
              </a>
              <a className="hover:text-white" href="https://docs.sora2.video">
                Docs
              </a>
              <a className="hover:text-white" href="https://discord.gg/sora2">
                Community
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "Watermark-Free Exports",
    description:
      "Deliver final footage straight to clients or socials with zero branding baked in.",
    bullets: [
      "ProRes, H.265, GIF output",
      "Frame-accurate trimming",
      "Color-managed pipeline",
    ],
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M6 20v-8a6 6 0 0 1 12 0v8" />
        <path d="M4 20h16" />
        <path d="m8 12 4-4 4 4" />
      </svg>
    ),
  },
  {
    title: "Uncapped Render Minutes",
    description:
      "Spin up parallel GPU nodes on demand and generate as many videos as you can dream up.",
    bullets: [
      "Burst capacity on RTX 6090s",
      "Queue intelligence to prevent wait times",
      "Realtime render progress streaming",
    ],
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2v20" />
        <path d="M5 9h14" />
        <path d="M8 5h8" />
        <path d="M8 19h8" />
      </svg>
    ),
  },
  {
    title: "Creative Control",
    description:
      "Lock down motion paths, camera rigs, and character performances with timeline keyframes.",
    bullets: [
      "16-track timeline with curves",
      "Camera and lighting presets",
      "Editable depth & matte layers",
    ],
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect height="12" rx="2" width="18" x="3" y="6" />
        <path d="M7 10v4" />
        <path d="M11 9v6" />
        <path d="M15 11v2" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Share live canvases, capture feedback, and version scenes without leaving the timeline.",
    bullets: [
      "Scene branching & merge",
      "Timestamped comments",
      "Reviewer-only links",
    ],
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="7" r="4" />
        <path d="M17 11a4 4 0 1 0-3.4-6" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
        <path d="M16 16v5" />
        <path d="M19 19h-6" />
      </svg>
    ),
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Describe the scene with cinematic cues",
    description:
      "Write natural language prompts with camera moves, characters, and emotions. Our copilot enhances it with shot-ready details.",
  },
  {
    title: "Direct the timeline in real time",
    description:
      "Drop keyframes, adjust motion paths, swap styles, and lock continuity with our live preview compositor.",
  },
  {
    title: "Render & remix without limits",
    description:
      "Generate unlimited variants, remix with style transfer, or upscale to 4K without render caps or watermarks.",
  },
];

const PROMPT_EXAMPLES = [
  {
    label: "Adventure Reel",
    prompt:
      "Drone reveal of a neon-lit rainforest waterfall at twilight, volumetric lighting, parallax camera glide, 24fps, cinematic grade.",
  },
  {
    label: "Fashion Editorial",
    prompt:
      "Slow-motion runway strut in a glass atrium, soft box lighting, 50mm lens depth-of-field, reflective floors, vogue aesthetic.",
  },
  {
    label: "Product Spotlight",
    prompt:
      "Macro orbit around a matte-black electric motorcycle, studio lighting, dust motes, sharp reflections, heroic pacing.",
  },
];

const PERKS = [
  "Unlimited prompt & storyboard slots",
  "Up to 90s video length per render",
  "Native 4K + 10-bit HDR output",
  "Instant style transfer library",
  "Shared workspaces with roles",
  "Full commercial usage rights",
  "Automated subtitle generation",
  "Webhook + REST + GraphQL API",
];

const FAQS = [
  {
    question: "Is there really no watermark on exports?",
    answer:
      "Correct. Every render from Sora 2 Studio is watermark-free by default—no paid upgrade required.",
  },
  {
    question: "What are the technical requirements?",
    answer:
      "Any modern browser with WebGPU support works. Heavy lifting happens on our distributed GPU network, so you can create from a laptop.",
  },
  {
    question: "How can teams collaborate?",
    answer:
      "Invite teammates into shared workspaces, branch timelines, and merge changes. Reviewer links enable frame-accurate feedback loops.",
  },
  {
    question: "Can I automate renders?",
    answer:
      "Yes. Use the Sora 2 API or no-code automations to queue renders, generate variants, and sync assets to your DAM.",
  },
];

function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute left-1/2 top-[-10%] size-[520px] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute left-[10%] top-[30%] size-[360px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-[5%] top-[45%] size-[420px] rounded-full bg-purple-500/20 blur-[120px]" />
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="aspect-[9/16] w-full bg-slate-900">
      <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top,rgba(95,198,255,0.3),rgba(15,23,42,0.95))]">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
            Preview
          </span>
          <span className="text-xs text-white/50">00:42 • 4K Ultra</span>
        </div>
        <div className="px-6 py-8">
          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
              Generated with Sora 2
            </p>
            <p className="text-2xl font-semibold text-white">
              Neon rainforest expedition
            </p>
            <p className="text-sm text-white/70">
              Stable motion, crisp detail, zero watermark. Export-ready in 54
              seconds.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs text-white/70">
              <span className="size-2 rounded-full bg-lime-300" />
              Rendering complete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
