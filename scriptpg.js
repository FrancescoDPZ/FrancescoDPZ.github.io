

function myFunction() {

    // Declare variables
    var input, filter, photo, img, figcaption, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    photo = document.getElementById("photo");
    img = photo.getElementsByTagName("img");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < img.length; i++) {
        figcaption = img[i].getElementsByTagName("figcaption")[0];
        if (figcaption.innerHTML.toUpperCase().indexOf(filter) > -1) {
            img[i].style.display = "";
        } else {
            img[i].style.display = "none";
        }
    }
}
