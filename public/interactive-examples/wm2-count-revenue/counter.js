let total = 0;

if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]');

  link.addEventListener("monetization", (event) => {
    const {
      amountSent: { value, currency },
    } = event;
    console.log(`Browser sent ${currency} ${value}.`);

    if (total === 0) {
      document.getElementById("currency").innerText = currency;
    }

    total += Number(value);

    document.getElementById("total").innerText = total.toFixed(9);
  });
}
