let MovieArray = [];

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("submitMovie").addEventListener("click", function() {
        let nMovieName = document.getElementById("movieName").value;
        let nMovieRate = document.getElementById("Rate").value;
        document.getElementById("movieName").value = "";
        document.getElementById("Rate").value = "";
        let yourMovie = new Movie(nMovieName, nMovieRate);
        if (yourMovie.MovieValidation() == true) {
            MovieArray.push(yourMovie)
        } else {
            alert ("Wrong input");
        }
    });

    document.getElementById("showMovie").addEventListener("click", function() {
        document.getElementById("yourList").value = "";
        MovieArray.sort(function(a, b) {
            return b.MovieRate - a.MovieRate;
        });
        MovieArray.forEach (function (yourMovie) {
            document.getElementById("yourList").value += yourMovie.GetAll();
        });
    });
});
