export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const elementTop = el.getBoundingClientRect().top + window.scrollY;

  // Instead of landing right at the top, offset by 1/5 of the viewport height so the section settles closer to the middle of the screen.
  const offset = window.innerHeight / 5;
  const targetY = Math.max(elementTop - offset, 0);

  window.scrollTo({ top: targetY, behavior: "smooth" });
}
