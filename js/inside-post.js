let  idInsidePost = location.search.slice(8)

//Print Inside Post
const getInsidePost = () => {
    // GET - default
    fetch(`https://medium-challenge-default-rtdb.firebaseio.com/post/${idInsidePost}/.json`)
    .then((res) => {
    return res.json()
    })
    .then((posts) => {
    console.log(posts)

    let postsLayout = ''

        postsLayout += ` 
        <div class="main-head d-flex justify-content-between align-items-center gap-2 mt-2 pt-4 mb-3">
        <!-- head inside main -->
        <div class="head-inside-left d-flex align-items-center">
            <div class="avatar-inside-main rounded-circle d-flex d-md-none" style="width:45px; height: 45px; background-image: url(https://i.pravatar.cc/40)"></div>
            <div class="author-followers-main ms-3 ms-md-0">
                <h2 class="mb-0 mb-md-4">${posts.author}</h2>
                <p class="main-inside-followers mb-0 d-flex d-md-none">X Followers</p>
            </div>
        </div>
        <!-- head inside dropdown -->
        <div class="head-inside-right">
            <button type="button" class="btn btn-drop d-flex align-items-center" style="background-color: white; border:none;" data-bs-toggle="dropdown" aria-expanded="false">
                <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" type="button">Copy link to profile</button></li>
              <li><button class="dropdown-item" type="button">Mute this author</button></li>
              <li><button class="dropdown-item" type="button">Block this author</button></li>
              <li><button class="dropdown-item" type="button">Report this author</button></li>
              <li class="dropdown-divider"></li>
              <li><a href="upgrade-post.html?idpost=${idInsidePost}" id="edit-btn" class="dropdown-item">Edit Post</a></li>
              <li><a id="delete-btn" class="dropdown-item">Delete Post</a></li>
            </ul>
        </div>    
    </div>
    <div class="buttons-main-inside d-flex d-md-none mb-4">
        <!-- head inside buttons -->
        <button class="btn-follow-1 rounded-pill fw-lighter me-1">Follow</button>
        <div class="rounded-circle d-flex email-btn align-items-center justify-content-center">
            <svg style="stroke:white;" width="50" height="50" viewBox="0 0 38 38" fill="none" class="uv pj pk"><rect x="26.25" y="9.25" width="0.5" height="6.5" rx="0.25" stroke-width="0.5"></rect><rect x="29.75" y="12.25" width="0.5" height="6.5" rx="0.25" transform="rotate(90 29.75 12.25)" stroke-width="0.5"></rect><path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5" stroke-linecap="round"></path><path d="M11.5 14.5L19 20l4-3" stroke-linecap="round"></path></svg>
        </div>
    </div>
    <div class="main-nav">
        <ul class="d-flex">
            <li class="me-5">Home</li>
        </ul>
    </div>
    <article class="inside-content" id="post-container">
        <!-- Post content -->
        <p class="inside-date-time m-0 text-muted" style="font-size: smaller;">${posts.creationdate} ?? ${posts.timetoread}</p>
        <h1 class="inside-title fw-bolder my-3">${posts.title}</h1>
        <div class="img-wrap d-flex justify-content-center">
            <div class="inside-img-container" style="background-image:url(${posts.primaryimg});"></div>
        </div>
        <p class="second-p my-4">${posts.resume}</p>
        <div class="inside-bottom-icons d-flex justify-content-between pb-5">
            <!-- Social media icons -->
            <div class="bottom-icons-left d-flex">
                <div class="clap-group d-flex align-items-center">
                    <svg class="clap-icon" width="24" height="24" viewBox="0 0 24 24" aria-label="clap"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path></svg>
                    <p class="mb-0">Y</p>
                </div>
                <div class="response-group d-flex align-items-center ms-5">
                    <svg class="comment-icon" width="24" height="24" viewBox="0 0 24 24" aria-label="responses" class="lj lm fy uu vg"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
                    <p class="mb-0">Z</p>
                </div>
            </div>
            <div class="bottom-icons-right d-flex align-items-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" class="bx ut"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 27a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm4.95-16.17a2.67 2.67 0 0 0-4.6 1.84c0 .2.03.41.05.62a7.6 7.6 0 0 1-5.49-2.82 3 3 0 0 0-.38 1.34c.02.94.49 1.76 1.2 2.23a2.53 2.53 0 0 1-1.2-.33v.04c0 1.28.92 2.36 2.14 2.62-.23.05-.46.08-.71.1l-.21-.02-.27-.03a2.68 2.68 0 0 0 2.48 1.86A5.64 5.64 0 0 1 9 19.38a7.62 7.62 0 0 0 4.1 1.19c4.9 0 7.58-4.07 7.57-7.58v-.39c.52-.36.97-.83 1.33-1.38-.48.23-1 .37-1.53.43.56-.33.96-.86 1.15-1.48-.5.31-1.07.53-1.67.66z" fill="#292929"></path></svg>
                <svg class="fb-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" class="bx xw"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 27a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm-1.23-6.03V15.6H12v-2.15h1.77v-1.6C13.77 10 14.85 9 16.42 9c.75 0 1.4.06 1.58.08v1.93h-1.09c-.85 0-1.02.43-1.02 1.05v1.38h2.04l-.27 2.15H15.9V21l-2.13-.03z" fill="#292929"></path></svg>
                <svg class="linkedin-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" class="bx xw"><path fill-rule="evenodd" clip-rule="evenodd" d="M27 15a12 12 0 1 1-24 0 12 12 0 0 1 24 0zm-14.61 5v-7.42h-2.26V20h2.26zm-1.13-8.44c.79 0 1.28-.57 1.28-1.28-.02-.73-.5-1.28-1.26-1.28-.78 0-1.28.55-1.28 1.28 0 .71.49 1.28 1.25 1.28h.01zM15.88 20h-2.5s.04-6.5 0-7.17h2.5v1.02l-.02.02h.02v-.02a2.5 2.5 0 0 1 2.25-1.18c1.64 0 2.87 1.02 2.87 3.22V20h-2.5v-3.83c0-.97-.36-1.62-1.26-1.62-.69 0-1.1.44-1.28.87-.06.15-.08.36-.08.58v4z" fill="#292929"></path></svg>
                <svg class="link-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" class="bx xw"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 27a12 12 0 1 0 0-24 12 12 0 0 0 0 24zM9.29 16.28c-.2.36-.29.75-.29 1.17a2.57 2.57 0 0 0 .78 1.84l1.01.96c.53.5 1.17.75 1.92.75s1.38-.25 1.9-.75l1.2-1.15.75-.71.51-.5a2.51 2.51 0 0 0 .72-2.34.7.7 0 0 0-.03-.18 2.74 2.74 0 0 0-.23-.5v-.02l-.08-.14-.02-.03-.02-.01a.33.33 0 0 0-.07-.1c0-.02-.01-.03-.03-.05a.2.2 0 0 0-.03-.03l-.03-.04v-.01l-.02-.03-.04-.03a.85.85 0 0 1-.13-.13l-.43-.42-.06.06-.9.84-.05.09a.26.26 0 0 0-.03.1l.37.38c.04.03.08.07.1.11l.01.01.01.03.02.01.04.1.03.04.06.1v.02l.01.02c.03.1.05.2.05.33a1 1 0 0 1-.12.49c-.07.13-.15.22-.22.29l-.88.85-.61.57-.95.92c-.22.2-.5.3-.82.3-.31 0-.58-.1-.8-.3l-.98-.96a1.15 1.15 0 0 1-.3-.42 1.4 1.4 0 0 1-.04-.35c0-.1.01-.2.04-.3a1 1 0 0 1 .3-.49l1.5-1.46v-.24c0-.21 0-.42.04-.6a3.5 3.5 0 0 1 .92-1.72c-.41.1-.78.32-1.11.62l-.01.02-.01.01-2.46 2.33c-.2.21-.35.4-.44.6h-.02c0 .02 0 .02-.02.02v.02l-.01.01zm3.92-1.8a1.83 1.83 0 0 0 .02.97c0 .06 0 .13.02.19.06.17.14.34.22.5v.02l.06.12.02.03.01.02.08.1c0 .02.02.03.04.05l.08.1h.01c0 .01 0 .03.02.03l.14.14.43.41.08-.06.88-.84.05-.09.03-.1-.36-.37a.4.4 0 0 1-.12-.13v-.02l-.02-.02-.05-.09-.04-.04-.04-.1v-.02l-.02-.02a1.16 1.16 0 0 1 .06-.82c.09-.14.16-.24.23-.3l.9-.85.6-.58.93-.92c.23-.2.5-.3.82-.3a1.2 1.2 0 0 1 .82.3l1 .96c.13.15.23.29.28.42a1.43 1.43 0 0 1 0 .66c-.03.17-.12.33-.26.48l-1.54 1.45.02.25a3.28 3.28 0 0 1-.96 2.32 2.5 2.5 0 0 0 1.1-.62l.01-.01 2.46-2.34c.19-.2.35-.4.46-.6l.02-.02v-.02h.01a2.45 2.45 0 0 0 .21-1.82 2.53 2.53 0 0 0-.7-1.19l-1-.96a2.68 2.68 0 0 0-1.91-.75c-.75 0-1.38.25-1.9.76l-1.2 1.14-.76.72-.5.49c-.4.37-.64.83-.74 1.37z" fill="#292929"></path></svg>
                <input type="checkbox" name="save-card" class="save" id="save-${idInsidePost}">
                <label for="save-${idInsidePost}">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="ne">
                        <path class="save-icon" d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path>
                        <path
                        d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        class="save-icon2"
                        ></path>
                    </svg>
                </label>
                <div class="dropdown ms-2">
                    <!-- dropdown -->
                    <button class="btn-dark p-0" type="button" id="dropdownMenuButton1" data-bs-offset="-71,5" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25">
                            <path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path>
                        </svg>
                    </button>                 
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">
                            <svg width="19" height="19" viewBox="0 0 23 23" fill="none"><path d="M6.2 16.8A7.5 7.5 0 1 0 16.8 6.2 7.5 7.5 0 0 0 6.2 16.8z" stroke="#000" stroke-width="2" stroke-linecap="round"></path><path d="M6 6l11 11" stroke="#000" stroke-width="2"></path></svg>
                            Show less like this</a>
                        </li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Mute this author</a></li>
                        <li><a class="dropdown-item" href="#">Mute this publication</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </article>
       
        `
        document.querySelector('#inside-post-container').innerHTML = postsLayout
    })
    
}

getInsidePost()
// Get Related 

//DELETE POST

const deletePost = (idInsidePost) => {
    fetch(`https://medium-challenge-default-rtdb.firebaseio.com/post/${idInsidePost}/.json`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then( () => {
        setTimeout( () => {
            location.href = 'index.html'
            },1000)
    })
    
}

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'delete-btn'){
        deletePost(idInsidePost)
     }
})





    