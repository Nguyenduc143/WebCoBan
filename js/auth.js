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

// Xử lý modal đăng nhập
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    // Reset form
    document.getElementById('loginForm').reset();
}

// Xử lý modal đăng ký
function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
    // Reset form
    document.getElementById('registerForm').reset();
}

// Đóng modal khi click bên ngoài
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Cập nhật UI dựa trên trạng thái đăng nhập
function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.querySelector('.user-info');
    
    if (currentUser) {
        // Đã đăng nhập
        if (authButtons) authButtons.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'flex';
            userInfo.innerHTML = `
                <span>Xin chào, ${currentUser.name}</span>
                <button onclick="logout()" class="logout-btn">Đăng xuất</button>
            `;
        }
    } else {
        // Chưa đăng nhập
        if (authButtons) authButtons.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
    }
}

// Validate dữ liệu
function validateName(name) {
    return name.length >= 2; // Tên phải có ít nhất 2 ký tự
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ và số
    return password.length >= 6 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}

// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Validate
    if (!email || !password) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    // Kiểm tra đăng nhập tài khoản admin (không cần validate email cho admin)
    const adminAccount = JSON.parse(localStorage.getItem('adminAccount'));
    if (adminAccount && email === adminAccount.username && password === adminAccount.password) {
        // Đăng nhập với tài khoản admin
        const adminLogin = {
            isLoggedIn: true,
            username: adminAccount.username,
            name: adminAccount.name,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('adminLogin', JSON.stringify(adminLogin));
        
        // Đóng modal đăng nhập
        closeLoginModal();
        
        // Chuyển hướng đến trang quản trị
        window.location.href = 'admin-dashboard.html';
        return;
    }

    // Validate email cho tài khoản thông thường
    if (!validateEmail(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    // Kiểm tra đăng nhập người dùng thông thường
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = {
            name: user.name,
            email: user.email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateAuthUI();
        closeLoginModal();
        alert('Đăng nhập thành công!');
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

// Xử lý form đăng ký
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate
    if (!name || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    if (!validateName(name)) {
        alert('Tên phải có ít nhất 2 ký tự!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    if (!validatePassword(password)) {
        alert('Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ và số!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    // Kiểm tra email đã tồn tại
    if (users.some(user => user.email === email)) {
        alert('Email đã được sử dụng!');
        return;
    }

    // Thêm user mới
    const newUser = {
        name,
        email,
        password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Tự động đăng nhập sau khi đăng ký
    currentUser = {
        name: newUser.name,
        email: newUser.email
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    updateAuthUI();
    closeRegisterModal();
    alert('Đăng ký thành công!');
});

// Đăng xuất
function logout() {
    // Lưu email người dùng trước khi xóa
    const userEmail = currentUser ? currentUser.email : null;
    
    // Xóa thông tin người dùng hiện tại
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    // Reset giỏ hàng nếu có
    if (userEmail) {
        localStorage.removeItem(`cart_${userEmail}`);
        localStorage.removeItem(`cartTotal_${userEmail}`);
    }
    
    // Reset span số lượng sản phẩm về 0
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = '0';
    }
    
    // Cập nhật UI
    updateAuthUI();
    alert('Đã đăng xuất!');
}

// Khởi tạo UI khi trang load
document.addEventListener('DOMContentLoaded', function() {
    setupAdminAccount(); // Đảm bảo tài khoản admin đã được thiết lập
    updateAuthUI();
});