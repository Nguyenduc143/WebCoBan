// Dữ liệu sản phẩm
const products = {
    'iphone-13-pro-max': {
        name: 'iPhone 13 Pro Max',
        price: '29.990.000đ',
        images: [
            'image/iphone-13-pro-max.webp',
            'image/iphone13pm_vanggg_3.webp',
            'image/iphone-13-pro-max-256gb-xanh-la.webp',
            'image/iphone_13_pro_max_bac.webp'
            
        ],
        colors: ['#9DB9D2', '#FCE9D2', '#607160', '#F8F7F1'],
        description: 'iPhone 13 Pro Max - Flagship cao cấp nhất của Apple với màn hình 6.7 inch, chip A15 Bionic mạnh mẽ, camera chuyên nghiệp.'
    },
    'samsung-s21-ultra': {
        name: 'Samsung Galaxy S21 Ultra',
        price: '25.990.000đ',
        images: [
            
            'image/ssn1.jpg',
            'image/ssn2.jpg',
            'image/ssn3.jpg'
            
        ],
        colors: ['#000000', '#C39690', '#F3F2F0', ],
        description: 'Samsung Galaxy S21 Ultra - Smartphone cao cấp với màn hình Dynamic AMOLED 2X, camera 108MP, zoom 100x.'
    },
    'iphone-12': {
        name: 'iPhone 12',
        price: '19.990.000đ',
        images: [
           
            'image/iphone-12e.webp',
            'image/iphone-12b.webp',
            'image/iphone-12c.webp',
            'image/iphone-12d.webp',
            
            'image/iphone-12f.webp'
        ],
        colors: ['#FF0000', '#FF99FF', '#E2F7DD', '#000000','#F9F6F5'],
        description: 'iPhone 12 - Smartphone mạnh mẽ với thiết kế vuông vắn, chip A14 Bionic, hỗ trợ 5G.'
    },
    'iphone-11': {
        name: 'iPhone 11',
        price: '14.990.000đ',
        images: [
            
            'image/iphone11a.jpg',
            'image/iphone11b.jpg',
            'image/iphone11c.jpg',
            'image/iphone11d.jpg',
            'image/iphone11e.jpg',
            'image/iphone11f.jpg'
        ],
        colors: ['#FF0000', '#f2efef', '#ffe599', '#dac8ec','#000000','d8e7d2'],
        description: 'iPhone 11 - Smartphone phổ thông với hiệu năng ổn định, camera kép, pin bền bỉ.'
    },
    'iphone-11-pro-max': {
        name: 'iPhone 11 Pro Max',
        price: '14.990.000đ',
        images: [
            
            'image/iphone-11-pro-a.webp',
            'image/iphone-11-pro-b.webp',
            'image/iphone-11-pro-c.webp',
            'image/iphone-11-pro-d.webp'
            
        ],
        colors: ['#545E57', '#EDECE5', '#FCDABE', '#575553'],
        description: 'iPhone 11 Pro Max - Smartphone phổ thông với hiệu năng ổn định, camera kép, pin bền bỉ.'
    },
    'samsung-z-fold-3': {
        name: 'Samsung Galaxy Z Fold 3',
        price: '41.990.000đ',
        discountPrice: '31.990.000đ',
        images: [
            'image/zfold3.jpg',
            'image/zfold3_5g_openback_a_1.webp',
            'image/zfold3_5g_b.webp'
           
        ],
        colors: ['#E3D7D9', '#000000', '#1E2B24'],
        description: 'Samsung Galaxy Z Fold 3 - Smartphone màn hình gập cao cấp với S Pen, hiệu năng mạnh mẽ.'
    },
    'xiaomi-mi-11-ultra': {
        name: 'Xiaomi Mi 11 Ultra',
        price: '21.990.000đ',
        discountPrice: '16.990.000đ',
        images: [
            'image/mi-11-ultra-a.jpg',
            'image/xm2.webp'
            
        ],
        colors: ['#ffffff', '#000000'],
        description: 'Xiaomi Mi 11 Ultra - Flagship với camera chuyên nghiệp, màn hình phụ sau độc đáo.'
    },
    'iphone-12-pro': {
        name: 'iPhone 12 Pro',
        price: '30.990.000đ',
        discountPrice: '24.990.000đ',
        images: [
            'image/12_vngf_2.webp',
            'image/12_xa_s_2.webp',
            'image/12_tr_ng_1_2.webp',
            'image/12_xanh_en_2.webp'
        ],
        colors: ['#FFF2E2', '#5E5C58', '#F0F1EC', '#465D69'],
        description: 'iPhone 12 Pro - Smartphone cao cấp với camera LiDAR, khung viền thép không gỉ.'
    },
    'samsung-z-flip3': {
        name: 'Samsung Galaxy Z Flip3',
        price: '25.990.000đ',
        discountPrice: '18.990.000đ',
        images: [
            'image/zflip.webp',
            'image/zfold3_5g_b.webp',
            'image/ssn1.jpg'
        ],
        colors: ['#1D1C22', '#D6CFC7', '#ECF4FF', '#C4B69E'],
        description: 'Samsung Galaxy Z Flip3 - Smartphone màn hình gập dạng nắp gập nhỏ gọn, thiết kế thời trang, hiệu năng mạnh mẽ với chip Snapdragon 888.'
    },
    'samsung-galaxy-a52s': {
        name: 'Samsung Galaxy A52s',
        price: '8.990.000đ',
        images: [
            'image/a52s.webp',
            'image/samsung2.jpg'
        ],
        colors: ['#ffffff', '#000000'],
        description: 'Samsung Galaxy A52s - Smartphone tầm trung với màn hình Super AMOLED 6.5 inch, chip Snapdragon 778G, camera chính 64MP và chống nước IP67.'
    },
    'samsung-galaxy-a72': {
        name: 'Samsung Galaxy A72',
        price: '10.990.000đ',
        images: [
            'image/a72.jpg',
            'image/samsung2.jpg'
        ],
        colors: ['#ffffff', '#000000'],
        description: 'Samsung Galaxy A72 - Smartphone tầm trung cao cấp với màn hình Super AMOLED 6.7 inch, chip Snapdragon 720G, camera chính 64MP và chống nước IP67.'
    },
    'xiaomi-12-pro': {
        name: 'Xiaomi 12 Pro',
        price: '18.990.000đ',
        images: [
            'image/xm1.webp',
            'image/xm3.webp'
        ],
        colors: ['#ffffff', '#000000'],
        description: 'Xiaomi 12 Pro - Flagship với màn hình AMOLED 6.73 inch, chip Snapdragon 8 Gen 1, camera chính 50MP và sạc nhanh 120W.'
    }
};

