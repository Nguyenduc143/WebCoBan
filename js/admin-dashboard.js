// Khởi tạo dữ liệu mẫu nếu chưa có
function initializeData() {
    // Khởi tạo danh sách sản phẩm từ dữ liệu hiện có
    if (!localStorage.getItem('adminProducts')) {
        const products = initializeProductsFromDetail();
        localStorage.setItem('adminProducts', JSON.stringify(products));
    }

    // Khởi tạo đơn hàng mẫu
    if (!localStorage.getItem('adminOrders')) {
        const orders = generateSampleOrders();
        localStorage.setItem('adminOrders', JSON.stringify(orders));
    }
}

// Lấy dữ liệu sản phẩm từ detail.js để tạo danh sách quản lý
function initializeProductsFromDetail() {
    try {
        // Đọc dữ liệu sản phẩm từ localStorage nếu đã có
        const existingProducts = JSON.parse(localStorage.getItem('adminProducts'));
        if (existingProducts && existingProducts.length > 0) {
            return existingProducts;
        }

        // Nếu không có, tạo từ dữ liệu trong detail.js (sử dụng đúng cấu trúc từ file đã có)
        const detailProducts = {
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
                colors: ['#000000', '#C39690', '#F3F2F0'],
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
            'samsung-galaxy-a52s': {
                name: 'Samsung Galaxy A52s',
                price: '8.990.000đ',
                images: [
                    'image/a52s.webp'
                ],
                colors: ['#ffffff', '#000000', '#6866FB'],
                description: 'Samsung Galaxy A52s - Smartphone tầm trung với màn hình Super AMOLED 6.5 inch, chip Snapdragon 778G, camera 64MP.'
            },
            'samsung-galaxy-a72': {
                name: 'Samsung Galaxy A72',
                price: '10.990.000đ',
                images: [
                    'image/a72.jpg'
                ],
                colors: ['#ffffff', '#000000', '#6866FB'],
                description: 'Samsung Galaxy A72 - Smartphone tầm trung cao cấp với màn hình Super AMOLED 6.7 inch, chip Snapdragon 720G, camera chuyên nghiệp.'
            },
            'xiaomi-12-pro': {
                name: 'Xiaomi 12 Pro',
                price: '18.990.000đ',
                images: [
                    'image/xm1.webp'
                ],
                colors: ['#ffffff', '#000000'],
                description: 'Xiaomi 12 Pro - Flagship mới nhất với màn hình AMOLED 6.73 inch, chip Snapdragon 8 Gen 1, hệ thống camera 50MP.'
            }
        };

        // Chuyển đối dữ liệu sang mảng để quản lý
        const adminProducts = [];
        for (const id in detailProducts) {
            const product = detailProducts[id];
            adminProducts.push({
                id: id,
                name: product.name,
                price: product.price,
                discountPrice: product.discountPrice || '',
                images: product.images,
                colors: product.colors,
                description: product.description,
                status: 'active',
                sold: Math.floor(Math.random() * 100) + 10 // Số lượng bán mẫu
            });
        }

        return adminProducts;
    } catch (error) {
        console.error('Lỗi khi khởi tạo dữ liệu sản phẩm:', error);
        return [];
    }
}

// Tạo dữ liệu đơn hàng mẫu
function generateSampleOrders() {
    const orders = [];
    const products = JSON.parse(localStorage.getItem('adminProducts')) || initializeProductsFromDetail();
    const statuses = ['pending', 'processing', 'shipping', 'delivered', 'cancelled'];
    
    // Tạo các đơn hàng mẫu trong 30 ngày gần nhất
    const today = new Date();
    
    for (let i = 0; i < 20; i++) {
        const orderDate = new Date(today);
        orderDate.setDate(today.getDate() - Math.floor(Math.random() * 30));
        
        const orderItems = [];
        const numItems = Math.floor(Math.random() * 3) + 1;
        let subtotal = 0;
        
        // Thêm sản phẩm vào đơn hàng
        for (let j = 0; j < numItems; j++) {
            const product = products[Math.floor(Math.random() * products.length)];
            const quantity = Math.floor(Math.random() * 3) + 1;
            const price = parsePrice(product.discountPrice || product.price);
            const total = price * quantity;
            subtotal += total;
            
            orderItems.push({
                productId: product.id,
                name: product.name,
                price: price,
                quantity: quantity,
                total: total,
                image: product.images[0]
            });
        }
        
        const shipping = 30000; // Phí vận chuyển cố định
        const total = subtotal + shipping;
        
        orders.push({
            id: generateOrderId(),
            date: orderDate.toISOString(),
            customer: {
                name: `Khách hàng ${i + 1}`,
                email: `customer${i + 1}@example.com`,
                phone: `09${Math.floor(10000000 + Math.random() * 90000000)}`,
                address: `${Math.floor(Math.random() * 100) + 1} Đường ABC, Phường XYZ, Quận 123, TP.HCM`
            },
            items: orderItems,
            subtotal: subtotal,
            shipping: shipping,
            total: total,
            status: statuses[Math.floor(Math.random() * statuses.length)]
        });
    }
    
    return orders;
}

