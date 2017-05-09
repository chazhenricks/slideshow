"use strict"

var Nasa = (function(space){

var picsIndex = 1;
var dateIndex = 1;

var spacePics = [];
space.getPics = function(i){

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=bPs6DkG9TX1CtFbImwnVMvopK5v1dbTpxarpHSO3&date=${i}`
    }).done(function(data){
        space.parseData(data);
    });

};

space.getDate = function(i){
    var today = new Date();
        var dd = today.getDate()-i;
        var mm = today.getMonth()+1;
        var year = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }
        if(mm<10) {
            mm='0'+mm
        }
        today = `${year}-${mm}-${dd}`;
        return today;
}


space.parseData = function(data){

    spacePics.push(data);
    space.showPics();
};

space.showPics = function(){
    for(var i=0;i<spacePics.length;i++){
    var picsOnPage =
    `<article class ="pics-div">
            <img class="pics-img" src="${spacePics[i].url}" alt="${spacePics[i].title}">
            <div class="pics-info">
                <p class="pics-caption">${spacePics[i].explanation}</p>
            </div>
            <div class = "buttons">
                <a href="#" class="previous"> PREVIOUS </a>
                <a href="#" class="next"> NEXT </a>
            </div>
        </article>`;
        $("#slideshow").append(picsOnPage);
    }
    space.buttons();
}


space.buttons = function(){
    $(".previous").click(function(){
        dateIndex ++;
        space.getPics(space.getDate(dateIndex));
        space.plusDivs(-1);
        console.log(space.getDate(dateIndex))

    });
    $(".next").click(function(){
        space.plusDivs(+1);
    })

};

space.plusDivs = function(counter){
    space.showDivs(picsIndex += counter);
};

space.showDivs = function(counter){
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



console.log(spacePics);

    return space;

})(Nasa ||{})

Nasa.getPics(Nasa.getDate(0));



//DONT THROW AWAY
   // var gettingPics = new Promise((resolve, reject) =>{
   //      for(var i=3;i<9;i++){
   //          $.ajax({
   //             url: `https://api.nasa.gov/planetary/apod?api_key=bPs6DkG9TX1CtFbImwnVMvopK5v1dbTpxarpHSO3&date=2017-05-0${i}`
   //              }).done(space.parseData);
   //      }
   //      resolve("COOL");
   //  }).then((resolve) =>{
   //      console.log(resolve);
   //      space.showPics();
   //  });





        //Promise.resolve(3) is shortcut for creating a promise and setting a resolve in the same line
// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise ((resolve,reject) =>{
//             //The resolve, after 1000 ms, will be the word "foo"
//     setTimeout(resolve, 1000, "foo");
// });

// //Promise.all will wait untit it gets a resolve from all 3 of the values in the array and then displays them
// Promise.all([p1,p2,p3]).then((values) =>{
//     console.log("resolve values: ", values);
// })





