import "../styles/style.css";

function saveComment(postId, comment) {
    const comments = getComments(postId);
    comments.push(comment);
    localStorage.setItem('comments-' + postId, JSON.stringify(comments));
}

function getComments(postId) {
    const comments = localStorage.getItem('comments-' + postId);
    return comments ? JSON.parse(comments) : [];
}

function deleteComment(postId, index) {
    const comments = getComments(postId);
    comments.splice(index, 1);
    localStorage.setItem('comments-' + postId, JSON.stringify(comments));
    renderComments(postId);
}

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
        deleteBtn.onclick = function () {
            deleteComment(postId, index); // Silme işlemi
        };

        commentWrapper.appendChild(p);
        commentWrapper.appendChild(deleteBtn);
        yorumlarDiv.appendChild(commentWrapper);
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const textarea = event.target.querySelector('textarea');
    const comment = textarea.value;

    if (!comment.trim()) {
        return false;
    }

    saveComment('1', comment);
    renderComments('1');

    textarea.value = '';
    return false;
}

window.onload = function () {
    console.log('', )
    document.querySelectorAll('.post').forEach(post => {
        const postId = post.getAttribute('data-post-id');
        renderComments(postId);
    });

    document.getElementById('form').addEventListener('submit', handleSubmit);
}

document.getElementById('toggle-comments').addEventListener('click', function () {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
        renderComments(1);
    } else {
        commentsSection.style.display = 'none';
    }
});

document.querySelectorAll('.like-button').forEach(function (button) {
    button.addEventListener('click', function () {
        const likeCountSpan = this.querySelector('.like-count');
        let likeCount = parseInt(likeCountSpan.textContent);

        likeCount++;
        likeCountSpan.textContent = likeCount;

        if (!this.classList.contains('active')) {
            this.classList.add('active');
        }
    });
});