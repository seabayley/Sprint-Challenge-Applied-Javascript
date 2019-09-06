// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let
        header = document.createElement('div'),
        span = document.createElement('span'),
        h1 = document.createElement('h1'),
        span2 = document.createElement('span');

    header.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    span.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    span2.textContent = '98°';

    header.append(span, h1, span2);

    return header;
}

document.querySelector('.header-container').appendChild(Header());