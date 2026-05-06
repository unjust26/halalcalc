import { AdPlacement } from "@/components/AdPlacement";
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Gem, Info, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

const NISAB_GOLD_GRAMS = 85;
const NISAB_SILVER_GRAMS = 595;
const ZAKAT_RATE = 0.025;

// Common gold karats and their purity
const GOLD_KARATS = [
  { label: "24K (Pure)", purity: 1.0 },
  { label: "22K", purity: 22 / 24 },
  { label: "21K", purity: 21 / 24 },
  { label: "18K", purity: 18 / 24 },
  { label: "14K", purity: 14 / 24 },
];

export function GoldZakatPage() {
  const [goldPricePerGram, setGoldPricePerGram] = useState("95");
  const [silverPricePerGram, setSilverPricePerGram] = useState("1.05");
  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState<"grams" | "ounces" | "tola">("grams");

  // Gold entries
  const [goldEntries, setGoldEntries] = useState<{ weight: string; karat: number }[]>([
    { weight: "", karat: 0 },
  ]);

  // Silver
  const [silverWeight, setSilverWeight] = useState("");

  const toGrams = (val: number): number => {
    if (unit === "ounces") return val * 31.1035;
    if (unit === "tola") return val * 11.6638;
    return val;
  };

  const unitLabel = unit === "ounces" ? "oz" : unit === "tola" ? "tola" : "g";

  const goldPrice = Number.parseFloat(goldPricePerGram) || 0;
  const silverPrice = Number.parseFloat(silverPricePerGram) || 0;

  const goldDetails = useMemo(() => {
    return goldEntries.map((entry) => {
      const weight = Number.parseFloat(entry.weight) || 0;
      const weightInGrams = toGrams(weight);
      const purity = GOLD_KARATS[entry.karat].purity;
      const pureGold = weightInGrams * purity;
      const value = pureGold * goldPrice;
      return { ...entry, weightInGrams, purity, pureGold, value };
    });
  }, [goldEntries, goldPrice, unit]);

  const totalPureGoldGrams = goldDetails.reduce((sum, d) => sum + d.pureGold, 0);
  const totalGoldValue = goldDetails.reduce((sum, d) => sum + d.value, 0);

  const silverWeightNum = Number.parseFloat(silverWeight) || 0;
  const silverWeightGrams = toGrams(silverWeightNum);
  const totalSilverValue = silverWeightGrams * silverPrice;

  const totalValue = totalGoldValue + totalSilverValue;

  const goldNisab = NISAB_GOLD_GRAMS * goldPrice;
  const silverNisab = NISAB_SILVER_GRAMS * silverPrice;

  const isAboveGoldNisab = totalPureGoldGrams >= NISAB_GOLD_GRAMS;
  const isAboveSilverNisab = silverWeightGrams >= NISAB_SILVER_GRAMS;
  const isAboveValueNisab = totalValue >= Math.min(goldNisab, silverNisab);

  const zakatOnGold = isAboveGoldNisab ? totalGoldValue * ZAKAT_RATE : (isAboveValueNisab ? totalGoldValue * ZAKAT_RATE : 0);
  const zakatOnSilver = isAboveSilverNisab ? totalSilverValue * ZAKAT_RATE : (isAboveValueNisab ? totalSilverValue * ZAKAT_RATE : 0);
  const totalZakat = zakatOnGold + zakatOnSilver;

  const addGoldEntry = () => {
    setGoldEntries([...goldEntries, { weight: "", karat: 0 }]);
  };

  const updateGoldEntry = (index: number, field: "weight" | "karat", value: string | number) => {
    const updated = [...goldEntries];
    if (field === "weight" && typeof value === "string") {
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        updated[index] = { ...updated[index], weight: value };
      }
    } else if (field === "karat" && typeof value === "number") {
      updated[index] = { ...updated[index], karat: value };
    }
    setGoldEntries(updated);
  };

  const removeGoldEntry = (index: number) => {
    if (goldEntries.length > 1) {
      setGoldEntries(goldEntries.filter((_, i) => i !== index));
    }
  };

  const hasValues = totalGoldValue > 0 || totalSilverValue > 0;

  return (
    <div className="geo-pattern min-h-[calc(100vh-4rem)]">
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-sm">
              <Gem className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Gold & Silver Zakat</h1>
              <p className="text-muted-foreground text-sm">Calculate zakat on your precious metals</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr,300px] gap-6">
          <div className="space-y-4">
            {/* Price & Unit Settings */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Metal Prices & Units</CardTitle>
                <CardDescription className="text-xs">
                  Enter current market prices. Check your local gold/silver market for today's rates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
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
                      <option value="PKR">PKR (₨)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">
                      Gold per gram
                      <InfoTip text="Price of 24K pure gold per gram in your local currency" />
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{currency}</span>
                      <Input
                        type="text"
                        inputMode="decimal"
                        value={goldPricePerGram}
                        onChange={(e) => { if (/^\d*\.?\d*$/.test(e.target.value)) setGoldPricePerGram(e.target.value); }}
                        className="pl-12 text-right font-mono text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">
                      Silver per gram
                      <InfoTip text="Price of pure silver per gram in your local currency" />
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{currency}</span>
                      <Input
                        type="text"
                        inputMode="decimal"
                        value={silverPricePerGram}
                        onChange={(e) => { if (/^\d*\.?\d*$/.test(e.target.value)) setSilverPricePerGram(e.target.value); }}
                        className="pl-12 text-right font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Label className="text-sm">Weight Unit</Label>
                  <Tabs value={unit} onValueChange={(v) => setUnit(v as typeof unit)} className="mt-1.5">
                    <TabsList>
                      <TabsTrigger value="grams" className="text-xs">Grams</TabsTrigger>
                      <TabsTrigger value="ounces" className="text-xs">Troy Ounces</TabsTrigger>
                      <TabsTrigger value="tola" className="text-xs">Tola</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            {/* Gold entries */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-md gold-gradient" />
                    <CardTitle className="text-base">Gold Holdings</CardTitle>
                  </div>
                  <Button variant="outline" size="sm" onClick={addGoldEntry} className="text-xs h-7">
                    + Add Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {goldEntries.map((entry, i) => (
                  <div key={i} className="flex gap-3 items-end">
                    <div className="flex-1 space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Weight ({unitLabel})</Label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="0"
                        value={entry.weight}
                        onChange={(e) => updateGoldEntry(i, "weight", e.target.value)}
                        className="font-mono text-sm"
                      />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Karat</Label>
                      <select
                        value={entry.karat}
                        onChange={(e) => updateGoldEntry(i, "karat", Number.parseInt(e.target.value))}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {GOLD_KARATS.map((k, idx) => (
                          <option key={idx} value={idx}>{k.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-24 text-right">
                      <p className="text-xs text-muted-foreground">Value</p>
                      <p className="text-sm font-mono">{formatNum(goldDetails[i]?.value || 0)}</p>
                    </div>
                    {goldEntries.length > 1 && (
                      <Button variant="ghost" size="sm" onClick={() => removeGoldEntry(i)} className="text-destructive h-9 px-2">
                        ✕
                      </Button>
                    )}
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between text-sm">
                  <span className="text-muted-foreground">Total pure gold: {totalPureGoldGrams.toFixed(2)}g</span>
                  <span className="font-medium font-mono">{currency} {formatNum(totalGoldValue)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Silver */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-md bg-gradient-to-br from-gray-300 to-gray-500" />
                  <CardTitle className="text-base">Silver Holdings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 items-end">
                  <div className="flex-1 space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Weight ({unitLabel})</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      placeholder="0"
                      value={silverWeight}
                      onChange={(e) => { if (/^\d*\.?\d*$/.test(e.target.value)) setSilverWeight(e.target.value); }}
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="w-32 text-right">
                    <p className="text-xs text-muted-foreground">Value</p>
                    <p className="text-sm font-mono">{currency} {formatNum(totalSilverValue)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-2">
              <Button variant="outline" asChild>
                <Link to="/zakat">
                  Include other assets in full Zakat Calculator
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Results sidebar */}
          <div className="lg:sticky lg:top-20 h-fit space-y-4">
            <Card className={`border-2 transition-colors ${hasValues && totalZakat > 0 ? "border-primary bg-primary/5" : ""}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Zakat Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gold value</span>
                    <span className="font-mono">{formatNum(totalGoldValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Silver value</span>
                    <span className="font-mono">{formatNum(totalSilverValue)}</span>
                  </div>
                  <div className="border-t pt-2.5 flex justify-between font-medium">
                    <span>Total</span>
                    <span className="font-mono">{currency} {formatNum(totalValue)}</span>
                  </div>
                </div>

                <div className="border-t pt-3 space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Gold Nisab (85g)</span>
                    <span className="font-mono">{currency} {formatNum(goldNisab)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Silver Nisab (595g)</span>
                    <span className="font-mono">{currency} {formatNum(silverNisab)}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  {!hasValues ? (
                    <p className="text-center text-sm text-muted-foreground py-2">
                      Enter your holdings to calculate
                    </p>
                  ) : totalZakat === 0 ? (
                    <div className="text-center py-2">
                      <p className="text-sm font-medium text-muted-foreground">Below Nisab</p>
                      <p className="text-xs text-muted-foreground mt-1">No zakat is due on these holdings</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Zakat Due</p>
                      <p className="text-3xl font-bold text-primary font-mono">
                        {currency} {formatNum(totalZakat)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">2.5% of holdings value</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Nisab reference */}
            <Card className="bg-muted/50">
              <CardContent className="pt-5 text-xs text-muted-foreground space-y-2">
                <p className="font-medium text-foreground text-sm">Nisab Reference</p>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li><strong>Gold Nisab:</strong> 85 grams (≈ 2.73 troy oz) of pure gold</li>
                  <li><strong>Silver Nisab:</strong> 595 grams (≈ 19.13 troy oz) of pure silver</li>
                  <li>Jewelry worn regularly: most scholars (except Hanafi) consider it exempt</li>
                  <li>Investment gold/silver is always subject to zakat</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        <AdPlacement slot="calc-bottom" format="horizontal" className="mt-8" />
        </div>
      </div>
    </div>
  );
}
