// Dữ liệu sản phẩm mẫu cho trang chi tiết sản phẩm

// Danh sách các sản phẩm
const productsList = [
    {
        id: 'iphone-13-pro-max',
        name: 'iPhone 13 Pro Max',
        brand: 'Apple',
        category: 'Điện thoại',
        basePrice: 29990000,
        salePrice: 27990000,
        colors: [
            { name: 'Xanh lá', code: '#576856', image: 'image/iphone-13-pro-max.webp' },
            { name: 'Vàng', code: '#F9E5C9', image: 'image/iphone13pm_vanggg_3.webp' },
            { name: 'Bạc', code: '#F0F2F2', image: 'image/iphone_13_pro_max_bac.webp' },
        ],
        storage: [
            { size: '128GB', price: 27990000 },
            { size: '256GB', price: 30990000 },
            { size: '512GB', price: 36790000 },
            { size: '1TB', price: 42990000 }
        ],
        images: [
            'image/iphone-13-pro-max.webp',
            'image/iphone13pm_vanggg_3.webp',
            'image/iphone_13_pro_max_bac.webp'
        ],
        specs: {
            screen: 'OLED 6.7 inch Super Retina XDR',
            os: 'iOS 15',
            camera: 'Camera chính: 12MP, f/1.5<br>Camera góc siêu rộng: 12MP, f/1.8<br>Camera tele: 12MP, f/2.8',
            chipset: 'Apple A15 Bionic',
            ram: '6GB',
            rom: '128GB - 1TB',
            battery: '4352 mAh, sạc nhanh 20W'
        },
        description: `
        <p>iPhone 13 Pro Max - siêu phẩm được mong chờ nhất năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120Hz mượt mà, cảm biến camera có kích thước lớn hơn, và viên pin cũng được cải thiện.</p>
        <h3>Thiết kế đẳng cấp, sang trọng</h3>
        <p>iPhone 13 Pro Max vẫn sở hữu khung viền vuông vức bằng kim loại sang trọng tương tự như iPhone 12 Pro Max. Mặt lưng của máy được hoàn thiện nhám để tránh bám vân tay. Cũng giống người tiền nhiệm, iPhone 13 Pro Max có khả năng chống nước và chống bụi chuẩn IP68.</p>
        <h3>Màn hình Super Retina XDR với ProMotion</h3>
        <p>iPhone 13 Pro Max được trang bị màn hình OLED 6.7 inch với độ phân giải 1284 x 2778 pixels. Đặc biệt, màn hình của máy hỗ trợ tần số quét 120Hz ProMotion, giúp mọi thao tác vuốt chạm trên máy được phản hồi nhanh chóng, mang đến trải nghiệm mượt mà chưa từng có.</p>
        `,
        reviews: [
            {
                name: 'Nguyễn Văn A',
                rating: 5,
                comment: 'Sản phẩm rất tốt, dùng mượt mà, pin trâu. Camera chụp đẹp lung linh!',
                date: '2025-02-15'
            },
            {
                name: 'Trần Thị B',
                rating: 4,
                comment: 'Máy đẹp, chạy nhanh, chỉ hơi nóng khi chơi game nặng.',
                date: '2025-03-22'
            },
            {
                name: 'Lê Văn C',
                rating: 5,
                comment: 'Quá đẹp, quá xịn. Chụp ảnh đẹp hơn cả máy ảnh của tôi.',
                date: '2025-04-05'
            }
        ]
    },
    {
        id: 'iphone-12',
        name: 'iPhone 12',
        brand: 'Apple',
        category: 'Điện thoại',
        basePrice: 19990000,
        salePrice: 17990000,
        colors: [
            { name: 'Đỏ', code: '#FF0000', image: 'image/iphone-12e.webp' },
            { name: 'Xanh dương', code: '#0000FF', image: 'image/iphone-12b.webp' },
            { name: 'Đen', code: '#000000', image: 'image/iphone-12c.webp' }
        ],
        storage: [
            { size: '64GB', price: 17990000 },
            { size: '128GB', price: 19990000 },
            { size: '256GB', price: 22990000 }
        ],
        images: [
            'image/iphone-12e.webp',
            'image/iphone-12b.webp',
            'image/iphone-12c.webp',
            'image/iphone-12d.webp',
            'image/iphone-12f.webp'
        ],
        specs: {
            screen: 'OLED 6.1 inch Super Retina XDR',
            os: 'iOS 15',
            camera: 'Camera chính: 12MP, f/1.6<br>Camera góc siêu rộng: 12MP, f/2.4',
            chipset: 'Apple A14 Bionic',
            ram: '4GB',
            rom: '64GB - 256GB',
            battery: '2815 mAh, sạc nhanh 20W'
        },
        description: `
        <p>Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12.</p>
        <h3>Hiệu năng vượt xa mọi giới hạn</h3>
        <p>Apple đã trang bị con chip mới nhất của hãng (tính đến 11/2020) cho iPhone 12 đó là A14 Bionic, được sản xuất trên tiến trình 5nm với hiệu suất ổn định hơn so với chip A13 được trang bị trên phiên bản tiền nhiệm iPhone 11.</p>
        <h3>Thiết kế được thay đổi mới mẻ</h3>
        <p>Nếu như bạn đã là một iFan lâu năm thì có thể bạn sẽ cảm thấy có chút quen thuộc với phần thiết kế của iPhone 12. Đúng vậy, có thể thấy Apple đã quay trở lại với phong cách thiết kế tương tự của iPhone 4, iPhone 5 với phần cạnh viền được thiết kế vuông vức, mạnh mẽ.</p>
        `,
        reviews: [
            {
                name: 'Phạm Đức D',
                rating: 5,
                comment: 'Vẫn là Apple, mọi thứ đều hoàn hảo từ thiết kế đến phần mềm.',
                date: '2025-01-10'
            },
            {
                name: 'Hoàng Thị E',
                rating: 4,
                comment: 'Máy chạy mượt, chụp ảnh đẹp, chỉ tiếc là không có sạc kèm theo.',
                date: '2025-02-18'
            }
        ]
    },
    {
        id: 'samsung-s21-ultra',
        name: 'Samsung Galaxy S21 Ultra',
        brand: 'Samsung',
        category: 'Điện thoại',
        basePrice: 25990000,
        salePrice: 25990000,
        colors: [
            { name: 'Đen', code: '#000000', image: 'image/ssn1.jpg' },
            { name: 'Bạc', code: '#C0C0C0', image: 'image/ssn2.jpg' }
        ],
        storage: [
            { size: '128GB', price: 25990000 },
            { size: '256GB', price: 27990000 },
            { size: '512GB', price: 29990000 }
        ],
        images: [
            'image/ssn1.jpg',
            'image/ssn2.jpg',
            'image/ssn3.jpg'
        ],
        specs: {
            screen: 'Dynamic AMOLED 2X 6.8 inch, 120Hz',
            os: 'Android 11, One UI 3.1',
            camera: 'Camera chính: 108MP, f/1.8<br>Camera góc siêu rộng: 12MP, f/2.2<br>Camera tele 1: 10MP, f/2.4<br>Camera tele 2: 10MP, f/4.9',
            chipset: 'Exynos 2100 8 nhân',
            ram: '12GB',
            rom: '128GB - 512GB',
            battery: '5000 mAh, sạc nhanh 25W'
        },
        description: `
        <p>Galaxy S21 Ultra là chiếc điện thoại Samsung đầu tiên trong dòng Galaxy S hỗ trợ bút S Pen. Đây cũng là chiếc điện thoại có cụm camera sau ấn tượng nhất của Samsung tính đến thời điểm hiện tại với camera chính 108MP, camera góc siêu rộng 12MP và 2 camera tele hỗ trợ zoom quang học 3x và 10x.</p>
        <h3>Thiết kế sang trọng, tinh tế</h3>
        <p>Galaxy S21 Ultra được hoàn thiện từ khung kim loại cao cấp và mặt lưng kính cường lực. Cụm camera sau được đặt trong một mô-đun nổi bật, liền mạch với khung viền tạo nên thiết kế độc đáo. Điện thoại có khả năng kháng nước, kháng bụi chuẩn IP68.</p>
        <h3>Màn hình 120Hz siêu mượt</h3>
        <p>S21 Ultra sở hữu màn hình Dynamic AMOLED 2X kích thước 6.8 inch với độ phân giải Quad HD+ (3200 x 1440 pixels). Đặc biệt, màn hình hỗ trợ tần số quét 120Hz ngay cả ở độ phân giải cao nhất, mang đến trải nghiệm siêu mượt mà.</p>
        `,
        reviews: [
            {
                name: 'Hoàng Văn F',
                rating: 5,
                comment: 'Camera quá đỉnh, chụp đêm cực sáng. Zoom xa vẫn giữ được độ chi tiết.',
                date: '2025-03-05'
            },
            {
                name: 'Nguyễn Thị G',
                rating: 4,
                comment: 'Sử dụng rất mượt, chơi game không giật lag. Pin trâu dùng thoải mái cả ngày.',
                date: '2025-03-27'
            },
            {
                name: 'Trương Văn H',
                rating: 5,
                comment: 'Hỗ trợ S Pen là điểm cộng lớn. Màn hình siêu đẹp, độ sáng cao.',
                date: '2025-04-10'
            }
        ]
    }
];

// Hàm tìm sản phẩm theo id
function findProductById(productId) {
    return productsList.find(product => product.id === productId);
}

// Hàm lấy danh sách sản phẩm theo danh mục
function getProductsByCategory(category) {
    return productsList.filter(product => product.category === category);
}

// Hàm lấy danh sách sản phẩm theo thương hiệu
function getProductsByBrand(brand) {
    return productsList.filter(product => product.brand === brand);
}

// Hàm lấy sản phẩm tương tự theo thương hiệu và danh mục
function getSimilarProducts(currentProductId) {
    const currentProduct = findProductById(currentProductId);
    if (!currentProduct) return [];
    
    return productsList
        .filter(product => 
            product.id !== currentProductId && 
            (product.brand === currentProduct.brand || product.category === currentProduct.category)
        )
        .slice(0, 4); // Trả về tối đa 4 sản phẩm tương tự
}

// Hàm định dạng giá tiền
function formatCurrency(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
        .format(price)
        .replace(/\s/g, '');
}

// Hàm tính rating trung bình
function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
}