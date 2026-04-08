# Open/Closed Principle (OCP)

> "Software entities should be open for extension, but closed for modification."

Intinya: Kamu harus bisa nambahin fitur baru tanpa harus ngubah kode yang sudah ada dan sudah jalan. Caranya gimana? Pake abstraksi (interface atau abstract class).

## Contoh Masalah

Misalnya kamu punya sistem buat ngitung diskon:

```typescript
class DiscountCalculator {
  calculate(amount: number, type: string) {
    if (type === "REGULAR") {
      return amount * 0.1;
    } else if (type === "VIP") {
      return amount * 0.2;
    }
    // Masalah: Kalau ada tipe 'MEMBER_BARU', kamu harus ubah class ini lagi.
    return 0;
  }
}
```

Setiap ada tipe diskon baru, kamu harus buka file ini dan nambahin `if` baru. Ini beresiko ngerusak logika diskon yang lama.

## Solusi (Penerapan OCP)

Kita pake interface buat tiap jenis diskon:

```typescript
interface Discount {
  apply(amount: number): number;
}

class RegularDiscount implements Discount {
  apply(amount: number) {
    return amount * 0.1;
  }
}

class VIPDiscount implements Discount {
  apply(amount: number) {
    return amount * 0.2;
  }
}

// Kalau ada diskon baru, tinggal bikin class baru tanpa sentuh kode lama
class NewMemberDiscount implements Discount {
  apply(amount: number) {
    return amount * 0.05;
  }
}

class DiscountCalculator {
  calculate(amount: number, discount: Discount) {
    return discount.apply(amount);
  }
}
```

Sekarang `DiscountCalculator` nggak perlu diubah-ubah lagi walaupun ada 100 jenis diskon baru.

---

**Navigasi:**
[Home](/) | [S](/solid-srp) | [**O**](/solid-ocp) | [L](/solid-lsp) | [I](/solid-isp) | [D](/solid-dip)
