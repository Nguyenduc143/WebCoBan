document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact_form form');
    const inputs = contactForm.querySelectorAll('input, select, textarea');

    // Validate form fields
    function validateForm() {
        let isValid = true;
        let errorMessages = [];

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                errorMessages.push(`${input.previousElementSibling.textContent.replace(':', '')} không được để trống`);
                input.style.borderColor = '#dc3545';
            } else {
                input.style.borderColor = '#ddd';
            }

            // Email validation
            if (input.type === 'email' && input.value.trim() !== '') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    isValid = false;
                    errorMessages.push('Email không hợp lệ');
                    input.style.borderColor = '#dc3545';
                }
            }

            // Phone validation
            if (input.type === 'tel' && input.value.trim() !== '') {
                const phonePattern = /^[0-9]{10}$/;
                if (!phonePattern.test(input.value)) {
                    isValid = false;
                    errorMessages.push('Số điện thoại phải có 10 chữ số');
                    input.style.borderColor = '#dc3545';
                }
            }
        });

        return { isValid, errorMessages };
    }

    // Show error message
    function showMessage(messages, type = 'error') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `alert alert-${type}`;
        messageDiv.style.padding = '10px';
        messageDiv.style.marginBottom = '20px';
        messageDiv.style.borderRadius = '4px';
        messageDiv.style.backgroundColor = type === 'error' ? '#f8d7da' : '#d4edda';
        messageDiv.style.color = type === 'error' ? '#721c24' : '#155724';
        messageDiv.style.border = `1px solid ${type === 'error' ? '#f5c6cb' : '#c3e6cb'}`;
        messageDiv.innerHTML = Array.isArray(messages) ? messages.join('<br>') : messages;

        const form = contactForm.querySelector('form');
        form.insertBefore(messageDiv, form.firstChild);

        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const { isValid, errorMessages } = validateForm();

        if (!isValid) {
            showMessage(errorMessages, 'error');
            return;
        }

        // Simulate form submission
        showMessage('Thông tin của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!', 'success');
        contactForm.reset();
    });

    // Reset validation on input
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
        });
    });
});