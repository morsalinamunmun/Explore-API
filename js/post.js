function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data));
}

/* 
1. get the container element where you want to add the new elements 
2. create child element
3. set innerText or innerHtml
4. appendChild
*/
function displayPosts(posts){
    //console.log(posts);
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>user-${post.id}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPosts();