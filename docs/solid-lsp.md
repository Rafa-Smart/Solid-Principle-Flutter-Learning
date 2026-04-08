# Liskov Substitution Principle (LSP)

> "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."

Bahasa manusianya: Kalau kamu punya class Anak yang warisin class Bapak, si Anak harus bisa gantiin posisi si Bapak tanpa bikin programnya error atau dapet hasil yang aneh.

## Contoh Masalah (Klasik: Burung)
```typescript
class Bird {
  fly() { console.log("I am flying!"); }
}

class Duck extends Bird {}

class Ostrich extends Bird {
  fly() {
    // Masalah: Burung unta nggak bisa terbang!
    throw new Error("I can't fly!");
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}

makeBirdFly(new Ostrich()); // BOOM! Error pas runtime.
```

Di sini `Ostrich` (Burung Unta) ngerusak ekspektasi dari class `Bird`. Program ngira semua `Bird` bisa terbang, tapi ternyata ada yang nggak bisa.

## Solusi (Penerapan LSP)
Jangan paksa semua burung buat terbang. Pisahin kemampuannya:

```typescript
class Bird {
  eat() { console.log("Eating..."); }
}

class FlyingBird extends Bird {
  fly() { console.log("Flying..."); }
}

class Duck extends FlyingBird {}

class Ostrich extends Bird {
  // Ostrich cuma makan, nggak terbang. Aman!
}

function makeFlyingBirdFly(bird: FlyingBird) {
  bird.fly();
}

makeFlyingBirdFly(new Duck()); // Aman.
// makeFlyingBirdFly(new Ostrich()); // Nggak bakal bisa dipanggil, error pas compile (lebih bagus!)
```

---
**Navigasi:**
[Home](/) | [S](./solid-srp) | [O](./solid-ocp) | [**L**](./solid-lsp) | [I](./solid-isp) | [D](./solid-dip)
