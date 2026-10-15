if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]');
  link.addEventListener("monetization", () => {
    document.getElementById("exclusive").classList.remove("hidden");
  });
}
