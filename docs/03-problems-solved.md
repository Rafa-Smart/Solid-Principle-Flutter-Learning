# Masalah yang Diselesaikan

SOLID hadir bukan tanpa alasan. Prinsip ini diciptakan oleh Robert C. Martin (Uncle Bob) untuk menyelesaikan masalah-masalah klasik dalam pengembangan software yang sering bikin developer begadang.

## 1. Fragility (Kerapuhan)
Ini kondisi di mana perubahan di satu bagian kode menyebabkan error di bagian lain yang sama sekali nggak berhubungan. 
*   **Solusi SOLID:** Dengan memisahkan tanggung jawab (SRP) dan ketergantungan (DIP), efek domino ini bisa diminimalisir.

## 2. Rigidity (Kekakuan)
Kode yang kaku itu susah banget diubah. Sekalinya mau diubah, butuh waktu lama karena banyak banget bagian yang harus ikut diganti.
*   **Solusi SOLID:** Open/Closed Principle (OCP) memungkinkan kita nambah fitur baru tanpa harus ngubah kode yang sudah ada.

## 3. Immobility (Ketidakmampuan Berpindah)
Pernah nggak kamu mau pake satu fungsi di proyek lain, tapi ternyata fungsi itu nempel banget sama database atau library tertentu? Akhirnya kamu harus bawa semua library itu atau nulis ulang kodenya.
*   **Solusi SOLID:** Interface Segregation (ISP) dan Dependency Inversion (DIP) bikin kode kamu jadi modular dan gampang dipindah-pindahin.

## 4. Viscosity (Kekentalan)
Ada dua jenis: kekentalan software dan kekentalan lingkungan. Intinya, melakukan hal yang "benar" itu lebih susah daripada melakukan "hack" atau jalan pintas yang kotor.
*   **Solusi SOLID:** Memberikan struktur yang jelas sehingga developer tahu di mana harus menaruh kode baru tanpa harus ngerusak struktur yang ada.

Dengan nyelesain masalah ini, hidup kamu sebagai developer bakal jauh lebih tenang dan nggak gampang kena burnout karena ngurusin kode yang "ajaib".

---
**Navigasi:**
[Sebelumnya: Kenapa Pakai SOLID?](./02-why-solid.md) | [Home](../README.md) | [Selanjutnya: Masalah yang Selalu Muncul](./04-recurring-problems.md)
