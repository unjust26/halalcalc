import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { AdPlacement } from "@/components/AdPlacement";

const BLOG_POSTS = [
  {
    slug: "how-to-calculate-zakat",
    title: "How to Calculate Zakat: Complete Step-by-Step Guide (2026)",
    description: "Learn exactly how to calculate your zakat obligation on cash, gold, investments, business assets, and property income. Includes Nisab thresholds and common mistakes to avoid.",
    category: "Zakat",
    readTime: "8 min",
    date: "April 2026",
    content: `
## What is Zakat?

Zakat is one of the five pillars of Islam — an annual obligation for every Muslim whose wealth exceeds the Nisab threshold. The word "zakat" means "purification," reflecting its role in purifying one's wealth and soul.

**Zakat rate:** 2.5% of qualifying net wealth held for one full lunar year (hawl).

## Step 1: Check the Nisab Threshold

Before calculating zakat, confirm your wealth exceeds Nisab:

- **Gold standard:** Value of 85 grams of gold (~$8,075 USD at current prices)
- **Silver standard:** Value of 595 grams of silver (~$570 USD)

Most scholars recommend using the **silver standard** if you want to be generous (lower threshold = more people pay zakat = more people benefit). The **gold standard** is also widely accepted.

## Step 2: Add Up Your Zakatable Assets

**Cash & Savings:**
- Cash on hand
- Bank accounts (checking, savings, fixed deposits)
- Money owed to you (that you expect to receive)

**Gold & Silver:**
- All gold jewelry, coins, and bars
- All silver jewelry, coins, and bars
- Note: Hanafi school includes ALL gold/silver; other schools may exempt regularly worn jewelry

**Investments:**
- Stocks and shares (market value)
- Mutual funds and unit trusts
- Voluntary retirement savings (not mandatory pension)
- Cryptocurrency (treated as an asset by most contemporary scholars)

**Business Assets:**
- Inventory (goods for sale)
- Business cash and receivables

**Property Income:**
- Net rental income from investment properties
- Note: Your primary residence is NOT zakatable

## Step 3: Subtract Deductions

- Debts due within the year
- Essential living expenses
- Business debts

## Step 4: Calculate 2.5%

**Net Zakatable Wealth = Total Assets − Deductions**

If Net Zakatable Wealth > Nisab, then:

**Zakat Due = Net Zakatable Wealth × 2.5%**

## Common Mistakes

1. **Forgetting cryptocurrency** — Most scholars agree crypto is zakatable
2. **Excluding business inventory** — Goods held for sale are zakatable
3. **Using the wrong Nisab** — Pick one standard and stick with it
4. **Not calculating for a full year** — Zakat is annual, based on the lunar calendar
5. **Excluding gold jewelry** — Under Hanafi fiqh, all gold is zakatable

## Use Our Free Calculator

Skip the math — our [Zakat Calculator](/zakat) handles all of this automatically with multi-currency support and both Nisab standards.
    `,
  },
  {
    slug: "islamic-mortgage-vs-conventional",
    title: "Islamic Mortgage vs Conventional: What's the Difference?",
    description: "Understand the key differences between halal home financing (Murabaha, Ijara, Diminishing Musharakah) and conventional mortgages. Compare costs, structures, and which is right for you.",
    category: "Mortgage",
    readTime: "10 min",
    date: "April 2026",
    content: `
## Why Muslims Need Islamic Mortgages

In Islam, **riba** (interest/usury) is strictly prohibited. The Quran states: *"Allah has permitted trade and forbidden riba"* (2:275). Conventional mortgages are based on interest, making them haram for practicing Muslims.

Islamic home financing uses alternative structures that comply with Shariah principles while still making homeownership possible.

## The Three Main Types

### 1. Murabaha (Cost-Plus Financing)

**How it works:** The bank buys the property and immediately sells it to you at a marked-up price. You pay the total in fixed monthly installments.

**Pros:**
- Fixed payments — you know the exact total cost upfront
- Simple to understand
- Widely available

**Cons:**
- Often the most expensive option overall
- You technically own the property from day one (plus the debt)
- Less flexibility if you want to pay off early

### 2. Ijara (Lease-to-Own)

**How it works:** The bank buys and owns the property, then leases it to you. Your monthly rent gradually transfers ownership to you.

**Pros:**
- Bank bears ownership risk initially
- Rent may decrease as you gain more ownership
- More flexible than Murabaha

**Cons:**
- Bank owns the property until fully paid
- Rental rates may fluctuate
- Less common in some countries

### 3. Diminishing Musharakah (Partnership)

**How it works:** You and the bank co-own the property. You buy the bank's share gradually while paying rent on their remaining portion.

**Pros:**
- Often the **lowest total cost**
- True partnership model — most aligned with Islamic principles
- You build equity faster

**Cons:**
- More complex structure
- Not available everywhere
- Requires both parties to agree on property value

## Cost Comparison

For a $300,000 property with 20% down payment, 4.5% rate, 25-year term:

| Type | Monthly Payment | Total Cost | Bank Profit |
|------|----------------|------------|-------------|
| Murabaha | ~$1,700 | ~$570,000 | ~$270,000 |
| Ijara | ~$1,252 | ~$435,000 | ~$135,000 |
| Diminishing Musharakah | ~$1,252 | ~$435,000 | ~$135,000 |

## Compare Your Options

Use our [Islamic Mortgage Calculator](/mortgage) to compare all three types with your own numbers — property price, down payment, rate, and term.
    `,
  },
  {
    slug: "gold-zakat-guide",
    title: "Zakat on Gold & Silver: How Much Do You Owe?",
    description: "Complete guide to calculating zakat on gold jewelry, coins, bars, and silver. Covers different karats (24K, 22K, 18K), weight conversions, and scholarly differences.",
    category: "Gold & Silver",
    readTime: "6 min",
    date: "April 2026",
    content: `
## Is Zakat Due on Gold Jewelry?

This is one of the most debated topics in zakat calculation:

- **Hanafi school:** Zakat is due on ALL gold and silver, including jewelry worn regularly
- **Shafi'i, Maliki, Hanbali:** Jewelry worn regularly for personal use may be exempt

When in doubt, paying zakat on all gold and silver is the safer and more generous approach.

## Nisab for Gold & Silver

- **Gold Nisab:** 85 grams (approximately 2.73 troy ounces)
- **Silver Nisab:** 595 grams (approximately 19.13 troy ounces)

If your total gold holdings exceed the gold Nisab, OR your total silver holdings exceed the silver Nisab, zakat is due at 2.5%.

## Calculating by Karat

Not all gold is pure. Here's how purity affects the calculation:

| Karat | Purity | 85g Nisab equivalent |
|-------|--------|---------------------|
| 24K | 99.9% | 85.1g |
| 22K | 91.7% | 92.7g |
| 21K | 87.5% | 97.1g |
| 18K | 75.0% | 113.3g |
| 14K | 58.3% | 145.8g |

**Formula:** Pure gold weight = Total weight × (Karat ÷ 24)

## Weight Conversions

- 1 troy ounce = 31.1035 grams
- 1 tola = 11.6638 grams
- 85 grams = 2.73 troy ounces = 7.29 tolas

## Example Calculation

**Scenario:** You own:
- 22K gold necklace: 45 grams
- 22K gold ring: 8 grams
- 24K gold coin: 10 grams

**Step 1:** Convert to pure gold
- Necklace: 45 × (22/24) = 41.25g pure
- Ring: 8 × (22/24) = 7.33g pure
- Coin: 10 × (24/24) = 10g pure
- **Total pure gold: 58.58g**

**Step 2:** Check Nisab (85g pure gold)
- 58.58g < 85g → Zakat NOT due on gold alone

However, if your combined wealth (cash + gold + investments) exceeds Nisab, zakat may still be due on the total. Use our [Gold & Silver Zakat Calculator](/gold-zakat) for precise calculations.
    `,
  },
];

