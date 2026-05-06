import { AdPlacement } from "@/components/AdPlacement";
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Info } from "lucide-react";
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

const formatNum = (n: number) =>
  new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);


interface YearData {
  year: number;
  startBalance: number;
  contributions: number;
  growth: number;
  endBalance: number;
}

function calculateGrowth(
  initial: number,
  monthly: number,
  annualReturn: number,
  years: number,
): YearData[] {
  const data: YearData[] = [];
  let balance = initial;

  for (let y = 1; y <= years; y++) {
    const startBalance = balance;
    const yearContributions = monthly * 12;
    // Monthly compounding
    for (let m = 0; m < 12; m++) {
      balance += monthly;
      balance *= 1 + annualReturn / 100 / 12;
    }
    const growth = balance - startBalance - yearContributions;
    data.push({
      year: y,
      startBalance,
      contributions: yearContributions,
      growth,
      endBalance: balance,
    });
  }
  return data;
}

export function InvestmentCalculatorPage() {
  const [initialAmount, setInitialAmount] = useState("10000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [investmentYears, setInvestmentYears] = useState(20);
  const [currency, setCurrency] = useState("USD");

  const initial = Number.parseFloat(initialAmount) || 0;
  const monthly = Number.parseFloat(monthlyContribution) || 0;

  const yearlyData = useMemo(
    () => calculateGrowth(initial, monthly, expectedReturn, investmentYears),
    [initial, monthly, expectedReturn, investmentYears],
  );

  const finalBalance = yearlyData.length ? yearlyData[yearlyData.length - 1].endBalance : 0;
  const totalContributions = initial + monthly * 12 * investmentYears;
  const totalGrowth = finalBalance - totalContributions;

  // Milestones
  const firstMillion = yearlyData.find((d) => d.endBalance >= 1_000_000);
  const firstHundredK = yearlyData.find((d) => d.endBalance >= 100_000);

  // Bar chart max
  const maxBalance = yearlyData.length ? yearlyData[yearlyData.length - 1].endBalance : 1;

  return (
    <div className="geo-pattern min-h-[calc(100vh-4rem)]">
      <div className="container py-8 md:py-12">
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center shadow-sm">
              <TrendingUp className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Halal Investment Calculator</h1>
              <p className="text-muted-foreground text-sm">Project your Shariah-compliant investment growth</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[340px,1fr] gap-6">
          {/* Inputs */}
          <div className="space-y-4">
            <Card className="h-fit lg:sticky lg:top-20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Investment Parameters</CardTitle>
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
                  <Label className="text-sm">
                    Initial Investment
                    <InfoTip text="The lump sum you invest today" />
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{currency}</span>
                    <Input
                      type="text"
                      inputMode="decimal"
                      value={initialAmount}
                      onChange={(e) => { if (/^\d*\.?\d*$/.test(e.target.value)) setInitialAmount(e.target.value); }}
                      className="pl-14 text-right font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">
                    Monthly Contribution
                    <InfoTip text="Amount you add every month. Even small regular contributions compound significantly over time." />
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{currency}</span>
                    <Input
                      type="text"
                      inputMode="decimal"
                      value={monthlyContribution}
                      onChange={(e) => { if (/^\d*\.?\d*$/.test(e.target.value)) setMonthlyContribution(e.target.value); }}
                      className="pl-14 text-right font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">
                      Expected Annual Return
                      <InfoTip text="Historical halal equity fund returns: 6-10% annually. Sukuk/bonds: 3-5%. Blended: 5-8%." />
                    </Label>
                    <span className="text-sm font-mono text-muted-foreground">{expectedReturn.toFixed(1)}%</span>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={([v]) => setExpectedReturn(v)}
                    min={1}
                    max={15}
                    step={0.5}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Conservative</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-sm">Investment Period</Label>
                    <span className="text-sm font-mono text-muted-foreground">{investmentYears} years</span>
                  </div>
                  <Slider
                    value={[investmentYears]}
                    onValueChange={([v]) => setInvestmentYears(v)}
                    min={1}
                    max={40}
                    step={1}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="pt-5 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Final Balance</p>
                  <p className="text-xl md:text-2xl font-bold font-mono text-primary mt-1">
                    {currency} {formatNum(finalBalance)}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-5 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">You Invested</p>
                  <p className="text-xl md:text-2xl font-bold font-mono mt-1">
                    {currency} {formatNum(totalContributions)}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-5 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Growth</p>
                  <p className="text-xl md:text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                    {currency} {formatNum(totalGrowth)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {totalContributions > 0 ? `${((totalGrowth / totalContributions) * 100).toFixed(0)}% return` : "—"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Milestones */}
            {(firstHundredK || firstMillion) && (
              <Card>
                <CardContent className="pt-5">
                  <p className="text-sm font-medium mb-3">🎯 Milestones</p>
                  <div className="flex flex-wrap gap-3">
                    {firstHundredK && (
                      <div className="px-3 py-1.5 rounded-lg bg-muted text-sm">
                        <span className="font-medium">{currency} 100K</span>
                        <span className="text-muted-foreground ml-1.5">in year {firstHundredK.year}</span>
                      </div>
                    )}
                    {firstMillion && (
                      <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-sm">
                        <span className="font-medium text-primary">🏆 {currency} 1M</span>
                        <span className="text-muted-foreground ml-1.5">in year {firstMillion.year}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Visual growth chart */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Growth Over Time</CardTitle>
                <CardDescription className="text-xs">Contribution (green) vs growth (lighter)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1.5">
                  {yearlyData.map((d) => {
                    const contribWidth = ((initial + d.year * monthly * 12) / maxBalance) * 100;
                    const totalWidth = (d.endBalance / maxBalance) * 100;
                    const showLabel = investmentYears <= 10 || d.year % Math.ceil(investmentYears / 15) === 0 || d.year === investmentYears;
                    if (!showLabel) return null;
                    return (
                      <div key={d.year} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-8 text-right font-mono shrink-0">
                          Y{d.year}
                        </span>
                        <div className="flex-1 h-5 rounded bg-muted relative overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-primary/30 rounded"
                            style={{ width: `${totalWidth}%` }}
                          />
                          <div
                            className="absolute inset-y-0 left-0 bg-primary/70 rounded-l"
                            style={{ width: `${contribWidth}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground w-24 text-right shrink-0">
                          {formatNum(d.endBalance)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Year-by-year table */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Year-by-Year Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-xs text-muted-foreground uppercase tracking-wider">
                        <th className="py-2 text-left">Year</th>
                        <th className="py-2 text-right">Start</th>
                        <th className="py-2 text-right">Added</th>
                        <th className="py-2 text-right">Growth</th>
                        <th className="py-2 text-right font-medium text-foreground">End Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlyData.map((d) => (
                        <tr key={d.year} className="border-b border-muted/50 hover:bg-muted/30">
                          <td className="py-2 font-mono">{d.year}</td>
                          <td className="py-2 text-right font-mono text-muted-foreground">{formatNum(d.startBalance)}</td>
                          <td className="py-2 text-right font-mono text-muted-foreground">{formatNum(d.contributions)}</td>
                          <td className="py-2 text-right font-mono text-emerald-600 dark:text-emerald-400">+{formatNum(d.growth)}</td>
                          <td className="py-2 text-right font-mono font-medium">{formatNum(d.endBalance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Halal investment info */}
            <Card className="bg-muted/50">
              <CardContent className="pt-5 text-sm text-muted-foreground space-y-3">
                <p className="font-medium text-foreground">Halal Investment Options</p>
                <ul className="space-y-2 list-disc pl-4 text-xs">
                  <li><strong>Islamic Equity Funds:</strong> Invest in Shariah-screened stocks. Historical returns of 6-10% annually.</li>
                  <li><strong>Sukuk (Islamic Bonds):</strong> Asset-backed certificates. Lower risk, 3-5% annual returns.</li>
                  <li><strong>Islamic REITs:</strong> Real estate investment trusts compliant with Shariah. 4-8% returns.</li>
                  <li><strong>Gold:</strong> Physical or gold-backed funds. Hedge against inflation.</li>
                  <li><strong>Halal ETFs:</strong> Exchange-traded funds tracking Shariah-compliant indices like DJIM or S&P Shariah.</li>
                </ul>
                <p className="text-xs">
                  Past performance does not guarantee future results. Always verify Shariah compliance with a qualified advisor.
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
