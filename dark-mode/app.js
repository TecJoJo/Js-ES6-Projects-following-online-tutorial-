const toggleBtn = document.querySelector(".btn")
const articlesEl = document.querySelector(".articles")



toggleBtn.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark-theme")
})

//my own solution which works just fine 

// articles.forEach(article=>{
//     //create elemet
//     const el = document.createElement("article")
//     el.classList.add("post")


//     //innerhtml
//     const text =`
//         <h2>${article.title}</h2>
//         <div class="post-info">
//         <span>${article.date}</span>
//         <span>${article.length} min read</span>
//         </div>
//         <p>${article.snippet}</p>
//     `
//     //add innerhtml and append created child-element to parent-element
//     el.innerHTML = text
//     articlesEl.appendChild(el)
// })


const articleData = articles.map(article => {
    const {title,date,length,snippet} = article
    //format data
    const formatDate = moment(date).format("MMMM Do, YYYY")
    return`
        <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>${snippet}</p>
        </article>
    `   
}).join("")

articlesEl.innerHTML = articleData