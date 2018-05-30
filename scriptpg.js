

function myFunction() {

    // Declare variables
    var input, filter, photo, figcaption, img, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    photo = document.getElementById("photo");
    figcaption = photo.getElementsByTagName("figcaption");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < figcaption.length; i++) {
        img = figcaption[i].getElementsByTagName("img")[0];
        if (img.innerHTML.toUpperCase().indexOf(filter) > -1) {
            figcaption[i].style.display = "";
        } else {
            figcaption[i].style.display = "none";
        }
    }
}
