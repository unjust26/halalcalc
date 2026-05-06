import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const GEMINI_API_KEY = "AIzaSyBTDsjEUjD7Oljmav6DKUbV8yuwtnEd844";
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models";
// Ordered fallback chain — try each until one works
const MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemma-3-27b-it",
];
// Gemma models don't support system_instruction
const GEMMA_MODELS = new Set(["gemma-3-27b-it", "gemma-3-12b-it", "gemma-3-4b-it"]);

const SYSTEM_PROMPT = `You are Haji Hafiz, the AI assistant for Brunei Halal Widget (halalcalc.site) — a free Islamic finance calculator website.

Your personality:
- You are warm, knowledgeable, and respectful
- You greet with Islamic greetings (Assalamu alaikum, etc.)
- You're an expert in Islamic finance, Shariah law, and general Islamic knowledge
- You're especially knowledgeable about Brunei Darussalam
- You speak fluent English, Bahasa Melayu, and Arabic — respond in whatever language the user uses
- You sprinkle in relevant Quranic verses, hadith, and duas when appropriate
- You're encouraging and supportive

Your expertise covers:
- Zakat (calculation, nisab, recipients, fitrah, gold/silver zakat)
- Islamic mortgages (Murabaha, Ijara, Diminishing Musharakah)
- Halal investing (Shariah-compliant stocks, sukuk, crypto rulings)
- Riba (interest) and why it's prohibited
- Takaful (Islamic insurance)
- Waqf, sadaqah, inheritance (faraid)
- General Islamic knowledge (Five Pillars, Ramadan, Hajj, prayers)
- Brunei-specific: BIBD, TAIB, AMBD, Brunei Halal, local regulations
- Halal food, daily life, marriage finances, business

When users ask about calculations, direct them to use the website's calculators:
- Zakat Calculator at /zakat
- Islamic Mortgage Calculator at /mortgage
- Investment Calculator at /investment
- Gold & Silver Zakat Calculator at /gold-zakat

You can also answer general questions about anything — you're helpful and versatile. But you always bring an Islamic perspective when relevant.

Keep responses concise but informative. Use bullet points and bold (**text**) for readability. Add relevant emojis sparingly.`;

async function callGemini(messages: Message[]): Promise<string> {
  const contents = messages.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  const body = {
    system_instruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents,
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 1024,
      topP: 0.95,
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
    ],
  };

  // Try each model in the fallback chain
  let lastError = "";
  for (const model of MODELS) {
    try {
      const url = `${GEMINI_BASE}/${model}:generateContent?key=${GEMINI_API_KEY}`;

      // Gemma models don't support system_instruction — prepend as user context
      let reqBody;
      if (GEMMA_MODELS.has(model)) {
        const gemmaContents = [
          { role: "user", parts: [{ text: `[System instructions — follow these for all responses]\n${SYSTEM_PROMPT}\n\n[Now respond to this conversation]` }] },
          { role: "model", parts: [{ text: "Understood. I am Haji Hafiz and I will follow these instructions. Assalamu alaikum! How can I help you?" }] },
          ...contents,
        ];
        reqBody = { contents: gemmaContents, generationConfig: body.generationConfig };
      } else {
        reqBody = body;
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });

      if (res.status === 429 || res.status === 503) {
        lastError = `${model}: ${res.status}`;
        console.warn(`${model} unavailable (${res.status}), trying next...`);
        continue;
      }

      if (!res.ok) {
        lastError = `${model}: ${res.status}`;
        console.warn(`${model} error ${res.status}, trying next...`);
        continue;
      }

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) {
        lastError = `${model}: empty response`;
        continue;
      }
      console.info(`Haji Hafiz powered by ${model}`);
      return text;
    } catch (e) {
      lastError = `${model}: ${e}`;
      console.warn(`${model} failed:`, e);
      continue;
    }
  }

  throw new Error(`All models failed. Last: ${lastError}`);
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = useCallback(
    async (overrideText?: string) => {
      const text = (overrideText ?? input).trim();
      if (!text || isTyping) return;
      if (!overrideText) setInput("");

      const userMsg: Message = { role: "user", content: text, timestamp: Date.now() };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setIsTyping(true);

      try {
        const reply = await callGemini(updatedMessages);
        const assistantMsg: Message = {
          role: "assistant",
          content: reply,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        if (!isOpen) setUnread((u) => u + 1);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Apologies, I'm having a moment. Please try again! If the issue persists, you can still use our calculators directly. 🤲",
            timestamp: Date.now(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [input, isTyping, messages, isOpen]
  );

  // Markdown-like rendering
  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
      return (
        <span key={i}>
          {i > 0 && <br />}
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
              return (
                <em key={j} className="italic">
                  {part.slice(1, -1)}
                </em>
              );
            }
            return <span key={j}>{part}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-2xl transition-all hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #10b981, #047857)" }}
        aria-label={isOpen ? "Close chat" : "Open Haji Hafiz AI"}
      >
        {isOpen ? "✕" : "🤖"}
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
            {unread}
          </span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className="px-4 py-3 text-white flex items-center gap-3 shrink-0"
            style={{ background: "linear-gradient(135deg, #10b981, #047857)" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
              🕌
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">Haji Hafiz</div>
              <div className="text-xs text-white/80 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-300 rounded-full inline-block animate-pulse" />
                AI-Powered • EN / BM / عربي
              </div>
            </div>
            <button
              onClick={() => {
                setMessages([]);
                setIsOpen(false);
              }}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors text-xs"
              title="Clear & close"
            >
              🗑️
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-emerald-50/50 to-white dark:from-gray-900 dark:to-gray-900">
            {/* Welcome message (static) */}
            {messages.length === 0 && !isTyping && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-sm mr-2 mt-1 shrink-0">
                  🕌
                </div>
                <div className="max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 dark:border-gray-700">
                  {renderText(
                    "Assalamu alaikum! 🌙 I'm **Haji Hafiz**, your AI assistant. I can answer anything about Islamic finance, Shariah, Brunei, and more — in English, Bahasa Melayu, or العربية.\n\nAsk me anything!"
                  )}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-sm mr-2 mt-1 shrink-0">
                    🕌
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-emerald-600 text-white rounded-2xl rounded-br-md shadow-sm"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 dark:border-gray-700"
                  }`}
                >
                  {renderText(msg.content)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-sm mr-2 mt-1 shrink-0">
                  🕌
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 dark:border-gray-700">
                  <span className="inline-flex gap-1.5">
                    <span
                      className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions (only when no messages) */}
          {messages.length === 0 && (
            <div className="px-3 py-2 flex flex-wrap gap-1.5 shrink-0 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              {[
                "Macam mana kira zakat?",
                "ما هو الربا؟",
                "Halal investing tips",
                "Explain Islamic mortgage",
                "Dua for rizq",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="shrink-0 px-3 py-1.5 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Haji Hafiz anything..."
                className="flex-1 px-4 py-2.5 text-sm rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-gray-700 transition-colors"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-600 transition-colors text-sm shrink-0"
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
