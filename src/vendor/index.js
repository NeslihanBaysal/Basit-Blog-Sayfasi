import '../styles/style.css'

const postContainer = document.querySelector('.post-wrapper');
const posts = document.querySelectorAll('.post');
const tags = document.querySelectorAll('.tag');
const clearFilterBtn = document.getElementById('clearFilterBtn');

tags.forEach(tag => {
    tag.addEventListener('click', (event) => {
        const selectedTag = event.target.getAttribute('data-tag');
        posts.forEach(post => {
            post.style.display = 'block';
        });
        posts.forEach(post => {
            const postTags = post.getAttribute('data-tags').split(',');
            if (!postTags.includes(selectedTag)) {
                post.style.display = 'none';
            }
        });
    });
});

clearFilterBtn.addEventListener('click', () => {
    posts.forEach(post => {
        post.style.display = 'block';
    });
});