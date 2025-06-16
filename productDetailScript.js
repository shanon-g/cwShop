document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productID = params.get('id');
  
    if (productID && products[productID]) {
      const productDetails = products[productID];
  
      document.getElementById('product-name').textContent = productDetails.name;
      document.getElementById('product-img').src = productDetails.img;
      document.getElementById('product-description').textContent = productDetails.description;
      document.getElementById('product-price').textContent = productDetails.price;
    } 
  
    // =========== Quantity controls ===========
    const qtyInput = document.getElementById('qty-input');
    const btnIncrease = document.getElementById('qty-increase');
    const btnDecrease = document.getElementById('qty-decrease');

    btnIncrease.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value) || 1;
        qtyInput.value = currentQty + 1;
    });

    btnDecrease.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value) || 1;
        if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
        }
    });

    qtyInput.addEventListener('input', () => {
        let val = qtyInput.value.replace(/[^0-9]/g, ''); // Allow only numbers
        if (val === '' || parseInt(val) < 1) val = 1;
        qtyInput.value = val;
    });
  });
  