import { useEffect, useRef, useState } from "react";

/** Scroll-reveal: adds `is-visible` when element enters viewport */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Animated typing effect cycling through phrases */
export function useTypingEffect(phrases: string[], typingSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const sub = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = phrases[idx.current];
      if (!deleting.current) {
        sub.current++;
        setText(current.slice(0, sub.current));
        if (sub.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, pause);
          return;
        }
      } else {
        sub.current--;
        setText(current.slice(0, sub.current));
        if (sub.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % phrases.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? deleteSpeed : typingSpeed);
    };
    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

/** Dark/light theme with persistence (defaults to dark) */
export function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}
