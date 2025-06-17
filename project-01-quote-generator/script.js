const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair",
    },
    {
        quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
        author: "William Butler Yeats",
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African Proverb",
    },
];

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".quoteAuthor");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].author;
});
