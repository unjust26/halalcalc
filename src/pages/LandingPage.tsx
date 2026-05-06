import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calculator, TrendingUp, Home, Gem, Shield, Globe, Zap, MapPin, Star } from "lucide-react";

const CALCULATORS = [
  {
    title: "Zakat Calculator",
    description: "Calculate your annual zakat obligation across all asset types — cash, investments, business assets, and debts.",
    href: "/zakat",
    icon: Calculator,
    color: "from-emerald-500 to-emerald-700",
    badge: "Most Popular",
  },
  {
    title: "Islamic Mortgage",
    description: "Compare Murabaha, Ijara, and Diminishing Musharakah financing options side by side.",
    href: "/mortgage",
    icon: Home,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Investment Growth",
    description: "Project your halal investment returns with compound growth and regular contributions.",
    href: "/investment",
    icon: TrendingUp,
    color: "from-violet-500 to-violet-700",
  },
  {
    title: "Gold & Silver Zakat",
    description: "Calculate zakat on precious metals with up-to-date gold and silver price references.",
    href: "/gold-zakat",
    icon: Gem,
    color: "from-amber-500 to-amber-700",
  },
];

const TRUST_POINTS = [
  { icon: Shield, label: "Shariah-Compliant", desc: "Based on established fiqh rulings" },
  { icon: MapPin, label: "Made in Brunei", desc: "Proudly from Brunei Darussalam 🇧🇳" },
  { icon: Globe, label: "Used Worldwide", desc: "Trusted by Muslims globally" },
  { icon: Zap, label: "Instant & Free", desc: "No signup, no fees, no tracking" },
];

// Inline SVG mosque silhouette for decorative use
function MosqueSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 200" className={className} fill="currentColor" opacity="0.06">
      {/* Central dome */}
      <ellipse cx="400" cy="120" rx="80" ry="70" />
      <rect x="320" y="120" width="160" height="80" />
      {/* Central minaret */}
      <rect x="390" y="30" width="20" height="90" />
      <ellipse cx="400" cy="30" rx="12" ry="15" />
      <circle cx="400" cy="15" r="5" />
      {/* Left minaret */}
      <rect x="260" y="60" width="16" height="140" />
      <ellipse cx="268" cy="60" rx="10" ry="12" />
      <circle cx="268" cy="48" r="4" />
      {/* Right minaret */}
      <rect x="524" y="60" width="16" height="140" />
      <ellipse cx="532" cy="60" rx="10" ry="12" />
      <circle cx="532" cy="48" r="4" />
      {/* Side domes */}
      <ellipse cx="310" cy="140" rx="50" ry="40" />
      <rect x="260" y="140" width="100" height="60" />
      <ellipse cx="490" cy="140" rx="50" ry="40" />
      <rect x="440" y="140" width="100" height="60" />
      {/* Outer minarets */}
      <rect x="170" y="80" width="14" height="120" />
      <ellipse cx="177" cy="80" rx="9" ry="10" />
      <circle cx="177" cy="70" r="3.5" />
      <rect x="616" y="80" width="14" height="120" />
      <ellipse cx="623" cy="80" rx="9" ry="10" />
      <circle cx="623" cy="70" r="3.5" />
      {/* Base */}
      <rect x="150" y="190" width="500" height="10" rx="2" />
    </svg>
  );
}

