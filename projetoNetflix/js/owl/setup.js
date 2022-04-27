/*Carrosel owl jquery*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function clickFilme(n){
    let filme = document.querySelector("item");
    if(n == 1){
        alert("Documento igual a 1");
    }
    else if(n == 2){
        alert("Documento igual a 2");
    }
    else if(n == 3){
        alert("Documento igual a 3");
    } 
    else if(n == 4){
        alert("Documento igual a 4");
    }
    else if(n == 5){
        alert("Documento igual a 5");
    }
    else if(n == 6){
        alert("Documento igual a 6");
    }
    else if(n == 7){
        alert("Documento igual a 7");
    }
    else{
        alert("Documento igual a 8");
    }   
}