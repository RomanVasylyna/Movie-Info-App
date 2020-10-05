$(document).ready(() => {


//Search Event
$('#form').on('submit', function(e) {
e.preventDefault();
$('#display .container .row').empty();
let searchKey = $(this).find('.form-control').val();
getMovies(searchKey);
});


//Getting Movies Object
async function getMovies(searchKey) {
let response = await fetch(`http://www.omdbapi.com?s=${searchKey}&apikey=thewdb`);
let movies = await response.json();

sessionStorage.setItem('moviesObj', JSON.stringify(movies.Search));
movies.Search.forEach(movie => {
addContent(movie);
})

//Adding Events to Btns
$('.card #movieInfo').on('click', function() {
sessionStorage.setItem('movie', JSON.stringify($(this).parent().parent().attr('id')));
window.open('movie.html');
});

}


//Create Movies
function addContent(movie) {
let display = '';

display += `
<div class="col-lg-3 mb-3" id="${movie.Title}">
  <div class="card p-3 h-100" id="generatedMovies">
    <img src="${movie.Poster}" alt="" id="movieImg" class="img-fluid">
    <h5 id="movieTitle">${movie.Title}</h5>
    <a class="btn btn-primary" id="movieInfo">Movie Info</a>
  </div>
</div>
`;

$('#display .container .row').append(display);
}



































































})
