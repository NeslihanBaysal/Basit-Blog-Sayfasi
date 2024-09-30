// Yorumları localStorage'da saklamak için
function saveComment(postId, comment) {
    const comments = getComments(postId);
    comments.push(comment);
    localStorage.setItem('comments-' + postId, JSON.stringify(comments));
}

// LocalStorage'dan yorumları almak için
function getComments(postId) {
    const comments = localStorage.getItem('comments-' + postId);
    return comments ? JSON.parse(comments) : [];
}

// LocalStorage'dan yorumu silmek için
function deleteComment(postId, index) {
    const comments = getComments(postId);
    comments.splice(index, 1); // Belirli indeksteki yorumu sil
    localStorage.setItem('comments-' + postId, JSON.stringify(comments)); // Güncellenmiş listeyi kaydet
    renderComments(postId); // Silme işleminden sonra yorumları tekrar göster
}

// Yorumları HTML'de göstermek için
function renderComments(postId) {
    const comments = getComments(postId);
    const yorumlarDiv = document.getElementById('yorumlar-' + postId);
    yorumlarDiv.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentWrapper = document.createElement('div');
        commentWrapper.classList.add('comment-wrapper');

        const p = document.createElement('p');
        p.textContent = comment;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.onclick = function() {
            deleteComment(postId, index); // Silme işlemi
        };

        commentWrapper.appendChild(p);
        commentWrapper.appendChild(deleteBtn);
        yorumlarDiv.appendChild(commentWrapper);
    });
}

// Yorum gönderme işlemi
function handleSubmit(event, postId) {
    event.preventDefault();
    const textarea = event.target.querySelector('textarea');
    const comment = textarea.value;

    // Eğer yorum boşsa işlem yapma
    if (!comment.trim()) {
        return false;
    }

    // Yorumu kaydet ve ekrana yazdır
    saveComment(postId, comment);
    renderComments(postId);

    // Textarea'yı temizle
    textarea.value = '';
    return false;
}

// Sayfa yüklendiğinde yorumları yükle
window.onload = function() {
    document.querySelectorAll('.post').forEach(post => {
        const postId = post.getAttribute('data-post-id'); // Her post için data-post-id al
        renderComments(postId); // Yorumları sayfa yüklendiğinde getir
    });
}

// Yorumlar butonuna tıklanınca yorumları göster/gizle
document.getElementById('toggle-comments').addEventListener('click', function() {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block'; // Yorumlar bölümünü göster
        renderComments(1); // Post ID'si 1 olan yorumları göster
    } else {
        commentsSection.style.display = 'none'; // Yorumlar bölümünü gizle
    }
});