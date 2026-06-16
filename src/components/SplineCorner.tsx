import { Suspense, lazy, useState } from "react";
import ChatBot from "./ChatBot";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineCorner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatBot open={open} onClose={() => setOpen(false)} />
      <div className="fixed bottom-1 right-1 z-50 w-[280px] h-[200px] md:w-[360px] md:h-[300px] pointer-events-none">
        <div className="w-full h-full pointer-events-auto relative group">
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/Dy3qfk2nfJmcgYC0/scene.splinecode" />
          </Suspense>
          {/* Clickable overlay to open chat */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open chat"
            className="absolute inset-0 z-20 cursor-pointer bg-transparent"
          />
          {/* Tooltip */}
          {!open && (
            <div className="absolute top-2 left-2 z-30 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Click me 👋
            </div>
          )}
          {/* Hide "Built with Spline" watermark */}
          <div className="absolute bottom-0 right-0 w-[180px] h-[60px] bg-background z-10 pointer-events-none" />
        </div>
      </div>
    </>
  );
};

export default SplineCorner;
