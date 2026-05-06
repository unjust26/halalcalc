import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { PublicLayout } from "./components/PublicLayout";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  LandingPage,
  ZakatCalculatorPage,
  MortgageCalculatorPage,
  InvestmentCalculatorPage,
  GoldZakatPage,
  AboutPage,
  PrivacyPage,
  BlogPage,
  BlogPostPage,
} from "./pages";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <Toaster />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/zakat" element={<ZakatCalculatorPage />} />
            <Route path="/mortgage" element={<MortgageCalculatorPage />} />
            <Route path="/investment" element={<InvestmentCalculatorPage />} />
            <Route path="/gold-zakat" element={<GoldZakatPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
