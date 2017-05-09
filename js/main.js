
var Puppypics = (function (puppy){

var picsIndex = 1;
puppy.loadPuppies = function(){

    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=bPs6DkG9TX1CtFbImwnVMvopK5v1dbTpxarpHSO3'
    }).done(puppy.showPuppies);
};

puppy.showPuppies = function(pics){

    var spaceJson =
    {
        "space" : [
            {
            "name" : pics.title,
            "img" : pics.url,
            "caption" : pics.explanation
            }
        ]
    }



    var pups = spaceJson;
    console.log(spaceJson);
    var puppyImage = "";
    for (var i=0; i<pups.length;i++){
        puppyImage +=
        `<article class ="pics-div">
            <img class="pics-img" src="${pups[i].url}" alt="${pups[i].title}">
            <div class="pics-info">
                <p class="pics-caption">This pups name is ${pups[i].explanation}</p>
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
   puppy.showDivs(picsIndex);

    //NASA API key bPs6DkG9TX1CtFbImwnVMvopK5v1dbTpxarpHSO3

};



puppy.buttons = function(){
    $(".previous").click(function(){
        puppy.plusDivs(-1);
    });
    $(".next").click(function(){
        puppy.plusDivs(+1);
    })

};

puppy.plusDivs = function(counter){
    puppy.showDivs(picsIndex += counter);
};

puppy.showDivs = function(counter){
    var picsDiv = $(".pics-div");
    if (counter > picsDiv.length){
        picsIndex = 1;
    };
    if (counter < 1){
        picsIndex = picsDiv.length
    };
    for (var i = 0; i < picsDiv.length; i++) {
        picsDiv[i].style.display = "none";
    }
    picsDiv[picsIndex-1].style.display = "block";
};


return puppy;

})(Puppypics || {})

Puppypics.loadPuppies();






//Display one image and hide the rest
    //stack images on top of each other using Z index

//On next arrow, display next image in array, and hide rest
    //re arrange Z index

//On previous arrow, display previous image in array and hide rest.



















