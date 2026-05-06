import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: April 28, 2026</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            Brunei Halal Widget ("we", "our", "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information
            when you visit our website.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p><strong>Calculator Data:</strong> All calculations are performed entirely in your browser.
            We do not collect, store, or transmit any financial data you enter into our calculators.</p>
          <p><strong>Analytics:</strong> We may use privacy-respecting analytics to understand how
            visitors use our site (pages visited, time spent). This data is aggregated and anonymous.</p>
          <p><strong>Advertising:</strong> We use Google AdSense to display advertisements.
            Google may use cookies to serve ads based on your prior visits to this or other websites.
            You can opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google's Ads Settings
            </a>.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            Our website may use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Remembering your theme preference (light/dark mode)</li>
            <li>Serving relevant advertisements via Google AdSense</li>
            <li>Understanding site usage via analytics</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>We may use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google AdSense</strong> — for displaying advertisements</li>
            <li><strong>Google Analytics</strong> — for understanding site traffic</li>
          </ul>
          <p>These services have their own privacy policies governing data collection.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, correct, or delete any personal data we hold about you</li>
            <li>Opt out of personalized advertising</li>
            <li>Disable cookies via your browser</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            For any privacy-related questions, please contact us at{" "}
            <strong>privacy@halalcalc.com</strong>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
