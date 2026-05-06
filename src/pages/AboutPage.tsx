import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, Heart, Globe, Shield, ArrowRight, MapPin } from "lucide-react";

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero banner */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/water-village.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/85 to-emerald-900/90" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="container relative z-10 py-16 text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-3xl">🇧🇳</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About Brunei Halal Widget</h1>
          <p className="text-lg text-white/75 max-w-xl mx-auto mt-3">
            Free, accurate Islamic finance tools — proudly built from Brunei Darussalam for the global Muslim community.
          </p>
        </div>
      </div>

      <div className="container max-w-3xl py-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="size-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-3">
            <p>
              Brunei Halal Widget was created with a simple mission: make Islamic finance accessible to every Muslim,
              regardless of where they live or how much they earn.
            </p>
            <p>
              Born in Negara Brunei Darussalam — a nation built on the philosophy of <strong>Melayu Islam Beraja (MIB)</strong> — 
              our tools are rooted in Shariah principles and designed to serve the entire Ummah.
            </p>
            <p>
              Zakat is one of the five pillars of Islam, yet many Muslims struggle to calculate it correctly.
              Islamic mortgages are complex, and halal investment options can be confusing. We built these
              tools to simplify it all.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-5 text-primary" />
              Why Brunei?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-3">
            <p>
              Brunei Darussalam is one of the world's leading Islamic nations, with a strong commitment to 
              Shariah-compliant finance, the Brunei Halal brand, and Islamic education.
            </p>
            <p>
              Our banking system — including BIBD and TAIB — operates on Islamic principles. 
              AMBD (Autoriti Monetari Brunei Darussalam) ensures financial services comply with Shariah law.
              This environment makes Brunei the perfect home for tools that serve the Muslim community worldwide.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <Calculator className="size-8 text-primary mx-auto" />
              <h3 className="font-semibold">4 Free Calculators</h3>
              <p className="text-sm text-muted-foreground">
                Zakat, Islamic mortgage comparison, investment growth, and gold & silver zakat
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <Shield className="size-8 text-primary mx-auto" />
              <h3 className="font-semibold">Shariah-Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Based on established fiqh rulings from major Islamic schools of thought
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <Globe className="size-8 text-primary mx-auto" />
              <h3 className="font-semibold">Multi-Currency</h3>
              <p className="text-sm text-muted-foreground">
                Support for BND, USD, MYR, SGD, GBP, EUR, SAR, AED, IDR, and PKR
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center space-y-2">
              <Heart className="size-8 text-primary mx-auto" />
              <h3 className="font-semibold">100% Free</h3>
              <p className="text-sm text-muted-foreground">
                No hidden charges, no premium tiers. Supported by non-intrusive ads
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-3">
            <p>
              Brunei Halal Widget provides estimates for informational and educational purposes only.
              Our calculators are designed to assist you, but they should not be considered
              as fatwas or definitive Islamic rulings.
            </p>
            <p>
              We strongly recommend consulting a qualified Islamic scholar or certified
              financial advisor for specific guidance on your zakat obligations, mortgage
              decisions, and investment strategies.
            </p>
          </CardContent>
        </Card>

        <div className="text-center pt-4">
          <Button size="lg" asChild>
            <Link to="/zakat">
              Start Calculating <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
