import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, User, Send, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-[#f4f4f5] font-sans antialiased overflow-x-hidden relative">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.08)_0%,transparent_80%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.05)_0%,transparent_80%)] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1f1f23]/40 bg-[#050505]/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5 font-semibold tracking-tight text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-xs text-white shadow-lg shadow-indigo-500/20">
              P
            </span>
            <span>Portfolio OS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#a1a1aa]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#features" className="hover:text-white transition-colors">Workspace</a>
            <a href="#next-steps" className="hover:text-white transition-colors">Next Steps</a>
          </nav>
          <div>
            <Button variant="outline" size="sm" className="border-[#27272a] hover:bg-[#18181b] text-white">
              v1.0.0
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 relative z-10">
        <section className="mx-auto max-w-3xl py-20 text-center md:py-32 flex flex-col items-center">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3.5 py-1 text-xs font-medium text-indigo-400 backdrop-blur-sm animate-pulse">
            <Sparkles className="size-3" />
            <span>Workspace Cleaned & Ready</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f4f4f5] to-[#71717a] sm:text-6xl max-w-2xl leading-tight sm:leading-none">
            Ready to Build Your Digital Masterpiece
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#a1a1aa] max-w-xl">
            The boilerplate has been cleaned up. Next.js, Tailwind v4, and shadcn/ui are initialized. We are ready to craft a stellar developer portfolio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
            <Button size="lg" className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 gap-2 h-10 px-5">
              <span>Let's start coding</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#27272a] hover:bg-[#18181b] text-white h-10 px-5">
              <span>Read Docs</span>
            </Button>
          </div>
        </section>

        {/* Feature Highlights / Planned Sections */}
        <section id="features" className="w-full max-w-5xl py-12 border-t border-[#1f1f23]/40">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-[#1f1f23]/40 bg-[#09090b]/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-[#0c0c0e]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <User className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">About & Bio</h3>
              <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">
                Introduce yourself, your journey, stack, and what drives you as a creator.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-[#1f1f23]/40 bg-[#09090b]/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-[#0c0c0e]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Code className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">Projects Gallery</h3>
              <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">
                Showcase your best work with interactive cards, live links, and source code.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-[#1f1f23]/40 bg-[#09090b]/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-[#0c0c0e] sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Send className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">Contact & Socials</h3>
              <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">
                Let visitors and recruiters reach out directly through forms or active handles.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#1f1f23]/40 bg-[#050505]/40 py-6">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© {new Date().getFullYear()} Portfolio OS. Ready for deployment.</p>
          <div className="flex gap-4">
            <a href="https://nextjs.org" className="hover:text-white transition-colors">Next.js 16</a>
            <a href="https://tailwindcss.com" className="hover:text-white transition-colors">Tailwind CSS v4</a>
            <a href="https://shadcn.com" className="hover:text-white transition-colors">shadcn/ui</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

