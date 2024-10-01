const postContainer = document.querySelector('.post-wrapper'); 
const posts = document.querySelectorAll('.post');
const tags = document.querySelectorAll('.tag');
const clearFilterBtn = document.getElementById('clearFilterBtn');

// Sağ ok
document.getElementById('prevBtn').addEventListener('click', () => {
    const firstPost = postContainer.firstElementChild; // İlk post'u al
    postContainer.appendChild(firstPost); // İlk post'u sona taşı
});

// Sol ok
document.getElementById('nextBtn').addEventListener('click', () => {
    const lastPost = postContainer.lastElementChild; // Son postu al
    postContainer.insertBefore(lastPost, postContainer.firstElementChild); // Son postu başa taşı
});
tags.forEach(tag => {
    tag.addEventListener('click', (event) => {
        const selectedTag = event.target.getAttribute('data-tag');
        
        // Tüm yazıları tekrar görünür yap (önce hepsini gösterip sonra filtre yapacağız)
        posts.forEach(post => {
            post.style.display = 'block'; // Önce hepsini göster
        });

        // Tüm yazıları kontrol et ve tıklanan etiketle eşleşmeyenleri gizle
        posts.forEach(post => {
            const postTags = post.getAttribute('data-tags').split(',');
            
            // Eğer yazının etiketleri içinde tıklanan etiket yoksa gizle
            if (!postTags.includes(selectedTag)) {
                post.style.display = 'none';
            }
        });
    });
});
clearFilterBtn.addEventListener('click', () => {
    posts.forEach(post => {
        post.style.display = 'block'; // Tüm yazıları görünür yap
    });
});