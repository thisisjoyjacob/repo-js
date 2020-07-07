var arrayOfQuotes = [
    {
        "author":"William James",
        "quote":"Act as if what you do makes a difference. IT DOES."
    },
    {
        "author":"Winston Churchill",
        "quote":"Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
        "author":"Helen Keller",
        "quote":"Never bend your head. Always hold it high. Look the world straight in the eye."
    },
    {
        "author":"Zig Ziglar",
        "quote":"What you get by achieving your goals is not as important as what you become by achieving your goals."
    },
    {
        "author":"Theodore Roosevelt",
        "quote":"Believe you can and you're halfway there."
    },
    {
        "author":"Carol Burnett",
        "quote":"When you have a dream, you've got to grab it and never let go."
    },
    {
        "author":"Jimmy Dean",
        "quote":"I can't change the direction of the wind, but I can adjust my sails to always reach my destination."
    },
    {
        "author":"thisisjoyjacob",
        "quote":"wo bulati hai magar jaane ka nai"
    },
    {
        "author":"Demi Lovato",
        "quote":"No matter what you're going through, there's a light at the end of the tunnel."
    },
    {
        "author":"William James",
        "quote":"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome."
    },
    {
        "author":"Albert Einstein",
        "quote":"Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
        "author":"Ella Fitzgerald",
        "quote":"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."
    },
    {
        "author":"Amy Poehler​​",
        "quote":"Limit your 'ALWAYS' and your 'NEVERS'."
    },
    {
        "author":"Audrey Hepburn",
        "quote":"Nothing is impossible. The word itself says I'm possible!"
    },
    {
        "author":"C.S. Lewis",
        "quote":"You are never too old to set another goal or to dream a new dream."
    }
]


function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '~' + arrayOfQuotes[randomNumber].author;
}