// Tạo mã đơn hàng
function generateOrderId() {
    return 'ORD' + Math.floor(100000 + Math.random() * 900000);
}

// Chuyển chuỗi giá tiền thành số
function parsePrice(priceStr) {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^\d]/g, ''));
}

// Format số thành chuỗi giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Xử lý chuyển đổi tab trong dashboard
function setupTabNavigation() {
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    const pageContents = document.querySelectorAll('.page-content');
    const pageTitle = document.getElementById('page-title');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageName = this.getAttribute('data-page');
            if (!pageName) return;
            
            // Xóa class active từ tất cả menu item
            menuItems.forEach(i => i.classList.remove('active'));
            // Thêm class active cho menu item được chọn
            this.classList.add('active');
            
            // Ẩn tất cả các trang
            pageContents.forEach(page => page.style.display = 'none');
            
            // Hiển thị trang được chọn
            const selectedPage = document.getElementById(`${pageName}-page`);
            if (selectedPage) {
                selectedPage.style.display = 'block';
                pageTitle.textContent = this.querySelector('a').textContent.trim();
                
                // Load dữ liệu cho trang tương ứng
                if (pageName === 'products') {
                    loadProducts();
                } else if (pageName === 'orders') {
                    loadOrders();
                } else if (pageName === 'revenue') {
                    loadRevenueData();
                } else if (pageName === 'dashboard') {
                    loadDashboardData();
                }
            }
        });
    });
}

// ===== QUẢN LÝ SẢN PHẨM =====

