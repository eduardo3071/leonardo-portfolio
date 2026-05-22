import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const EVENT = "lightbox:open";

export function openLightbox(src: string, alt = "") {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { src, alt } }));
}

export function Lightbox() {
  const [data, setData] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { src: string; alt: string };
      setData(detail);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setData(null);
    };
    window.addEventListener(EVENT, handler);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = data ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl p-4 md:p-10"
          onClick={() => setData(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setData(null)}
            className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full glass glass-hover text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            key={data.src}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            src={data.src}
            alt={data.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-[0_0_60px_-10px_var(--emerald-glow)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
