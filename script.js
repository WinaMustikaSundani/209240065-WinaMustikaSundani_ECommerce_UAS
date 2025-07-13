
// ---------------------------
// Fungsi Navigasi Section
// ---------------------------
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

// ---------------------------
// Data & Fungsi Keranjang
// ---------------------------
let cart = [];

// Tambah produk ke keranjang
function addToCart(id, name, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  alert(`${name} ditambahkan ke keranjang!`);
  updateCart();
}

// Perbarui tampilan keranjang
function updateCart() {
  const container = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  const count = document.getElementById('cart-count');
  if (!container || !total || !count) return;

  container.innerHTML = '';
  let sum = 0;
  let qty = 0;

  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} x ${item.qty} = Rp ${(item.price * item.qty).toLocaleString()}`;
    container.appendChild(div);
    sum += item.price * item.qty;
    qty += item.qty;
  });

  total.textContent = `Rp ${sum.toLocaleString()}`;
  count.textContent = qty;
}

// ---------------------------
// Fungsi Saat Halaman Dimuat
// ---------------------------
window.onload = () => {
  // Buka section home pertama kali
  showSection('home');

  // Tangani form pembayaran
  const paymentForm = document.getElementById("payment-form");
  if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const metode = document.querySelector('input[name="payment-method"]:checked');
      if (metode) {
        alert("Terima kasih! Anda memilih metode pembayaran: " + metode.value);
      } else {
        alert("Silakan pilih metode pembayaran terlebih dahulu.");
      }
    });
  }
};


