import { AdPlacement } from "@/components/AdPlacement";
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Home, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function InfoTip({ text }: { text: string }) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="size-3.5 text-muted-foreground cursor-help inline ml-1" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-xs"><p>{text}</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface FinancingResult {
  monthlyPayment: number;
  totalPayment: number;
  totalProfit: number;
  type: string;
  description: string;
}

function calculateMurabaha(price: number, downPayment: number, profitRate: number, years: number): FinancingResult {
  const financed = price - downPayment;
  const totalProfit = financed * (profitRate / 100) * years;
  const totalPayment = financed + totalProfit;
  const monthlyPayment = totalPayment / (years * 12);
  return {
    monthlyPayment,
    totalPayment: totalPayment + downPayment,
    totalProfit,
    type: "Murabaha",
    description: "Cost-plus financing. The bank buys the property and sells it to you at an agreed markup, paid in fixed installments.",
  };
}

function calculateIjara(price: number, downPayment: number, rentalRate: number, years: number): FinancingResult {
  const financed = price - downPayment;
  // Simplified: rental rate applies as annual percentage, decreasing as principal is paid
  const months = years * 12;
  let balance = financed;
  const principalPerMonth = financed / months;
  let totalRent = 0;
  for (let i = 0; i < months; i++) {
    totalRent += balance * (rentalRate / 100 / 12);
    balance -= principalPerMonth;
  }
  const totalPayment = financed + totalRent;
  const monthlyPayment = totalPayment / months;
  return {
    monthlyPayment,
    totalPayment: totalPayment + downPayment,
    totalProfit: totalRent,
    type: "Ijara",
    description: "Lease-to-own. The bank owns the property and leases it to you. Rent payments gradually transfer ownership to you.",
  };
}

function calculateMusharakah(price: number, downPayment: number, profitRate: number, years: number): FinancingResult {
  const financed = price - downPayment;
  const months = years * 12;
  let bankShare = financed;
  const unitPurchase = financed / months;
  let totalRent = 0;
  for (let i = 0; i < months; i++) {
    totalRent += bankShare * (profitRate / 100 / 12);
    bankShare -= unitPurchase;
  }
  const totalPayment = financed + totalRent;
  const monthlyAvg = totalPayment / months;
  return {
    monthlyPayment: monthlyAvg,
    totalPayment: totalPayment + downPayment,
    totalProfit: totalRent,
    type: "Diminishing Musharakah",
    description: "Partnership model. You and the bank co-own the property. You buy the bank's share gradually while paying rent on their portion.",
  };
}

const formatNum = (n: number) =>
  new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

