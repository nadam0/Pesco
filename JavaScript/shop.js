const products = [
    { id: 1, page: "shop", title: "Lightweight linen summer dress with belt", price: 40, oldPrice: 80, img: "../images/feature-product-2.png", badge: "10% OFF", reviews: 80 },
    { id: 2, page: "shop", title: "Cozy knit sweater with pockets", price: 20, oldPrice: 50, img: "../images/feature-product-1.png", badge: "10% OFF", reviews: 80 },
    { id: 3, page: "shop", title: "Athletic leggings with mesh panels", price: 40, oldPrice: 67, img: "../images/feature-product-4.png", badge: "40% OFF", reviews: 47 },
    { id: 4, page: "shop", title: "Classic leather biker jacket with zippers", price: 35, oldPrice: 67, img: "../images/product-1.png", badge: "10% OFF", reviews: 47 },
    { id: 5, page: "shop", title: "Floral print sundress with adjustable straps", price: 26, oldPrice: 67, img: "../images/product-2.png", badge: "10% OFF", reviews: 47 },
    { id: 6, page: "shop", title: "Relaxed fit denim jeans with distressing", price: 30, oldPrice: 67, img: "../images/product-3.png", badge: "10% OFF", reviews: 47 },
    { id: 7, page: "shop", title: "Cargo shorts with pockets and drawstring", price: 20, oldPrice: 67, img: "../images/feature-product-3.png", badge: "40% OFF", reviews: 47 },
    { id: 8, page: "shop", title: "Elegant silk dress with sequins", price: 34, oldPrice: 67, img: "../images/product-4.png", badge: "80% OFF", reviews: 80 },
    { id: 9, page: "shop", title: "Cashmere v-neck sweater with ribbed cuffs", price: 7, oldPrice: 67, img: "../images/product-5.png", badge: "10% OFF", reviews: 47 },

    { id: 11, page: "home", title: "Lightweight linen summer dress with belt", price: 40, oldPrice: 80, img: "../images/feature-product-1.png", badge: "10% OFF", reviews: 80 },
    { id: 12, page: "home", title: "Cozy knit sweater with pockets", price: 23, oldPrice: 67, img: "../images/feature-product-2.png", badge: "10% OFF", reviews: 80 },
    { id: 13, page: "home", title: "Athletic leggings with mesh panels", price: 40, oldPrice: 80, img: "../images/feature-product-3.png", badge: "10% OFF", reviews: 47 },
    { id: 14, page: "home", title: "Classic leather biker jacket with zippers", price: 23, oldPrice: 67, img: "../images/feature-product-4.png", badge: "10% OFF", reviews: 47 },
    { id: 15, page: "home", title: "Floral print sundress with adjustable straps", price: 23, oldPrice: 67, img: "../images/feature-product-4.png", badge: "10% OFF", reviews: 47 },
    { id: 16, page: "home", title: "Relaxed fit denim jeans with distressing", price: 40, oldPrice: 80, img: "../images/feature-product-3.png", badge: "10% OFF", reviews: 47 },
    { id: 17, page: "home", title: "Cargo shorts with pockets and drawstring", price: 23, oldPrice: 67, img: "../images/feature-product-2.png", badge: "40% OFF", reviews: 47 },
    { id: 18, page: "home", title: "Elegant silk dress with sequins", price: 40, oldPrice: 67, img: "../images/feature-product-1.png", badge: "80% OFF", reviews: 80 },

    { id: 21, page: "feature", title: "Cozy knit sweater with pockets", price: 23, oldPrice: 67, img: "../images/feature-product-1.png", badge: "80% OFF", reviews: 50 },
    { id: 22, page: "feature", title: "Elegant silk dress with sequins", price: 23, oldPrice: 67, img: "../images/feature-product-2.png", badge: "80% OFF", reviews: 80 },
    { id: 23, page: "feature", title: "Cargo shorts with pockets and drawstring", price: 23, oldPrice: 67, img: "../images/feature-product-3.png", badge: "40% OFF", reviews: 47 },
    { id: 24, page: "feature", title: "Athletic leggings with mesh panels", price: 40, oldPrice: 80, img: "../images/feature-product-4.png", badge: "10% OFF", reviews: 47 },
    { id: 25, page: "feature", title: "Elegant silk dress with sequins", price: 23, oldPrice: 67, img: "../images/feature-product-2.png", badge: "80% OFF", reviews: 80 }
];

let cart = JSON.parse(localStorage.getItem("myPescoCart")) || [];

const cartSidebar = document.querySelector(".cart-sidebar");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".close-cart");
const cartItemsBox = document.querySelector(".cart-items");
const totalPriceEl = document.querySelector(".total-price");
const bagBadge = document.querySelector(".process .fa-bag-shopping + span");
const bagIcons = document.querySelectorAll(".process .fa-bag-shopping, .mobile-bag");
const sortSelect = document.querySelector(".sort-select");