// Load danh sách sản phẩm
function loadProducts() {
    const productsList = document.getElementById('products-list');
    if (!productsList) return;
    
    const products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    
    let html = '';
    products.forEach(product => {
        html += `
            <tr>
                <td>${product.id}</td>
                <td><img src="${product.images[0]}" alt="${product.name}" class="image-preview"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.discountPrice || '-'}</td>
                <td>${product.status === 'active' ? '<span class="status active">Hiển thị</span>' : '<span class="status hidden">Ẩn</span>'}</td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="editProduct('${product.id}')"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" onclick="deleteProduct('${product.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    productsList.innerHTML = html;
}

// Mở modal thêm sản phẩm
function openAddProductModal() {
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('product-modal-title');
    const form = document.getElementById('product-form');
    
    modalTitle.textContent = 'Thêm sản phẩm mới';
    form.reset();
    document.getElementById('product-id').value = 'new-' + Date.now();
    
    modal.style.display = 'block';
}

// Chỉnh sửa sản phẩm
function editProduct(productId) {
    const products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('product-modal-title');
    
    modalTitle.textContent = 'Chỉnh sửa sản phẩm';
    
    // Điền thông tin sản phẩm vào form
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-discount-price').value = product.discountPrice || '';
    document.getElementById('product-image').value = product.images[0];
    document.getElementById('product-images').value = product.images.slice(1).join(', ');
    document.getElementById('product-colors').value = product.colors.join(', ');
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-status').value = product.status;
    
    modal.style.display = 'block';
}

// Xóa sản phẩm
function deleteProduct(productId) {
    if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;
    
    let products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    products = products.filter(p => p.id !== productId);
    
    localStorage.setItem('adminProducts', JSON.stringify(products));
    loadProducts();
    loadDashboardData(); // Cập nhật lại dashboard
}

// Lưu sản phẩm
function saveProduct(formData) {
    let products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    
    const productId = formData.id;
    const isNewProduct = productId.startsWith('new-');
    
    // Xử lý chuỗi hình ảnh và màu sắc
    const mainImage = formData.image.trim();
    const otherImages = formData.images ? formData.images.split(',').map(img => img.trim()).filter(img => img !== '') : [];
    const allImages = [mainImage, ...otherImages];
    
    const colors = formData.colors ? formData.colors.split(',').map(color => color.trim()).filter(color => color !== '') : [];
    
    const product = {
        id: isNewProduct ? productId : formData.id,
        name: formData.name,
        price: formData.price,
        discountPrice: formData.discountPrice,
        images: allImages,
        colors: colors,
        description: formData.description,
        status: formData.status,
        sold: isNewProduct ? 0 : (products.find(p => p.id === productId)?.sold || 0)
    };
    
    if (isNewProduct) {
        products.push(product);
    } else {
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products[index] = product;
        }
    }
    
    localStorage.setItem('adminProducts', JSON.stringify(products));
    return true;
}

// ===== QUẢN LÝ ĐƠN HÀNG =====

// Load danh sách đơn hàng
function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    if (!ordersList) return;
    
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    
    let html = '';
    orders.forEach(order => {
        html += `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer.name}</td>
                <td>${order.customer.email}</td>
                <td>${order.customer.phone}</td>
                <td>${formatDate(order.date)}</td>
                <td>${formatPrice(order.total)}</td>
                <td>${getStatusBadge(order.status)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="view-btn" onclick="viewOrder('${order.id}')"><i class="fas fa-eye"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    ordersList.innerHTML = html;
}

// Hiển thị chi tiết đơn hàng
function viewOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const modal = document.getElementById('order-modal');
    
    // Điền thông tin đơn hàng vào modal
    document.getElementById('order-id-display').textContent = order.id;
    document.getElementById('customer-name').textContent = order.customer.name;
    document.getElementById('customer-email').textContent = order.customer.email;
    document.getElementById('customer-phone').textContent = order.customer.phone;
    document.getElementById('customer-address').textContent = order.customer.address;
    
    // Cập nhật trạng thái đơn hàng
    document.getElementById('order-status').value = order.status;
    
    // Hiển thị sản phẩm trong đơn hàng
    const orderItemsList = document.getElementById('order-items-list');
    let html = '';
    
    order.items.forEach(item => {
        html += `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" class="image-preview"></td>
                <td>${item.name}</td>
                <td>${formatPrice(item.price)}</td>
                <td>${item.quantity}</td>
                <td>${formatPrice(item.total)}</td>
            </tr>
        `;
    });
    
    orderItemsList.innerHTML = html;
    
    // Cập nhật thông tin tổng tiền
    document.getElementById('order-subtotal').textContent = formatPrice(order.subtotal);
    document.getElementById('order-shipping').textContent = formatPrice(order.shipping);
    document.getElementById('order-total').textContent = formatPrice(order.total);
    
    // Hiển thị modal
    modal.style.display = 'block';
    
    // Xử lý cập nhật trạng thái đơn hàng
    document.getElementById('update-order-status').onclick = function() {
        updateOrderStatus(orderId, document.getElementById('order-status').value);
    };
}

// Cập nhật trạng thái đơn hàng
function updateOrderStatus(orderId, newStatus) {
    let orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem('adminOrders', JSON.stringify(orders));
        
        alert('Cập nhật trạng thái đơn hàng thành công!');
        
        // Cập nhật lại danh sách đơn hàng
        loadOrders();
        
        // Đóng modal
        document.getElementById('order-modal').style.display = 'none';
    }
}

// ===== THỐNG KÊ DOANH THU =====

