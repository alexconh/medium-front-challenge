let  idUpgradePost = location.search.slice(8)

const getUpgradePost = () => {
    // GET - default
    fetch(`https://medium-challenge-default-rtdb.firebaseio.com/post/${idUpgradePost}/.json`)
    .then((res) => {
    return res.json()
    })
    .then((posts) => {
    console.log(posts)

    let postsLayout = ''

        postsLayout += `
        <form action="" method="POST" class="d-flex flex-wrap row">
                    <!-- <div class="alert alert-success d-none" id="alert__response" role="alert">
                        Post creado exitosamente con el id <strong id="post__id"></strong>
                    </div> -->
                    <div class="col-12 d-flex align-items-center">
                        <!-- Title -->
                        <div class="plus-container rounded-circle d-flex align-items-center">
                            <svg class="plus-icon" width="19" height="19" class="cm"><path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fill-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" class="form-control col-11 ms-1 title" id="title" placeholder="${posts.title}">            
                        </input>
                    </div>
                    <div class="col-5 ms-4">
                        <!-- Author -->
                        <input type="text" class="form-control" id="author" placeholder="${posts.author}">
                        </input>
                    </div>
                    <div class="col-12 ms-4 form-content mb-0">
                        <!-- Post content -->
                        <textarea class="form-control h-100" id="resume" placeholder="${posts.resume}"></textarea>
                    </div>
                    <div class="col-6 ms-4 mb-0">
                        <!-- Post image -->
                        <input class="form-control form-img" type="text" name="imagen" id="primaryimg" placeholder="${posts.primaryimg}" />
                    </div>
                    <div class="form-time-topic ms-4 d-flex gap-3">
                        <div class="col-3">
                            <!-- Time to read -->
                            <label for="timetoread" class="form-label mb-0 form-time">New time to read</label>
                            <input type="time" min="1" max="60" class="form-control" id="timetoread">
                                
                            </input>
                        </div>
                        <div class="col-3">
                            <!-- Topic -->
                            <label for="topic" class="col-12 form-topic">Select the new main topic</label>
                            <select name="topic" class="col-10 form-select" id="topic">
                                <option value="Technology" id="topic-tech">Technology</option>
                                <option value="Finance" id="topic-fin">Finance</option>
                                <option value="Health" id="topic-health">Health</option>
                                <option value="Mindfulness" id="topic-mind"> Mindfulness</option>
                                <option value="Art" id="topic-art">Art</option>                
                            </select>
                        </div>
                    </div>
                </form>
        `
        document.querySelector('#upgrade-post-form').innerHTML = postsLayout
    })
}

getUpgradePost()


const updatePost =  (objPost) => {

    fetch(`https://medium-challenge-default-rtdb.firebaseio.com/post/${idUpgradePost}/.json`, {
        method: 'PATCH',
        header: {
            "content-type" : "application/json" 
        },
        body : JSON.stringify(objPost)
    })
        .then( ( response ) => {
        return response.json
    })
        .then( ( response ) => {
        if(response.status === 200){
            
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#resume').value = ''
            document.querySelector('#timetoread').value = ''
            document.querySelector('#topic').value = ''
            document.querySelector('#primaryimg').value = ''

            let res = JSON.parse(data.target.response)

            document.getElementById('alert__response').classList.remove('d-none')
        }})
    }    
    
let updateBtn = document.querySelector('#update-post')
updateBtn.addEventListener('click', () => {

    let newTitle = document.querySelector('#title').value
    let newAuthor = document.querySelector('#author').value
    let newResume = document.querySelector('#resume').value
    let newTimetoread = document.querySelector('#timetoread').value
    let newTopic = document.querySelector('#topic').value 
    let newPrimaryimg = document.querySelector('#primaryimg').value

    
    // console.log(title, author, timetoread, resume)
    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== '' &&
        primaryimg !== ''
    ){

        let objNewPost = {
            title: newTitle,
            author: newAuthor,
            resume: newResume,
            timetoread: `${newTimetoread} min`,
            topic : newTopic,
            primaryimg: newPrimaryimg

        }
    
        updatePost(objNewPost)
        document.querySelector('.success-msg').classList.remove('d-none')
        setTimeout( () => {
            location.reload()
        },3000)
    } else {
        alert('Algunos datos estan vacios')
    }

})
