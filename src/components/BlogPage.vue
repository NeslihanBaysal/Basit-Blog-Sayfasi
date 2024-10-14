<template>
    <div id="blog">
      <div class="blog-detail">
        <header class="header">
          <p>BLOG</p>
          <h1>THE BLOG</h1>
        </header>
        <section class="first">
          <img src="../img/blog adam-foto.jpeg" alt="Adam Foto">
        </section>
        <div class="like-container">
          <button class="like-button" @click="incrementLike">❤️<span class="like-count">{{ likeCount }}</span></button>
        </div>
        <div class="about-me">
          <h2>About Me</h2>
          <p>As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user
            experiences that meet the needs of my clients and their users. I have a strong understanding of design
            principles and a proficiency in design tools, and I am comfortable working with cross-functional teams to
            bring projects to fruition. I am confident in my ability to create designs that are both visually appealing
            and functional, and I am always looking for new challenges and opportunities to grow as a designer.
          </p>
        </div>
        <div class="skills">
          <h3>Skills:</h3>
          <ul class="article">
            <li>Extensive experience in UI design, with a strong portfolio of completed projects</li>
            <li>Proficiency in design tools such as Adobe Creative Suite and Sketch</li>
            <li>Excellent visual design skills, with a strong understanding of layout, color theory, and typography</li>
            <li>Ability to create wireframes and prototypes to communicate design concepts</li>
            <li>Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams</li>
            <li>Experience conducting user research and gathering insights to inform design decisions</li>
            <li>Proficiency in HTML, CSS, and JavaScript</li>
          </ul>
        </div>
        <button id="toggle-comments" @click="toggleComments">Yorumlar</button>
        <div v-if="showComments" id="comments-section">
          <div class="comment-wrapper" v-for="(comment, index) in comments" :key="index">
            <p>{{ comment }}</p>
            <button @click="deleteComment(index)">Sil</button>
          </div>
          <form class="yorumlar" @submit.prevent="handleSubmit">
            <textarea v-model="newComment" placeholder="Yorumunuzu yazın..." required></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>    
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        likeCount: 0,
        showComments: false,
        newComment: '',
        comments: []
      };
    },
    methods: {
      incrementLike() {
        this.likeCount++;
      },
      toggleComments() {
        this.showComments = !this.showComments;
      },
      handleSubmit() {
        if (this.newComment.trim()) {
          this.comments.push(this.newComment);
          this.newComment = '';
        }
      },
      deleteComment(index) {
        this.comments.splice(index, 1);
      }
    }
  };
</script>
  
<style scoped>
header {
  text-align: center;
  margin-bottom: 40px;
}
header p {
  font-size: 20px;
  color: black;
  margin-bottom: 50px;
  font-weight: bold;
}
header h1 {
  font-size: 250px;
  font-weight: bold;
  letter-spacing: -2px;
  white-space: nowrap;
  border-top: 1px solid #667085;
  border-bottom: 1px solid #667085;
}
.first {
    width: 100%;
    height: 400px;
    overflow: hidden;
}
.first img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.about-me h2 {
    font-weight: bold;
    margin-top: 2%;
    margin-left: 0%;
    margin-bottom: 2%;
    color: #ff66b2;
}
.about-me p {
    color: #667085;
    margin-bottom: 2%;
    font-size: 16px;
}
.skills h3 {
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 2%;
}
.article {
    margin-left: 1%;
    color: #667085;
}
.yorumlar textarea {
    width: 100%;
    height: 70px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    margin-bottom: 10px;
    margin-top: 20px;
}
.yorumlar button {
    width: 10%;
    height: 40px;
    padding: 5px 15px;
    margin-top: 5px;
    background-color: #ff66b2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin-left: auto;
}
.yorumlar button:hover {
    background-color: #ff3385;
}
.comment-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fddff3;
    border-radius: 5px;
    box-shadow: 0 0 1px;
}
.comment-wrapper p {
    margin: 0;
    color: #667085;
    font-size: 16px;
}
.comment-wrapper button {
    background-color: #ff66b2;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
}
.comment-wrapper button:hover {
    background-color: #ff3385;
}
#toggle-comments {
    background-color: #ff66b2;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    display: block;
}
#toggle-comments:hover {
    background-color: #ff3385;
}
#comments-section {
    margin-top: 20px;
    color: #667085;
    font-size: 15px;
}
.like-container {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 2%;
}
.like-button {
    background-color: #fcd3ee;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s;
}
.like-button.active {
    color: white;
}
.like-button:hover {
    background-color: rgb(225, 128, 180);
}
/* Media queries */
@media (max-width: 1200px) {
    header h1 {
        font-size: 200px;
    }
}
@media (max-width: 992px) {
    header h1 {
        font-size: 150px;
    }
}
@media (max-width: 768px) {
    header h1 {
        font-size: 100px;
    }
}
@media (max-width: 480px) {
    header h1 {
        font-size: 70px;
    }
}
</style>
  