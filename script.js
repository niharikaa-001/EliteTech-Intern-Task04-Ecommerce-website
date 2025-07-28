// --- Simulated Product Data (keep this as is) ---
const productsData = [
    {
        id: 1,
        name: "Designer Backpack",
        price: 75.00,
        image: "femalestylishbag.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 99.99,
        image: "wireless-headphone.png",
        description: "Immerse yourself in rich audio with these noise-cancelling wireless headphones.",
        category: "unisex"
    },
    {
        id: 3,
        name: "Smartwatch",
        price: 199.50,
        image: "smart-watch.png",
        description: "Track your fitness, receive notifications, and stay connected on the go.",
        category: "unisex"
    },
    {
        id: 4,
        name: "Leather Wallet",
        price: 35.00,
        image: "maleleatherwallet.png",
        description: "A classic leather wallet with multiple card slots and a coin pocket.",
        category: "male"
    },
    {
        id: 5,
        name: "Stylish T-Shirt",
        price: 25.99,
        image: "tshirtmale.png",
        description: "A comfortable and stylish t-shirt made from premium cotton.",
        category: "male"
    },
    {
        id: 6,
        name: "Gaming Mouse",
        price: 49.99,
        image: "gaming-mouse.png",
        description: "Precision gaming mouse with customizable DPI and RGB lighting.",
        category: "unisex"
    },
    {
        id: 7,
        name: "Elegant Scarf ",
        price: 18.50,
        image: "femalescarf.png",
        description: "A soft and elegant scarf perfect for any occasion.",
        category: "female"
    },
    {
        id: 8,
        name: "Men's Casual Shoes",
        price: 65.00,
        image: "malecasualshoe.png",
        description: "Comfortable and stylish shoes for everyday wear.",
        category: "male"
    },
    {
        id: 9,
        name: "Yoga Mat",
        price: 30.00,
        image: "yoga-mat.png",
        description: "Durable and non-slip yoga mat for all your fitness needs.",
        category: "unisex"
    },
    {
        id: 10,
        name: "Watermelon Super Glow Gel Face Wash",
        price: 75.00,
        image: "facewash.png",
        description: "Cleanse your skin while giving it a juicy burst of hydration with Dot & Key’s Watermelon Superglow Facial Cleanser specially formulated to leave your skin feeling energized, smooth and prepped for the rest of your routine. Along with Watermelon actives, Vitamin C and Cucumber extracts, this fuss-free cleanser leaves skin smooth, glowing and prepped for the rest of your routine. Free from sulphates, it helps clear build-up and dead cells bringing out a bright and super glowy complexion.",
        category: "female"
    },
    {
        id: 11,
        name: "Creme Lipstick - 52 Cinnamon Rose",
        price: 99.99,
        image: "lipstick.png",
        description: "This matte lipstick offers a luxurious matte finish that lasts all day. This non-drying, water-resistant formula glides on smoothly with rich pigmentation for intense colour payoff in just one swipe. The deeply moisturising lipstick leaves your lips feeling soft and supple, never dry or cracked. With its long-wearing yet lightweight texture, this lipstick is perfect for any occasion, from work to a night out.",
        category: "unisex"
    },
    {
        id: 12,
        name: "Pomegranate Beauty Facial Sheet Mask",
        price: 199.50,
        image: "facemask.png",
        description: "Pomegranate extract is combined with Vitamins and minerals which promote smooth and firm skin and helps to vital for bouncy youthful skin. Enrich with real extracts of Pomegranate for Skin Regeneration.",
        category: "female"
    },
    {
        id: 13,
        name: "Leather Wallet",
        price: 35.00,
        image: "h1.png",
        description: "A classic leather wallet with multiple card slots and a coin pocket.",
        category: "male"
    },
    {
        id: 14,
        name: "Stylish T-Shirt",
        price: 25.99,
        image: "h2.png",
        description: "A comfortable and stylish t-shirt made from premium cotton.",
        category: "male"
    },
    {
        id: 15,
        name: "Designer Backpack",
        price: 75.00,
        image: "h3.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 16,
        name: "Wireless Headphones",
        price: 99.99,
        image: "h4.png",
        description: "Immerse yourself in rich audio with these noise-cancelling wireless headphones.",
        category: "unisex"
    },
    {
        id: 17,
        name: "Smartwatch",
        price: 199.50,
        image: "h5.png",
        description: "Track your fitness, receive notifications, and stay connected on the go.",
        category: "unisex"
    },
    {
        id: 18,
        name: "Leather Wallet",
        price: 35.00,
        image: "h6.png",
        description: "A classic leather wallet with multiple card slots and a coin pocket.",
        category: "male"
    },
    {
        id: 19,
        name: "Stylish T-Shirt",
        price: 25.99,
        image: "h7.png",
        description: "A comfortable and stylish t-shirt made from premium cotton.",
        category: "male"
    },
    {
        id: 20,
        name: "Designer Backpack",
        price: 75.00,
        image: "h8.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 21,
        name: "Wireless Headphones",
        price: 99.99,
        image: "h9.png",
        description: "Immerse yourself in rich audio with these noise-cancelling wireless headphones.",
        category: "unisex"
    },
    {
        id: 22,
        name: "Smartwatch",
        price: 199.50,
        image: "h10.png",
        description: "Track your fitness, receive notifications, and stay connected on the go.",
        category: "unisex"
    },
    {
        id: 23,
        name: "Leather Wallet",
        price: 35.00,
        image: "h11.png",
        description: "A classic leather wallet with multiple card slots and a coin pocket.",
        category: "male"
    },
    {
        id: 24,
        name: "Stylish T-Shirt",
        price: 25.99,
        image: "b15.png",
        description: "A comfortable and stylish t-shirt made from premium cotton.",
        category: "male"
    },
    {
        id: 25,
        name: "Designer Backpack",
        price: 75.00,
        image: "b1.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 26,
        name: "Designer Backpack",
        price: 75.00,
        image: "b2.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 27,
        name: "Designer Backpack",
        price: 75.00,
        image: "b3.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 28,
        name: "Designer Backpack",
        price: 75.00,
        image: "b4.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 29,
        name: "Designer Backpack",
        price: 75.00,
        image: "b5.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 31,
        name: "Designer Backpack",
        price: 75.00,
        image: "b6.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 32,
        name: "Designer Backpack",
        price: 75.00,
        image: "b7.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 33,
        name: "Designer Backpack",
        price: 75.00,
        image: "b8.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 34,
        name: "Designer Backpack",
        price: 75.00,
        image: "b9.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 35,
        name: "Designer Backpack",
        price: 75.00,
        image: "b10.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 36,
        name: "Designer Backpack",
        price: 75.00,
        image: "b11.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 37,
        name: "Designer Backpack",
        price: 75.00,
        image: "b12.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 38,
        name: "Designer Backpack",
        price: 75.00,
        image: "b13.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 39,
        name: "Designer Backpack",
        price: 75.00,
        image: "b14.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 41,
        name: "Designer Backpack",
        price: 75.00,
        image: "top1.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 42,
        name: "Designer Backpack",
        price: 75.00,
        image: "top2.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 43,
        name: "Designer Backpack",
        price: 75.00,
        image: "top3.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 44,
        name: "Designer Backpack",
        price: 75.00,
        image: "top4.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 45,
        name: "Designer Backpack",
        price: 75.00,
        image: "top5.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 46,
        name: "Designer Backpack",
        price: 75.00,
        image: "top6.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 47,
        name: "Designer Backpack",
        price: 75.00,
        image: "top7.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 48,
        name: "Designer Backpack",
        price: 75.00,
        image: "top8.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 49,
        name: "Designer Backpack",
        price: 75.00,
        image: "top9.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
    {
        id: 50,
        name: "Designer Backpack",
        price: 75.00,
        image: "top10.png",
        description: "Spacious and durable backpack perfect for daily commute or travel.",
        category: "female"
    },
];

// --- Cart Logic ---
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage

function updateCartCount(animate = false) {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        if (animate) {
            cartCountElement.classList.add('pulse');
            // Remove the class after animation to allow it to be triggered again
            setTimeout(() => {
                cartCountElement.classList.remove('pulse');
            }, 500); // Should match animation duration
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// --- Toast Notification System ---
let toastContainer;

function createToastContainer() {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
}

function showToast(message, duration = 3000) {
    if (!toastContainer) {
        createToastContainer();
    }

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Trigger reflow to ensure animation plays
    void toast.offsetWidth;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, duration);
}

// --- Cart Page Specific Logic ---
// These will be null on other pages, which is handled by checks within renderCart
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

function addCartItemEventListeners() {
    document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            removeFromCart(productId);
        });
    });

    document.querySelectorAll('.quantity-plus-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            updateQuantity(productId, 1);
        });
    });

    document.querySelectorAll('.quantity-minus-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            updateQuantity(productId, -1);
        });
    });
}

