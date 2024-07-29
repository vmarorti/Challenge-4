document.addEventListener('DOMContentLoaded', () => {
    const postsDiv = document.getElementById('posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>by ${post.username}</em></p>`;
        postsDiv.appendChild(postDiv);
    });
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});