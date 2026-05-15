/* ===== TEMA DEĞİŞTİRME ===== */
function toggleTheme() {
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  if (html.getAttribute('data-bs-theme') === 'dark') {
    html.setAttribute('data-bs-theme', 'light');
    btn.textContent = 'Koyu Temaya Geç';
  } else {
    html.setAttribute('data-bs-theme', 'dark');
    btn.textContent = 'Açık Temaya Geç';
  }
}

/* ===== FORM ===== */
function formGonder() {
  const ad      = document.getElementById('f-ad').value.trim();
  const eposta  = document.getElementById('f-eposta').value.trim();
  const bolum   = document.getElementById('f-bolum').value.trim();
  const sinif   = document.getElementById('f-sinif').value;
  const oturum  = document.getElementById('f-oturum').value;
  const katilim = document.getElementById('f-katilim').value;
  const mesaj   = document.getElementById('f-mesaj').value.trim();
  const kvkk    = document.getElementById('f-kvkk').checked;
  const sonucEl = document.getElementById('sonucAlani');

  if (!ad || !eposta || !bolum || !sinif || !oturum || !katilim) {
    sonucEl.style.display = 'block';
    sonucEl.style.background = '#fee2e2';
    sonucEl.style.color = '#991b1b';
    sonucEl.innerHTML = '<strong>Hata:</strong> Lütfen tüm zorunlu alanları doldurunuz.';
    return;
  }
  if (!kvkk) {
    sonucEl.style.display = 'block';
    sonucEl.style.background = '#fef9c3';
    sonucEl.style.color = '#854d0e';
    sonucEl.innerHTML = 'Lütfen KVKK metnini onaylayınız.';
    return;
  }

  sonucEl.style.display = 'block';
  sonucEl.style.background = '#cffafe';
  sonucEl.style.color = '#164e63';
  sonucEl.innerHTML = `
    <h6 class="fw-bold mb-3">Başvuru Özeti</h6>
    <table class="table table-sm mb-0 small">
      <tbody>
        <tr><th>Ad Soyad</th><td>${esc(ad)}</td></tr>
        <tr><th>E-posta</th><td>${esc(eposta)}</td></tr>
        <tr><th>Bölüm</th><td>${esc(bolum)}</td></tr>
        <tr><th>Sınıf</th><td>${esc(sinif)}</td></tr>
        <tr><th>Oturum</th><td>${esc(oturum)}</td></tr>
        <tr><th>Katılım Türü</th><td>${esc(katilim)}</td></tr>
        ${mesaj ? `<tr><th>Mesaj</th><td>${esc(mesaj)}</td></tr>` : ''}
        <tr><th>Tarih</th><td>${new Date().toLocaleDateString('tr-TR')}</td></tr>
      </tbody>
    </table>
  `;
  sonucEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formTemizle() {
  ['f-ad','f-eposta','f-bolum','f-mesaj'].forEach(id => document.getElementById(id).value = '');
  ['f-sinif','f-oturum','f-katilim'].forEach(id => document.getElementById(id).selectedIndex = 0);
  document.getElementById('f-kvkk').checked = false;
  const s = document.getElementById('sonucAlani');
  s.style.display = 'none';
  s.innerHTML = '';
}

function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
