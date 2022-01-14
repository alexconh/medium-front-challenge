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
        let { title, timetoread, resume, author, creationdate, primaryimg } = posts[post]
        postsLayout += `
        <div class="card col-12">
            <div class="card-header d-flex row justify-content-start align-items-center gap-3 m-0">
              <div class="card-img-container col-2 ">
                <img class="card-avatar rounded-circle" src="https://i.pravatar.cc/40" alt="">
              </div>
              <div class="card-author-container col-8 p-s-5">
                <h5 class="card-author m-0">${author}</h5>
                <p class="card-date m-0 mb-2 text-muted">${creationdate}</p>
              </div>
            </div>
            <div class="card-body row align-items-center">
              <h6 class="card-title m-0 col-9 fs-3">${resume}</h6>
              <div class="col-2 p-0">
                <a href="inside-post.html?idpost=${post}"><img class="card-img img-fluid max-width: 100%;" src="${primaryimg}" alt=""></a>
              </div>
            </div>
            <div class="card-bottom row p-3 py-0">
              <div class="card-settings row">
                <p class="card-category col-3 p-1">Health</p>
                <p class="card-read col-3 p-1">${timetoread}</p>
                <div class="col-2 p-1">
                  <svg class="save-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" class="ne"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                </div>
                <div class="col-2 p-1">
                  <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
                </div>
              </div>
          </div>

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



    /*
    
    
    */



//     posts.forEach(element => {
//          let parsedPosts = JSON.parse(posts)
//         let postLayout =
//         `
//         <div class="card col-12">
//             <div class="card-header d-flex row justify-content-start align-items-center gap-3 m-0">
//               <div class="card-img-container col-2 ">
//                 <img class="card-avatar rounded-circle" src="https://i.pravatar.cc/40" alt="">
//               </div>
//               <div class="card-author-container col-8 p-s-5">
//                 <h5 class="card-author m-0">${posts.author}</h5>
//                 <p class="card-date m-0 mb-2 text-muted">${posts.creationdate}</p>
//               </div>
//             </div>
//             <div class="card-body row align-items-center">
//               <h6 class="card-title m-0 col-9 fs-3">${posts.resume}</h6>
//               <div class="col-2 p-0">
//                 <img class="card-img img-fluid max-width: 100%;" src="${posts.primaryimg}" alt="">  
//               </div>
//             </div>
//             <div class="card-bottom row p-3 py-0">
//               <div class="card-settings row">
//                 <p class="card-category col-3 p-1">Health</p>
//                 <p class="card-read col-3 p-1">${posts.timetoread}</p>
//                 <div class="col-2 p-1">
//                   <svg class="save-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" class="ne"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
//                 </div>
//                 <div class="col-2 p-1">
//                   <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
//                 </div>
//               </div>
//           </div>
//           `
//           getElementById('#card-container').innerHTML = addPost
        
//     });


// const funcionCallback =  (posts) => {
//     console.log(posts)
//     let parsedPosts = JSON.parse(posts)
//     console.log(parsedPosts)
//     let layout = ''
//     for(post in parsedPosts) {
//         let { title, timetoread, resume, author, creationdate, primaryimg } = parsedPosts[post]
//         layout += `
        
//         <div class="card col-12">
//             <div class="card-header d-flex row justify-content-start align-items-center gap-3 m-0">
//               <div class="card-img-container col-2 ">
//                 <img class="card-avatar rounded-circle" src="https://i.pravatar.cc/40" alt="">
//               </div>
//               <div class="card-author-container col-8 p-s-5">
//                 <h5 class="card-author m-0">${posts.author}</h5>
//                 <p class="card-date m-0 mb-2 text-muted">${posts.creationdate}</p>
//               </div>
//             </div>
//             <div class="card-body row align-items-center">
//               <h6 class="card-title m-0 col-9 fs-3">${posts.resume}</h6>
//               <div class="col-2 p-0">
//                 <img class="card-img img-fluid max-width: 100%;" src="${posts.primaryimg}" alt="">  
//               </div>
//             </div>
//             <div class="card-bottom row p-3 py-0">
//               <div class="card-settings row">
//                 <p class="card-category col-3 p-1">Health</p>
//                 <p class="card-read col-3 p-1">${posts.timetoread}</p>
//                 <div class="col-2 p-1">
//                   <svg class="save-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" class="ne"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
//                 </div>
//                 <div class="col-2 p-1">
//                   <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
//                 </div>
//               </div>
//           </div>

//         `
//     }

//     document.querySelector('.list__posts').innerHTML = layout
    
// }
// }
}
