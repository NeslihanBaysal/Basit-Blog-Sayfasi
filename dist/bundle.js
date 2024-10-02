(function () {
    'use strict';
    function getComments(postId) {
      var comments = localStorage.getItem('comments-' + postId);
      return comments ? JSON.parse(comments) : [];
    }
    function deleteComment(postId, index) {
      var comments = getComments(postId);
      comments.splice(index, 1); 
      localStorage.setItem('comments-' + postId, JSON.stringify(comments)); 
      renderComments(postId); 
    }
    function renderComments(postId) {
      var comments = getComments(postId);
      var yorumlarDiv = document.getElementById('yorumlar-' + postId);
      yorumlarDiv.innerHTML = '';
      comments.forEach(function (comment, index) {
        var commentWrapper = document.createElement('div');
        commentWrapper.classList.add('comment-wrapper');
        var p = document.createElement('p');
        p.textContent = comment;
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.onclick = function () {
          deleteComment(postId, index); 
        };
        commentWrapper.appendChild(p);
        commentWrapper.appendChild(deleteBtn);
        yorumlarDiv.appendChild(commentWrapper);
      });
    }
    window.onload = function () {
      document.querySelectorAll('.post').forEach(function (post) {
        var postId = post.getAttribute('data-post-id'); 
        renderComments(postId); 
      });
    };
    document.getElementById('toggle-comments').addEventListener('click', function () {
      var commentsSection = document.getElementById('comments-section');
      if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block'; 
        renderComments(1); 
      } else {
        commentsSection.style.display = 'none'; 
      }
    });
    document.querySelectorAll('.like-button').forEach(function (button) {
      button.addEventListener('click', function () {
        var likeCountSpan = this.querySelector('.like-count');
        var likeCount = parseInt(likeCountSpan.textContent);
        likeCount++;
        likeCountSpan.textContent = likeCount;
        if (!this.classList.contains('active')) {
          this.classList.add('active'); 
        }
      });
    });
    var postContainer = document.querySelector('.post-wrapper');
    var posts = document.querySelectorAll('.post'); 
    var tags = document.querySelectorAll('.tag');
    var clearFilterBtn = document.getElementById('clearFilterBtn');
    document.getElementById('prevBtn').addEventListener('click', function () {
      var firstPost = postContainer.firstElementChild; 
      postContainer.appendChild(firstPost); 
    });
    document.getElementById('nextBtn').addEventListener('click', function () {
      var lastPost = postContainer.lastElementChild; 
      postContainer.insertBefore(lastPost, postContainer.firstElementChild); 
    });
    tags.forEach(function (tag) {
      tag.addEventListener('click', function (event) {
        var selectedTag = event.target.getAttribute('data-tag');
        posts.forEach(function (post) {
          post.style.display = 'block'; 
        });
        posts.forEach(function (post) {
          var postTags = post.getAttribute('data-tags').split(',');
          if (!postTags.includes(selectedTag)) {
            post.style.display = 'none';
          }
        });
      });
    });
    clearFilterBtn.addEventListener('click', function () {
      posts.forEach(function (post) {
        post.style.display = 'block'; 
      });
    });
})();
