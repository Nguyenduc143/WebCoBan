// Thiết lập tài khoản admin mặc định nếu chưa có
function setupAdminAccount() {
    const adminAccount = JSON.parse(localStorage.getItem('adminAccount'));
    if (!adminAccount) {
        const defaultAdmin = {
            username: 'admin',
            password: 'admin123',
            name: 'Administrator'
        };
        localStorage.setItem('adminAccount', JSON.stringify(defaultAdmin));
    }
}

// Kiểm tra trạng thái đăng nhập của admin
function checkAdminLoginStatus() {
    const adminLogin = JSON.parse(localStorage.getItem('adminLogin'));
    if (!adminLogin || !adminLogin.isLoggedIn) {
        // Nếu đang ở trang dashboard thì chuyển về trang đăng nhập
        if (window.location.pathname.includes('admin-dashboard.html')) {
            window.location.href = 'admin.html';
        }
    } else {
        // Nếu đã đăng nhập và đang ở trang đăng nhập thì chuyển đến dashboard
        if (window.location.pathname.includes('admin.html')) {
            window.location.href = 'admin-dashboard.html';
        }
    }
}

// Xử lý form đăng nhập admin
document.addEventListener('DOMContentLoaded', function() {
    setupAdminAccount();
    checkAdminLoginStatus();

    // Xử lý form đăng nhập admin
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('loginMessage');
            
            const adminAccount = JSON.parse(localStorage.getItem('adminAccount'));
            
            if (username === adminAccount.username && password === adminAccount.password) {
                // Đăng nhập thành công
                const adminLogin = {
                    isLoggedIn: true,
                    username: username,
                    name: adminAccount.name,
                    loginTime: new Date().toISOString()
                };
                localStorage.setItem('adminLogin', JSON.stringify(adminLogin));
                
                // Chuyển hướng đến trang dashboard
                window.location.href = 'admin-dashboard.html';
            } else {
                // Đăng nhập thất bại
                loginMessage.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
            }
        });
    }
    
    // Xử lý nút đăng xuất trên trang dashboard
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Xóa thông tin đăng nhập
            localStorage.removeItem('adminLogin');
            // Chuyển về trang đăng nhập
            window.location.href = 'admin.html';
        });
    }
    
    // Hiển thị tên admin
    const adminNameElement = document.getElementById('admin-name');
    if (adminNameElement) {
        const adminLogin = JSON.parse(localStorage.getItem('adminLogin'));
        if (adminLogin) {
            adminNameElement.textContent = adminLogin.name;
        }
    }
});