const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 
fridge.push(`ice cream`);
fridge.push(`cake`)
fridge.push(`chocolate`)
fridge.push(`corn`)
fridge.push(`takoyaki`)
//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
let item = buyList.pop()
fridge.push(item)

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.


function moveUp(){

    let items = fridge.pop()
        if (fridge.length > 0 ) {
            buyList.push(items)
        }
        else {
            console.log(`Nothing in the Fridge`)
        }
    
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
    
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    
    let grocery = buyList.pop()
        if (buyList.length > 0) {
            fridge.push(grocery)
        }
        else {
            console.log(`Nothing to buy`)
        }
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
    
}

downButton.addEventListener('click', moveDown)


buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge