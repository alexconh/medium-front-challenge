const getPost = () => {
    // GET - default
    fetch("https://medium-challenge-default-rtdb.firebaseio.com/post/.json")
    .then((res) => {
    return res.json()
    })
    .then((posts) => {
    console.log(posts)
    
    // console.log(Object.values(posts)) Investigar
    
    let postsLayout = ''

    let orderedPosts = Object.keys(posts).reverse()
    console.log(orderedPosts)

    

    for(post of orderedPosts) {
        let { title, timetoread, resume, author, creationdate, primaryimg, topic } = posts[post]
        postsLayout += `
        
        <article class="card mb-5">
                <!-- CARD -->
                <!-- user avatar and creation date -->
                <div class="card-header d-flex justify-content-start gap-2 align-items-center mb-3 p-0">
                    <img class="card-avatar rounded-circle" src="https://i.pravatar.cc/40" alt="">
                    <p class="card-author m-0">${author}</p>
                    <p class="card-date m-0 text-muted"> · ${creationdate}</p>
                </div>
                <!-- title, resume and image -->
                <div class="card-body d-flex justify-content-between p-0 mb-4">
                    <div class="card-body-text">
                    <h5 class="card-title fw-bolder m-0">${title}</h5>
                    <p>${resume.slice(200)}...</p>
                    </div>
                    <div class="card-body-img ms-4" style="background-image: ${primaryimg};">
                        <a href="inside-post.html?idpost=${post}"></a>
                    </div>
                </div>
                <div class="card-bottom mb-4 d-flex align-items-center justify-content-between">
                    <!-- topic and time to read -->
                    <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm rounded-pill d-flex align-items-center">${topic}</button>
                    <p class="card-read m-0 mx-2 text-muted">${timetoread}</p>
                    </div>  
                    <div class="card-bottom-icons d-flex align-items-center">
                    <!-- save and dropdown menu -->
                    <input type="checkbox" name="save-card" id="save">
                    <label for="save">
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
                            Show less like this</a></li>
                            <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Mute this author</a></li>
                        <li><a class="dropdown-item" href="#">Mute this publication</a></li>
                        <li><a class="dropdown-item" href="#">Report</a></li>
                        </ul>
                    </div>
                    <div class="card-bottom-spacer ms-4" style="width:110px;"></div>
                    </div>
                </div>
            </article>

        `
    }

    document.querySelector('#card-container-prueba').innerHTML = postsLayout

    })


/*
Ir por los Post
*/

window.addEventListener('load', () => {

    let idPost = location.search.slice(8)
    console.log(idPost)
    fetch(
        `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`,
        {
            method: 'GET',
        }
    )
    .then( (response) => {
        return response.json()
    })
    .then( (post) => {
        document.querySelector('#title').value = post.title
        document.querySelector('#author').value = post.author
        document.querySelector('#timetoread').value = post.timetoread
        document.querySelector('#resume').value = post.resume
    })
    .catch((err) => {
        console.log(err)
        })
    })
}
