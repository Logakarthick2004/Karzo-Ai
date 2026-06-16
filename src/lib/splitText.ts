/**
 * Free SplitText substitute.
 * Splits an element's text into wrapped <span> chars / words / lines.
 * Returns the created spans so GSAP can animate them.
 */
export type SplitMode = "chars" | "words" | "lines";

export function splitText(el: HTMLElement, mode: SplitMode = "chars"): HTMLSpanElement[] {
  const text = el.textContent ?? "";
  el.innerHTML = "";
  const spans: HTMLSpanElement[] = [];

  if (mode === "words" || mode === "lines") {
    const parts = text.split(/(\s+)/);
    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        el.appendChild(document.createTextNode(part));
      } else if (part.length) {
        const s = document.createElement("span");
        s.className = "inline-block will-change-transform";
        s.textContent = part;
        el.appendChild(s);
        spans.push(s);
      }
    });
  } else {
    [...text].forEach((ch) => {
      if (ch === " ") {
        el.appendChild(document.createTextNode(" "));
      } else {
        const s = document.createElement("span");
        s.className = "inline-block will-change-transform";
        s.textContent = ch;
        el.appendChild(s);
        spans.push(s);
      }
    });
  }
  return spans;
}
