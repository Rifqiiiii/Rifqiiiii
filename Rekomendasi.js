// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
const images = document.querySelectorAll(".wisata-item img");
const modalImg = document.getElementById("Foto-Foto/JenSud.jpg");
const captionText = document.getElementById("caption");

images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}