const elements = [...document.querySelectorAll(".number")]



const updateCount = el =>{
    let initialValue = 0
    const value = parseInt(el.dataset.value,10)
    const increment = Math.ceil(value/10)

    const increaseCount = setInterval(()=>{
        initialValue += increment
        if(initialValue < value){
           
            el.textContent = `${initialValue}+`
        }else{
             clearInterval(increaseCount)
             el.textContent = `${initialValue}+`
        }
    },100)
}

elements.forEach(el=>updateCount(el))