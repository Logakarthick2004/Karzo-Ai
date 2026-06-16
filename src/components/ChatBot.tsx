import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string; options?: string[] };

const FLOWS: Record<string, { text: string; options?: string[] }> = {
  start: {
    text: "Hi! I'm Karzo's assistant 🤖 How can I help you today?",
    options: ["Our services", "Pricing", "Start a project", "Contact info"],
  },
  "Our services": {
    text: "We build AI solutions, web apps, mobile apps, and custom software. Want to explore one?",
    options: ["AI solutions", "Web & Mobile", "Start a project"],
  },
  "AI solutions": {
    text: "We build chatbots, automations, and custom AI agents tailored to your business.",
    options: ["Start a project", "Pricing", "Back to menu"],
  },
  "Web & Mobile": {
    text: "Modern, fast, beautifully designed web and mobile apps — built end-to-end.",
    options: ["Start a project", "Pricing", "Back to menu"],
  },
  Pricing: {
    text: "We offer 3 packages: Starter, Growth, and Enterprise. Final pricing depends on scope.",
    options: ["Start a project", "Contact info", "Back to menu"],
  },
  "Start a project": {
    text: "Awesome! Scroll down to the contact form and we'll respond within 24 hours. 🚀",
    options: ["Contact info", "Back to menu"],
  },
  "Contact info": {
    text: "📧 hello@karzo.dev\n📞 +1 (555) 123-4567\n📍 San Francisco, CA",
    options: ["Start a project", "Back to menu"],
  },
  "Back to menu": {
    text: "What else would you like to know?",
    options: ["Our services", "Pricing", "Start a project", "Contact info"],
  },
};

const ChatBot = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      const s = FLOWS.start;
      setMessages([{ role: "bot", text: s.text, options: s.options }]);
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChoice = (choice: string) => {
    setMessages((m) => [...m.map((x) => ({ ...x, options: undefined })), { role: "user", text: choice }]);
    const next = FLOWS[choice];
    setTimeout(() => {
      if (next) {
        setMessages((m) => [...m, { role: "bot", text: next.text, options: next.options }]);
      } else {
        const back = FLOWS["Back to menu"];
        setMessages((m) => [...m, { role: "bot", text: back.text, options: back.options }]);
      }
    }, 400);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setMessages([]), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] w-[340px] max-w-[calc(100vw-2rem)] h-[460px] rounded-2xl bg-background border border-foreground/10 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-foreground text-background">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot size={16} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Karzo Bot</p>
                <p className="text-[11px] text-background/60 leading-tight">Online</p>
              </div>
            </div>
            <button onClick={handleClose} className="p-1 hover:bg-background/10 rounded-md transition-colors" aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-foreground/5 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
                {m.options && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {m.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChoice(opt)}
                        className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Footer hint */}
          <div className="px-4 py-2 border-t border-foreground/10 bg-foreground/[0.02] flex items-center gap-2 text-[11px] text-muted-foreground">
            <Send size={12} />
            <span>Tap an option to chat</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;
