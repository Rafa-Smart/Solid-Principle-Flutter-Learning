# Single Responsibility Principle (SRP)

> "A class should have one, and only one, reason to change."

Artinya, satu class atau modul itu cuma boleh punya **satu tanggung jawab** aja. Kalau class kamu ngerjain banyak hal, pas ada perubahan di satu fitur, fitur lain bisa ikut rusak.

## Contoh Masalah
Bayangkan kamu punya class untuk mengelola laporan:

```typescript
class Report {
  constructor(public title: string, public content: string) {}

  // Tanggung jawab 1: Mengolah data laporan
  getReportData() {
    return `${this.title}: ${this.content}`;
  }

  // Tanggung jawab 2: Mencetak laporan (Ini salah!)
  printReport() {
    console.log("Printing report to paper...");
  }

  // Tanggung jawab 3: Menyimpan ke database (Ini juga salah!)
  saveToDatabase() {
    console.log("Saving to DB...");
  }
}
```

Kenapa ini buruk? Karena kalau format print berubah, kamu ubah class ini. Kalau database berubah, kamu ubah class ini juga. Class ini jadi punya terlalu banyak alasan buat berubah.

## Solusi (Penerapan SRP)
Kita pisah-pisahin tanggung jawabnya ke class yang berbeda:

```typescript
// Hanya mengurus data laporan
class Report {
  constructor(public title: string, public content: string) {}
  
  getData() {
    return `${this.title}: ${this.content}`;
  }
}

// Hanya mengurus pencetakan
class ReportPrinter {
  print(report: Report) {
    console.log(`Printing: ${report.getData()}`);
  }
}

// Hanya mengurus penyimpanan
class ReportRepository {
  save(report: Report) {
    console.log("Saving report to database...");
  }
}
```

Sekarang kodenya jauh lebih rapi dan gampang di-test secara terpisah.

---
**Navigasi:**
[Home](/) | [S](./solid-srp.md) | [**O**](./solid-ocp.md) | [L](./solid-lsp.md) | [I](./solid-isp.md) | [D](./solid-dip.md)
