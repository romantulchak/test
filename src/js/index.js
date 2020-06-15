let popupWindow = document.getElementById('popupWindow');
let popupBackground = document.getElementById('popupBackground');

function showPopup(){
   popupWindow.style.visibility = 'visible'; 
   popupBackground.classList.add('fadeInUp');

}
function closePopup(){

   popupBackground.classList.add('fadeInDown');

    setTimeout(() => {
        popupWindow.style.visibility = 'hidden'; 
    }, 1000);
}