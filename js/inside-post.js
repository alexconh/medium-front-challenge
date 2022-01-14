let = idInsidePost = location.search.slice(8)

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
        <div id="inside-post-container"class="row mainheader pt-5">
            <div class="col-3">
                <img class="mimg rounded-circle" src="https://i.pravatar.cc/40" alt="">
            </div>
            <div class="col-9">
                <h3>${posts.author}</h3>
                <p>148K Followers</p>
            </div>
        </div>
            <div class="row">
                <div class="boxbuttomu col-9 mt-3"><button class="lgbuttom">Follow</button></div>
                <div class="boxbuttomd col-1 mt-3">
                    <button class="smbuttom align-items-center p-1"><svg class="twitter-icon" width="29" height="29" class="iu"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>
                    </button>
                </div>
            </div> 

            <div class="dropdown mt-3 text-end">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
              <li><a id="edit-btn" class="dropdown-item" href="#">Edit Post</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a id="delete-btn" class="dropdown-item" href="#">Delete Post</a></li>
            </ul>
          </div>

        <div class="row mt-3">
            <div class="col-auto">Home</div>
            <div class="col-auto">About</div>
            </div>
        <div class="row mt-5">
            <div class="col-auto">Jan 11, 2022</div>
            <div class="col-auto">${posts.timetoread}</div>
            <h1 class="mt-3">${posts.title}</h1>
            <img class="mt-3" src="${posts.primaryimg}" width="1000">
            <p class="mb-5 pb-5">${posts.resume}</p>
        </div>
        `
        document.querySelector('#inside-post-container').innerHTML = postsLayout
    })
    
}

getInsidePost()
// Get Related 

//DELETE POST

const deletePost = () => {
    fetch(`https://medium-challenge-default-rtdb.firebaseio.com/post/${idInsidePost}/.json`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then( () => {
        setTimeout( () => {
            location.href = 'index.html'
            },5000)
    })
    
}




    