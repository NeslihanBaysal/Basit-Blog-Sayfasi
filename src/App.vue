<template>
    <div id="app">
      <header class="header">
        <p>BLOG</p>
        <h1>THE BLOG</h1>
      </header>
      <section class="ust-kisim">
        <div class="first-box">
          <img src="./img/the-blog-1.jpeg" alt="Blog Image 1">
          <div>
            <p class="bk">Olivia Rhye • 1 Jan 2023</p>
            <a href="/src/blog.html" class="tiklama">
              <div class="title-container">
                <h3>UX review presentations</h3>
                <span class="arrow-icon">↗</span>
              </div>
            </a>
            <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          </div>
        </div>
        <div class="second-box">
          <div class="image-container">
            <img src="./img/the-blog-2.jpeg" alt="Blog Image 2">
            <div class="bilgi">
              <div class="bilgi-kutusu">
                <p class="bk">Phoenix Baker • 1 Jan 2023</p>
                <h3>Migrating to Linear 101</h3>
                <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get..</p>
              </div>
            </div>
          </div>
          <div class="image-container">
            <img src="./img/the-blog-3.jpeg" alt="Blog Image 3">
            <div class="bilgi">
              <div class="bilgi-kutusu">
                <p class="bk">Lana Steiner • 1 Jan 2023</p>
                <h3>Building your API Stack</h3>
                <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="alt-kisim">
        <h2>All blog posts</h2>
        <button id="clearFilterBtn" class="clear-filter-btn" @click="clearFilter">Tüm Yazıları Göster</button>
        <div class="tags-button">
          <span class="tag" v-for="tag in tags" :key="tag" @click="filterPosts(tag)">{{ tag }}</span>
        </div>     
        <div class="slider-container">
          <div class="post-wrapper">
            <div v-for="post in filteredPosts" :key="post.id" class="post">
              <img :src="post.image" alt="Blog Image">
              <div class="post-bilgi">
                <p class="bk">{{ post.author }} • {{ post.date }}</p>
                <h3>{{ post.title }}</h3>
                <p>{{ post.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const tags = ref(['leadership', 'productivity', 'software', 'teamwork', 'design', 'sports']);
      const selectedTag = ref(null);
  
      const posts = ref([
        {
          id: 1,
          author: 'Alec Whitten',
          date: '1 Jan 2023',
          title: 'Bill Walsh leadership lessons',
          description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
          image: '../src/img/the-blog-4.jpeg',
          tags: ['leadership', 'productivity']
        },
        {
          id: 2,
          author: 'Demi Wilkinson',
          date: '1 Jan 2023',
          title: 'PM mental models',
          description: 'Mental models are simple expressions of complex processes or relationships.',
          image: '../src/img/the-blog-5.jpeg',
          tags: ['leadership', 'software']
        },
        {
          id: 3,
          author: 'Candice Wu',
          date: '1 Jan 2023',
          title: 'What is Wireframing?',
          description: 'Introduction to Wireframing and its Principles and javascript make development.',
          image: '../src/img/the-blog-6.jpeg',
          tags: ['teamwork', 'design']
        },
        {
          id: 4,
          author: 'Natali Craig',
          date: '1 Jan 2023',
          title: 'How collaboration makes us better designers',
          description: 'Collaboration can make our teams stronger, and our individual designs better.',
          image: '../src/img/the-blog-7.jpeg',
          tags: ['sports', 'software', 'design']
        },
        {
          id: 5,
          author: 'Drew Cano',
          date: '1 Jan 2023',
          title: 'Our top 10 Javascript frameworks to use',
          description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
          image: '../src/img/the-blog-8.jpeg',
          tags: ['productivity', 'design', 'teamwork']
        },
        {
          id: 6,
          author: 'Orlando Diggs',
          date: '1 Jan 2023',
          title: 'Podcast: Creating a better CX Community',
          description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
          image: '../src/img/the-blog-9.jpeg',
          tags: ['productivity', 'software']
        }
      ]);
  
      const filteredPosts = computed(() => {
        if (!selectedTag.value) return posts.value;
        return posts.value.filter(post => post.tags.includes(selectedTag.value));
      });
  
      const filterPosts = (tag) => {
        selectedTag.value = tag;
      };
  
      const clearFilter = () => {
        selectedTag.value = null;
      };
  
      return {
        tags,
        selectedTag,
        posts,
        filteredPosts,
        filterPosts,
        clearFilter
      };
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
  color: rgb(202, 81, 174);
  border-top: 1px solid #667085;
  border-bottom: 1px solid #667085;
}

.ust-kisim {
  display: flex;
  flex-direction: row;
  gap: 2%;
}

.first-box {
  width: 49%;
  height: 480px;
  position: relative;
}

.first-box img {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.second-box {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-container {
  display: flex;
  gap: 13px;
  align-items: center;
}
.second-box > div img {
  width: 50%;
  height: 100%;
  object-fit: cover;
}
.bilgi {
  width: 48%;
  height: 100%;
  display: flex;
  font-weight: bold;
}
.bk{
  font-size: 16px;
  color: rgb(99, 67, 191);
  font-weight: bold;
  margin-bottom: 10px;
}
.bilgi-kutusu > h3{
  font-size: 20px;
  color: black;
}
p {
  margin-top: 10px;
  font-size: 18px;
  font-weight: lighter;
  color: #667085;
  margin-bottom: 10px;
}
h2{
  margin-top: 50px;
  margin-bottom: 10px;
}

h3{
  color: black;
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tiklama {
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: block; 
}

.first-box:hover .arrow-icon {
  transform: translate(3px, -3px); 
  color: #ff66b2; 
}
.slider-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.post-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  justify-items: center;
  margin-right: 2%;
  width: 100%;
}

.post {
  width: 100%;
  box-sizing: border-box;
}

.post img {
  width: 100%;
  height: auto;
}

.tag {
  display: inline-block;
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.tag:hover {
  background-color: #ff66b2;
  color: white;
}

.tags-button {
  margin-bottom: 15px;
}

.clear-filter-btn {
  display: inline-block;
  background-color: #ff66b2;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

/* media */
@media (max-width: 1200px) {
  header h1 {
      font-size: 200px;
  }
}
@media (max-width: 992px) {
  header h1 {
      font-size: 150px;
  }
  .ust-kisim {
      flex-direction: column;
  }
  .first-box, .second-box {
      width: 100%;
      height: auto;
  }
  .image-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
  }
  .second-box > div img {
      width: 100%;
      height: auto;
  }
  .bilgi {
      width: 100%;
  }
  .satir {
      flex-direction: column;
  }
  .post {
      width: 100%;
      margin-bottom: 20px;
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
  