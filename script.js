// Fraud Detection Logic
document.getElementById('fraudForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;
  const hour = parseInt(document.getElementById('hour').value);
  const age = parseInt(document.getElementById('age').value);
  const balance = parseFloat(document.getElementById('balance').value);
  const locationRisk = parseInt(document.getElementById('locationRisk').value);
  const deviceRisk = parseInt(document.getElementById('deviceRisk').value);
  const failed = parseInt(document.getElementById('failed').value);
  const international = parseInt(document.getElementById('international').value);

  // Validate inputs
  if (amount <= 0 || balance < 0 || age <= 0) {
    alert('Please enter valid positive numbers');
    return;
  }

  // Calculate fraud risk score
  let riskScore = 0;

  // 1. Amount Check (0-25 points)
  if (amount > balance * 0.8) {
    riskScore += 25; // Large transaction compared to balance
  } else if (amount > balance * 0.5) {
    riskScore += 15;
  } else if (amount > 100000) {
    riskScore += 10;
  }

  // 2. Transaction Type Check (0-20 points)
  const typeRisks = {
    'UPI': 5,
    'Card': 15,
    'Net Banking': 10,
    'ATM': 8,
    'Wallet': 12
  };
  riskScore += typeRisks[type] || 0;

  // 3. Hour Check - Unusual hours (0-15 points)
  if (hour >= 22 || hour <= 5) {
    riskScore += 15; // Late night transactions
  } else if (hour >= 20 || hour <= 7) {
    riskScore += 10;
  }

  // 4. Age Check (0-10 points)
  if (age < 18 || age > 80) {
    riskScore += 8;
  }

  // 5. Failed Transactions (0-15 points)
  if (failed > 3) {
    riskScore += 15; // Multiple failed attempts
  } else if (failed > 1) {
    riskScore += 10;
  } else if (failed > 0) {
    riskScore += 5;
  }

  // 6. Location Risk (0-20 points)
  riskScore += Math.min(locationRisk * 2, 20);

  // 7. Device Risk (0-20 points)
  riskScore += Math.min(deviceRisk * 2, 20);

  // 8. International Transaction (0-10 points)
  if (international === 1) {
    riskScore += 10;
  }

  // Normalize score to 0-100
  riskScore = Math.min(riskScore, 100);

  // Determine if fraud or normal
  const isFraud = riskScore > 50;

  // Display result
  displayResult(isFraud, riskScore, amount, type);
});

function displayResult(isFraud, riskScore, amount, type) {
  const resultDiv = document.getElementById('result');
  
  const status = isFraud ? 'FRAUD DETECTED ⚠️' : 'TRANSACTION SAFE ✅';
  const statusClass = isFraud ? 'fraud' : 'normal';
  const message = isFraud
    ? 'This transaction shows signs of fraud. Please verify before proceeding.'
    : 'This transaction appears to be legitimate. You can proceed safely.';

  resultDiv.innerHTML = `
    <h3>${status}</h3>
    <p>${message}</p>
    <div class="score">
      Risk Score: ${riskScore}/100
    </div>
    <p style="margin-top: 15px; font-size: 14px;">
      <strong>Transaction Details:</strong><br>
      Amount: ₹${amount.toLocaleString()}<br>
      Type: ${type}
    </p>
  `;

  resultDiv.className = `result ${statusClass}`;
}

// Reset form on page load
window.addEventListener('load', function () {
  document.getElementById('fraudForm').reset();
  document.getElementById('result').className = 'result hidden';
});

// Smooth scroll to checker
document.querySelectorAll('a[href="#checker"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const element = document.getElementById('checker');
    element.scrollIntoView({ behavior: 'smooth' });
  });
});

// Input validation - Allow only numbers in number fields
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('input', function () {
    if (this.value < 0 && this.min) {
      this.value = this.min || 0;
    }
  });
});