// Lấy ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Hàm lưu giỏ hàng vào localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm lấy giỏ hàng từ localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Hàm chuyển đổi chuỗi giá tiền thành số
function parsePrice(priceString) {
    if (!priceString) return 0;
    // Loại bỏ các ký tự không phải số và dấu chấm
    return parseFloat(priceString.replace(/[^\d]/g, ''));
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product, quantity = 1) {
    const cart = getCart();
    
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    // Chuyển đổi giá tiền từ chuỗi sang số
    const price = parsePrice(product.discountPrice || product.price);
    
    if (existingProductIndex !== -1) {
        // Nếu đã có, tăng số lượng
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Nếu chưa có, thêm sản phẩm mới
        cart.push({
            id: product.id,
            name: product.name,
            price: price, // Lưu giá tiền dưới dạng số
            quantity: quantity,
            image: product.images[0]
        });
    }
    
    // Lưu giỏ hàng
    saveCart(cart);
    
    // Cập nhật số lượng hiển thị trên giỏ hàng
    updateCartCount();
    
    return cart;
}

// Hàm cập nhật số lượng sản phẩm hiển thị trên icon giỏ hàng
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.card_head .card span');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Hàm kiểm tra người dùng đã đăng nhập chưa
function isUserLoggedIn() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser !== null;
}

