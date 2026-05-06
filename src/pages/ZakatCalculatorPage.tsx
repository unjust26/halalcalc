import { AdPlacement } from "@/components/AdPlacement";
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  Gem,
  TrendingUp,
  Briefcase,
  Home,
  CreditCard,
  Calculator,
  Info,
  RotateCcw,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Current approximate values (user can override)
const DEFAULT_GOLD_PRICE_PER_GRAM = 95; // USD
const NISAB_GOLD_GRAMS = 85;
const NISAB_SILVER_GRAMS = 595;
const DEFAULT_SILVER_PRICE_PER_GRAM = 1.05; // USD
const ZAKAT_RATE = 0.025;

interface AssetCategory {
  label: string;
  icon: React.ElementType;
  fields: { key: string; label: string; tooltip: string }[];
}

const ASSET_CATEGORIES: AssetCategory[] = [
  {
    label: "Cash & Savings",
    icon: Banknote,
    fields: [
      { key: "cashOnHand", label: "Cash on hand", tooltip: "Physical cash at home or in wallet" },
      { key: "bankBalance", label: "Bank balance (all accounts)", tooltip: "Total across checking, savings, and fixed deposit accounts" },
      { key: "receivables", label: "Money owed to you", tooltip: "Loans you gave others that you expect to be repaid" },
    ],
  },
  {
    label: "Gold & Silver",
    icon: Gem,
    fields: [
      { key: "goldValue", label: "Gold value (jewelry, coins, bars)", tooltip: "Current market value of all gold you own" },
      { key: "silverValue", label: "Silver value (jewelry, coins, bars)", tooltip: "Current market value of all silver you own" },
    ],
  },
  {
    label: "Investments",
    icon: TrendingUp,
    fields: [
      { key: "stocks", label: "Stocks & shares", tooltip: "Market value of halal stock portfolio" },
      { key: "mutualFunds", label: "Mutual funds / unit trusts", tooltip: "Value of Islamic fund holdings" },
      { key: "retirement", label: "Voluntary retirement savings", tooltip: "Voluntary pension/retirement contributions (not employer-mandated)" },
      { key: "crypto", label: "Cryptocurrency", tooltip: "Current value of any crypto holdings" },
    ],
  },
  {
    label: "Business Assets",
    icon: Briefcase,
    fields: [
      { key: "inventory", label: "Business inventory", tooltip: "Value of goods held for sale" },
      { key: "businessCash", label: "Business cash / receivables", tooltip: "Cash in business accounts + money owed by customers" },
    ],
  },
  {
    label: "Property Income",
    icon: Home,
    fields: [
      { key: "rentalIncome", label: "Net rental income (annual)", tooltip: "Rental income minus property expenses, accumulated over the year" },
    ],
  },
  {
    label: "Deductions",
    icon: CreditCard,
    fields: [
      { key: "debts", label: "Debts due within the year", tooltip: "Loan repayments, bills, and obligations due within 12 months" },
      { key: "expenses", label: "Essential living expenses", tooltip: "Immediate necessary expenses (rent, food, utilities for this month)" },
    ],
  },
];

