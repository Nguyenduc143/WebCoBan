// Xử lý hiển thị/ẩn các phần thông tin vận chuyển
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử DOM
    const shippingMethods = document.querySelectorAll('.shipping-methods .method');
    
    // Thêm hiệu ứng hover cho các phương thức vận chuyển
    shippingMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        method.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Thêm animation cho tiêu đề khi scroll đến
    const shippingTitle = document.querySelector('.shipping-content .title');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScroll() {
        if (isElementInViewport(shippingTitle)) {
            shippingTitle.style.opacity = '1';
            shippingTitle.style.transform = 'translateY(0)';
        }
    }
    
    // Thiết lập style ban đầu cho animation
    shippingTitle.style.opacity = '0';
    shippingTitle.style.transform = 'translateY(20px)';
    shippingTitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Thêm event listener cho scroll
    window.addEventListener('scroll', handleScroll);
    // Kích hoạt kiểm tra lần đầu
    handleScroll();
});