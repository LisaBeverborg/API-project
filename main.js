//show author name on click book list
async function getData(){
    let response = await fetch ( "https://www.anapioficeandfire.com/api/books/")
    let responseBody = await response.json()
    return responseBody
}
async function render(){
    let list = await getData()
    let ul = document.querySelector("ul") 
    let itemPrototype = document.querySelector ("li.prototype")
    for (let item of list){
        let newItem = document.createElement("li")
        let para = document.createElement("h1")
        para.classList.add("name")
        newItem.append(para)
        newItem.classList.remove("prototype")
        newItem.addEventListener ("click", async function(){
            document.body.querySelector(".authors").innerText = "Author: " + item.authors[0]
            document.body.querySelector(".pages").innerText = "Pages: " + item.numberOfPages 
            let date = strDate(item.released, 9, 0)
            document.body.querySelector(".released").innerText = "Release date: " + date
           
            let response = await fetch(personURL)
            let charData = await response.json()
            
           
            let newThing = document.createElement("div")
            let newTwo = document.createElement("h3")
            newTwo.classList.add("povcharacters")
            newThing.append(newTwo) 
            let listChar = await (personURL)
            for (let personURL of listChar){     
               
                return charData
            }
                document.body.querySelector(".characters").innerText = "Name: " + item.povCharacters.name 
                 
        })
        let  p=newItem.querySelector("h1")
        p.innerText = item.name
        ul.append (newItem)  
    }
}

function strDate (oldDate, stop, start){
    let newDate = ""
    for (i=start; i<=stop; i++){
        newDate += oldDate[i]
    }
    return newDate
}

render()

