export function setCanonical(path) {
  const p = path || window.location.pathname;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = `https://danielabeauty.ch${p}`;
}