export function MortgageCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState("300000");
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [profitRate, setProfitRate] = useState(4.5);
  const [years, setYears] = useState(25);
  const [currency, setCurrency] = useState("USD");

  const price = Number.parseFloat(propertyPrice) || 0;
  const downPayment = price * (downPaymentPct / 100);

  const results = useMemo(() => {
    if (price <= 0) return [];
    return [
      calculateMurabaha(price, downPayment, profitRate, years),
      calculateIjara(price, downPayment, profitRate, years),
      calculateMusharakah(price, downPayment, profitRate, years),
    ];
  }, [price, downPayment, profitRate, years]);

  const cheapest = results.length
    ? results.reduce((a, b) => (a.totalPayment < b.totalPayment ? a : b))
    : null;

  return (
    <div className="geo-pattern min-h-[calc(100vh-4rem)]">
      <div className="container py-8 md:py-12">
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm">
              <Home className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Islamic Mortgage Calculator</h1>
              <p className="text-muted-foreground text-sm">Compare Shariah-compliant financing options</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[340px,1fr] gap-6">
          {/* Inputs */}
          <Card className="h-fit lg:sticky lg:top-20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label className="text-sm">Currency</Label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="USD">USD ($)</option>
                  <option value="BND">BND (B$)</option>
                  <option value="MYR">MYR (RM)</option>
                  <option value="SGD">SGD (S$)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="SAR">SAR (﷼)</option>
                  <option value="AED">AED (د.إ)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Property Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{currency}</span>
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={propertyPrice}
                    onChange={(e) => { if (/^\d*\.?\d*$/.test(e.target.value)) setPropertyPrice(e.target.value); }}
                    className="pl-14 text-right font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm">Down Payment</Label>
                  <span className="text-sm font-mono text-muted-foreground">{downPaymentPct}% = {currency} {formatNum(downPayment)}</span>
                </div>
                <Slider
                  value={[downPaymentPct]}
                  onValueChange={([v]) => setDownPaymentPct(v)}
                  min={5}
                  max={50}
                  step={5}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm">
                    Profit / Rental Rate
                    <InfoTip text="Annual profit rate used by the bank. This replaces 'interest' in Islamic financing. Typically 3-7%." />
                  </Label>
                  <span className="text-sm font-mono text-muted-foreground">{profitRate.toFixed(1)}%</span>
                </div>
                <Slider
                  value={[profitRate]}
                  onValueChange={([v]) => setProfitRate(v)}
                  min={2}
                  max={10}
                  step={0.1}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm">Financing Period</Label>
                  <span className="text-sm font-mono text-muted-foreground">{years} years</span>
                </div>
                <Slider
                  value={[years]}
                  onValueChange={([v]) => setYears(v)}
                  min={5}
                  max={35}
                  step={1}
                />
              </div>

              <div className="border-t pt-4 text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Financed amount</span>
                  <span className="font-mono">{currency} {formatNum(price - downPayment)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            {results.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  Enter a property price to compare financing options
                </CardContent>
              </Card>
            ) : (
              results.map((r) => (
                <Card key={r.type} className={`transition-all ${r === cheapest ? "border-primary border-2 bg-primary/5" : ""}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{r.type}</CardTitle>
                      {r === cheapest && (
                        <Badge className="bg-primary text-primary-foreground">Best Value</Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm">{r.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Monthly</p>
                        <p className="text-xl font-bold font-mono mt-1">
                          {currency} {formatNum(r.monthlyPayment)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Cost</p>
                        <p className="text-xl font-bold font-mono mt-1">
                          {currency} {formatNum(r.totalPayment)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Bank Profit</p>
                        <p className="text-xl font-bold font-mono mt-1 text-amber-600 dark:text-amber-400">
                          {currency} {formatNum(r.totalProfit)}
                        </p>
                      </div>
                    </div>
                    {/* Cost breakdown bar */}
                    <div className="mt-4 h-3 rounded-full bg-muted overflow-hidden flex">
                      <div
                        className="bg-primary/80 rounded-l-full"
                        style={{ width: `${(downPayment / r.totalPayment) * 100}%` }}
                        title="Down payment"
                      />
                      <div
                        className="bg-primary/40"
                        style={{ width: `${((price - downPayment) / r.totalPayment) * 100}%` }}
                        title="Principal"
                      />
                      <div
                        className="bg-amber-400/60 rounded-r-full"
                        style={{ width: `${(r.totalProfit / r.totalPayment) * 100}%` }}
                        title="Bank profit"
                      />
                    </div>
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-primary/80" /> Down payment</span>
                      <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-primary/40" /> Principal</span>
                      <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-amber-400/60" /> Bank profit</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}

            {/* Explanation */}
            <Card className="bg-muted/50">
              <CardContent className="pt-5 text-sm text-muted-foreground space-y-3">
                <p className="font-medium text-foreground">Understanding Islamic Financing</p>
                <p>
                  Islamic finance prohibits <em>riba</em> (interest). Instead, banks use profit-sharing, leasing, or cost-plus structures:
                </p>
                <ul className="space-y-2 list-disc pl-4 text-xs">
                  <li><strong>Murabaha:</strong> Fixed markup. Payments never change. You know the exact total cost upfront. Most straightforward option.</li>
                  <li><strong>Ijara:</strong> Lease-to-own. Rent decreases as you gain ownership. Better if rates might drop.</li>
                  <li><strong>Diminishing Musharakah:</strong> Joint ownership. You buy the bank's share gradually. Often the lowest total cost.</li>
                </ul>
                <p className="text-xs">
                  Note: Actual rates and terms vary by institution. This calculator provides estimates for comparison purposes.
                </p>
              </CardContent>
            </Card>
          </div>
        <AdPlacement slot="calc-bottom" format="horizontal" className="mt-8" />
        </div>
      </div>
    </div>
  );
}
