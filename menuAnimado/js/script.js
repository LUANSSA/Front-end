'use strict'

const menuSize = '250px';

let open = true;

document.querySelector("#btnMenuIcon").addEventListener('click', e =>{
   open = !open;
   toggMenu();
});
document.querySelector("#btnClose").addEventListener('click', e =>{
    open = false;

    toggMenu();
});

function toggMenu(){
    if(open){
        document.querySelector("#menu").style.marginLeft = 0;
        return;
    }
    document.querySelector("#menu").style.marginLeft = `-${menuSize}`;
}