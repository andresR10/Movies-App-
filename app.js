$(function(){
let movieList = [];


$('#movie-form').on('submit', function(event){
    event.preventDefault();

    let title = $('#title').val();
    let rating = $('#rating').val();

    let movie = {
        title: title,
        rating: rating
    };

    movieList.push(movie);
    orderMovieList();
    $('#movie-form')[0].reset();
});

function orderMovieList(){
    $('#movie-list-body').empty();

    movieList.forEach(function(movie,index){
    let newMovie = $('<tr>');
    let titleCell = $('<td>').text(movie.title);
    let ratingCell = $('<td>').text(movie.rating);
    let removeButton = $('<button class="btn btn-warning">').text('Delete').click(function() {
      newMovie.remove();
      movieList.splice(index, 1);
    });

    let removeCell = $('<td>').append(removeButton);

    newMovie.append(titleCell, ratingCell, removeCell);
    $('#movie-list-body').append(newMovie);

    });
};

$('#sort-title').on('click', function(){
    movieList.sort(function(a,b){
        return a.title.localeCompare(b.title);
    });
    orderMovieList();
});

$('#sort-rating').on('click', function(){
    movieList.sort(function(a,b){
        return a.rating - b.rating;
    });
    orderMovieList();
});

});
