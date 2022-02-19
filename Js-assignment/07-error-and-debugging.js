/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// - Type Error adalah jika sebuah operasi tidak bisa di kerjakan/di lakukan
// - Reference Error adalah jika sebuah variable tidak ada atau belum di inisialisasi
// - Range Error adalah saat mencoba meneruskan nilai sebagai argumen ke fungsi yang tidak mengizinkan rentang yang menyertakan nilai
// - Syntax Error adalah Pengecualian yang disebabkan oleh kesalahan penggunaan sintaks yang telah ditentukan sebelumnya

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// - akan terjadi error
// - Kategori 'Reference Error'
// - karena tidak bisa mengakses 'salaryWithConst' sebelum inisialisasi