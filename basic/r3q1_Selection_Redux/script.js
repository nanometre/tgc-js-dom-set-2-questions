// PLACE YOUR CODE HERE
//1
let firstH2 = document.querySelector('h2')
firstH2.style.fontSize = '32px'
firstH2.style.fontFamily = 'Verdana'

//2
let img = document.querySelector('img')
img.style.borderStyle = 'solid'
img.style.borderColor = 'black'
img.style.borderWidth = '1px'
img.style.padding = '32px 0px 15px 0px'

// 3, how to do this
let ulItems = document.querySelectorAll('ul > li')
for (let eachItem of ulItems) {
    // if (ulItems.indexOf(eachItem) == 0 || ulItems.indexOf(eachItem) == (length(ulItems) - 1)) {
        eachItem.style.backgroundColor = 'yellow'
    // }
}

//4

//5
let olItems = document.querySelectorAll('ol li')
for (let eachItem of olItems) {
    eachItem.style.color = 'orange'
}