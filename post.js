const postsDiv = document.querySelector('.posts');
let postData = JSON.parse(localStorage.getItem('post'));

postsDiv.innerHTML += ` 
   <div class="posts-item one" style="background-color: #a1b150">
       <h2>${postData.title}</h2>
       <p>${postData.body}</p>
    <div class="user_id">posted user: id ${postData.userId}</div>
   </div>`



