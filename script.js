function calculate() {
    const lotSize = document.getElementById('lotSize').value;
    const distanceMoved = document.getElementById('distanceMoved').value;

    if (!lotSize || !distanceMoved) {
        alert('Please enter both lot size and distance moved');
        return;
    }

    const pipValuePerPip = 0.0001 * lotSize;
    const totalValueDifference = pipValuePerPip * distanceMoved;

    const results = document.getElementById('results');
    results.innerHTML = `
        <h2>Results</h2>
        <p><strong>Pip Value (per pip):</strong> $${pipValuePerPip.toFixed(2)}</p>
        <p><strong>Total Value Difference:</strong> $${totalValueDifference.toFixed(2)}</p>
    `;
}
