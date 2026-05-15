/* ── Dönüşüm formülleri ── */
const donusumler = {
  /* Uzunluk */
  'm-km'  : (v) => ({ sonuc: v / 1000,       birim: 'km'  }),
  'km-m'  : (v) => ({ sonuc: v * 1000,       birim: 'm'   }),
  'km-mil': (v) => ({ sonuc: v / 1.60934,    birim: 'mil' }),
  'mil-km': (v) => ({ sonuc: v * 1.60934,    birim: 'km'  }),
  /* Sıcaklık */
  'c-f'   : (v) => ({ sonuc: v * 9/5 + 32,   birim: '°F'  }),
  'f-c'   : (v) => ({ sonuc: (v - 32) * 5/9, birim: '°C'  }),
  'c-k'   : (v) => ({ sonuc: v + 273.15,     birim: 'K'   }),
  'k-c'   : (v) => ({ sonuc: v - 273.15,     birim: '°C'  }),
  /* Kütle */
  'kg-g'  : (v) => ({ sonuc: v * 1000,       birim: 'g'   }),
  'g-kg'  : (v) => ({ sonuc: v / 1000,       birim: 'kg'  }),
};

function donustur(kartNo) {
  const deger   = parseFloat(document.getElementById('deger' + kartNo).value);
  const tip     = document.getElementById('tip' + kartNo).value;
  const sonucEl = document.getElementById('sonuc' + kartNo);

  if (isNaN(deger)) {
    sonucEl.textContent = 'Lütfen geçerli bir sayı giriniz.';
    sonucEl.className   = 'sonuc-box empty';
    return;
  }

  const { sonuc, birim } = donusumler[tip](deger);

  /* Güzel sayı biçimlendirme */
  const formatli = Number.isInteger(sonuc)
    ? sonuc.toLocaleString('tr-TR')
    : parseFloat(sonuc.toFixed(6)).toLocaleString('tr-TR', { maximumFractionDigits: 6 });

  sonucEl.textContent = 'Sonuç: ' + formatli + ' ' + birim;
  sonucEl.className   = 'sonuc-box';
}
