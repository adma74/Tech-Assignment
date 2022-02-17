/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// 1- Scope memiliki 2 variable yaitu Global Scope dan Local Scope
// 2- Global Scope adalah variable yang ada di paling luar yang bisa di akses oleh local scopenya,
//    sedangkan local scope adalah variable yang ada di bagian dalam global scope yang bsa mengakses
//    global scope dan local scope itu sendiri
// 3- function (){     //<- Global Scope
//     console.log()   // <- Local Scope
// }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan di tampilkan adalah "Mariah"
/// - karena yang berbeda nilai yang di masukkan ke dalam console.log nya jadi hasil akan mengkuti hasil
/// sesuai function nya
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));