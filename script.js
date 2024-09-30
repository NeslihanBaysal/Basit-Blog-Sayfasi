const postContainer = document.querySelector('.post-wrapper'); 
const posts = document.querySelectorAll('.post'); // Tüm postları al

// Sağ oka tıklanınca (Next)
document.getElementById('prevBtn').addEventListener('click', () => {
    const firstPost = postContainer.firstElementChild; // İlk post'u al
    postContainer.appendChild(firstPost); // İlk post'u sona taşı
});

// Sol oka tıklanınca (Previous)
document.getElementById('nextBtn').addEventListener('click', () => {
    const lastPost = postContainer.lastElementChild; // Son post'u al
    postContainer.insertBefore(lastPost, postContainer.firstElementChild); // Son post'u başa taşı
});