// Load dữ liệu doanh thu
function loadRevenueData() {
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    
    // Chỉ tính các đơn hàng thành công (đã giao và đang giao)
    const successOrders = orders.filter(order => ['delivered', 'shipping'].includes(order.status));
    
    // Tính doanh thu theo thời gian
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 7);
    
    const lastMonthStart = new Date(today);
    lastMonthStart.setDate(today.getDate() - 30);
    
    const yearStart = new Date(today.getFullYear(), 0, 1);
    
    const todayRevenue = calculateRevenue(successOrders, today, new Date());
    const weekRevenue = calculateRevenue(successOrders, lastWeekStart, new Date());
    const monthRevenue = calculateRevenue(successOrders, lastMonthStart, new Date());
    const yearRevenue = calculateRevenue(successOrders, yearStart, new Date());
    
    // Cập nhật UI
    document.getElementById('today-revenue').textContent = formatPrice(todayRevenue);
    document.getElementById('week-revenue').textContent = formatPrice(weekRevenue);
    document.getElementById('month-revenue').textContent = formatPrice(monthRevenue);
    document.getElementById('year-revenue').textContent = formatPrice(yearRevenue);
    
    // Load top sản phẩm bán chạy
    loadTopProducts();
    
    // Tạo biểu đồ doanh thu
    createRevenueChart();
}

// Tính doanh thu trong khoảng thời gian
function calculateRevenue(orders, startDate, endDate) {
    return orders.reduce((total, order) => {
        const orderDate = new Date(order.date);
        if (orderDate >= startDate && orderDate <= endDate) {
            return total + order.total;
        }
        return total;
    }, 0);
}

// Load top sản phẩm bán chạy
function loadTopProducts() {
    const topProductsList = document.getElementById('top-products');
    if (!topProductsList) return;
    
    // Tính doanh thu theo sản phẩm
    const products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    const successOrders = orders.filter(order => ['delivered', 'shipping'].includes(order.status));
    
    // Tạo map thống kê doanh thu theo sản phẩm
    const productStats = {};
    
    successOrders.forEach(order => {
        order.items.forEach(item => {
            if (!productStats[item.productId]) {
                productStats[item.productId] = {
                    id: item.productId,
                    name: item.name,
                    image: item.image,
                    quantity: 0,
                    revenue: 0
                };
            }
            
            productStats[item.productId].quantity += item.quantity;
            productStats[item.productId].revenue += item.total;
        });
    });
    
    // Chuyển thành mảng và sắp xếp theo doanh thu
    const topProducts = Object.values(productStats).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
    
    let html = '';
    topProducts.forEach(product => {
        html += `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" class="image-preview"></td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${formatPrice(product.revenue)}</td>
                <td>
                    <button class="view-btn" onclick="viewProductDetails('${product.id}')"><i class="fas fa-chart-bar"></i></button>
                </td>
            </tr>
        `;
    });
    
    topProductsList.innerHTML = html || '<tr><td colspan="5">Chưa có dữ liệu sản phẩm bán chạy</td></tr>';
}

