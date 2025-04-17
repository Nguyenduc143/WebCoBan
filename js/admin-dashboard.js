// Admin Dashboard JS - Chỉ giữ lại phần giao diện

// Dữ liệu mẫu cho sản phẩm
const sampleProducts = [
    {
        id: 'iphone-13-pro-max',
        name: 'iPhone 13 Pro Max',
        price: '29.990.000đ',
        discountPrice: '27.990.000đ',
        images: ['image/iphone-13-pro-max.webp'],
        status: 'active',
        sold: 150
    },
    {
        id: 'samsung-s21-ultra',
        name: 'Samsung Galaxy S21 Ultra',
        price: '25.990.000đ',
        discountPrice: '',
        images: ['image/ssn1.jpg'],
        status: 'active',
        sold: 120
    },
    {
        id: 'iphone-12',
        name: 'iPhone 12',
        price: '19.990.000đ',
        discountPrice: '17.990.000đ',
        images: ['image/iphone-12e.webp'],
        status: 'active',
        sold: 200
    },
    {
        id: 'iphone-11',
        name: 'iPhone 11',
        price: '14.990.000đ',
        discountPrice: '',
        images: ['image/iphone11a.jpg'],
        status: 'active',
        sold: 250
    },
    {
        id: 'samsung-z-fold-3',
        name: 'Samsung Galaxy Z Fold 3',
        price: '41.990.000đ',
        discountPrice: '31.990.000đ',
        images: ['image/slide1.png'],
        status: 'active',
        sold: 80
    },
    {
        id: 'xiaomi-12-pro',
        name: 'Xiaomi 12 Pro',
        price: '18.990.000đ',
        discountPrice: '',
        images: ['image/mi-11-ultra-a.jpg'],
        status: 'hidden',
        sold: 90
    }
];

// Dữ liệu mẫu cho đơn hàng
const sampleOrders = [
    {
        id: 'ORD123456',
        date: '2025-04-17T10:30:00',
        customer: {
            name: 'Nguyễn Văn A',
            email: 'nguyenvana@example.com',
            phone: '0912345678',
            address: '123 Đường Lê Lợi, Quận 1, TP.HCM'
        },
        total: 29990000,
        status: 'delivered'
    },
    {
        id: 'ORD123457',
        date: '2025-04-16T15:45:00',
        customer: {
            name: 'Trần Thị B',
            email: 'tranthib@example.com',
            phone: '0923456789',
            address: '456 Đường Nguyễn Huệ, Quận 1, TP.HCM'
        },
        total: 17990000,
        status: 'shipping'
    },
    {
        id: 'ORD123458',
        date: '2025-04-16T09:15:00',
        customer: {
            name: 'Lê Văn C',
            email: 'levanc@example.com',
            phone: '0934567890',
            address: '789 Đường Cách Mạng Tháng 8, Quận 3, TP.HCM'
        },
        total: 25990000,
        status: 'processing'
    },
    {
        id: 'ORD123459',
        date: '2025-04-15T14:20:00',
        customer: {
            name: 'Phạm Thị D',
            email: 'phamthid@example.com',
            phone: '0945678901',
            address: '101 Đường Võ Văn Tần, Quận 3, TP.HCM'
        },
        total: 14990000,
        status: 'pending'
    },
    {
        id: 'ORD123460',
        date: '2025-04-14T11:10:00',
        customer: {
            name: 'Hoàng Văn E',
            email: 'hoangvane@example.com',
            phone: '0956789012',
            address: '202 Đường Nam Kỳ Khởi Nghĩa, Quận 3, TP.HCM'
        },
        total: 31990000,
        status: 'cancelled'
    }
];

// Dữ liệu mẫu cho thống kê
const sampleStats = {
    totalProducts: 75,
    totalRevenue: 2750000000, // 2.75 tỷ
    totalOrders: 320,
    totalUsers: 1250
};

// Dữ liệu mẫu cho sản phẩm bán chạy
const sampleTopProducts = [
    {
        id: 'iphone-13-pro-max',
        name: 'iPhone 13 Pro Max',
        image: 'image/iphone-13-pro-max.webp',
        quantity: 150,
        revenue: 4198500000
    },
    {
        id: 'iphone-12',
        name: 'iPhone 12',
        image: 'image/iphone-12e.webp',
        quantity: 200,
        revenue: 3598000000
    },
    {
        id: 'iphone-11',
        name: 'iPhone 11',
        image: 'image/iphone11a.jpg',
        quantity: 250,
        revenue: 3747500000
    },
    {
        id: 'samsung-s21-ultra',
        name: 'Samsung Galaxy S21 Ultra',
        image: 'image/ssn1.jpg',
        quantity: 120,
        revenue: 3118800000
    },
    {
        id: 'samsung-z-fold-3',
        name: 'Samsung Galaxy Z Fold 3',
        image: 'image/slide1.png',
        quantity: 80,
        revenue: 2559200000
    }
];

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
                
                // Load dữ liệu mẫu cho từng trang
                if (pageName === 'products') {
                    loadSampleProducts();
                } else if (pageName === 'orders') {
                    loadSampleOrders();
                } else if (pageName === 'revenue') {
                    loadSampleRevenue();
                } else if (pageName === 'dashboard') {
                    loadSampleDashboard();
                }
            }
        });
    });
}

// Format date - Chỉ để hiển thị
function formatDate(dateStr, type = 'full') {
    const date = new Date(dateStr);
    
    if (type === 'short') {
        return `${date.getDate()}/${date.getMonth() + 1}`;
    }
    
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
        .format(price)
        .replace(/\s/g, '');
}

