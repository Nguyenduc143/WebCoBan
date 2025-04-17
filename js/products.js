// Khởi tạo giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    // Kiểm tra đăng nhập
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Vui lòng đăng nhập để mua hàng!');
        openLoginModal(); // Mở form đăng nhập
        return;
    }

    try {
        if (!product || !product.id || !product.name || !product.price) {
            throw new Error('Thông tin sản phẩm không hợp lệ');
        }

        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Hiển thị thông báo đẹp hơn
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Đã thêm ${product.name} vào giỏ hàng</p>
            <p class="price">${formatPrice(product.price)}</p>
        `;
        document.body.appendChild(notification);
        
        // Xóa thông báo sau 3 giây
        setTimeout(() => {
            notification.remove();
        }, 3000);
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng');
    }
}

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Lọc sản phẩm theo thương hiệu và giá
function filterProducts() {
    try {
        const brandFilter = document.getElementById('brand_filter').value;
        const priceFilter = document.getElementById('price_filter').value;
        const products = document.querySelectorAll('.product_card');
        let visibleCount = 0;

        products.forEach(product => {
            let show = true;
            const price = parseInt(product.querySelector('.price').textContent.replace(/[^0-9]/g, ''));
            const productName = product.querySelector('h3').textContent.toLowerCase();

            // Lọc theo thương hiệu
            if (brandFilter) {
                if (brandFilter === 'apple' && !productName.includes('iphone')) {
                    show = false;
                } else if (brandFilter === 'samsung' && !productName.includes('samsung')) {
                    show = false;
                } else if (brandFilter === 'xiaomi' && !productName.includes('xiaomi')) {
                    show = false;
                }
            }

            // Lọc theo giá
            if (priceFilter) {
                if (priceFilter === '0-5000000') {
                    if (price > 5000000) show = false;
                } else if (priceFilter === '5000000-10000000') {
                    if (price < 5000000 || price > 10000000) show = false;
                } else if (priceFilter === '10000000-20000000') {
                    if (price < 10000000 || price > 20000000) show = false;
                } else if (priceFilter === '20000000+') {
                    if (price <= 20000000) show = false;
                }
            }

            product.style.display = show ? 'block' : 'none';
            if (show) visibleCount++;
        });

        // Hiển thị thông báo khi không có sản phẩm nào
        const noResults = document.querySelector('.no-results');
        if (visibleCount === 0) {
            if (!noResults) {
                const message = document.createElement('div');
                message.className = 'no-results';
                message.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp</p>';
                document.querySelector('.products_grid').appendChild(message);
            }
        } else if (noResults) {
            noResults.remove();
        }
        
        // Log debug để kiểm tra kết quả
        console.log(`Đã lọc sản phẩm, hiển thị ${visibleCount} sản phẩm`);
    } catch (error) {
        console.error('Lỗi khi lọc sản phẩm:', error);
        alert('Có lỗi xảy ra khi lọc sản phẩm');
    }
}

// Tìm kiếm sản phẩm
function searchProducts() {
    try {
        const searchInput = document.querySelector('.search_box input').value.toLowerCase().trim();
        const products = document.querySelectorAll('.product_card');
        let visibleCount = 0;
        
        // Nếu không có từ khóa tìm kiếm, hiển thị tất cả sản phẩm
        if (!searchInput) {
            products.forEach(product => {
                product.style.display = 'block';
                visibleCount++;
            });
            
            // Xóa thông báo "không tìm thấy" nếu có
            const noResults = document.querySelector('.no-results');
            if (noResults) {
                noResults.remove();
            }
            
            return;
        }

        products.forEach(product => {
            // Lấy thông tin sản phẩm
            const title = product.querySelector('h3').textContent.toLowerCase();
            const priceText = product.querySelector('.price').textContent;
            const price = parseInt(priceText.replace(/[^0-9]/g, ''));
            
            // Lấy tính năng sản phẩm nếu có
            const featuresElements = product.querySelectorAll('.product_features span');
            let features = '';
            if (featuresElements.length > 0) {
                features = Array.from(featuresElements)
                    .map(span => span.textContent.toLowerCase())
                    .join(' ');
            }

            // Kiểm tra điều kiện tìm kiếm
            let show = false;
            
            // Tìm kiếm theo tên sản phẩm - hiển thị nếu tên chứa từ khóa tìm kiếm
            if (title.includes(searchInput)) {
                show = true;
            }
            
            // Tìm kiếm theo giá - nếu người dùng nhập số, hiển thị các sản phẩm có giá gần với số đó
            // Cho phép sai số 20% so với giá nhập vào
            if (searchInput.match(/^\d+$/)) {
                const searchPrice = parseInt(searchInput);
                const lowerBound = searchPrice * 0.8;
                const upperBound = searchPrice * 1.2;
                
                if (price >= lowerBound && price <= upperBound) {
                    show = true;
                }
            }

            // Tìm kiếm theo tính năng - hiển thị nếu tính năng chứa từ khóa tìm kiếm
            if (features && features.includes(searchInput)) {
                show = true;
            }

            // Áp dụng kết quả tìm kiếm
            product.style.display = show ? 'block' : 'none';
            if (show) visibleCount++;
        });

        // Hiển thị thông báo khi không tìm thấy sản phẩm
        const noResults = document.querySelector('.no-results');
        if (visibleCount === 0) {
            if (!noResults) {
                const message = document.createElement('div');
                message.className = 'no-results';
                message.innerHTML = `
                    <i class="fas fa-search"></i>
                    <p>Không tìm thấy sản phẩm phù hợp với từ khóa "${searchInput}"</p>
                    <p class="suggestion">Gợi ý: Thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc</p>
                `;
                const productsGrid = document.querySelector('.products_grid');
                if (productsGrid) {
                    productsGrid.appendChild(message);
                }
            }
        } else if (noResults) {
            noResults.remove();
        }
        
        console.log(`Tìm thấy ${visibleCount} sản phẩm với từ khóa "${searchInput}"`);
    } catch (error) {
        console.error('Lỗi khi tìm kiếm sản phẩm:', error);
        alert('Có lỗi xảy ra khi tìm kiếm sản phẩm');
    }
}

// Thêm event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Thêm sự kiện click cho icon giỏ hàng
    const cartIcon = document.getElementById('popup_card');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }
    updateCartCount();
    // Xử lý tìm kiếm
    const searchInput = document.querySelector('.search_box input');
    const searchButton = document.querySelector('.search_box button');
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    searchButton.addEventListener('click', searchProducts);

    // Xử lý lọc
    const filterSelects = document.querySelectorAll('.filter_options select');
    filterSelects.forEach(select => {
        select.addEventListener('change', filterProducts);
    });

    // Xử lý thêm vào giỏ hàng
    const addToCartButtons = document.querySelectorAll('.add_to_cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product_card');
            const priceText = productCard.querySelector('.price').textContent;
            // Xử lý giá sản phẩm, loại bỏ ký tự đặc biệt và chuyển đổi sang số
            const price = parseInt(priceText.replace(/[^0-9]/g, ''));
            
            // Kiểm tra giá hợp lệ trước khi thêm vào giỏ hàng
            if (!price || price <= 0) {
                console.error('Giá sản phẩm không hợp lệ:', priceText);
                alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng');
                return;
            }
            
            const product = {
                id: productCard.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-'),
                name: productCard.querySelector('h3').textContent,
                price: price,
                image: productCard.querySelector('img').src
            };
            addToCart(product);
        });
    });

    // Xử lý nút mua ngay
    const buyButtons = document.querySelectorAll('.button a:first-child');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Kiểm tra đăng nhập
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                alert('Vui lòng đăng nhập để mua hàng!');
                openLoginModal(); // Mở form đăng nhập
                return;
            }
            // Xử lý mua hàng
            const productCard = this.closest('.items');
            const product = {
                id: productCard.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-'),
                name: productCard.querySelector('h3').textContent,
                price: parseInt(productCard.querySelector('.price').textContent.replace(/[^0-9]/g, '')),
                image: productCard.querySelector('img').src
            };
            addToCart(product);
            window.location.href = 'cart.html'; // Chuyển đến trang giỏ hàng
        });
    });
});