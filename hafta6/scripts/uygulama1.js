/* ── Harf notu tablosu (Türkiye üniversite sistemi) ── */
function harfNotu(ort) {
  if (ort >= 90) return 'AA';
  if (ort >= 85) return 'BA';
  if (ort >= 80) return 'BB';
  if (ort >= 75) return 'CB';
  if (ort >= 70) return 'CC';
  if (ort >= 65) return 'DC';
  if (ort >= 60) return 'DD';
  if (ort >= 50) return 'FD';
  return 'FF';
}

function hesapla() {
  const adSoyad  = document.getElementById('adSoyad').value.trim();
  const vizeStr  = document.getElementById('vize').value.trim();
  const finalStr = document.getElementById('final').value.trim();
  const errorMsg = document.getElementById('errorMsg');
  const resultBox = document.getElementById('resultBox');

  const vize  = parseFloat(vizeStr);
  const final = parseFloat(finalStr);

  const gecersiz =
    !adSoyad ||
    isNaN(vize)  || vize  < 0 || vize  > 100 ||
    isNaN(final) || final < 0 || final > 100;

  if (gecersiz) {
    errorMsg.classList.add('show');
    resultBox.classList.remove('show');
    return;
  }

  errorMsg.classList.remove('show');

  /* Hesaplama: vize %40, final %60 */
  const ortalama = vize * 0.40 + final * 0.60;
  const harf     = harfNotu(ortalama);
  const gecti    = ortalama >= 50;

  document.getElementById('resName').textContent     = adSoyad;
  document.getElementById('resOrtalama').textContent = ortalama.toFixed(2);
  document.getElementById('resHarf').textContent     = harf;

  const durumEl = document.getElementById('resDurum');
  durumEl.innerHTML = gecti
    ? '<span class="badge gecti">Geçti</span>'
    : '<span class="badge kaldi">Kaldı</span>';

  resultBox.classList.add('show');
}

/* Enter tuşuyla hesapla */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') hesapla();
});
