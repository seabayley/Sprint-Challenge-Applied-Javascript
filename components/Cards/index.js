// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let activeFilter = 'all';
cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        Object.entries(response.data.articles).forEach(entry => {
            entry[1].forEach(article => {
                document.querySelector('.cards-container').appendChild(createArticle(entry[0], article));
            });
        });
    })

    .catch(error => {
        throw (error);
    });

function createArticle(topic, data) {
    let
        card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgCon = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCon.classList.add('img-container');

    img.src = data.authorPhoto;
    headline.textContent = data.headline;
    span.textContent = `By ${data.authorName}`;

    imgCon.append(img);
    author.append(imgCon);
    card.append(headline, author, span);

    return card
}