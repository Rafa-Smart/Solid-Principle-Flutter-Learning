# Interface Segregation Principle (ISP)

> "Many client-specific interfaces are better than one general-purpose interface."

Jangan paksa sebuah class untuk mengimplementasikan fungsi yang sebenernya dia nggak butuh. Lebih baik pecah interface yang besar jadi interface yang kecil-kecil dan spesifik.

## Contoh Masalah
```typescript
interface Worker {
  work(): void;
  eat(): void;
}

class Human implements Worker {
  work() { console.log("Working..."); }
  eat() { console.log("Eating lunch..."); }
}

class Robot implements Worker {
  work() { console.log("Working non-stop..."); }
  eat() {
    // Masalah: Robot nggak makan! Tapi terpaksa implement fungsi ini.
    throw new Error("Robots don't eat!");
  }
}
```

Si `Robot` terpaksa punya fungsi `eat()` cuma karena interface `Worker` terlalu umum.

## Solusi (Penerapan ISP)
Pecah interfacenya:

```typescript
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() { console.log("Working..."); }
  eat() { console.log("Eating..."); }
}

class Robot implements Workable {
  work() { console.log("Working..."); }
  // Robot nggak perlu implement Eatable. Bersih!
}
```

Sekarang tiap class cuma dapet apa yang mereka butuhin aja.

---
**Navigasi:**
[Home](/) | [S](./solid-srp) | [O](./solid-ocp) | [L](./solid-lsp) | [**I**](./solid-isp) | [D](./solid-dip)
