(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  // Subtle parallax on atmospheric signal for presence (desktop only)
  const signal = document.querySelector(".atmosphere__signal");
  if (!signal || window.matchMedia("(max-width: 720px)").matches) return;

  let raf = 0;
  const onMove = (event) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      signal.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  window.addEventListener("pointermove", onMove, { passive: true });
})();