// Tạo badge cho trạng thái đơn hàng
function getStatusBadge(status) {
    const statusClasses = {
        'pending': 'pending',
        'processing': 'processing',
        'shipping': 'shipping',
        'delivered': 'delivered',
        'cancelled': 'cancelled'
    };
    
    const statusLabels = {
        'pending': 'Chờ xác nhận',
        'processing': 'Đang xử lý',
        'shipping': 'Đang giao hàng',
        'delivered': 'Đã giao hàng',
        'cancelled': 'Đã hủy'
    };
    
    return `<span class="status ${statusClasses[status] || 'pending'}">${statusLabels[status] || 'Không xác định'}</span>`;
}

// Load dữ liệu mẫu cho trang sản phẩm
function loadSampleProducts() {
    const productsList = document.getElementById('products-list');
    if (!productsList) return;
    
    let html = '';
    sampleProducts.forEach(product => {
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
                        <button class="edit-btn"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    productsList.innerHTML = html;
}

// Load dữ liệu mẫu cho trang đơn hàng
function loadSampleOrders() {
    const ordersList = document.getElementById('orders-list');
    if (!ordersList) return;
    
    let html = '';
    sampleOrders.forEach(order => {
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
                        <button class="view-btn"><i class="fas fa-eye"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    ordersList.innerHTML = html;
}

// Load dữ liệu mẫu cho trang doanh thu
function loadSampleRevenue() {
    // Cập nhật số liệu thống kê doanh thu
    document.getElementById('today-revenue').textContent = formatPrice(35000000);
    document.getElementById('week-revenue').textContent = formatPrice(245000000);
    document.getElementById('month-revenue').textContent = formatPrice(720000000);
    document.getElementById('year-revenue').textContent = formatPrice(2750000000);
    
    // Load top sản phẩm bán chạy
    const topProductsList = document.getElementById('top-products');
    if (topProductsList) {
        let html = '';
        sampleTopProducts.forEach(product => {
            html += `
                <tr>
                    <td><img src="${product.image}" alt="${product.name}" class="image-preview"></td>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${formatPrice(product.revenue)}</td>
                    <td>
                        <button class="view-btn"><i class="fas fa-chart-bar"></i></button>
                    </td>
                </tr>
            `;
        });
        
        topProductsList.innerHTML = html;
    }
    
    // Tạo biểu đồ doanh thu
    createSampleCharts();
}

// Load dữ liệu mẫu cho trang tổng quan
function loadSampleDashboard() {
    // Cập nhật thông tin thống kê
    document.getElementById('total-products').textContent = sampleStats.totalProducts;
    document.getElementById('total-revenue').textContent = formatPrice(sampleStats.totalRevenue);
    document.getElementById('total-orders').textContent = sampleStats.totalOrders;
    document.getElementById('total-users').textContent = sampleStats.totalUsers;
    
    // Load đơn hàng gần đây
    const recentOrdersList = document.getElementById('recent-orders');
    if (recentOrdersList) {
        let html = '';
        // Sử dụng 5 đơn hàng đầu tiên cho đơn hàng gần đây
        sampleOrders.forEach(order => {
            html += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.customer.name}</td>
                    <td>${formatDate(order.date)}</td>
                    <td>${formatPrice(order.total)}</td>
                    <td>${getStatusBadge(order.status)}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="view-btn"><i class="fas fa-eye"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });
        
        recentOrdersList.innerHTML = html;
    }
    
    // Tạo biểu đồ doanh thu tổng quan
    createSampleCharts();
}

// Tạo biểu đồ mẫu
function createSampleCharts() {
    // Biểu đồ doanh thu tổng quan
    const revenueCtx = document.getElementById('revenue-chart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['11/04', '12/04', '13/04', '14/04', '15/04', '16/04', '17/04'],
                datasets: [{
                    label: 'Doanh thu (triệu đồng)',
                    data: [12, 19, 32, 15, 20, 25, 30],
                    borderColor: '#4CAF50',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // Biểu đồ doanh thu chi tiết
    const detailedRevenueCtx = document.getElementById('detailed-revenue-chart');
    if (detailedRevenueCtx) {
        new Chart(detailedRevenueCtx, {
            type: 'bar',
            data: {
                labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
                datasets: [{
                    label: 'Doanh thu (triệu đồng)',
                    data: [15, 29, 19, 22, 25, 32, 30],
                    backgroundColor: '#4CAF50'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

// Xử lý các nút chức năng - không có chức năng thực tế
function setupDummyButtons() {
    // Xử lý nút thêm sản phẩm
    const addProductBtn = document.getElementById('add-product-btn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            alert('Chức năng thêm sản phẩm không khả dụng trong phiên bản này.');
        });
    }
    
    // Xử lý các nút sửa, xóa, xem
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-btn')) {
            alert('Chức năng sửa không khả dụng trong phiên bản này.');
        }
        
        if (e.target.closest('.delete-btn')) {
            alert('Chức năng xóa không khả dụng trong phiên bản này.');
        }
        
        if (e.target.closest('.view-btn')) {
            alert('Chức năng xem chi tiết không khả dụng trong phiên bản này.');
        }
    });
    
    // Xử lý bộ lọc biểu đồ
    const chartFilters = document.querySelectorAll('select[id$="-filter"], select[id$="-period"], select[id$="-type"]');
    chartFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            alert('Chức năng lọc dữ liệu không khả dụng trong phiên bản này.');
        });
    });
}

// Khởi chạy
document.addEventListener('DOMContentLoaded', function() {
    // Thiết lập navigation
    setupTabNavigation();
    
    // Load dữ liệu cho trang mặc định (dashboard)
    loadSampleDashboard();
    
    // Thiết lập các nút chức năng
    setupDummyButtons();
});