 document.addEventListener("DOMContentLoaded", function() {
       
        const form = document.querySelector(".consultation-form form");

        
        form.addEventListener("submit", function(event) {
            event.preventDefault();  
            
            
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const phone = form.phone.value.trim();

            
            if (name === "" || email === "" || phone === "") {
                alert("Harap isi semua kolom.");
            } else {
                
                alert("Formulir berhasil dikirim!");
                
                
                form.reset();
            }
        });
    });