export function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* ═══════════════════ HERO — Full Brunei Mosque Background ═══════════════════ */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-mosque.jpg')" }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Gold shimmer strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Bismillah badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              <span className="text-amber-300">✦</span>
              <span className="font-arabic">بسم الله الرحمن الرحيم</span>
              <span className="text-amber-300">✦</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg">
              Islamic Finance
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Free, accurate calculators for Zakat, Islamic mortgages, halal investments, and more.
              Proudly built from <strong className="text-amber-300">Brunei Darussalam</strong> for the global Muslim community.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button size="lg" asChild className="text-base h-13 px-8 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-900/30 border-0">
                <Link to="/zakat">
                  Calculate Your Zakat
                  <ArrowRight className="size-5 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-13 px-8 border-2 border-amber-400 text-amber-400 bg-black/40 hover:bg-amber-400 hover:text-black backdrop-blur-sm font-semibold">
                <Link to="/mortgage">
                  Compare Mortgages
                </Link>
              </Button>
            </div>

            {/* Brunei pride tag */}
            <div className="flex items-center justify-center gap-2 pt-4 text-white/60 text-sm">
              <span>🇧🇳</span>
              <span>Proudly from Negara Brunei Darussalam</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST BAR ═══════════════════ */}
      <section className="border-y bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/20 dark:via-background dark:to-emerald-950/20">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            {TRUST_POINTS.map((tp) => (
              <div key={tp.label} className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <tp.icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{tp.label}</p>
                  <p className="text-xs text-muted-foreground">{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CALCULATOR CARDS ═══════════════════ */}
      <section className="relative overflow-hidden">
        <MosqueSilhouette className="absolute top-0 left-0 w-full h-48 text-primary pointer-events-none" />
        <div className="container py-16 md:py-24 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-medium mb-3">
              <Star className="size-4" />
              <span>Your Complete Islamic Finance Toolkit</span>
              <Star className="size-4" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Every Tool You Need
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Manage your wealth in accordance with Islamic principles — all in one place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {CALCULATORS.map((calc) => (
              <Link key={calc.href} to={calc.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 relative overflow-hidden">
                  {calc.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {calc.badge}
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className={`size-12 rounded-xl bg-gradient-to-br ${calc.color} flex items-center justify-center mb-3 shadow-sm`}>
                      <calc.icon className="size-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {calc.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {calc.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BRUNEI COMMUNITY — Water Village ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/water-village.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/85 to-emerald-900/90" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-medium mb-3">
                <span>🇧🇳</span>
                <span>From Kampong Ayer to the World</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                Built in Brunei, For the <span className="text-amber-300">Ummah</span>
              </h2>
              <p className="text-white/75 mt-3 max-w-xl mx-auto">
                Rooted in the values of Melayu Islam Beraja (MIB), our tools serve Muslims everywhere — 
                from the water villages of Kampong Ayer to communities around the globe.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { emoji: "🕌", value: "4", label: "Free Calculators", sub: "Zakat, Mortgage, Investment, Gold" },
                { emoji: "🤖", value: "Haji Hafiz", label: "AI Assistant", sub: "EN / BM / العربية" },
                { emoji: "💰", value: "100%", label: "Free Forever", sub: "No hidden costs" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
                  <div className="text-white font-medium text-sm mt-1">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW ZAKAT WORKS ═══════════════════ */}
      <section className="relative overflow-hidden">
        {/* Islamic pattern background */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "url('/images/islamic-pattern.jpg')",
            backgroundSize: "400px 400px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-medium mb-3">
                <span>☪</span>
                <span>One of the Five Pillars</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                How Zakat Calculation Works
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                Zakat is an annual obligation to give 2.5% of qualifying wealth to those in need.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Check Nisab",
                  desc: "Your total wealth must exceed the Nisab threshold (value of 85g of gold or 595g of silver) for a full lunar year.",
                },
                {
                  step: "2",
                  title: "Calculate Assets",
                  desc: "Add up all zakatable assets: cash, gold, silver, investments, business inventory, and rental income.",
                },
                {
                  step: "3",
                  title: "Pay 2.5%",
                  desc: "Subtract debts, then pay 2.5% of qualifying wealth. Our calculator handles all the math for you.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="size-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA — with mosque silhouette ═══════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900">
        <MosqueSilhouette className="absolute bottom-0 left-0 w-full h-32 text-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="container py-16 md:py-24 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="text-5xl">🕌</div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Start Managing Your Wealth <span className="text-amber-300">Today</span>
            </h2>
            <p className="text-white/80 text-lg">
              Join Muslims worldwide who use Brunei Halal Widget to fulfill their financial obligations with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="text-base h-13 px-8 bg-white text-emerald-700 hover:bg-white/90 shadow-xl">
                <Link to="/zakat">
                  Get Started — It's Free
                  <ArrowRight className="size-5 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-13 px-8 border-white/30 text-white hover:bg-white/10">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t bg-muted/20">
        <div className="container py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-2xl">🇧🇳</span>
              <div>
                <span className="font-bold text-foreground">Brunei Halal Widget</span>
                <span className="text-muted-foreground block text-xs">Made with ❤️ in Brunei Darussalam</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/zakat" className="hover:text-foreground transition-colors">Zakat</Link>
              <Link to="/mortgage" className="hover:text-foreground transition-colors">Mortgage</Link>
              <Link to="/investment" className="hover:text-foreground transition-colors">Investment</Link>
              <Link to="/gold-zakat" className="hover:text-foreground transition-colors">Gold & Silver</Link>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center">
            Disclaimer: Brunei Halal Widget provides estimates for informational purposes only. Please consult a qualified Islamic scholar or financial advisor for specific rulings.
          </p>
        </div>
      </footer>
    </div>
  );
}
