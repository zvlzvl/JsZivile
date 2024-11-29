const postsDiv = document.querySelector('.posts');

let dataArr = [];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            dataArr.push(post);
            let randColor = getRandomColor();
            postsDiv.innerHTML += ` 
            <div class="posts-item" style="background-color: ${randColor}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </div>`
        })
        const postItems = document.querySelectorAll('.posts-item');
        postItems.forEach((postItem, index) => {
            postItem.onclick = () => {
                let postInfo = dataArr[index];
                localStorage.setItem('post', JSON.stringify(postInfo));
                window.location.href = "post.html";
            }
        })
    })

function getRandomColor() {
    const palette = ["#a1b150", "#95c635", "#9cc45d", "#bfbf00", "#BDB76B", "#C3B091", "#A2A784"];
    return palette[Math.floor(Math.random() * palette.length)];
}


