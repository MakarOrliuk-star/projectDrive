const createNewPost = document.querySelector('.feed_main'); // Само окно
const openModalButton = document.querySelector('.feed_button-create-post'); // Кнопки для показа окна
const submitModalButton = document.querySelector('.create-new-post.create-new-post_button.create-new-post_primary-color'); // Кнопка для скрытия окна

const newPost = document.querySelector('.create-new-post-bg')

const feedMainPost = document.querySelector('.feed_posts')

const inpFile = document.getElementById('inpFile')
const image = document.querySelector('.post_image-profile.scss')


const newCreatePost = (image, title, comment, id) => {
    const post = document.createElement('div')
    post.classList.add('feed_post')
    post.id = id
    post.insertAdjacentHTML('afterbegin', `
        <div class="feed_post-info">         
                <div class="feed_post-info-user">
                        <div class="feed_profile-pic"><img src="../../../vue/src/assets/img/feed/cover%201.png" alt=""></div>
                        <p class="feed_username-post">User 1</p>
                    </div>
                    <img src="" class="feed_options" alt="">
                </div>
                <img src="${image || ''}" class="post-image" alt="">
                <div class="feed_post-content">
                    <div class="feed_post-content-reaction">
                        <img src="../../../vue/src/assets/img/feed/like.png" class="feed_icon-profile" alt="">
                        <img src="" class="feed_icon-profile" alt="">
                        <img src="../../../vue/src/assets/img/feed/send.PNG" class="feed_icon-profile" alt="">
                        <img src="" class="save feed_icon-profile" alt="">
                    </div>
                    <p class="feed_post-content-likes">1,012 likes</p>
                    <p class="feed_post-content-description" contenteditable="true"><span>username </span>${title || 'нет текста'}</p>
                    <p class="feed_post-content-time">2 minutes ago</p>
                </div>
                <div class="feed_post-comment">
                    <img src="" class="feed_icon-profile" alt="">
                    <p class="feed_post-comment-add" contenteditable="true"> ${comment || 'нет текста'}</p>
                    <button type="button" class="feed_delete-post">Delete post</button>  
                    <button type="button" class="feed_edit-post">Edit post</button>
                 </div>`
    )

    feedMainPost.appendChild(post)
    return post
}


openModalButton.addEventListener('click', (e) => {
    e.preventDefault();
    newPost.classList.add('active');

    const closeSubmitWindow = document.querySelector('.create-new-post_close')
    closeSubmitWindow.addEventListener('click', () => {
        newPost.classList.remove('active');
    });

});

function getPostData() {
    const inputStore = {}
    inputStore.id = new Date()
    inputStore.title = document.querySelectorAll('.create-new-post_form-control')[0].value
    inputStore.comment = document.querySelectorAll('.create-new-post_form-control')[2].value
    inputStore.imageSrc = globalImageSrc
    if (inputStore.title === '' || inputStore.comment === '') {
        return
    }
    console.log(inputStore)

    return inputStore
}

let globalImageSrc = ''
inpFile.addEventListener("change", function () {
    const file = this.files[0];
    console.log(file)
    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            globalImageSrc = reader.result;

        }, false);

        reader.readAsDataURL(file);

    } else {
        // image.setAttribute("src", "")
    }
});

submitModalButton.addEventListener('click', (e) => {
    e.preventDefault();

    newPost.classList.remove('active');
    const postData = getPostData()
    newCreatePost(postData.imageSrc, postData.title, postData.comment, postData.id)

    for (const clearInputs of document.querySelectorAll('.create-new-post_form-control')) {
        clearInputs.value = ''
    }

    let postId = postData.id

    const postWithButton = document.getElementById(postId)

    const buttonId = postWithButton.querySelector('.feed_delete-post')
    buttonId.addEventListener('click', (e) => {
        postWithButton.parentNode.removeChild(postWithButton);
    })
});