export function BlogPage() {
  return (
    <div className="container max-w-4xl py-12 space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-primary">
          <BookOpen className="size-5" />
          <span className="font-medium text-sm uppercase tracking-wider">Islamic Finance Guides</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Learn Islamic Finance</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Free guides on zakat, Islamic mortgages, halal investments, and more.
          Written for clarity and backed by established fiqh rulings.
        </p>
      </div>

      <AdPlacement slot="blog-top" format="horizontal" className="my-6" />

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="size-3" /> {post.readTime}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-sm">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                  Read guide <ArrowRight className="size-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <AdPlacement slot="blog-bottom" format="horizontal" className="my-6" />
    </div>
  );
}

// Individual blog post page
export function BlogPostPage() {
  const slug = window.location.pathname.split("/blog/")[1];
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container max-w-3xl py-12 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">
          ← Back to all guides
        </Link>
      </div>
    );
  }

  // Simple markdown-like rendering for the blog content
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  {tableRows[0].map((cell, i) => (
                    <th key={i} className="text-left p-2 font-semibold">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri} className="border-b border-muted">
                    {row.map((cell, ci) => (
                      <td key={ci} className="p-2">{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Table detection
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        if (line.includes("---")) continue; // separator row
        inTable = true;
        const cells = line.split("|").filter(Boolean);
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        flushTable();
      }

      if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.slice(3)}</h2>);
      } else if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-lg font-semibold mt-6 mb-2">{line.slice(4)}</h3>);
      } else if (line.startsWith("- **") || line.startsWith("- ")) {
        const text = line.slice(2);
        elements.push(
          <li key={i} className="ml-4 list-disc text-sm leading-relaxed" dangerouslySetInnerHTML={{
            __html: text
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/\*(.*?)\*/g, "<em>$1</em>")
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
          }} />
        );
      } else if (line.trim() === "") {
        // skip empty lines
      } else {
        elements.push(
          <p key={i} className="text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>")
              .replace(/\*(.*?)\*/g, "<em>$1</em>")
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
          }} />
        );
      }
    }
    if (inTable) flushTable();
    return elements;
  };

  return (
    <div className="container max-w-3xl py-12 space-y-6">
      <Link to="/blog" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
        ← All guides
      </Link>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="size-3" /> {post.readTime}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground">{post.description}</p>
      </div>

      <AdPlacement slot="post-top" format="horizontal" className="my-4" />

      <Card>
        <CardContent className="pt-6 space-y-1">
          {renderContent(post.content)}
        </CardContent>
      </Card>

      <AdPlacement slot="post-bottom" format="horizontal" className="my-4" />

      <div className="text-center pt-4">
        <Link to="/blog" className="text-sm text-primary hover:underline">
          ← Back to all guides
        </Link>
      </div>
    </div>
  );
}
