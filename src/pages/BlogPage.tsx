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
  {
    slug: "halal-investment-guide-beginners",
    title: "Halal Investment Guide for Beginners: Build Wealth the Islamic Way (2026)",
    description: "Learn how to invest in Shariah-compliant stocks, sukuk, REITs, and ETFs. A step-by-step guide to halal investing, portfolio building, and screening criteria for Muslim investors.",
    category: "Investing",
    readTime: "12 min",
    date: "May 2026",
    content: `
## Why Halal Investing Matters

As Muslims, we're commanded to earn and grow wealth through halal means. The Quran states: *"O you who believe, do not consume one another's wealth unjustly"* (4:29). Investing is not only permissible — it's encouraged, as long as the investments comply with Shariah principles.

The global Islamic finance market is worth over **$4.5 trillion** (2025), with halal investment funds growing at 15-20% annually. You don't have to sacrifice returns to invest ethically.

## Core Shariah Screening Criteria

Before investing in any stock or fund, it must pass two screens:

### Business Activity Screen (Qualitative)

The company must NOT earn significant revenue from:
- **Alcohol** — production, distribution, or sales
- **Tobacco** — manufacturing or retail
- **Gambling** — casinos, betting, lotteries
- **Conventional financial services** — interest-based banking, insurance
- **Pork & non-halal food** — production or processing
- **Adult entertainment** — any involvement
- **Weapons & defense** — controversial weapons manufacturing

Most scholars allow up to **5% revenue tolerance** from non-compliant activities for otherwise halal businesses.

### Financial Ratio Screen (Quantitative)

Even halal businesses must meet financial thresholds:

| Ratio | Threshold | Why |
|-------|-----------|-----|
| Debt / Market Cap | < 33% | Limits interest-bearing debt exposure |
| Cash + Interest Securities / Market Cap | < 33% | Limits interest income |
| Accounts Receivable / Market Cap | < 49% | Prevents debt-trading resemblance |
| Non-compliant Income / Revenue | < 5% | Keeps earnings predominantly halal |

These ratios are based on the AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) standard, used by most Islamic scholars and screening providers.

## Halal Investment Types

### 1. Shariah-Compliant Stocks

Individual stocks that pass both screens above. Major tech companies like Apple, Microsoft, and Google typically pass Shariah screening because they have low debt and no haram business activities.

**How to screen:** Use services like Islamicly, Zoya, or Musaffa to check any stock instantly.

### 2. Sukuk (Islamic Bonds)

Sukuk are the halal alternative to conventional bonds. Instead of earning interest, sukuk holders receive returns from an underlying asset or project.

**Types of sukuk:**
- **Ijara sukuk** — Returns from leasing an asset
- **Murabaha sukuk** — Returns from cost-plus sale arrangements
- **Musharakah sukuk** — Returns from profit-sharing partnerships

**Typical returns:** 4-7% annually, lower risk than stocks.

### 3. Islamic REITs

Real Estate Investment Trusts that comply with Shariah — they invest in halal properties (no bars, casinos, or nightclubs) and use Islamic financing structures.

### 4. Halal ETFs & Mutual Funds

The easiest way to start. These funds pre-screen all holdings for Shariah compliance:

| Fund Type | Examples | Min Investment |
|-----------|----------|----------------|
| Global Equity | SP Funds S&P 500 Sharia (SPUS), Wahed FTSE USA | $1-50 |
| Emerging Markets | iShares MSCI EM Islamic (ISDE) | $50-100 |
| Gold-Backed | SPDR Gold Shares (GLD) | $1-50 |
| Sukuk Bond | Franklin Global Sukuk Fund | $500-1000 |

### 5. Gold & Silver

Physical gold and silver have been halal stores of value for 1,400+ years. Modern options include:
- Physical coins and bars
- Gold-backed ETFs (with physical backing)
- Gold savings accounts (some Islamic banks offer these)

## Building Your First Halal Portfolio

### Conservative (Low Risk)
- 40% Sukuk funds
- 30% Halal equity ETF
- 20% Gold
- 10% Cash / Islamic savings

### Balanced (Medium Risk)
- 50% Halal equity ETF (global diversification)
- 20% Sukuk funds
- 15% Islamic REITs
- 10% Gold
- 5% Cash

### Growth (Higher Risk)
- 70% Halal equity ETFs (mix of US, global, emerging)
- 15% Islamic REITs
- 10% Individual Shariah-compliant stocks
- 5% Gold

## Purification of Income

If a small portion of your investment returns come from non-halal sources (within the 5% tolerance), you must **purify** your earnings by donating that percentage to charity (not as zakat, but as sadaqah).

**Formula:** Purification amount = Total dividends × (Company's haram revenue % / Total revenue %)

## Don't Forget Zakat on Investments

Investments are zakatable! At year-end, calculate 2.5% on:
- Current market value of stocks and funds
- Sukuk principal + accumulated returns
- Gold holdings above Nisab

Use our [Halal Investment Calculator](/investment) to project growth on your Shariah-compliant portfolio and our [Zakat Calculator](/zakat) to determine what's due.

## Common Mistakes to Avoid

1. **Not screening at all** — "It's a big company, it must be fine" is not enough
2. **Ignoring financial ratios** — A halal business with 50% debt fails the screen
3. **Forgetting purification** — Even screened stocks may need small purification
4. **Over-concentrating** — Don't put everything in one stock or sector
5. **Timing the market** — Consistent monthly investing beats trying to pick bottoms
    `,
  },
  {
    slug: "zakat-on-cryptocurrency",
    title: "Zakat on Cryptocurrency: Complete Guide for Muslim Crypto Investors (2026)",
    description: "Is zakat due on Bitcoin, Ethereum, and other crypto? Learn the scholarly opinions, how to calculate crypto zakat, and when your crypto holdings become zakatable.",
    category: "Zakat",
    readTime: "9 min",
    date: "May 2026",
    content: `
## Is Cryptocurrency Zakatable?

**Short answer: Yes, according to the majority of contemporary Islamic scholars.**

While cryptocurrency didn't exist during the Prophet's time (ﷺ), Islamic jurisprudence uses *qiyas* (analogical reasoning) to derive rulings for new situations. Most scholars and fatwa bodies — including the Shariyah Review Bureau, AAOIFI, and prominent individual scholars — agree that crypto assets are zakatable wealth.

## The Scholarly Reasoning

Crypto is treated as zakatable because it is:

1. **Owned property (māl)** — You have full ownership and control
2. **Has value** — It can be exchanged for goods, services, or fiat currency
3. **Can grow** — It has the potential for increase (namā')
4. **Exceeds Nisab** — For many holders, crypto value exceeds the minimum threshold

### What Type of Asset Is Crypto?

Scholars differ on classification, but the zakat obligation is the same:

| View | Classification | Zakat Rate |
|------|---------------|------------|
| Majority view | Tradeable asset (*'urūḍ al-tijārah*) | 2.5% of market value |
| Alternative view | Digital currency (like fiat money) | 2.5% of total holdings |
| Mining/staking view | Agricultural produce analogy | 2.5% (some say 5-10% for staking) |

**The practical result:** 2.5% of the market value at your zakat due date, regardless of which classification you follow.

## When Is Zakat Due?

Zakat on crypto follows the same rules as other wealth:

1. **Nisab threshold** — Your total crypto holdings (combined with other zakatable wealth) must exceed the Nisab
2. **One lunar year (hawl)** — You must have held the wealth for one full lunar year
3. **Full ownership** — You must have control over the private keys or exchange account

### Nisab Check

- **Gold standard Nisab:** Value of 85g of gold (~$8,075 USD)
- **Silver standard Nisab:** Value of 595g of silver (~$570 USD)

**Important:** Crypto is combined with your other wealth (cash, gold, investments) for the Nisab check. Even if your crypto alone is below Nisab, it may push your total wealth above it.

## How to Calculate Crypto Zakat

### Step 1: Determine Your Zakat Anniversary Date

Pick a consistent date each year (many use 1st Ramadan). Stick with this date annually.

### Step 2: Value All Crypto Holdings

On your zakat date, record the market value of ALL crypto:

- **Exchange balances** — Check each exchange for current values
- **Wallet holdings** — Use a portfolio tracker or check prices manually
- **Staked crypto** — Include staked tokens and any earned rewards
- **DeFi positions** — Liquidity pool tokens, lending deposits, yield farming
- **NFTs** — If held for trading/investment, include estimated market value

### Step 3: Subtract Allowable Deductions

- Gas fees / transaction costs owed
- Crypto borrowed (margin/loans you owe)
- Unreceived staking rewards (not yet claimed)

### Step 4: Calculate 2.5%

**Zakat = (Total Crypto Value − Deductions) × 2.5%**

### Example

| Asset | Amount | Price | Value (USD) |
|-------|--------|-------|-------------|
| Bitcoin | 0.5 BTC | $68,000 | $34,000 |
| Ethereum | 3 ETH | $3,800 | $11,400 |
| Solana | 100 SOL | $170 | $17,000 |
| USDC (stablecoin) | 5,000 | $1.00 | $5,000 |
| **Total** | | | **$67,400** |

Zakat due = $67,400 × 2.5% = **$1,685**

## Special Cases

### Staking & Yield Rewards

Staking rewards are new income. Two approaches:

1. **Conservative:** Pay zakat on all staking rewards as they're received (treat like business income)
2. **Standard:** Include accumulated rewards in your annual zakat calculation with the rest of your crypto

### Day Trading

If you actively trade crypto for profit, your entire trading portfolio is treated as business inventory — all of it is zakatable at market value on your zakat date. There's no distinction between "invested" and "trading" crypto — it's all zakatable.

### Lost or Inaccessible Crypto

If you've permanently lost access to a wallet (lost seed phrase with no recovery possible), that crypto is no longer in your possession. Most scholars say it's not zakatable. However, if there's a reasonable chance of recovery, it should still be counted.

### Crypto Paid as Zakat

You *can* pay your zakat in cryptocurrency. Send the equivalent zakat amount in crypto to a charity that accepts it. Ensure the charity receives the full value (account for network fees).

## Can You Pay Zakat in Crypto?

Yes! Many Islamic charities now accept Bitcoin and Ethereum donations. When paying zakat in crypto:

1. Calculate your zakat in fiat (USD, BND, etc.)
2. Convert to the equivalent crypto amount at current price
3. Send to the charity's wallet address
4. Add extra to cover network/gas fees so the charity receives the full amount

## Don't Forget the Purification

If you hold tokens from projects that have partial non-compliant revenue (e.g., a DeFi protocol that offers interest-based lending alongside halal services), calculate and donate the non-compliant portion as purification (sadaqah, NOT zakat).

## Use Our Calculator

Manually tracking all this can be overwhelming. Use our [Zakat Calculator](/zakat) to input your crypto holdings alongside cash, gold, and investments — it calculates everything automatically with real-time Nisab thresholds.
    `,
  },
  {
    slug: "how-to-save-for-hajj",
    title: "How to Save for Hajj: Islamic Financial Planning Guide (2026)",
    description: "A practical guide to saving for Hajj — budgeting strategies, Hajj cost breakdowns by country, halal savings options, and a step-by-step financial plan to fund your pilgrimage.",
    category: "Planning",
    readTime: "10 min",
    date: "May 2026",
    content: `
## The Obligation of Hajj

Hajj is the fifth pillar of Islam, obligatory once in a lifetime for every Muslim who is physically and financially able. The Quran states: *"And Hajj to the House is a duty that mankind owes to Allah, for those who are able to find a way"* (3:97).

Being "financially able" means you can afford Hajj **without** going into debt, neglecting your family's needs, or sacrificing essential obligations. This is why financial planning is so important — save intentionally so you can fulfill this pillar from a position of strength.

## How Much Does Hajj Cost?

Hajj costs vary significantly by country, package level, and year. Here are typical ranges for 2026:

| Country | Budget Package | Standard Package | Premium Package |
|---------|---------------|-----------------|----------------|
| Brunei | $6,000–8,000 | $8,000–12,000 | $12,000–18,000 |
| Malaysia | $5,000–7,000 | $7,000–11,000 | $11,000–16,000 |
| Indonesia | $4,500–6,500 | $6,500–10,000 | $10,000–15,000 |
| UK | $7,000–9,000 | $9,000–14,000 | $14,000–22,000 |
| USA | $8,000–11,000 | $11,000–16,000 | $16,000–25,000 |

**What's typically included:** Flights, accommodation in Makkah and Madinah, transport between holy sites, meals, visa fees, guide services, and Qurbani (sacrifice).

**Additional costs to budget for:**
- Ihram clothing and supplies ($30–100)
- Spending money for gifts and extras ($300–1,000)
- Travel insurance ($100–300)
- Lost income during the trip (typically 3–6 weeks)
- Vaccinations and medical prep ($50–200)

## Step-by-Step Savings Plan

### Step 1: Set Your Target Amount

Pick a realistic package level and add 15% buffer for unexpected costs.

**Example:** Standard package from Brunei = $10,000 + 15% buffer = **$11,500 target**

### Step 2: Set Your Timeline

When do you want to go? A longer timeline means smaller monthly savings.

| Target | 2 Years | 3 Years | 5 Years |
|--------|---------|---------|---------|
| $8,000 | $333/mo | $222/mo | $133/mo |
| $11,500 | $479/mo | $319/mo | $192/mo |
| $16,000 | $667/mo | $444/mo | $267/mo |

### Step 3: Open a Dedicated Savings Account

Keep your Hajj fund separate from everyday spending. Options include:

- **Islamic savings account** — Offered by Islamic banks, based on Mudarabah or Wadiah contracts. Your money earns halal profit instead of interest.
- **Tabung Haji** (Malaysia/Brunei) — Government-backed Hajj savings scheme with Shariah-compliant returns and automatic Hajj registration.
- **Gold savings** — Some people save for Hajj in physical gold, which can also protect against currency depreciation.

**Never** use a conventional interest-bearing savings account for Hajj funds. Start your pilgrimage right — keep the money halal from beginning to end.

### Step 4: Automate Your Savings

Set up automatic transfers on payday. Treat your Hajj savings like a non-negotiable bill:

1. Salary arrives → Hajj savings auto-transfers first
2. Pay essential bills
3. Remaining amount for discretionary spending

This "pay yourself first" approach prevents the common trap of saving whatever's left over (which is usually nothing).

### Step 5: Boost Your Fund

Accelerate your savings with these halal strategies:

- **Sell unused items** — Declutter and sell on platforms like Facebook Marketplace
- **Freelance income** — Dedicate freelance earnings to the Hajj fund
- **Cut subscriptions** — Cancel services you don't actively use
- **Cook at home** — Reduce dining out by even 50% and redirect the savings
- **Bonuses and windfalls** — Direct work bonuses, tax refunds, or gifts toward Hajj

### Step 6: Track Progress Monthly

Review your Hajj savings fund each month. Visual progress is motivating. Keep a simple tracker:

- Month 1: $500 saved (4.3% of target)
- Month 6: $3,000 saved (26.1%)
- Month 12: $6,000 saved (52.2%)
- Month 18: $9,000 saved (78.3%)
- Month 24: $11,500 saved (100% ✓)

## Zakat on Hajj Savings

**Important:** Your Hajj savings are NOT exempt from zakat. If your total wealth (including Hajj savings) exceeds Nisab and you've held it for one lunar year, zakat is due on the full amount.

Some scholars say if you've already committed the money (e.g., paid a deposit for a specific Hajj package), that portion may be deducted. Consult your local scholar and use our [Zakat Calculator](/zakat) to check your obligation.

## Financial Readiness Checklist

Before committing to Hajj, confirm:

- ✅ All personal debts are paid off (or manageable with a payment plan)
- ✅ Family's essential needs are covered for the duration of your trip
- ✅ Emergency fund remains intact (don't drain everything for Hajj)
- ✅ Hajj fund is fully saved — no loans or credit cards needed
- ✅ Travel insurance and medical prep are sorted
- ✅ Zakat has been calculated and paid on your savings

## Use Our Calculators

Plan your Hajj finances with our free tools:
- [Investment Calculator](/investment) — Project how halal investments can grow your Hajj fund faster
- [Zakat Calculator](/zakat) — Ensure you've paid zakat on your savings before departing
- [Gold & Silver Calculator](/gold-zakat) — If you're saving in gold, calculate zakat on your holdings
    `,
  },
  {
    slug: "understanding-riba-interest-islam",
    title: "Understanding Riba: Why Interest Is Prohibited in Islam",
    description: "A comprehensive guide to riba (usury/interest) in Islam — what it is, why it's haram, the different types, and practical halal alternatives for loans, savings, and financing.",
    category: "Education",
    readTime: "11 min",
    date: "May 2026",
    content: `
## What Is Riba?

Riba (ربا) literally means "increase" or "excess" in Arabic. In Islamic finance, it refers to any guaranteed, predetermined return on a loan or exchange — essentially, what we call "interest" in conventional finance.

The prohibition of riba is one of the clearest and most emphasized rulings in the Quran and Sunnah.

## Quranic Verses on Riba

The prohibition was revealed gradually, in stages:

**Stage 1 — Discouragement (Surah Ar-Rum 30:39):**
*"Whatever you lend out in riba to increase it through the wealth of people will not increase with Allah."*

**Stage 2 — Historical warning (Surah An-Nisa 4:161):**
*"And for their taking of riba while they were forbidden from it..."*

**Stage 3 — Partial prohibition (Surah Ali Imran 3:130):**
*"O you who believe, do not consume riba, doubled and multiplied."*

**Stage 4 — Complete prohibition (Surah Al-Baqarah 2:275-279):**
*"Allah has permitted trade and has forbidden riba... O you who believe, fear Allah and give up what remains of riba, if you are indeed believers. And if you do not, then be warned of war from Allah and His Messenger."*

This is among the strongest language in the entire Quran — a declaration of *war* from Allah against those who persist in riba.

## Hadith on Riba

The Prophet Muhammad (ﷺ) said:

- *"Allah has cursed the one who consumes riba, the one who pays it, the one who writes it down, and the two who witness it."* — Sahih Muslim
- *"Riba has seventy-three types, the least of which is like a man committing adultery with his own mother."* — Ibn Majah (graded hasan)
- *"A dirham of riba which a man consumes knowingly is worse than committing adultery thirty-six times."* — Ahmad

## Types of Riba

### 1. Riba al-Nasiyah (Riba of Delay)

This is the most common type — interest on loans. Any predetermined return on money lent is riba al-nasiyah.

**Examples:**
- Bank savings account interest (e.g., "earn 3% APY")
- Personal loan interest (e.g., "borrow $10,000, repay $11,500")
- Credit card interest charges
- Conventional mortgage interest payments

### 2. Riba al-Fadl (Riba of Excess)

Unequal exchange of the same commodity type. The Prophet (ﷺ) specified six items where equal-for-equal exchange is required: gold, silver, wheat, barley, dates, and salt.

**Example:** Exchanging 10 grams of 18K gold for 8 grams of 24K gold in one transaction — even though the pure gold content might be similar, the unequal weight in a same-type exchange can constitute riba.

## Why Is Riba Prohibited?

Islamic scholars identify several wisdoms behind the prohibition:

### 1. Injustice (Zulm)
Interest guarantees the lender profit regardless of whether the borrower's venture succeeds or fails. The borrower bears all the risk while the lender earns risk-free returns. Islam requires risk and reward to be shared.

### 2. Exploitation of the Vulnerable
Those who borrow are often in need. Charging interest exploits their necessity and creates a system where the wealthy extract wealth from those with less — widening inequality.

### 3. Money Should Not Create Money
In Islam, money is a medium of exchange, not a commodity itself. Earning money purely from having money (without productive economic activity) is fundamentally unjust.

### 4. Encourages Speculation Over Production
Interest-based systems incentivize financial speculation over real economic activity. Islamic finance ties all transactions to real assets and services.

## Halal Alternatives to Interest

### For Savings & Deposits

| Conventional | Islamic Alternative | How It Works |
|-------------|-------------------|--------------|
| Savings account (interest) | Mudarabah account | Bank invests your money, shares actual profit |
| Fixed deposit (interest) | Commodity Murabaha | Bank buys and sells commodity, returns fixed profit |
| Bonds (interest) | Sukuk | Returns from an underlying real asset |

### For Home Financing

| Conventional | Islamic Alternative | How It Works |
|-------------|-------------------|--------------|
| Mortgage (interest) | Murabaha | Bank buys home, sells to you at a marked-up price |
| | Ijara | Bank owns home, leases to you, ownership transfers gradually |
| | Diminishing Musharakah | Co-ownership with gradual buyout of bank's share |

Use our [Islamic Mortgage Calculator](/mortgage) to compare all three types with your specific numbers.

### For Business Financing

| Conventional | Islamic Alternative | How It Works |
|-------------|-------------------|--------------|
| Business loan (interest) | Musharakah | Profit-and-loss sharing partnership |
| | Mudarabah | One provides capital, other provides expertise |
| Working capital loan | Salam | Advance payment for future delivery of goods |

### For Personal Needs

- **Qard Hasan** — Interest-free loan given as a good deed. Some Islamic institutions and community funds offer these.
- **Family/community lending** — Borrow from family without interest (this is the Sunnah approach).
- **Islamic credit cards** — Some banks offer cards based on Ujrah (fee) or Tawarruq structures instead of interest.

## Practical Steps to Avoid Riba

1. **Switch to an Islamic bank** — Open accounts with a Shariah-compliant bank for savings and transactions
2. **Avoid credit card interest** — If you use a credit card, pay the full balance monthly to avoid any interest charges
3. **Choose Islamic financing** — For home, car, or business purchases, use Islamic financing structures
4. **Screen investments** — Use Shariah screening apps to ensure your stocks and funds don't rely heavily on interest income
5. **Educate yourself** — Understanding *why* riba is harmful makes it easier to avoid

## A Note on Necessity (Darurah)

Some scholars allow engaging in conventional finance in situations of genuine necessity (darurah) where no Islamic alternative exists — for example, buying a primary home in a country with no Islamic mortgage providers, when renting is significantly more costly.

This is a nuanced topic. The general principle: always seek halal alternatives first, and consult a qualified scholar about your specific situation.

## Start Your Journey

Moving away from interest-based finance is a process. Start with what you can change today:

- [Compare Islamic Mortgage Options](/mortgage)
- [Calculate Zakat on Your Wealth](/zakat)
- [Project Halal Investment Growth](/investment)
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
