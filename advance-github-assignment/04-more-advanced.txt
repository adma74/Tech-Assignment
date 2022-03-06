QUESTIONS
1. What is the difference between git reset and git revert. When would you use one over the other?
2. What is the difference between git merge and git rebase. When would you use one over the other?
3. What is the difference between git stash pop and git stash apply. When would you use one over
   the other?
4. What kinds of things can you do in interactive mode when rebasing?

ANSWER
1. Perintah git reset sering disebut sebagai perintah berbahaya yang dapat menghancurkan catatan
   sejarah perubahan. Perintah ini membuat kita tidak bisa kembali lagi ke masa depan. Mau tidak mau, kita harus menulis ulang sejarah.
   Revert artinya mengembalikan. Perintah ini lebih aman daripada git reset, karena tidak akan menghapus catatan sejarah revisi. Revert akan akan mengambil kondisi file yang ada di masa lalu, kemudian menggabungkannya dengan commit terakhir.
2. Git merge adalah perintah yang menyatukan dua atau lebih cabang histori komit. Penggabungan 
   seringkali menyatukan hanya dua cabang, meskipun Git mendukung penggabungan tiga, empat, atau
   lebih cabang secara bersamaan. Git merge digunakan oleh Git pull untuk menggabungkan perubahan
   dari satu cabang ke cabang lain atau dari repositori lainnya sekaligus. Penggabungan harus
   terjadi dalam repositori tunggal yang berarti semua cabang yang perlu digabung, harus ada dalam
   repositori yang sama.
   Git rebase adalah alternatif lain dari penggabungan yang digunakan untuk mengintegrasikan cabang lain dengan cabang tempat Anda saat ini bekerja, kecuali itu menyimpan sejarah komit linear. Tujuan dari Git rebase adalah memindahkan cabang dari satu lokasi ke lokasi lain. Karena komit tidak dapat diubah, komit tidak dapat dipindahkan, jadi ini memerlukan komit baru dengan perubahan dan metadata yang sama.
3. git stash pop membuang simpanan (paling atas, secara default) setelah menerapkannya, sedangkan 
   git stash apply menyimpannya di daftar simpanan untuk kemungkinan nanti digunakan kembali (atau 
   Anda dapat melakukannya kemudian git stash drop).
4. Rebasing interaktif dapat digunakan untuk mengubah komit dalam beberapa cara seperti mengedit,
   menghapus, dan meremas.