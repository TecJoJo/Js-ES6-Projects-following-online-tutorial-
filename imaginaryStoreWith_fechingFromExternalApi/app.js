const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center")




const fetchProducts = async ()=>{

    productsDOM.innerHTML = `<div class="loading"></div>`
    try {
        const response = await fetch(url)
        
        const data = await response.json()

        // data.forEach((item)=>{
        //     console.log(item.fields.image[0].url,item.fields.name,item.fields.price)
        // })
        return data
        
        
    } catch (error) {
        productsDOM.innerHTML = `<p class="error">ERROR</p>`
    }
}
// my own approach below commented 
// const displayProducts = (list)=>{
//     const content = list.map((object)=>{
//         const {fields:{image:[{url}]},fields:{price},fields:{name}} = object;
        
//         return`
//         <a  class ="single-product" href="product.html">
//             <img src="${url}" class="single-product-img img" alt="title">
//           </a>
//             <footer>
//               <h5 class="name">${name}</h5>
//               <span class="price">${price}</span>
//             </footer>
        
//         `

//     }).join("")

//     console.log(content);

//     productsDOM.innerHTML = content
// }

const displayProducts = (list) =>{
    const productList = list
    .map((product)=>{
        //destructure
        const { id } = product;
        const {name:title,price} = product.fields;
        const {url:img} = product.fields.image[0];
        const formatPrice = price/100;

        return`
        <a  class ="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}">
        
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${formatPrice}</span>
            </footer> 
        </a>

        `

    }).join("")

    productsDOM.innerHTML = `
    <div class="products-container">
    ${productList}
    </div>
    `;
}

const start =async ()=>{
    const data =await fetchProducts();
    displayProducts(data);

}

start()
    

