// Dữ liệu mẫu cho trang quản trị

// Dữ liệu thống kê tổng quan
const dashboardStats = {
    totalSales: 386500000,
    totalOrders: 127,
    totalCustomers: 98,
    pendingShipments: 14,
    monthlySales: [
        { month: 'Tháng 1', value: 25000000 },
        { month: 'Tháng 2', value: 28000000 },
        { month: 'Tháng 3', value: 32000000 },
        { month: 'Tháng 4', value: 35000000 },
        { month: 'Tháng 5', value: 30000000 },
        { month: 'Tháng 6', value: 42000000 },
        { month: 'Tháng 7', value: 38000000 },
        { month: 'Tháng 8', value: 45000000 },
        { month: 'Tháng 9', value: 52000000 },
        { month: 'Tháng 10', value: 48000000 },
        { month: 'Tháng 11', value: 0 },
        { month: 'Tháng 12', value: 0 }
    ],
    categorySales: [
        { category: 'Điện thoại', percent: 65 },
        { category: 'Phụ kiện', percent: 25 },
        { category: 'Máy tính bảng', percent: 10 }
    ]
};

// Danh sách đơn hàng gần đây
const recentOrders = [
    {
        id: 'DH000127',
        customerName: 'Nguyễn Văn Anh',
        date: '2025-04-16',
        totalAmount: 27990000,
        status: 'Đang xử lý',
        products: [
            { name: 'iPhone 13 Pro Max', quantity: 1, price: 27990000 }
        ]
    },
    {
        id: 'DH000126',
        customerName: 'Trần Thị Bình',
        date: '2025-04-15',
        totalAmount: 35980000,
        status: 'Đang giao hàng',
        products: [
            { name: 'iPhone 13 Pro Max', quantity: 1, price: 27990000 },
            { name: 'AirPods Pro', quantity: 1, price: 7990000 }
        ]
    },
    {
        id: 'DH000125',
        customerName: 'Lê Văn Cường',
        date: '2025-04-15',
        totalAmount: 17990000,
        status: 'Đã giao hàng',
        products: [
            { name: 'iPhone 12', quantity: 1, price: 17990000 }
        ]
    },
    {
        id: 'DH000124',
        customerName: 'Phạm Đức Duy',
        date: '2025-04-14',
        totalAmount: 25990000,
        status: 'Đã giao hàng',
        products: [
            { name: 'Samsung Galaxy S21 Ultra', quantity: 1, price: 25990000 }
        ]
    },
    {
        id: 'DH000123',
        customerName: 'Hoàng Thị Em',
        date: '2025-04-13',
        totalAmount: 51980000,
        status: 'Đã giao hàng',
        products: [
            { name: 'iPhone 13 Pro Max', quantity: 1, price: 27990000 },
            { name: 'Samsung Galaxy S21 Ultra', quantity: 1, price: 25990000 }
        ]
    }
];

// Top sản phẩm bán chạy
const topSellingProducts = [
    {
        id: 'iphone-13-pro-max',
        name: 'iPhone 13 Pro Max',
        sold: 43,
        revenue: 1203570000,
        image: 'image/iphone-13-pro-max.webp'
    },
    {
        id: 'iphone-12',
        name: 'iPhone 12',
        sold: 37,
        revenue: 665630000,
        image: 'image/iphone-12e.webp'
    },
    {
        id: 'samsung-s21-ultra',
        name: 'Samsung Galaxy S21 Ultra',
        sold: 31,
        revenue: 805690000,
        image: 'image/ssn1.jpg'
    },
    {
        id: 'airpods-pro',
        name: 'AirPods Pro',
        sold: 22,
        revenue: 175780000,
        image: 'image/apple.png'
    }
];

// Danh sách khách hàng
const customers = [
    {
        id: 'KH00098',
        name: 'Nguyễn Văn Anh',
        email: 'vananh@email.com',
        phone: '0912345678',
        address: 'Hà Nội',
        totalPurchases: 2,
        totalSpent: 55980000,
        lastPurchase: '2025-04-16'
    },
    {
        id: 'KH00097',
        name: 'Trần Thị Bình',
        email: 'ttbinh@email.com',
        phone: '0923456789',
        address: 'Hồ Chí Minh',
        totalPurchases: 3,
        totalSpent: 80970000,
        lastPurchase: '2025-04-15'
    },
    {
        id: 'KH00096',
        name: 'Lê Văn Cường',
        email: 'lvcuong@email.com',
        phone: '0934567890',
        address: 'Đà Nẵng',
        totalPurchases: 1,
        totalSpent: 17990000,
        lastPurchase: '2025-04-15'
    },
    {
        id: 'KH00095',
        name: 'Phạm Đức Duy',
        email: 'pdduy@email.com',
        phone: '0945678901',
        address: 'Cần Thơ',
        totalPurchases: 2,
        totalSpent: 35980000,
        lastPurchase: '2025-04-14'
    },
    {
        id: 'KH00094',
        name: 'Hoàng Thị Em',
        email: 'htem@email.com',
        phone: '0956789012',
        address: 'Hà Nội',
        totalPurchases: 4,
        totalSpent: 145960000,
        lastPurchase: '2025-04-13'
    }
];

// Danh sách sản phẩm cần nhập thêm
const lowStockProducts = [
    {
        id: 'iphone-13-pro-max',
        name: 'iPhone 13 Pro Max',
        currentStock: 5,
        minimumStock: 10,
        supplier: 'Apple Việt Nam'
    },
    {
        id: 'samsung-s21-ultra',
        name: 'Samsung Galaxy S21 Ultra',
        currentStock: 3,
        minimumStock: 8,
        supplier: 'Samsung Electronics Việt Nam'
    },
    {
        id: 'airpods-pro',
        name: 'AirPods Pro',
        currentStock: 2,
        minimumStock: 15,
        supplier: 'Apple Việt Nam'
    }
];

// Hàm định dạng giá tiền
function formatCurrency(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
        .format(price)
        .replace(/\s/g, '');
}

// Hàm định dạng ngày
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}