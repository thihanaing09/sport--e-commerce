document.addEventListener('DOMContentLoaded', () => {

const footballShirts = [
  { id: 1, name: 'Manchester United Home', price: '18000', category: 'Manchester United', image: 'images/man u home.jpg', popular: true, discount: 10 },
  { id: 2, name: 'Manchester United Away', price: '18000', category: 'Manchester United', image: 'images/man u away.jpg', popular: false, discount: 5 },
  { id: 3, name: 'Manchester United Third', price: '18000', category: 'Manchester United', image: 'images/man u third.jpg', popular: false, discount: 0 },
  { id: 4, name: 'Liverpool Home', price: '18000', category: 'Liverpool', image: 'images/liverpool home.jpg', popular: true, discount: 15 },
  { id: 5, name: 'Liverpool Away', price: '18000', category: 'Liverpool', image: 'images/liverpool away.jpg', popular: false, discount: 0 },
  { id: 6, name: 'Liverpool Third', price: '18000', category: 'Liverpool', image: 'images/liverpool third.jpg', popular: false, discount: 5 },
  { id: 7, name: 'Chelsea Home', price: '18000', category: 'Chelsea', image: 'images/chelsea home.jpg', popular: true, discount: 20 },
  { id: 8, name: 'Chelsea Away', price: '18000', category: 'Chelsea', image: 'images/chelsea away.jpg', popular: false, discount: 0 },
  { id: 9, name: 'Chelsea Third', price: '18000', category: 'Chelsea', image: 'images/chelsea third.jpg', popular: false, discount: 10 },
  { id: 10, name: 'Arsenal Home', price: '18000', category: 'Arsenal', image: 'images/arsenal home.jpg', popular: true, discount: 25 },
  { id: 11, name: 'Arsenal Away', price: '18000', category: 'Arsenal', image: 'images/arsenal away.jpg', popular: false, discount: 5 },
  { id: 12, name: 'Arsenal Third', price: '18000', category: 'Arsenal', image: 'images/arsenal third.jpg', popular: false, discount: 0 },
  { id: 13, name: 'Manchester City Home', price: '18000', category: 'Manchester City', image: 'images/man city home.jpg', popular: true, discount: 10 },
  { id: 14, name: 'Manchester City Away', price: '18000', category: 'Manchester City', image: 'images/man city away.jpg', popular: false, discount: 5 },
  { id: 15, name: 'Manchester City Third', price: '18000', category: 'Manchester City', image: 'images/man city third.jpg', popular: false, discount: 0 },
  { id: 16, name: 'Tottenham Home', price: '18000', category: 'Tottenham', image: 'images/tottenham home.jpg', popular: true, discount: 15 },
  { id: 17, name: 'Tottenham Away', price: '18000', category: 'Tottenham', image: 'images/tottenham away.jpg', popular: false, discount: 0 },
  { id: 18, name: 'Tottenham Third', price: '18000', category: 'Tottenham', image: 'images/tottenham.jpg', popular: false, discount: 5 },
  { id: 19, name: 'Leicester City Home', price: '18000', category: 'Leicester City', image: 'images/leicester home.jpg', popular: true, discount: 10 },
  { id: 20, name: 'Leicester City Away', price: '18000', category: 'Leicester City', image: 'images/leicester away.jpg', popular: false, discount: 0 },
  { id: 21, name: 'Leicester City Third', price: '18000', category: 'Leicester City', image: 'images/leicester third.jpg', popular: false, discount: 5 },
  { id: 22, name: 'Barcelona Home', price: '32000', category: 'Barcelona', image: 'images/barca home.jpg', popular: true, discount: 20 },
  { id: 23, name: 'Barcelona Away', price: '32000', category: 'Barcelona', image: 'images/barca away.jpg', popular: false, discount: 10 },
  { id: 24, name: 'Barcelona Third', price: '32000', category: 'Barcelona', image: 'images/barca third.jpg', popular: false, discount: 0 },
  { id: 25, name: 'Real Madrid Home', price: '32000', category: 'Real Madrid', image:'images/realmadrid_home.jpg', popular: true, discount: 15 },
  { id: 26, name: 'Real Madrid Away', price: '32000', category: 'Real Madrid', image: 'images/real third.jpg', popular: false, discount: 5 },
  { id: 27, name: 'Real Madrid Third', price: '32000', category: 'Real Madrid', image: 'images/realmadrid_away.jpg', popular: false, discount: 0 },
  { id: 28, name: 'Juventus Home', price: '32000', category: 'Juventus', image: 'images/juventus home.jpg', popular: true, discount: 10 },
  { id: 29, name: 'Juventus Away', price: '32000', category: 'Juventus', image: 'images/juventus home.jpg', popular: false, discount: 0 },
  { id: 30, name: 'Juventus Third', price: '32000', category: 'Juventus', image: 'images/juventus third.jpg', popular: false, discount: 5 },
  { id: 31, name: 'PSG Home', price: '32000', category: 'PSG', image: 'images/psg home.jpg', popular: true, discount: 15 },
  { id: 32, name: 'PSG Away', price: '32000', category: 'PSG', image: 'images/psg away.jpg', popular: false, discount: 5 },
  { id: 33, name: 'PSG Third', price: '32000', category: 'PSG', image: 'images/psg home.jpg', popular: false, discount: 0 },
  { id: 34, name: 'Bayern Munich Home', price: '32000', category: 'Bayern Munich', image: 'images/bayern home.jpg', popular: true, discount: 10 },
  { id: 35, name: 'Bayern Munich Away', price: '32000', category: 'Bayern Munich', image: 'images/bayer away.jpg', popular: false, discount: 0 },
  { id: 36, name: 'Bayern Munich Third', price: '32000', category: 'Bayern Munich', image: 'images/bayern third.jpg', popular: false, discount: 5 },
  { id: 37, name: 'Inter Milan Home', price: '32000', category: 'Inter Milan', image: 'images/intermilan home.jpg', popular: true, discount: 15 },
  { id: 38, name: 'Inter Milan Away', price: '32000', category: 'Inter Milan', image: 'images/intermilan away.jpg', popular: false, discount: 0 },
  { id: 39, name: 'Inter Milan Third', price: '32000', category: 'Inter Milan', image: 'images/intermilan third.jpg', popular: false, discount: 5 },
  { id: 40, name: 'AC Milan Home', price: '32000', category: 'AC Milan', image: 'images/acmilan home.jpg', popular: true, discount: 10 },
  { id: 41, name: 'AC Milan Away', price: '32000', category: 'AC Milan', image: 'images/acmilan away.jpg', popular: false, discount: 5 },
  { id: 42, name: 'AC Milan Third', price: '32000', category: 'AC Milan', image: 'images/acmilan third.jpg', popular: false, discount: 0 },
  { id: 43, name: 'Dortmund Home', price: '32000', category: 'Dortmund', image: 'images/dortmund home.jpg', popular: true, discount: 10 },
  { id: 44, name: 'Dortmund Away', price: '32000', category: 'Dortmund', image: 'images/dortmund away.jpg', popular: false, discount: 0 },
  { id: 45, name: 'Dortmund Third', price: '32000', category: 'Dortmund', image: 'images/dortmund third.jpg', popular: false, discount: 5 },
  { id: 46, name: 'Atletico Madrid Home', price: '32000', category: 'Atletico Madrid', image: 'images/athletico home.jpg', popular: true, discount: 10 },
  { id: 47, name: 'Atletico Madrid Away', price: '32000', category: 'Atletico Madrid', image: 'images/athletico away.jpg', popular: false, discount: 5 },
  { id: 48, name: 'Atletico Madrid Third', price: '32000', category: 'Atletico Madrid', image: 'images/athletico third.jpg', popular: false, discount: 0 },
  { id: 49, name: 'Sevilla Home', price: '32000', category: 'Sevilla', image: 'images/sevilla home.jpg', popular: true, discount: 15 },
  { id: 50, name: 'Sevilla Away', price: '32000', category: 'Sevilla', image: 'images/sevilla away.jpg', popular: false, discount: 0 }

];

  // Check if user is logged in
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
      window.location.href = 'login.html'; // Redirect to login if not logged in
  }
  

  // logout.js
  document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    alert('You have been logged out');
    window.location.href = 'login.html';
  });


  const productsContainer = document.getElementById('products');
  const cartCount = document.getElementById('cart-count');
  const totalPriceElement = document.getElementById('total-price');
  const categoryFilter = document.getElementById('category-filter');
  const paginationControls = document.getElementById('pagination-controls');
  const categories = [...new Set(footballShirts.map(product => product.category))];
  const purchase = document.querySelector('purchase');

  const productsPerPage = 9;
  let currentPage = 1;
  let filteredCategory = 'all';

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderProducts() {
      if (!productsContainer) return;
      productsContainer.innerHTML = '';
      const filteredProducts = footballShirts.filter(product => filteredCategory === 'all' || product.category === filteredCategory);
      const start = (currentPage - 1) * productsPerPage;
      const end = start + productsPerPage;
      const paginatedProducts = filteredProducts.slice(start, end);

      paginatedProducts.forEach(product => {
          const productElement = document.createElement('div');
          productElement.className = 'product';
          productElement.innerHTML = `
            <div class="product-thumb">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
              <span>${product.name}</span>
              <h4>${product.price}MMK</h4>
              ${product.discount > 0 ? `<p class="discount">-${product.discount}%</p>` : ''}
              <button class="products-btn add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
          `;
          productsContainer.appendChild(productElement);
      });

      // Disable buttons for items already in the cart
      cart.forEach(item => {
        const button = document.querySelector(`button[data-id="${item.id}"]`);
        if (button) {
            disableButton(button);
        }
      });

      // Add event listener to Add to Cart buttons
      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', handleAddToCart);
      });
  }

  function handleAddToCart(event) {
    const productId = event.target.getAttribute('data-id');
    const product = footballShirts.find(p => p.id == productId);
    addToCart(product);
    disableButton(event.target);
  }

  function renderPagination() {
      if (!paginationControls) return;
      paginationControls.innerHTML = '';
      const filteredProducts = footballShirts.filter(product => filteredCategory === 'all' || product.category === filteredCategory);
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

      for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement('span');
          pageButton.textContent = i;
          if (i === currentPage) {
              pageButton.classList.add('disabled');
          }
          pageButton.addEventListener('click', () => {
              currentPage = i;
              renderProducts();
              renderPagination();
          });
          paginationControls.appendChild(pageButton);
      }
  }

  function populateCategoryFilter() {
      if (!categoryFilter) return;
      categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          categoryFilter.appendChild(option);
      });

      categoryFilter.addEventListener('change', (e) => {
          filteredCategory = e.target.value;
          currentPage = 1;
          renderProducts();
          renderPagination();
      });
  }

  function disableButton(button) {
      button.textContent = 'Added';
      button.disabled = true;
      button.classList.add('disabled');
  }

  function addToCart(product) {
    // console.log(product);
      let productInCart = cart.find(item => item.id === product.id);
      if (productInCart) {
          productInCart.quantity++;
      } else {
          product.quantity = 1;
          cart.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
  }

  function updateCartCount() {
      cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function updateCartItems() {
      const cartItemsContainer = document.getElementById('cart-items');
      const cardDiscounts = document.getElementById('card-discounts');
      const cardQuantities = document.getElementById('card-quantities');
      const subtotalContainer = document.getElementById('subtotal');

      if (!cartItemsContainer || !cardDiscounts || !cardQuantities || !subtotalContainer) return;

      cartItemsContainer.innerHTML = '';
      cardDiscounts.innerHTML = '';
      cardQuantities.innerHTML = '';
      subtotalContainer.innerHTML = '';

      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          // const itemTotalPrice = calculateItemTotal(item);
          cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div>
                <p>${item.name}</p>
                <span>Price: ${item.price}MMK</span><br>
                <button class="remove" data-id="${item.id}">Remove</button>
              </div>
          `;
          cartItemsContainer.appendChild(cartItem);

          const discountItem = document.createElement('div');
          discountItem.className = 'cart-discount';
  
          if(item.discount) {
            discountItem.textContent = `${item.discount}%`;
          }else {
            // discountItem.className = 'no-discount';
            discountItem.textContent = `0%`;
          }
          cardDiscounts.appendChild(discountItem);
  
          const quantityItem = document.createElement('div');
          quantityItem.className = 'cart-quantity';
          quantityItem.innerHTML = `
              <button class="decrease" data-id="${item.id}">-</button>
              <p class="quantity" data-id="${item.id}">${item.quantity}</p>
              <button class="increase" data-id="${item.id}">+</button>
          `;
          cardQuantities.appendChild(quantityItem);
  
          const itemTotalPrice = calculateItemTotal(item);
          const subtotalItem = document.createElement('div');
          subtotalItem.className = 'cart-subtotal';
          subtotalItem.innerHTML = `<p class="itemTotal" data-id="${item.id}">${itemTotalPrice}MMK</p>`;
          subtotalContainer.appendChild(subtotalItem);
      });
      // Attach event listeners once, not on each re-render
      // cartItemsContainer.removeEventListener('click', handleCartItemClick);
      // cartItemsContainer.addEventListener('click', handleCartItemClick);

      cartItemsContainer.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        });
      });

      cardQuantities.querySelectorAll('.increase').forEach(button => {
          button.addEventListener('click', (e) => {
              const productId = e.target.getAttribute('data-id');
              changeQuantity(productId, 1);
          });
      });

      cardQuantities.querySelectorAll('.decrease').forEach(button => {
          button.addEventListener('click', (e) => {
              const productId = e.target.getAttribute('data-id');
              changeQuantity(productId, -1);
          });
      });

      updateTotalPrice();
  }

  function changeQuantity(productId, change) {
      const productInCart = cart.find(item => item.id == productId);

      if (productInCart) {
          productInCart.quantity += change;
          if (productInCart.quantity <= 0) {
              removeFromCart(productId);
          } else {
              localStorage.setItem('cart', JSON.stringify(cart));
              updateCartItem(productInCart);
              // updateTotalPrice();
              // updateCartCount();
          }
      }
  }

  function updateCartItem(product) {
    // Locate the cart item container using the product ID
    const cartItem = document.querySelector(`.cart-item button[data-id="${product.id}"]`).closest('.cart-item');
    const quantityElement = document.querySelector(`.cart-quantity .quantity[data-id="${product.id}"]`);
    const subtotalElement = document.querySelector(`.cart-subtotal .itemTotal[data-id="${product.id}"]`);
    // console.log(quantityElement);
    if (quantityElement && subtotalElement) {
      const itemTotalPrice = calculateItemTotal(product);

      // Update the quantity
      quantityElement.textContent = product.quantity;

      // Update the item total price
      subtotalElement.textContent = `${itemTotalPrice}MMK`;

      updateTotalPrice();
    }
}

  function calculateItemTotal(item) {
      const discount = item.discount || 0;  // Use 0 if no discount is provided
      const priceAfterDiscount = item.price - (item.price * (discount / 100));
      return (priceAfterDiscount * item.quantity);
  }

  function updateTotalPrice() {
      const totalPrice = cart.reduce((sum, item) => {
          const priceAfterDiscount = item.price - (item.price * (item.discount / 100));
          return sum + (priceAfterDiscount * item.quantity);
      }, 0);
      totalPriceElement.textContent =  `Total Price: ${totalPrice}MMK`;
      // console.log(totalPriceElement);
      updateCartCount();
  }

  function removeFromCart(productId) {
      cart = cart.filter(item => item.id != productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      updateCartItems();
  }

  function renderPopularDiscountedItems() {
    // const main = document.querySelector('main');
    const popularDiscountedItems = footballShirts.filter(item => item.popular);
  
    if (popularDiscountedItems.length > 0) {
      const lastFiveDiscountItems = popularDiscountedItems.slice(-3);
      const itemsContainer = document.getElementById('product-featured');

      // const itemsContainer = document.createElement('div');
      // itemsContainer.classList.add('items-container');
  
      lastFiveDiscountItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
  
        itemCard.innerHTML = `
          <div class="product-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="product-info">
            <span>${item.name}</span>
            <h4>Price: ${item.price}MMK</h4>
            <p class='popular'>Hot</p>
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
          </div>
        `;
  
        itemsContainer.appendChild(itemCard);
      });
  
      // main.appendChild(itemsContainer);
  
      // Add event listener for "Add to Cart" buttons
      itemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
          const productId = e.target.getAttribute('data-id');
          const product = footballShirts.find(p => p.id == productId);
          addToCart(product);
          disableButton(e.target);
        }
      });
    }

    // Disable buttons for items already in the cart
    cart.forEach(item => {
      const button = document.querySelector(`button[data-id="${item.id}"]`);
      if (button) {
          disableButton(button);
      }
    });
      // } else {
      //   main.innerHTML += '<p>No popular discounted items available.</p>';
      // }
  }

  // Function to render the last 5 items from the footballShirts array
  function renderLastFiveItems() {
    const lastFiveContainer = document.getElementById('product-center');

    // Get the last 5 items from the footballShirts array
    const lastFiveItems = footballShirts.slice(-6);

    lastFiveItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
          <div class="product-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="product-info">
            <span>${item.name}</span>
            <h4>Price: ${item.price}MMK</h4>
            ${item.discount > 0 ? `<p class="discount">-${item.discount}%</p>` : ''}
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
          </div>
        `;
        lastFiveContainer.appendChild(itemCard);
    });

    // Add event listener for "Add to Cart" buttons
    lastFiveContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            const product = footballShirts.find(p => p.id == productId);
            addToCart(product);
            disableButton(e.target);
        }
    });

    // Disable buttons for items already in the cart
    cart.forEach(item => {
      const button = document.querySelector(`button[data-id="${item.id}"]`);
      if (button) {
          disableButton(button);
      }
    });
  }

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
          if (cart.length > 0) {
              alert('Thank you for your purchase!');
              cart = [];
              localStorage.setItem('cart', JSON.stringify(cart));
              updateCartCount();
              updateCartItems();
          } else {
              alert('Your cart is empty!');
          }
      });
  }

  if (window.location.pathname.endsWith('index.html')) {
    renderPopularDiscountedItems();
    renderLastFiveItems();
  }
  
  populateCategoryFilter();
  renderProducts();
  renderPagination();
  updateCartCount();
  updateCartItems();

 
});