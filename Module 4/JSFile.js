function calculateTip() {
  const serviceAmount = prompt("Enter the dollar amount of the service: $");
  if (!verifyServiceAmount(serviceAmount)) return;

  const serviceQuality = prompt(
    "Enter the service quality (great, ok, poor): "
  ).toLowerCase();
  if (!verifyServiceQuality(serviceQuality)) return;

  const tipPercent = getTipPercent(serviceQuality);
  const tipAmount = (serviceAmount * tipPercent).toFixed(2);

  alert(
    `The recommended tip for a $${serviceAmount} service of ${serviceQuality} quality is $${tipAmount}.`
  );
}

function verifyServiceAmount(amount) {
  if (amount >= 5 && amount <= 500) return true;

  alert(
    "Invalid service amount. Please enter a value between $5.00 and $500.00."
  );
  return false;
}

function verifyServiceQuality(quality) {
  if (quality === "great" || quality === "ok" || quality === "poor")
    return true;

  alert("Invalid service quality. Please enter 'great', 'ok', or 'poor'.");
  return false;
}

function getTipPercent(quality) {
  if (quality === "great") return 0.2;
  if (quality === "ok") return 0.15;
  return 0.1;
}

calculateTip();
