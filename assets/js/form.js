const usernameInput = document.querySelector(`#username`);
const titleInput = document.querySelector(`#title`);
const contentInput = document.querySelector(`#content`);
const postButton = document.querySelector(`#submit`);

postButton.addEventListener('click', function (event) {
    event.preventDefault();

    const user = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value.trim(),
    };

    localStorage.getItem('user', JSON.stringify(user));

    localStorage.setItem('user', JSON.stringify(user));

});