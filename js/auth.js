// Khởi tạo users từ localStorage hoặc mảng rỗng
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Đảm bảo tài khoản admin đã được thiết lập
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

// Hàm kiểm tra đăng nhập và hiển thị thông tin người dùng
function checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.querySelector('.user-info');
    
    if (currentUser) {
        if (authButtons) authButtons.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'flex';
            userInfo.innerHTML = `
                <span>Xin chào, ${currentUser.name}</span>
                <button class="logout-btn" onclick="logout()">Đăng xuất</button>
            `;
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
    }
    
    // Khởi tạo giỏ hàng dựa trên người dùng hiện tại
    if (typeof initializeCart === 'function') {
        initializeCart();
    }
}

// Mở modal đăng nhập
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Đóng modal đăng nhập
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Mở modal đăng ký
function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Đóng modal đăng ký
function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Xử lý đăng nhập
function login(email, password) {
    if (!email || !password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return false;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Khởi tạo giỏ hàng cho người dùng vừa đăng nhập
        if (typeof initializeCart === 'function') {
            window.cart = [];
            initializeCart();
        } else {
            // Nếu hàm initializeCart chưa được tải, lấy giỏ hàng từ localStorage
            const userCart = localStorage.getItem(`cart_${email}`);
            if (userCart) {
                window.cart = JSON.parse(userCart);
            } else {
                window.cart = [];
                localStorage.setItem(`cart_${email}`, JSON.stringify([]));
            }
        }
        
        closeLoginModal();
        checkLogin();
        return true;
    } else {
        alert('Email hoặc mật khẩu không đúng!');
        return false;
    }
}

// Xử lý đăng ký
function register(name, email, password, confirmPassword) {
    if (!name || !email || !password || !confirmPassword) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return false;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('Email đã được sử dụng!');
        return false;
    }
    
    const user = { name, email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Khởi tạo giỏ hàng rỗng cho người dùng mới
    localStorage.setItem(`cart_${email}`, JSON.stringify([]));
    
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    closeRegisterModal();
    openLoginModal();
    return true;
}

// Xử lý đăng xuất
function logout() {
    localStorage.removeItem('currentUser');
    
    // Reset giỏ hàng khi đăng xuất
    window.cart = [];
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    
    checkLogin();
    
    // Chuyển về trang chủ sau khi đăng xuất
    if (window.location.pathname !== '/' && 
        window.location.pathname !== '/index.html' && 
        !window.location.pathname.endsWith('/index.html')) {
        window.location.href = 'index.html';
    }
}

// Xử lý form đăng nhập
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            login(email, password);
        });
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            register(name, email, password, confirmPassword);
        });
    }
});

// Export functions for global access
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.openRegisterModal = openRegisterModal;
window.closeRegisterModal = closeRegisterModal;
window.login = login;
window.register = register;
window.logout = logout;