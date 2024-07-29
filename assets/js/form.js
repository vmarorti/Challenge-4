document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.querySelector('form');
    const errorElement = document.getElementById('error');
    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        if (!username || !title || !content) {
            errorElement.textContent = 'Please complete all fields.';
            return;
        }
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ username, title, content });
        localStorage.setItem('posts', JSON.stringify(posts));
        window.location.href = 'blog.html';
    });
});