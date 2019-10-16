//show author name on click book list


async function getData(){
    let response = await fetch ( "https://www.anapioficeandfire.com/api/books/")
    let responseBody = await response.json()
    return responseBody
  
}

getData ()

async function render(){
    console.log("render called")
    let list = await getData()

    let ul = document.querySelector("ul")

    let itemPrototype = document.querySelector ("li.prototype")
        for (let item of list){

    let newItem= itemPrototype.cloneNode(true)
    newItem.classList.remove("prototype")
    

    newItem.addEventListener ("click", async function(){
        document.body.querySelector(".authors").innerText = item.authors[0]
        document.body.querySelector(".pages").innerText = item.numberOfPages
        document.body.querySelector(".released").innerText = item.released
        document.body.querySelector(".characters").innerText = item.povCharacters[0]
       

        item.povCharacters
        
        //document.body.querySelector(".povcharacters").innerText = item.povCharacters
        //let response =  await getDataCharacter()
        //let responseBody = await response.json();

    })
    let  p=newItem.querySelector("p")
    p.innerText = item.name
   
        ul.append (newItem)
    

    }
}


render()

