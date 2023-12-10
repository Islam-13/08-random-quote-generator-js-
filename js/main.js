var quotes = [
  {
    authour: "Ragnar Lothbrok",
    quote: "Don't waste your time looking back. You're not going that way.”",
    img: "./images/ragnar.png",
  },
  {
    authour: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    img: "./images/albert-Einstein.jpg",
  },
  {
    authour: "Fyodor Dostoevsky",
    quote:
      "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.”",
    img: "./images/fyodor-Dostoevsky.jpg",
  },
  {
    authour: "Leo Tolstoy",
    quote:
      "We can know only that we know nothing. And that is the highest degree of human wisdom.”",
    img: "./images/leo-tolstoy.jpg",
  },
  {
    authour: "Naguib Mahfouz",
    quote:
      "What's the trick? .. In front of us a man is claiming leadership with a gun in his hand!”",
    img: "./images/Naguib-Mahfouz.jpg",
  },
  {
    authour: "Malcom X",
    quote: "You can't have capitalism without racism.”",
    img: "./images/malcom-x.jpg",
  },
  {
    authour: "Muhammad Ali",
    quote:
      "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion'.”",
    img: "./images/Muhammad-Ali.jpg",
  },
  {
    authour: "Khaled Hosseini",
    quote:
      "A man's heart is a wretched, wretched thing. It isn't like a mother's womb. It won't bleed. It won't stretch to make room for you.”",
    img: "./images/khaled-hosseini.jpg",
  },
  {
    authour: "Nelson Mandela",
    quote: "A winner is a dreamer who never gives up”",
    img: "./images/nelson-mandela.jpg",
  },
  {
    authour: "William Shakespeare",
    quote: "Hell is empty and all the devils are here.”",
    img: "./images/william-Shakespeare.jpg",
  },
];

var quoteBox = document.getElementById("quote-box");

function getRandomQuote() {
  var random = Math.floor(Math.random() * quotes.length);

  quoteBox.innerHTML = `
        <div class="quote">
          <p>${quotes[random].quote}</p>
        </div>
        <div class="author">
          <div class="author-image">
            <img src=${quotes[random].img} alt="${quotes[random].authour}" />
          </div>
          <p class="author-name"><span>―</span> ${quotes[random].authour}.</p>
        </div>
  `;
}