// Hiển thị thông tin sản phẩm
function displayProductDetails() {
    const product = products[productId];
    
    if (!product) {
        document.querySelector('.body_detail').innerHTML = '<div class="container"><h2>Không tìm thấy sản phẩm</h2></div>';
        return;
    }

    // Cập nhật tiêu đề trang
    document.title = product.name + ' - Bee Mobile Store';

    // Tạo HTML cho phần thông tin sản phẩm
    const detailHTML = `
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="product_image">
                        <div class="main_image">
                            <img src="${product.images[0]}" alt="${product.name}">
                        </div>
                        <div class="sub_images">
                            ${product.images.map(img => `
                                <div class="item">
                                    <img src="${img}" alt="${product.name}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="product_info">
                        <h1>${product.name}</h1>
                        ${product.discountPrice ? `
                            <div class="price">
                                <span class="old_price"><s>${product.price}</s></span>
                                <span class="new_price">${product.discountPrice}</span>
                            </div>
                        ` : `
                            <div class="price">
                                <span class="current_price">${product.price}</span>
                            </div>
                        `}
                        <div class="colors">
                            <h3>Màu sắc:</h3>
                            <div class="color_options">
                                ${product.colors.map(color => `
                                    <span style="background-color: ${color}"></span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="description">
                            <h3>Mô tả sản phẩm:</h3>
                            <p>${product.description}</p>
                        </div>
                        <div class="actions">
                            <button class="buy_now">Mua ngay</button>
                            <button class="add_to_cart">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector('.body_detail').innerHTML = detailHTML;

    // Xử lý sự kiện click ảnh phụ
    const subImages = document.querySelectorAll('.sub_images .item img');
    const mainImage = document.querySelector('.main_image img');
    
    subImages.forEach(img => {
        img.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });

    // Xử lý sự kiện chọn màu
    const colorOptions = document.querySelectorAll('.color_options span');
    colorOptions.forEach((colorSpan, index) => {
        colorSpan.addEventListener('click', function() {
            // Cập nhật ảnh chính theo màu được chọn
            mainImage.src = product.images[index];
            
            // Đánh dấu màu đang được chọn
            colorOptions.forEach(span => span.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Xử lý sự kiện "Mua ngay" và "Thêm vào giỏ hàng"
    const buyNowButton = document.querySelector('.buy_now');
    const addToCartButton = document.querySelector('.add_to_cart');
    
    if (buyNowButton) {
        buyNowButton.addEventListener('click', function() {
            // Kiểm tra người dùng đã đăng nhập chưa
            if (!isUserLoggedIn()) {
                alert('Vui lòng đăng nhập để mua hàng!');
                openLoginModal(); // Mở modal đăng nhập
                return;
            }
            
            // Thêm sản phẩm vào giỏ hàng
            addToCart({
                id: productId,
                name: product.name,
                price: product.price,
                discountPrice: product.discountPrice,
                images: product.images
            });
            
            // Chuyển đến trang giỏ hàng
            window.location.href = 'cart.html';
        });
    }
    
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            // Kiểm tra người dùng đã đăng nhập chưa
            if (!isUserLoggedIn()) {
                alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
                openLoginModal(); // Mở modal đăng nhập
                return;
            }
            
            // Thêm sản phẩm vào giỏ hàng
            addToCart({
                id: productId,
                name: product.name,
                price: product.price,
                discountPrice: product.discountPrice,
                images: product.images
            });
            
            // Hiển thị thông báo thành công
            alert('Đã thêm sản phẩm vào giỏ hàng!');
            
            // Hiển thị popup giỏ hàng
            const popup = document.querySelector(".popup_shopping");
            const overlay = document.querySelector(".overlay");
            if (popup && overlay) {
                popup.classList.add("active");
                overlay.classList.add("active");
                
                // Cập nhật nội dung giỏ hàng trong popup
                updateCartPopup();
            }
        });
    }
}

// Hàm cập nhật nội dung giỏ hàng trong popup
function updateCartPopup() {
    const cart = getCart();
    const tbody = document.querySelector('.popup_shopping tbody');
    
    if (tbody) {
        // Xóa nội dung cũ
        tbody.innerHTML = '';
        
        // Thêm sản phẩm từ giỏ hàng
        if (cart.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5">Giỏ hàng trống</td></tr>';
        } else {
            cart.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>
                        <a href="#" class="remove-item" data-id="${item.id}">Xoá</a>
                        <a href="#" class="add-item" data-id="${item.id}">Thêm</a>
                    </td>
                `;
                tbody.appendChild(row);
            });
            
            // Thêm sự kiện cho các nút trong giỏ hàng
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const id = this.getAttribute('data-id');
                    removeFromCart(id);
                    updateCartPopup();
                });
            });
            
            document.querySelectorAll('.add-item').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const id = this.getAttribute('data-id');
                    const product = cart.find(item => item.id === id);
                    if (product) {
                        addToCart({
                            id: id,
                            name: product.name,
                            price: product.price,
                            images: [product.image]
                        });
                        updateCartPopup();
                    }
                });
            });
        }
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    let cart = getCart();
    
    // Tìm sản phẩm trong giỏ hàng
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex !== -1) {
        // Giảm số lượng
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        } else {
            // Xóa sản phẩm nếu số lượng = 1
            cart = cart.filter(item => item.id !== productId);
        }
        
        // Lưu giỏ hàng
        saveCart(cart);
        
        // Cập nhật số lượng hiển thị
        updateCartCount();
    }
    
    return cart;
}

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', function() {
    displayProductDetails();
    updateCartCount();
});