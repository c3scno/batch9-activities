//variable declarations
const authorID = document.getElementById("author");
const quotesID = document.getElementById("quote");
const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");

const quotes = [
    {quote: "Just use your imagaination.",
    author: "Foster the People"},

    {quote: "So are you happy now?",
    author: "IU"},

    {quote: "Thank you, next.",
    author: "Ariana Grande"},

    {quote: "This was all you, none of it me.",
    author: "Adele"}
]

//randomizer
const shuffleBtn = document.getElementById('shuffle');
shuffleBtn.addEventListener('click', getRandQuote);

function getRandQuote() {
    const quote = document.querySelector('#quote');
    const author = document.querySelector('#author');
    const filteredQuotes = quotes.filter((quote) => quote != "")
    //generates a random number (from length of array)
    let index = Math.floor(Math.random() * quotes.length);
    //gets a random quote from array
    let randQuote = filteredQuotes[index].quote;
    //gets the author of the quote
    let randAuthor = filteredQuotes[index].author;
    //displays quote and author
    quote.innerHTML = randQuote;
    author.innerHTML = randAuthor;
};

//modal for add new quotes
document.getElementById("add-quote").addEventListener("click", function() {
    document.getElementById("modal-container").classList.toggle("show");
})

document.getElementById("close").addEventListener("click", function() {
    this.classList.toggle("click");
    document.getElementById("modal-container").classList.remove("show");
})

//display default quotes in modal
const displayDefaultQuotes= () => {
    for (i=0; i<quotes.length; i++){
        const text = document.createElement("p");
        text.textContent=`${quotes[i].author} once said, "${quotes[i].quote}" `;
        document.getElementById("new-quotes").append(text);
    }
}
displayDefaultQuotes();

//add new quotes & author
const addNewQuotes= () => {

    if (quoteInput.value.length != 0 && authorInput.value.length != 0)  {
        quotes.push({quote:quoteInput.value, author:authorInput.value, isInherit:false})
    } else if (quoteInput.value.length != 0 && authorInput.value.length == 0) {
        quotes.push({quote:quoteInput.value, author:"Anonymous", isInherit:false})
    } else {
        alert("Input Quote!")
        return;
    }

    //reset input box
    quoteInput.value = "";
    authorInput.value="";
   
    
    //append new quotes & add delete function for new quotes
    const text = document.createElement("p");
    const button = document.createElement("button");
        text.textContent=`${quotes[quotes.length-1].author} once said, "${quotes[quotes.length-1].quote}"`;
        document.getElementById("new-quotes").append(text);
        for (i=4; i < quotes.length ; i++) {
            button.id = quotes.indexOf(quotes[i]);
        }
        button.textContent = "🗑️";
        text.appendChild(button);
        button.addEventListener("click", function(){
            quotes.splice(this.id,1,"");
            text.style.display="none";
        })
}

document.getElementById("btn-new-quote").addEventListener("click", addNewQuotes);
quoteInput.addEventListener("keypress",function(event){
    if (event.which === 13) {
        addNewQuotes();
    }
})
authorInput.addEventListener("keypress",function(event){
    if (event.which === 13) {
        addNewQuotes();
    }
})
