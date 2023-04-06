// hitung luas segitiga
function LuasSegitiga() {
  // ambil nilai inputan
  let panjangAlas = document.getElementById("alas-segitiga").value;
  let tinggi = document.getElementById("tinggi-segitiga").value;

  let rumusLuas = document.getElementById("luas-segitiga");

  // jumlahkan nilai inputan
  let jumlah = (1 / 2) * parseInt(panjangAlas) * parseInt(tinggi);
  // tampilkan nilai
  rumusLuas.innerHTML = `<strong><br/>L = 1/2 x a x t<br/>L = 1/2 x ${panjangAlas} x ${tinggi}<br/>L = ${jumlah}</strong>`;
}

// hitung keliling segitiga
function KelilingSegitiga() {
  // ambil nilai input dari 3 inputan
  let sisi1 = document.getElementById("sisi1").value;
  let sisi2 = document.getElementById("sisi2").value;
  let sisi3 = document.getElementById("sisi3").value;

  let rumusLuas = document.getElementById("keliling-segitiga");

  // jumlahkan nilai inputan
  let jumlah = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
  // tampilkan nilai
  rumusLuas.innerHTML = `<strong><br/>K = S1 + S2 + S3<br/>K = ${sisi1} + ${sisi2} + ${sisi3}<br/>K = ${jumlah}</strong>`;
}

// hitung luas jajargenjang
function Luasjajargenjang() {
  // ambil nilai inputan
  let alas = document.getElementById("alas-jajargenjang").value;
  let tinggi = document.getElementById("tinggi-jajargenjang").value;

  let rumusLuas = document.getElementById("luas-jajargenjang");

  // jumlahkan nilai inputan
  let jumlah = parseInt(alas) * parseInt(tinggi);
  // tampilkan nilai
  rumusLuas.innerHTML = `<strong><br/>L = a x t<br/>L = ${alas} x ${tinggi}<br/>L = ${jumlah}</strong>`;
}

// hitung keliling jajargenjang
function Kelilingjajargenjang() {
  // ambil nilai inputan
  let alas = document.getElementById("alas-keliling-jajargenjang").value;
  let sisiMiring = document.getElementById("miring-keliling-jajargenjang").value;

  let rumusKeliling = document.getElementById("keliling-jajargenjang");

  // jumlahkan nilai inputan
  let jumlah = 2 * (parseInt(alas) + parseInt(sisiMiring));
  // tampilkan nilai
  rumusKeliling.innerHTML = `<strong><br/>K = 2 (a + b)<br/>L = 2 x (${alas} + ${sisiMiring})<br/>L = ${jumlah}</strong>`;
}

// reset segitiga
function ResetLuasSegitiga() {
  let rumusLuas = document.getElementById("luas-segitiga");

  rumusLuas.innerHTML = "";
}

function ResetKelilingSegitiga() {
  let rumusKeliling = document.getElementById("keliling-segitiga");

  rumusKeliling.innerHTML = "";
}

// reset jajargenjang
function ResetLuasjajargenjang() {
  let rumusLuas = document.getElementById("luas-jajargenjang");

  rumusLuas.innerHTML = "";
}

function ResetKelilingjajargenjang() {
  let rumusKeliling = document.getElementById("keliling-jajargenjang");

  rumusKeliling.innerHTML = "";
}
