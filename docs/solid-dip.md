# Dependency Inversion Principle (DIP)

> "Depend upon abstractions, not concretions."

Artinya: Class level tinggi (logika bisnis) nggak boleh bergantung langsung sama class level rendah (detail teknis seperti DB atau API). Keduanya harus bergantung sama abstraksi (interface).

## Contoh Masalah

```typescript
class MySQLDatabase {
  save(data: string) {
    console.log("Saved to MySQL");
  }
}

class PasswordReminder {
  private db: MySQLDatabase;

  constructor() {
    // Masalah: PasswordReminder nempel banget sama MySQL.
    this.db = new MySQLDatabase();
  }
}
```

Kalau besok bos bilang "Ganti ke MongoDB!", kamu harus ngubah class `PasswordReminder`. Padahal urusan database itu cuma detail, logika utamanya kan ngingetin password.

## Solusi (Penerapan DIP)

Pake interface sebagai perantara:

```typescript
interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string) {
    console.log("Saved to MySQL");
  }
}

class MongoDatabase implements Database {
  save(data: string) {
    console.log("Saved to MongoDB");
  }
}

class PasswordReminder {
  // Bergantung sama interface, bukan class konkrit
  constructor(private db: Database) {}

  remind() {
    this.db.save("Some data");
  }
}

// Cara pakenya (Dependency Injection):
const reminder = new PasswordReminder(new MongoDatabase());
reminder.remind();
```

Sekarang kamu bisa ganti-ganti database sesuka hati tanpa nyentuh kode di `PasswordReminder`. Inilah kekuatan dari Dependency Inversion!

---

**Navigasi:**
[Home](/) | [S](/solid-srp) | [O](/solid-ocp) | [L](/solid-lsp) | [I](/solid-isp) | [**D**](/solid-dip)
