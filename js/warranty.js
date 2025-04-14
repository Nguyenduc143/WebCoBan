// Xử lý hiển thị/ẩn các phần thông tin bảo hành
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử DOM
    const warrantySteps = document.querySelectorAll('.warranty-steps .step');
    
    // Thêm hiệu ứng hover cho các bước bảo hành
    warrantySteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Thêm animation cho tiêu đề khi scroll đến
    const warrantyTitle = document.querySelector('.warranty-content .title');
    
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
        if (isElementInViewport(warrantyTitle)) {
            warrantyTitle.style.opacity = '1';
            warrantyTitle.style.transform = 'translateY(0)';
        }
    }
    
    // Thiết lập style ban đầu cho animation
    warrantyTitle.style.opacity = '0';
    warrantyTitle.style.transform = 'translateY(20px)';
    warrantyTitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Thêm event listener cho scroll
    window.addEventListener('scroll', handleScroll);
    // Kích hoạt kiểm tra lần đầu
    handleScroll();
});