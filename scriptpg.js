

function myFunction() {

    // Declare variables
    var input, filter, ul, li, figcaption, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("photo");
    li = photo.getElementsByTagName("div");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        figcaption = li[i].getElementsByTagName("figcaption")[0];
        if (figcaption.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
