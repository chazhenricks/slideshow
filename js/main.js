
var Puppypics = (function (puppy){

var picsIndex = 1;
puppy.loadPuppies = function(){

    $.ajax({
        url: 'puppies.json'
    }).done(puppy.showPuppies);
};

puppy.showPuppies = function(pics){
    var pups = pics.puppies;
    var puppyImage = "";
    console.log(pups[1].src);
    for (var i=0; i<pups.length;i++){
        puppyImage +=
        `<article class ="pics-div">
            <img class="pics-img" src="${pups[i].src}" alt="totally cute puppy">
            <div class="pics-info">
                <p class="pics-caption">This pups name is ${pups[i].name}</p>
            </div>
            <div class = "buttons">
                <a href="#" class="previous"> PREVIOUS </a>
                <a href="#" class="next"> NEXT </a>
            </div>
        </article>`;

    };
    puppyImage +=
        `<a class="previous" id="previous" href="#"> &#10094; </a>
        <a class="next" id="next" href="#"> &#10095; </a>`;

    $("#slideshow").append(puppyImage);
    puppy.buttons();

};



puppy.buttons = function(){
    $(".previous").click(function(){
        puppy.plusDivs(-1);
    });
    $(".next").click(function(){
        puppy.plusDivs(+1);
    })

};

puppy.plusDivs = function(n){
    puppy.showDivs(picsIndex += n);
};

puppy.showDivs = function(n){
    var i;
    var x = $(".pics-div");
    if (n > x.length){
        picsIndex = 1
    }
    if (n < 1){
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[picsIndex-1].style.display = "block";
};


return puppy;

})(Puppypics || {})

Puppypics.loadPuppies();






//Display one image and hide the rest
    //stack images on top of each other using Z index

//On next arrow, display next image in array, and hide rest
    //re arrange Z index

//On previous arrow, display previous image in array and hide rest.



















