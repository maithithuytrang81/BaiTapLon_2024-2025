document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('loginMessage').innerText = 'Đăng nhập thành công!';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('registerMessage').innerText = 'Đăng ký thành công!';
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('paymentMessage').innerText = 'Thanh toán thành công!';
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('registerMessage').innerText = 'Đăng ký thành công! Đang chuyển về trang đăng nhập...';
    
    // Chuyển về trang đăng nhập sau 2 giây
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi mặc định

    // Lấy thông tin từ các trường nhập liệu
    const cardholderName = document.getElementById('cardholderName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Kiểm tra xem các trường có hợp lệ không
    if (cardholderName && cardNumber && expiryDate && email && phone) {
        // Hiển thị hộp thoại thông báo thanh toán thành công
        alert(`Thanh toán thành công!\nCảm ơn ${cardholderName} đã sử dụng dịch vụ của chúng tôi.`);
        // Có thể thêm logic khác như gửi dữ liệu đến server ở đây nếu cần
        document.getElementById('paymentForm').reset(); // Đặt lại form sau khi thanh toán thành công
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});



