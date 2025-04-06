const products = [
    {
      name: "Adult Dog Food",
      price: 1999,
      category: "food",
      img: "https://m.media-amazon.com/images/I/71aSnWXsdzL._SL1500_.jpg",
      affiliateLink: "https://www.amazon.in/dp/EXAMPLE1",
      badge: "Amazon's Choice",
      rating: 4.5,
    },
    {
      name: "Adult Cat Dry Food",
      price: 899,
      category: "food",
      img: "https://m.media-amazon.com/images/I/61OYrapOitL._SL1200_.jpg",
      affiliateLink: "https://www.amazon.in/dp/EXAMPLE2",
      badge: "Best Seller",
      rating: 4.3,
    },
    {
      name: "Cozy Pet Bed",
      price: 699,
      category: "accessories",
      img: "https://m.media-amazon.com/images/I/61VWdPAstuL._SL1500_.jpg",
      affiliateLink: "https://www.amazon.in/dp/EXAMPLE3",
      badge: "Top Pick",
      rating: 4.6,
    },
    {
      name: "Chew Toy Set",
      price: 599,
      category: "accessories",
      img: "https://m.media-amazon.com/images/I/71ONBAlFqvL._AC_UL480_FMwebp_QL65_.jpg",
      affiliateLink: "https://www.amazon.in/dp/EXAMPLE4",
      badge: "",
      rating: 4.1,
    },
    {
      name: "Pet Grooming Kit",
      price: 999,
      category: "grooming",
      img: "https://m.media-amazon.com/images/I/7117lZaJGJL._SL1500_.jpg",
      affiliateLink: "https://www.amazon.in/dp/EXAMPLE5",
      badge: "",
      rating: 4.0,
    },
    {
      name: "Pet Shampoo",
      price: 499,
      category: "grooming",
      img: "https://m.media-amazon.com/images/I/61ddTfTxknL._SL1500_.jpg",
      affiliateLink: "https://www.amazon.in/dp/EXAMPLE6",
      badge: "Editor's Pick",
      rating: 4.2,
    },
  ];
  
  const productGrid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortSelect = document.getElementById("sortSelect");
  
  function renderProducts(filteredProducts) {
    productGrid.innerHTML = "";
    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product";
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <div class="product-details">
          <h3>${product.name}</h3>
          <div class="rating">⭐ ${product.rating}</div>
          ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
          <p>₹${product.price}</p>
          <a href="${product.affiliateLink}" target="_blank" rel="nofollow sponsored" class="buy-btn">Buy on Amazon</a>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }
  
  function filterAndSortProducts() {
    let filtered = [...products];
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortOption = sortSelect.value;
  
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm)
      );
    }
  
    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }
  
    if (sortOption === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }
  
    renderProducts(filtered);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
  
  searchInput.addEventListener("input", filterAndSortProducts);
  categoryFilter.addEventListener("change", filterAndSortProducts);
  sortSelect.addEventListener("change", filterAndSortProducts);
  
  // Initial render
  renderProducts(products);


  function toggleProducts() {
    const hiddenProducts = document.querySelectorAll('.product.hidden');
    hiddenProducts.forEach(el => el.classList.remove('hidden'));
    document.querySelector('.show-more-btn').style.display = 'none';
}

function initProductVisibility() {
    if (window.innerWidth <= 600) {
        const products = document.querySelectorAll('.product-grid .product');
        products.forEach((product, index) => {
            if (index >= 5) {
                product.classList.add('hidden');
            }
        });
    } else {
        document.querySelector('.show-more-btn')?.remove(); // Hide button on larger screens
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initProductVisibility);
  