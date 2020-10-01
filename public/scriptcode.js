/*      DOM EVENTS    */
const MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

document.getElementById('RegForm')
    .addEventListener('submit',(e)=>{
        const name = document.getElementById('RegName').value;
        const mail = document.getElementById('RegMail').value;
        const phon = document.getElementById('RegTelf').value;
        const date = document.getElementById('RegBday').value;
        const pass = document.getElementById('RegPass').value;

        console.log(name, mail, phon, date, pass);
        e.preventDefault();
});


/*      DOM FUNCTIONS      */
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px";
    }else{
        MenuItems.style.maxHeight = "0px";
    }
}   