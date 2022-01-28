function render() {
    const postList = document.querySelector('.posts');
    const postHtml = posts.map(
        post => {
            return `<li><a class="post__title" data-id="${post.id}" href="#">${post.title}</a><div class="post__body">${post.body}</div><div class="post__comment" id="commentFor${post.id}"></div></li>`;
        }
    ).join('');
    postList.innerHTML = postHtml;
}

function addComments(i) {
    const commentList = document.querySelector(`#commentFor${i}`);
    const commentHtml = comments.map(
        comment => {
            return `<p>Comments from: ${comment.name}</br>${comment.body}</p>`;
        }
    ).join('');
    commentList.innerHTML = commentHtml;
}

function showAndHiden(i) {
    const menu = document.querySelector(`#commentFor${i}`);
    const allComment = document.querySelectorAll('.post__comment');
    allComment.forEach(it => {
        it.classList.remove('shown');
    });
    menu.classList.toggle('shown');
}

let posts = [];
let comments = [];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(rawPosts => {
        posts = rawPosts;
        render();
    })
    .then(function () {
        const clickTitle = document.querySelectorAll('.post__title');
        clickTitle.forEach(item => {
            item.addEventListener('click', function (e) {
                const postId = e.target.dataset.id;
                showAndHiden(postId);
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(res => res.json())
                    .then(rawComments => {
                        comments = rawComments;
                        addComments(postId);
                    });
            });
        });
    });