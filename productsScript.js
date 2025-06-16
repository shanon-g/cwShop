// ======= PRODUCTS DATA =======
const products = {
  1: {
    name: 'Dioriviera T-Shirt',
    img: 'assets/products/products_top_1.png',
    description: 'Stylish and elegant, perfect for any occasion.',
    price: 'Rp. 1,000,000',
    category: 'tops',
    type: 'casual',
  },
  2: {
    name: 'Toujours Vertical Nano',
    img: 'assets/products/products_bags_1.png',
    description: 'Comfortable yet chic, a must-have item.',
    price: 'Rp. 18,000,000',
    category: 'bags',
    type: 'luxury',
  },
  3: {
    name: 'Dioriviera Belted',
    img: 'assets/products/products_bottom_1.png',
    description: 'Exquisite craftsmanship with premium materials.',
    price: 'Rp. 3,200,000',
    category: 'bottoms',
    type: 'formal',
  },
  4: {
    name: 'Ecru Cotton Jersey',
    img: 'assets/products/products_top_2.png',
    description: 'Stylish and elegant, perfect for any occasion.',
    price: 'Rp. 16,000,000',
    category: 'tops',
    type: 'luxury',
  },
  5: {
    name: 'Saddle Rodeo Pouch',
    img: 'assets/products/products_bags_2.png',
    description: 'Comfortable yet chic, a must-have item.',
    price: 'Rp. 1,950,000',
    category: 'bags',
    type: 'casual',
  },
  6: {
    name: 'Dioriviera Flared',
    img: 'assets/products/products_bottom_2.png',
    description: 'Exquisite craftsmanship with premium materials.',
    price: 'Rp. 19,550,000',
    category: 'bottoms',
    type: 'luxury',
  },
  7: {
    name: 'Embroidered T-Shirt',
    img: 'assets/products/products_top_3.png',
    description: 'Perfect for any formal occassions',
    price: 'Rp. 9,900,000',
    category: 'tops',
    type: 'formal',
  },
  8: {
    name: 'Bobby Mini Bag',
    img: 'assets/products/products_bags_3.png',
    description: 'Comfortable yet chic, a must-have item.',
    price: 'Rp. 10,590,000',
    category: 'bags',
    type: 'casual',
  },
  9: {
    name: 'Wrap Pants',
    img: 'assets/products/products_bottom_3.png',
    description: 'Exquisite craftsmanship with premium materials.',
    price: 'Rp. 6,360,000',
    category: 'bottoms',
    type: 'casual',
  },
  10: {
    name: 'Be Feminists T-Shirt',
    img: 'assets/products/products_top_4.png',
    description: 'Stylish and elegant, perfect for any occasion.',
    price: 'Rp. 15,790,000',
    category: 'tops',
    type: 'luxury',
  },
  11: {
    name: 'Saddle Vertical Pouch',
    img: 'assets/products/products_bags_4.png',
    description: 'Comfortable yet chic, a must-have item.',
    price: 'Rp. 4,440,000',
    category: 'bags',
    type: 'formal',
  },
  12: {
    name: 'Flared Pants',
    img: 'assets/products/products_bottom_4.png',
    description: 'Exquisite craftsmanship with premium materials.',
    price: 'Rp. 7,380,000',
    category: 'bottoms',
    type: 'formal',
  },
};

// ======= UTILS =======
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ======= FILTER STATE =======
const selectedFilters = {
  category: [],
  type: [],
};

// ======= FILTER TOGGLE FUNCTION =======
function toggleFilter(filterName) {
  const options = document.getElementById(`${filterName}-options`);
  const toggle = document.getElementById(`toggle-${filterName}`);

  const isVisible = options.style.display === 'block';
  options.style.display = isVisible ? 'none' : 'block';
  toggle.textContent = isVisible ? '+' : '−';
}

// ======= FILTER PRODUCTS FUNCTION =======
function filterProducts() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const category = card.getAttribute('data-category').toLowerCase();
    const type = card.getAttribute('data-type').toLowerCase();

    const categoryMatch =
      selectedFilters.category.length === 0 || selectedFilters.category.includes(category);
    const typeMatch =
      selectedFilters.type.length === 0 || selectedFilters.type.includes(type);

    card.style.display = categoryMatch && typeMatch ? '' : 'none';
  });
}

// ======= INITIALIZE FILTERS =======
function initFilters() {
  const categoryCheckboxes = document.querySelectorAll('#category-options .filter-checkbox');
  const typeCheckboxes = document.querySelectorAll('#type-options .filter-checkbox');

  categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        selectedFilters.category.push(checkbox.value);
      } else {
        selectedFilters.category = selectedFilters.category.filter(c => c !== checkbox.value);
      }
      filterProducts();
    });
  });

  typeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        selectedFilters.type.push(checkbox.value);
      } else {
        selectedFilters.type = selectedFilters.type.filter(t => t !== checkbox.value);
      }
      filterProducts();
    });
  });
}

// ======= GENERATE PRODUCT CARDS =======
function generateProductCards() {
  const container = document.getElementById('product-grid');
  container.innerHTML = '';

  for (const [id, product] of Object.entries(products)) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', id);
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-type', product.type);

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <div class="tags">
        <span class="tag category-tag">${capitalize(product.category)}</span>
        <span class="tag type-tag">${capitalize(product.type)}</span>
      </div>
    `;

    // Add click event to go to detail page
    card.addEventListener('click', () => {
      window.location.href = `product-detail.html?id=${id}`;
    });

    container.appendChild(card);
  }
}

// ======= DOM CONTENT LOADED =======
document.addEventListener('DOMContentLoaded', () => {
  generateProductCards();
  initFilters();
});
