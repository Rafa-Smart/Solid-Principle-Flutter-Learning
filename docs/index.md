# SOLID Principles: Panduan Lengkap & Profesional

Selamat datang di dokumentasi prinsip SOLID. Dokumentasi ini dirancang untuk membantu developer memahami cara menulis kode yang bersih, mudah dipelihara, dan skalabel.

## Daftar Isi

### Bagian 1: Fondasi & Alasan

1. [Apa yang Dibutuhkan?](/docs/01-requirements) - Persiapan sebelum belajar.
2. [Kenapa Harus Pakai SOLID?](/docs/02-why-solid) - Alasan dan filosofi di baliknya.
3. [Masalah yang Diselesaikan](/docs/03-problems-solved) - Solusi untuk kode yang berantakan.
4. [Masalah yang Selalu Muncul](/docs/04-recurring-problems) - Penyakit umum dalam software development.
5. [Strategi Implementasi](/docs/05-implementation) - Cara memulai di proyek nyata.

### Bagian 2: Prinsip SOLID

- [**S** - Single Responsibility Principle](/docs/solid-srp)
- [**O** - Open/Closed Principle](/docs/solid-ocp)
- [**L** - Liskov Substitution Principle](/docs/solid-lsp)
- [**I** - Interface Segregation Principle](/docs/solid-isp)
- [**D** - Dependency Inversion Principle](/docs/solid-dip)

---

## Contoh Kode Cepat (Quick Preview)

Berikut adalah perbandingan singkat antara kode "kotor" vs kode yang menerapkan SOLID (SRP):

### Bad Code (Tanpa SRP)

```typescript
class User {
  constructor(
    public name: string,
    public email: string,
  ) {}

  saveToDatabase() {
    // Logika simpan ke DB di dalam class User (Salah!)
    console.log("Saving user to database...");
  }
}
```

### Good Code (Dengan SRP)

```typescript
class User {
  constructor(
    public name: string,
    public email: string,
  ) {}
}

class UserRepository {
  save(user: User) {
    // Tanggung jawab simpan data dipisah (Benar!)
    console.log(`Saving ${user.name} to database...`);
  }
}
```

---

Dokumentasi ini dibuat agar mudah dipahami oleh siapa saja yang ingin naik level dalam coding. Silakan eksplorasi file-file di folder `docs/` untuk penjelasan mendalam.