function InfoTip({ text }: { text: string }) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="size-3.5 text-muted-foreground cursor-help inline ml-1" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-xs">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function ZakatCalculatorPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [currency, setCurrency] = useState("USD");
  const [nisabType, setNisabType] = useState<"gold" | "silver">("gold");

  const getNum = (key: string) => {
    const v = values[key];
    if (!v) return 0;
    const n = Number.parseFloat(v);
    return Number.isNaN(n) ? 0 : n;
  };

  const setVal = (key: string, val: string) => {
    // Allow empty, digits, and one decimal point
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      setValues((prev) => ({ ...prev, [key]: val }));
    }
  };

  const nisabThreshold = useMemo(() => {
    if (nisabType === "gold") {
      return NISAB_GOLD_GRAMS * DEFAULT_GOLD_PRICE_PER_GRAM;
    }
    return NISAB_SILVER_GRAMS * DEFAULT_SILVER_PRICE_PER_GRAM;
  }, [nisabType]);

  const totalAssets = useMemo(() => {
    return (
      getNum("cashOnHand") +
      getNum("bankBalance") +
      getNum("receivables") +
      getNum("goldValue") +
      getNum("silverValue") +
      getNum("stocks") +
      getNum("mutualFunds") +
      getNum("retirement") +
      getNum("crypto") +
      getNum("inventory") +
      getNum("businessCash") +
      getNum("rentalIncome")
    );
  }, [values]);

  const totalDeductions = useMemo(() => {
    return getNum("debts") + getNum("expenses");
  }, [values]);

  const netWealth = totalAssets - totalDeductions;
  const isAboveNisab = netWealth >= nisabThreshold;
  const zakatDue = isAboveNisab ? netWealth * ZAKAT_RATE : 0;

  const handleReset = () => {
    setValues({});
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const hasAnyValues = Object.values(values).some((v) => v && Number.parseFloat(v) > 0);

  return (
    <div className="geo-pattern min-h-[calc(100vh-4rem)]">
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-sm">
              <Calculator className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Zakat Calculator</h1>
              <p className="text-muted-foreground text-sm">Calculate your annual zakat obligation</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr,320px] gap-6">
          {/* Calculator form */}
          <div className="space-y-4">
            {/* Currency & Nisab settings */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
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
                      <option value="IDR">IDR (Rp)</option>
                      <option value="PKR">PKR (₨)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">
                      Nisab Standard
                      <InfoTip text="Gold nisab (85g) is higher and stricter. Silver nisab (595g) is lower and more inclusive. Most scholars recommend gold." />
                    </Label>
                    <Tabs value={nisabType} onValueChange={(v) => setNisabType(v as "gold" | "silver")}>
                      <TabsList className="w-full">
                        <TabsTrigger value="gold" className="flex-1 text-xs">Gold (85g)</TabsTrigger>
                        <TabsTrigger value="silver" className="flex-1 text-xs">Silver (595g)</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <p className="text-xs text-muted-foreground">
                      Nisab ≈ {currency} {formatCurrency(nisabThreshold)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Asset categories */}
            {ASSET_CATEGORIES.map((cat) => (
              <Card key={cat.label}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2.5">
                    <cat.icon className={`size-5 ${cat.label === "Deductions" ? "text-destructive" : "text-primary"}`} />
                    <CardTitle className="text-base">{cat.label}</CardTitle>
                    {cat.label === "Deductions" && (
                      <Badge variant="outline" className="text-xs text-destructive border-destructive/30">
                        Subtracted
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cat.fields.map((field) => (
                      <div key={field.key} className="space-y-1.5">
                        <Label className="text-sm text-muted-foreground">
                          {field.label}
                          <InfoTip text={field.tooltip} />
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                            {currency}
                          </span>
                          <Input
                            type="text"
                            inputMode="decimal"
                            placeholder="0.00"
                            value={values[field.key] || ""}
                            onChange={(e) => setVal(field.key, e.target.value)}
                            className="pl-14 text-right font-mono"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {hasAnyValues && (
              <div className="flex justify-center">
                <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground">
                  <RotateCcw className="size-4 mr-1.5" />
                  Reset All
                </Button>
              </div>
            )}
          </div>

          {/* Results sidebar */}
          <div className="lg:sticky lg:top-20 h-fit space-y-4">
            <Card className={`border-2 transition-colors ${isAboveNisab && hasAnyValues ? "border-primary bg-primary/5" : ""}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Your Zakat Summary</CardTitle>
                <CardDescription className="text-xs">Based on 2.5% of net wealth above Nisab</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total assets</span>
                    <span className="font-mono">{formatCurrency(totalAssets)}</span>
                  </div>
                  <div className="flex justify-between text-destructive">
                    <span>Deductions</span>
                    <span className="font-mono">−{formatCurrency(totalDeductions)}</span>
                  </div>
                  <div className="border-t pt-2.5 flex justify-between font-medium">
                    <span>Net wealth</span>
                    <span className="font-mono">{formatCurrency(netWealth)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Nisab ({nisabType})</span>
                    <span className="font-mono">{formatCurrency(nisabThreshold)}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  {!hasAnyValues ? (
                    <p className="text-center text-sm text-muted-foreground py-2">
                      Enter your assets to calculate
                    </p>
                  ) : !isAboveNisab ? (
                    <div className="text-center py-2">
                      <p className="text-sm font-medium text-muted-foreground">Below Nisab threshold</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Zakat is not obligatory when wealth is below Nisab
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Zakat Due
                      </p>
                      <p className="text-3xl font-bold text-primary font-mono">
                        {currency} {formatCurrency(zakatDue)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        2.5% × {formatCurrency(netWealth)}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Monthly breakdown */}
            {isAboveNisab && hasAnyValues && (
              <Card>
                <CardContent className="pt-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Monthly Equivalent
                  </p>
                  <p className="text-lg font-semibold font-mono">
                    {currency} {formatCurrency(zakatDue / 12)}
                    <span className="text-sm text-muted-foreground font-normal"> /month</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Some scholars permit spreading zakat payments monthly
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Info card */}
            <Card className="bg-muted/50">
              <CardContent className="pt-5 text-xs text-muted-foreground space-y-2">
                <p className="font-medium text-foreground text-sm">Important Notes</p>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>Zakat is due after holding wealth above Nisab for one full lunar year (hawl)</li>
                  <li>Personal-use items (home, car, clothing) are exempt</li>
                  <li>Gold/silver jewelry: scholars differ — Hanafi school includes all; others may exempt worn jewelry</li>
                  <li>Consult a scholar for your specific situation</li>
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
