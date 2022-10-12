let ratings = [...document.getElementsByClassName("radio-button-rating")];
ratings.map(el => el.addEventListener("click", memes));

let _selectedRatingId =  null;

function memes(event) {
    console.log();
    if (_selectedRatingId != null){
        document.getElementById(_selectedRatingId).classList.remove("visible");
    }
    _selectedRatingId = "img-"+event.target.getAttribute("id");
    document.getElementById(_selectedRatingId).classList.add("visible");
}

document.getElementById("reset-button").addEventListener("click", reset);
function reset(event){
    if (_selectedRatingId != null){
        document.getElementById(_selectedRatingId).classList.remove("visible");
        _selectedRatingId = null;
    }
    
}