function renderCart() {
    // Check if on cart page elements exist before trying to render
    if (!cartItemsContainer || !cartTotalElement) return;

    cartItemsContainer.innerHTML = ''; // Clear current cart display
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-minus-btn" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-plus-btn" data-id="${item.id}">+</button>
            </div>
            <button class="remove-from-cart-btn btn" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
    addCartItemEventListeners(); // Re-attach event listeners after rendering
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartCount(true); // Animate cart count
    showToast(`${product.name} added to cart!`); // Use toast notification
    // If on the cart page, re-render the cart
    if (window.location.pathname.endsWith('cart.html')) {
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount(true);
    renderCart(); // Re-render the cart after removal
    showToast('Product removed from cart.');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId); // This will show its own toast and re-render
        } else {
            saveCart();
            updateCartCount(true);
            renderCart(); // Re-render the cart after quantity update
            showToast(`${item.name} quantity updated.`);
        }
    }
}

// --- Product Rendering (for index.html and products.html) ---
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <a href="product-detail.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        </a>
        <p class="price">$${product.price.toFixed(2)}</p>
        <a href="product-detail.html?id=${product.id}" class="btn primary shop-now-btn">Shop Now</a>
        <button class="btn accent add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
    `;

    // Apply the correct button classes based on new CSS
    productCard.querySelector('.shop-now-btn').classList.add('secondary'); // Ensure correct class
    productCard.querySelector('.add-to-cart-btn').classList.add('accent'); // Ensure correct class

    productCard.querySelector('.add-to-cart-btn').addEventListener('click', (event) => {
        const productId = parseInt(event.target.dataset.productId);
        const productToAdd = productsData.find(p => p.id === productId);
        if (productToAdd) {
            addToCart(productToAdd);
        }
    });

    return productCard;
}

// Helper function to load products into a container
function loadProducts(containerId, productsToLoad) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; // Clear existing content
        productsToLoad.forEach(product => {
            container.appendChild(createProductCard(product));
        });
    }
}

// Function to filter and sort products before loading (for product.html)
function loadFilteredAndSortedProducts() {
    const container = document.getElementById('all-products-container');
    if (!container) return; // Only run if on products page

    let filteredProducts = [...productsData]; // Start with all products

    // Get search term
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    // Get selected category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter && categoryFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter.value);
    }

    // Get selected sort order
    const sortOrder = document.getElementById('sort-by');
    if (sortOrder && sortOrder.value === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price); // Sort low to high
    }
    // Add more sorting options here if needed (e.g., price-desc, name-asc)

    container.innerHTML = ''; // Clear existing content
    if (filteredProducts.length === 0) {
        container.innerHTML = '<p class="empty-filter-message">No products found matching your criteria.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

// --- Checkout Page Functions ---

function renderCheckoutSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const subtotalElement = document.getElementById('subtotal');
    const shippingCostElement = document.getElementById('shippingCost');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    if (!orderItemsContainer) return; // Exit if not on checkout page

    orderItemsContainer.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>No items in cart. Please go back to the <a href="cart.html">cart page</a>.</p>';
        subtotalElement.textContent = '0.00';
        shippingCostElement.textContent = '0.00';
        taxElement.textContent = '0.00';
        totalElement.textContent = '0.00';
        document.getElementById('placeOrderBtn').disabled = true; // Disable place order button if cart is empty
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('order-item');
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        orderItemsContainer.appendChild(itemDiv);
        subtotal += item.price * item.quantity;
    });

    const shipping = 5.00; // Example fixed shipping cost
    const taxRate = 0.08; // Example 8% tax rate
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;

    subtotalElement.textContent = subtotal.toFixed(2);
    shippingCostElement.textContent = shipping.toFixed(2);
    taxElement.textContent = tax.toFixed(2);
    totalElement.textContent = total.toFixed(2);
    document.getElementById('placeOrderBtn').disabled = false; // Enable button if cart has items
}

function attachCheckoutFormListeners() {
    const shippingForm = document.getElementById('shippingForm');
    const paymentForm = document.getElementById('paymentForm');
    const placeOrderBtn = document.getElementById('placeOrderBtn');

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Basic validation (you'll want more robust validation in a real app)
            if (!shippingForm.checkValidity() || !paymentForm.checkValidity()) {
                showToast("Please fill in all required fields.", 3000);
                shippingForm.reportValidity(); // Show browser validation messages
                paymentForm.reportValidity();
                return;
            }

            // Simulate order placement
            showToast("Placing your order...", 2000);

            setTimeout(() => {
                // Clear cart after successful order
                cart = [];
                saveCart();
                updateCartCount();
                showToast("Order Placed Successfully! Thank you for your purchase.", 5000);

                // Optionally redirect to a thank you page or homepage
                window.location.href = 'index.html'; // Or 'thank-you.html' if you create one
            }, 2500); // Simulate network delay
        });
    }
}

// --- DOM Content Loaded - General Logic ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Initial cart count load

    // Add 'active' class to current navigation link
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
        // Handle product-detail page's active state for 'products' link
        if (currentPath.startsWith('product-detail.html') && linkHref === 'product.html') {
             link.classList.add('active');
        }
    });

    // --- Featured Products on Home Page ---
    const featuredProductsContainer = document.getElementById('featured-products-container');
    if (featuredProductsContainer) {
        // Define which products you want to feature by their IDs
        const featuredProductIds = [2, 3, 5]; // Example: Wireless Headphones, Smartwatch, Designer Backpack

        // Find these products in your main productsData array
        const featuredProducts = featuredProductIds.map(id => productsData.find(p => p.id === id)).filter(Boolean); // .filter(Boolean) removes any undefined if an ID isn't found

        loadProducts('featured-products-container', featuredProducts);
    }

    // Load all products on product listing page (if element exists)
    const allProductsContainer = document.getElementById('all-products-container');
    if (allProductsContainer) {
        loadFilteredAndSortedProducts(); // Initial load with default filters/sort

        // Add event listeners for filters/sort
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', loadFilteredAndSortedProducts);
        }

        const sortOrder = document.getElementById('sort-by');
        if (sortOrder) {
            sortOrder.addEventListener('change', loadFilteredAndSortedProducts);
        }

        // Add event listener for search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', loadFilteredAndSortedProducts); // Use 'input' for real-time filtering
        }
    }

    // Initial render of the cart when cart.html is loaded
    if (window.location.pathname.endsWith('cart.html')) {
        renderCart();

        // --- Checkout button functionality on cart.html ---
        const proceedToCheckoutBtn = document.querySelector('.cart-summary .checkout-btn');
        if (proceedToCheckoutBtn) {
            proceedToCheckoutBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    showToast("Your cart is empty. Please add items before checking out.", 4000);
                } else {
                    window.location.href = 'checkout.html';
                }
            });
        }
    }

    // Product detail page specific logic
    if (window.location.pathname.endsWith('product-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            const product = productsData.find(p => p.id === parseInt(productId));
            if (product) {
                document.getElementById('product-detail-title').textContent = product.name;
                document.getElementById('product-detail-img').src = product.image;
                document.getElementById('product-detail-img').alt = product.name;
                document.getElementById('product-detail-name').textContent = product.name;
                document.getElementById('product-detail-price').textContent = `$${product.price.toFixed(2)}`;
                document.getElementById('product-detail-description').textContent = product.description;
                document.getElementById('add-to-cart-detail').classList.add('btn', 'accent'); // Add classes
                document.getElementById('add-to-cart-detail').onclick = () => addToCart(product);
            } else {
                document.getElementById('product-detail-name').textContent = "Product Not Found";
                document.getElementById('product-detail-description').textContent = "The product you are looking for does not exist.";
            }
        }
    }

    // --- Checkout Page Specific Logic ---
    if (window.location.pathname.endsWith('checkout.html')) {
        renderCheckoutSummary(); // Function to populate order summary on checkout page
        attachCheckoutFormListeners(); // Function to handle form submission
    }
});