// Tạo biểu đồ doanh thu
function createRevenueChart() {
    // Tìm canvas để tạo biểu đồ
    const chartCanvas = document.getElementById('detailed-revenue-chart');
    if (!chartCanvas) return;
    
    // Lấy loại biểu đồ và khoảng thời gian từ select
    const chartType = document.getElementById('revenue-chart-type').value || 'line';
    const period = document.getElementById('revenue-period').value || 'month';
    
    // Lấy dữ liệu đơn hàng
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    const successOrders = orders.filter(order => ['delivered', 'shipping'].includes(order.status));
    
    // Xác định khoảng thời gian và nhãn
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let labels = [];
    let data = [];
    
    if (period === 'week') {
        // Doanh thu 7 ngày gần nhất
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            
            const dayRevenue = calculateRevenue(
                successOrders, 
                new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
                new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
            );
            
            labels.push(formatDate(date, 'short'));
            data.push(dayRevenue);
        }
    } else if (period === 'month') {
        // Doanh thu 30 ngày gần nhất (chia thành 6 khoảng)
        for (let i = 5; i >= 0; i--) {
            const startDate = new Date(today);
            startDate.setDate(today.getDate() - (i + 1) * 5);
            
            const endDate = new Date(today);
            endDate.setDate(today.getDate() - i * 5);
            endDate.setHours(23, 59, 59);
            
            const periodRevenue = calculateRevenue(successOrders, startDate, endDate);
            
            labels.push(`${formatDate(startDate, 'short')} - ${formatDate(endDate, 'short')}`);
            data.push(periodRevenue);
        }
    } else if (period === 'year') {
        // Doanh thu theo tháng trong năm hiện tại
        const currentYear = today.getFullYear();
        
        for (let i = 0; i < 12; i++) {
            const startDate = new Date(currentYear, i, 1);
            const endDate = new Date(currentYear, i + 1, 0, 23, 59, 59);
            
            const monthRevenue = calculateRevenue(successOrders, startDate, endDate);
            
            labels.push(`Tháng ${i + 1}`);
            data.push(monthRevenue);
        }
    }
    
    // Nếu đã có biểu đồ cũ, hủy nó đi
    if (window.revenueChart) {
        window.revenueChart.destroy();
    }
    
    // Tạo biểu đồ mới
    window.revenueChart = new Chart(chartCanvas, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Doanh thu',
                data: data,
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ===== TỔNG QUAN (DASHBOARD) =====

// Load dữ liệu tổng quan
function loadDashboardData() {
    const products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Tính doanh thu tổng từ các đơn hàng thành công
    const successOrders = orders.filter(order => ['delivered', 'shipping'].includes(order.status));
    const totalRevenue = successOrders.reduce((sum, order) => sum + order.total, 0);
    
    // Cập nhật thông tin thống kê
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('total-revenue').textContent = formatPrice(totalRevenue);
    document.getElementById('total-orders').textContent = orders.length;
    document.getElementById('total-users').textContent = users.length;
    
    // Load đơn hàng gần đây
    loadRecentOrders();
    
    // Tạo biểu đồ doanh thu tổng quan
    createDashboardRevenueChart();
}

// Load đơn hàng gần đây
function loadRecentOrders() {
    const recentOrdersList = document.getElementById('recent-orders');
    if (!recentOrdersList) return;
    
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    
    // Sắp xếp theo thời gian giảm dần (mới nhất lên đầu)
    const recentOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    
    let html = '';
    recentOrders.forEach(order => {
        html += `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer.name}</td>
                <td>${formatDate(order.date)}</td>
                <td>${formatPrice(order.total)}</td>
                <td>${getStatusBadge(order.status)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="view-btn" onclick="viewOrder('${order.id}')"><i class="fas fa-eye"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    recentOrdersList.innerHTML = html || '<tr><td colspan="6">Chưa có dữ liệu đơn hàng</td></tr>';
}

// Tạo biểu đồ doanh thu cho trang tổng quan
function createDashboardRevenueChart() {
    const chartCanvas = document.getElementById('revenue-chart');
    if (!chartCanvas) return;
    
    const timeFilter = document.getElementById('revenue-time-filter').value || 'week';
    
    const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    const successOrders = orders.filter(order => ['delivered', 'shipping'].includes(order.status));
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let labels = [];
    let data = [];
    
    if (timeFilter === 'week') {
        // Doanh thu 7 ngày gần nhất
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            
            const dayRevenue = calculateRevenue(
                successOrders, 
                new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
                new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
            );
            
            labels.push(formatDate(date, 'short'));
            data.push(dayRevenue);
        }
    } else if (timeFilter === 'month') {
        // Doanh thu 30 ngày gần nhất (chia thành 10 khoảng)
        for (let i = 9; i >= 0; i--) {
            const startDate = new Date(today);
            startDate.setDate(today.getDate() - (i + 1) * 3);
            
            const endDate = new Date(today);
            endDate.setDate(today.getDate() - i * 3);
            endDate.setHours(23, 59, 59);
            
            const periodRevenue = calculateRevenue(successOrders, startDate, endDate);
            
            labels.push(`${formatDate(startDate, 'short')} - ${formatDate(endDate, 'short')}`);
            data.push(periodRevenue);
        }
    } else if (timeFilter === 'year') {
        // Doanh thu theo tháng trong năm hiện tại
        const currentYear = today.getFullYear();
        
        for (let i = 0; i < 12; i++) {
            const startDate = new Date(currentYear, i, 1);
            const endDate = new Date(currentYear, i + 1, 0, 23, 59, 59);
            
            const monthRevenue = calculateRevenue(successOrders, startDate, endDate);
            
            labels.push(`Tháng ${i + 1}`);
            data.push(monthRevenue);
        }
    }
    
    // Nếu đã có biểu đồ cũ, hủy nó đi
    if (window.dashboardRevenueChart) {
        window.dashboardRevenueChart.destroy();
    }
    
    // Tạo biểu đồ mới
    window.dashboardRevenueChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Doanh thu',
                data: data,
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ===== HÀM TIỆN ÍCH =====

// Format date
function formatDate(dateStr, type = 'full') {
    const date = new Date(dateStr);
    
    if (type === 'short') {
        return `${date.getDate()}/${date.getMonth() + 1}`;
    }
    
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// Tạo badge trạng thái đơn hàng
function getStatusBadge(status) {
    const statusMap = {
        'pending': {text: 'Chờ xác nhận', class: 'pending'},
        'processing': {text: 'Đang xử lý', class: 'processing'},
        'shipping': {text: 'Đang giao hàng', class: 'shipping'},
        'delivered': {text: 'Đã giao hàng', class: 'delivered'},
        'cancelled': {text: 'Đã hủy', class: 'cancelled'}
    };
    
    const statusInfo = statusMap[status] || {text: status, class: ''};
    return `<span class="status ${statusInfo.class}">${statusInfo.text}</span>`;
}

// ===== KHỞI CHẠY =====

document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo dữ liệu mẫu nếu cần
    initializeData();
    
    // Thiết lập navigation
    setupTabNavigation();
    
    // Load dữ liệu ban đầu
    loadDashboardData();
    
    // Xử lý sự kiện thêm sản phẩm
    const addProductBtn = document.getElementById('add-product-btn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', openAddProductModal);
    }
    
    // Xử lý đóng modal sản phẩm
    const closeProductModal = document.getElementById('close-product-modal');
    const cancelProduct = document.getElementById('cancel-product');
    
    if (closeProductModal) {
        closeProductModal.addEventListener('click', function() {
            document.getElementById('product-modal').style.display = 'none';
        });
    }
    
    if (cancelProduct) {
        cancelProduct.addEventListener('click', function() {
            document.getElementById('product-modal').style.display = 'none';
        });
    }
    
    // Xử lý đóng modal đơn hàng
    const closeOrderModal = document.getElementById('close-order-modal');
    const closeOrderDetails = document.getElementById('close-order-details');
    
    if (closeOrderModal) {
        closeOrderModal.addEventListener('click', function() {
            document.getElementById('order-modal').style.display = 'none';
        });
    }
    
    if (closeOrderDetails) {
        closeOrderDetails.addEventListener('click', function() {
            document.getElementById('order-modal').style.display = 'none';
        });
    }
    
    // Xử lý lưu sản phẩm
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                id: document.getElementById('product-id').value,
                name: document.getElementById('product-name').value,
                price: document.getElementById('product-price').value,
                discountPrice: document.getElementById('product-discount-price').value,
                image: document.getElementById('product-image').value,
                images: document.getElementById('product-images').value,
                colors: document.getElementById('product-colors').value,
                description: document.getElementById('product-description').value,
                status: document.getElementById('product-status').value
            };
            
            if (saveProduct(formData)) {
                alert('Lưu sản phẩm thành công!');
                document.getElementById('product-modal').style.display = 'none';
                loadProducts();
                loadDashboardData(); // Cập nhật lại dashboard
            }
        });
    }
    
    // Xử lý thay đổi bộ lọc biểu đồ doanh thu
    const revenueTimeFilter = document.getElementById('revenue-time-filter');
    if (revenueTimeFilter) {
        revenueTimeFilter.addEventListener('change', createDashboardRevenueChart);
    }
    
    const revenueChartType = document.getElementById('revenue-chart-type');
    const revenuePeriod = document.getElementById('revenue-period');
    
    if (revenueChartType && revenuePeriod) {
        revenueChartType.addEventListener('change', createRevenueChart);
        revenuePeriod.addEventListener('change', createRevenueChart);
    }
});

// Make functions available globally
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.viewOrder = viewOrder;
window.viewProductDetails = function(productId) {
    alert(`Chức năng xem chi tiết sản phẩm ${productId} đang được phát triển.`);
};