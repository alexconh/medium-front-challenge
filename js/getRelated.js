
// ASIDE RELATED TOPICS 
let topicSelected = document.querySelector('topic Example')
const relatedTopic = () => {
    // GET - Related

    fetch("https://medium-challenge-default-rtdb.firebaseio.com/post/.json")
    .then((res) => {
    return res.json()
    })
    .then((posts) => {
    console.log(posts)
    })
    
    let output = ''
    posts.forEach(element => { 
        if (posts.topic.value === topicSelected) {
            output += 
            `
        <section class="aside-recommended-topics d-flex flex-column px-5 pb-5 pt-1 mt-3">
              <!-- Related -->
              <h4>Related</h4>
              <div class="row pt-4 min-width">
                <div class="col-6">
                  <img class="asimg" src="https://miro.medium.com/max/750/0*65OwTN8BR332xS4s" alt="">
                </div>
                <div class="col-6">
                  <h3>${posts.title}</h3>
                  <p>${posts.resume}</p>
                </div>
              </div>
              <div class="row pt-4 min-width">
                <div class="col-6">
                  <img class="asimg" src="https://miro.medium.com/max/750/0*65OwTN8BR332xS4s" alt="">
                </div>
                <div class="col-6">
                  <h3>${posts.title}</h3>
                  <p>${posts.resume}</p>
                </div>
              </div>
              <div class="row pt-4 min-width">
                <div class="col-6">
                  <img class="asimg" src="https://miro.medium.com/max/750/0*65OwTN8BR332xS4s" alt="">
                </div>
                <div class="col-6">
                  <h3>${posts.title}</h3>
                  <p>${posts.resume}</p>
                </div>
              </div>
          </section>
          `
        }
        getElementById('#card-container').innerHTML = relatedTopic
    });
}

/*
// DELETE POST ELIMINAR POST
let delete__post = document.getElementById('delete__post')
delete__post.addEventListener('click', () => {

    let idPost = location.search.slice(8) 
    const delete__post  =  (objPost, idPost) => {
        
        let idpost = "ID del Post" // location.search.slice(8)
        fetch(`https://medium-challenge-default-rtdb.firebaseio.com/${idpost}.json`, {
        method: "DELETE"
        })
            if(data.target.status === 200){
                document.getElementById('alert__response').classList.remove('d-none')
                location.replace('http')
            }
        }
    }
)




//UPDATE POST
// Opcion fetch('url', method)
let idPost = location.search.slice(8)
fetch(`ejemplo.com/${idPost}.json`,
)
.then( (response) => {
    //Promise una vez que se cumpla sigue
    return response.json()
})
.then( (post) => {
        document.querySelector('#title').value = post.title
        document.querySelector('#author').value = post.author
        document.querySelector('#timetoread').value = post.timetoread
        document.querySelector('#resume').value = post.resume
})
.catch( (err) => {
    console.log(err)
})

*/