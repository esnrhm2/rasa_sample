(() => {
  // Intro splash → login after brief spin
  if (!document.body.classList.contains("page-intro")) return;

  const params = new URLSearchParams(window.location.search);
  if (params.has("preview")) return; // stay on intro for demos / QA

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delayMs = reduceMotion ? 400 : 2200;

  window.setTimeout(() => {
    window.location.replace("login.html");
  }, delayMs);
})();
