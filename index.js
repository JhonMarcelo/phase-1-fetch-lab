 function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(function (response){
    //console.log(response)
    renderBooks(response)
  })

}

// async function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   // const gameOfThrones = {}
//   // fetch('https://anapioficeandfire.com/api/books')
//   // .then(res => res.json())
//   // .then(function(res){
//   //  res = gameOfThrones
//   //  renderBooks(gameOfThrones)
//   // })

//   //const url = 'https://anapioficeandfire.com/api/books'
//   await fetch('https://anapioficeandfire.com/api/books')
//   .then(res => res.json())
//   .then(function (response){
//     console.log(response)
//     renderBooks(response)
//   })

// }


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
