# Strategi Implementasi

Gimana cara mulai terapin SOLID di proyek kamu? Jangan langsung bongkar semua kode dalam semalam, bisa-bisa aplikasinya malah mati total. Pake strategi yang santai tapi pasti.

## 1. Mulai dari yang Kecil (SRP)
Coba liat class yang paling panjang di proyek kamu. Pisahin fungsinya. Kalau ada fungsi kirim email di dalam class registrasi, pindahin ke class `EmailService`. Ini langkah paling gampang buat mulai.

## 2. Gunakan Interface
Jangan biasakan bergantung sama class konkrit. Mulailah pake interface. Jadi kalau nanti implementasinya berubah, bagian kode yang lain nggak perlu tahu.

## 3. Refactor Sambil Jalan
Pake aturan "Boy Scout Rule": Tinggalkan kode dalam keadaan lebih bersih daripada saat kamu menemukannya. Kalau kamu lagi benerin bug di suatu file, sekalian rapihin dikit pake prinsip SOLID.

## 4. Jangan Over-Engineering
Ini penting! Nggak semua kode harus super-duper SOLID dari hari pertama. Kalau proyeknya cuma script kecil yang sekali pake, ya nggak usah ribet. SOLID itu buat sistem yang bakal hidup lama dan berkembang.

## 5. Review Bareng Teman
Kadang kita nggak sadar kalau kode kita berantakan. Minta temen buat review (Code Review). Diskusiin apakah prinsip SOLID sudah diterapin dengan bener atau malah bikin makin ribet.

Ingat, SOLID itu alat bantu, bukan beban. Tujuannya biar kita kerja lebih efektif, bukan malah bikin pusing sendiri.

---
**Navigasi:**
[Sebelumnya: Masalah yang Selalu Muncul](./04-recurring-problems.md) | [Home](/) | [Mulai Materi: Single Responsibility Principle](./solid-srp.md)
