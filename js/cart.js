// Khởi tạo giỏ hàng từ localStorage dựa vào người dùng hiện tại
function initializeCart() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // Nếu đã đăng nhập, lấy giỏ hàng riêng của người dùng đó
        const userCart = localStorage.getItem(`cart_${currentUser.email}`);
        cart = userCart ? JSON.parse(userCart) : [];
    } else {
        // Nếu chưa đăng nhập, giỏ hàng rỗng
        cart = [];
    }
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartCount();
}

// Hàm kiểm tra người dùng đã đăng nhập chưa
function isUserLoggedIn() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser !== null;
}

// Thêm sự kiện click cho icon giỏ hàng
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo giỏ hàng dựa trên người dùng hiện tại
    initializeCart();
    
    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
    
    // Xử lý nút tiếp tục mua sắm
    const continueShoppingBtn = document.getElementById('continue-shopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }

    // Xử lý nút thanh toán
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Kiểm tra đăng nhập trước khi thanh toán
            if (!isUserLoggedIn()) {
                alert('Vui lòng đăng nhập để thanh toán!');
                // Chuyển về trang chủ để đăng nhập
                window.location.href = 'index.html';
                return;
            }
            
            if (cart.length > 0) {
                alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Bee Mobile Store.');
                
                // Xóa giỏ hàng sau khi thanh toán
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                cart = [];
                localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
                renderCart();
                // Thêm xử lý thanh toán ở đây (có thể chuyển đến trang xác nhận đơn hàng)
            } else {
                alert('Giỏ hàng của bạn đang trống!');
            }
        });
    }
    
    renderCart();
});

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    } else {
        const cartSpan = document.querySelector('.card span');
        if (cartSpan) {
            cartSpan.id = 'cart-count';
            cartSpan.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }
    }
}

// Format giá tiền
function formatPrice(price) {
    if (typeof price !== 'number' || isNaN(price)) {
        return '0 ₫';
    }
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Cập nhật tổng tiền
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalElement = document.getElementById('cart-total');
    if (totalElement) {
        totalElement.textContent = formatPrice(total);
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        localStorage.setItem(`cartTotal_${currentUser.email}`, total);
    }
}

// Cập nhật số lượng sản phẩm
function updateQuantity(index, change) {
    cart[index].quantity = Math.max(1, cart[index].quantity + change);
    
    // Lưu giỏ hàng theo người dùng hiện tại
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    }
    
    renderCart();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeItem(index) {
    cart.splice(index, 1);
    
    // Lưu giỏ hàng theo người dùng hiện tại
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    }
    
    renderCart();
}

// Hiển thị giỏ hàng
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <tr>
                <td colspan="6">
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Giỏ hàng của bạn đang trống</p>
                        <a href="products.html" class="continue-shopping">Tiếp tục mua sắm</a>
                    </div>
                </td>
            </tr>`;
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <tr>
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>${formatPrice(item.price)}</td>
                <td>
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td>${formatPrice(item.price * item.quantity)}</td>
                <td>
                    <button class="delete-item" onclick="removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    updateCartCount();
    updateTotal();
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
        openLoginModal(); // Mở form đăng nhập nếu đã được định nghĩa
        return;
    }
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    // Lưu giỏ hàng theo người dùng hiện tại
    localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    updateCartCount();
}