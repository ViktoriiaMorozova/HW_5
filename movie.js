let Movie = function(pMovieName, pMovieRate) {
    this.MovieName = pMovieName;
    this.MovieRate = parseInt(pMovieRate);
}
Movie.prototype.MovieValidation = function() {
    if (this.MovieName.length == 0) {
        return false;
    }
    if (this.MovieRate < 1 || this.MovieRate > 5) {
        return false;
    }
    return true;
}
Movie.prototype.GetAll = function() {
    return this.MovieName + ", with rating " + this.MovieRate + "\n";
}