function displayProducts(productsArray) {
    productsArray.forEach(function(product) {
        if (product.page !== "shop") {
            const box = document.querySelector(`#${product.page}-products`);
            if (box && box.innerHTML.trim() === "") {
                box.innerHTML += createProductCard(product);
            }
        }
    });

    const shopBox = document.querySelector("#shop-products");
    if (shopBox) {
        let shopHtml = "";
        productsArray.forEach(function(product) {
            if (product.page === "shop") {
                shopHtml += createProductCard(product);
            }
        });
        shopBox.innerHTML = shopHtml;
    }
}

function createProductCard(product) {
    return `
        <div class="cart">
            <div class="cart-img-box">
                <span class="badge">${product.badge}</span>
                <img src="${product.img}" alt="${product.title}">
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    <span>Add To Cart</span>
                </button>
                <div class="cart-actions">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>
            <div class="stars">
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>(${product.reviews})</span>
                </div>
                <div>
                    <del>$${product.oldPrice.toFixed(2)}</del>
                </div>
            </div>
            <div class="cart-details">
                <p>${product.title}</p>
                <h2>$${product.price.toFixed(2)}</h2>
            </div>
        </div>
    `;
}

displayProducts(products);
updateCart();


if (sortSelect) {
    sortSelect.addEventListener("change", function(e) {
        const value = e.target.value;
        
        let sortedProducts = [...products];

        if (value === "Price Low To High") {
            sortedProducts.sort(function(a, b) {
                return a.price - b.price;
            });
        } else if (value === "Price High To Low") {
            sortedProducts.sort(function(a, b) {
                return b.price - a.price; 
            });
        } else if (value === "Sort by Newness") {
            sortedProducts.sort(function(a, b) {
                return b.id - a.id;
            });
        } else {
            sortedProducts = [...products];
        }

        displayProducts(sortedProducts);
    });
}


function openCart() {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("open");
}

function closeCart() {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("open");
}

bagIcons.forEach(function(icon) {
    icon.parentElement.addEventListener("click", function(e) {
        e.preventDefault();
        openCart();
    });
});

closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);


function saveAndRender() {
    localStorage.setItem("myPescoCart", JSON.stringify(cart));
    updateCart();
}

function addToCart(id) {
    const product = products.find(function(item) { return item.id === id; });
    if (!product) return;

    const itemInCart = cart.find(function(item) { return item.id === id; });
    if (itemInCart) {
        itemInCart.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveAndRender();
    openCart();
}

function increaseQty(id) {
    const itemInCart = cart.find(function(item) { return item.id === id; });
    if (itemInCart) {
        itemInCart.qty++;
        saveAndRender();
    }
}

function decreaseQty(id) {
    const itemInCart = cart.find(function(item) { return item.id === id; });
    if (itemInCart) {
        if (itemInCart.qty > 1) {
            itemInCart.qty--;
            saveAndRender();
        } else {
            if (confirm("Are you sure to delete this product")) {
                removeFromCart(id);
            }
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(function(item) { return item.id !== id; });
    saveAndRender();
}

function updateCart() {
    let html = "";

    cart.forEach(function(cartItem) {
        const product = products.find(function(item) { return item.id === cartItem.id; });
        if (product) {
            html += `
                <div class="cart-item">
                    <img src="${product.img}" alt="${product.title}">
                    <div class="cart-item-info">
                        <h4>${product.title}</h4>
                        <p>$${product.price.toFixed(2)}</p>
                        <div class="qty-controls">
                            <button class="decrease-btn" data-id="${product.id}">-</button>
                            <span>${cartItem.qty}</span>
                            <button class="increase-btn" data-id="${product.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${product.id}">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `;
        }
    });

    cartItemsBox.innerHTML = html;

    const totalPrice = cart.reduce(function(a, b) {
        const product = products.find(function(item) { return item.id === b.id; });
        return a + (product ? product.price * b.qty : 0);
    }, 0);

    const totalCount = cart.reduce(function(a, b) {
        return a + b.qty;
    }, 0);

    totalPriceEl.textContent = "$" + totalPrice.toFixed(2);

    if (bagBadge) {
        bagBadge.textContent = totalCount < 10 ? "0" + totalCount : totalCount;
    }
}

document.addEventListener("click", function(e) {
    const addBtn = e.target.closest(".add-to-cart-btn");
    const increaseBtn = e.target.closest(".increase-btn");
    const decreaseBtn = e.target.closest(".decrease-btn");
    const removeBtn = e.target.closest.remove ? e.target.closest(".remove-item") : null;

    if (addBtn) {
        e.preventDefault();
        addToCart(Number(addBtn.dataset.id));
    }

    if (increaseBtn) {
        increaseQty(Number(increaseBtn.dataset.id));
    }

    if (decreaseBtn) {
        decreaseQty(Number(decreaseBtn.dataset.id));
    }

    if (e.target.closest(".remove-item")) {
        const btn = e.target.closest(".remove-item");
        if (confirm("Are you sure to delete this product")) {
            removeFromCart(Number(btn.dataset.id));
        }
    }
});
