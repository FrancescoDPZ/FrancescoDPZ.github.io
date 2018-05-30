

function myFunction() {

    // Declare variables
    var input, filter, photo, figcaption, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    photo = document.getElementById("photo");
    figcaption = photo.getElementsByTagName('figcaption');


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < figcaption.length; i++) {
        a = figcaption[i].getElementsByTagName("a")[0];
        if (figcaption.innerHTML.toUpperCase().indexOf(filter) > -1) {
            figcaption[i].style.display = "";
        } else {
            figcaption[i].style.display = "none";
        }
    }
}
