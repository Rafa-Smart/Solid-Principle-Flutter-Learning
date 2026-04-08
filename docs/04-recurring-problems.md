# Masalah yang Selalu Muncul (Code Smells)

Walaupun kita sudah tahu teori, dalam prakteknya sering kali kita terjebak dalam kebiasaan buruk. Masalah-masalah ini sering disebut sebagai "Code Smells". Kalau kamu ngerasain hal ini, berarti kodenya butuh sentuhan SOLID.

## 1. God Object (Class yang Tahu Segalanya)
Ada satu class yang isinya ribuan baris kode dan ngerjain semuanya. Mulai dari validasi, hitung logika, simpan ke DB, sampe kirim email. Ini musuh utama Single Responsibility Principle.

## 2. Hard-Coded Dependencies
Misalnya di dalam class `OrderService`, kamu langsung bikin `new MySQLDatabase()`. Pas besok mau ganti ke PostgreSQL atau MongoDB, kamu harus bongkar semua class yang pake MySQL. Ini melanggar Dependency Inversion.

## 3. If-Else atau Switch yang Kepanjangan
Setiap ada jenis user baru, kamu nambahin `else if` lagi. Kode jadi panjang banget dan susah dibaca. Ini biasanya tanda kamu melanggar Open/Closed Principle.

## 4. Interface yang Terlalu Gemuk
Kamu bikin interface `IWorker` yang punya fungsi `work()` dan `eat()`. Terus kamu punya class `Robot` yang implement `IWorker`. Masalahnya, robot nggak butuh fungsi `eat()`, tapi dia terpaksa harus implement fungsi kosong. Ini melanggar Interface Segregation.

## 5. "Banyak Typo" di Logika (Human Error)
Kadang karena kode terlalu kompleks, kita sering salah ketik atau salah logika pas nambahin fitur. SOLID ngebantu bikin kode lebih eksplisit, jadi kemungkinan salah ketik logika yang fatal itu berkurang karena scope-nya kecil-kecil.

Mengenali masalah ini adalah langkah pertama buat jadi developer yang lebih jago. Jangan benci sama kode lama kamu, tapi jadikan itu pelajaran buat pake SOLID.

---
**Navigasi:**
[Sebelumnya: Masalah yang Diselesaikan](./03-problems-solved.md) | [Home](../README.md) | [Selanjutnya: Strategi Implementasi](./05-implementation.md)
