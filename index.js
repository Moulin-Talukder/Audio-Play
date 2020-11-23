for(var i = 0; i<3; i++){
    // button click
    document.querySelectorAll(".btnclass")[i].addEventListener("click", function(){

            var text = this.innerHTML;
            audioPlay(text);
            animation(text);

           
    });
    // key press
    document.addEventListener("keypress", function(event){

            var text = event.key;

            audioPlay(text);
            animation(text);
    });

}



function audioPlay(text) {

    
    switch(text){

        case "a":
           var audio = new Audio('sounds/a.mp3');
           audio.play();
           break;

        case "b":
           var audio = new Audio('sounds/b.mp3');
           audio.play();
           break;

        case "c":
           var audio = new Audio('sounds/c.mp3');
           audio.play();
           break;

   }


}


function animation(text){

    var selectButton = document.querySelector("."+text);

    selectButton.classList.add("anim");

    setTimeout(function(){

      selectButton.classList.remove("anim");

    }, 1000);

}