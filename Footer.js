function validateForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Basic validation
    if (name === '' || email === '' || phone === '') {
        alert('Harap isi semua field.');
        return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
        alert('Email tidak valid.');
        return;
    }

    // Check if phone number is valid (only digits and 10-14 characters)
    if (!/^\d{10,14}$/.test(phone)) {
        alert('Nomor HP tidak valid. Harap masukkan angka 10 hingga 14 digit.');
        return;
    }
    

    // Success message or send data
    alert('Form berhasil dikirim!');
    
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
