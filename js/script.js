const open_menu = document.getElementById("open-menu");
const close_menu = document.getElementById("close-menu");
const navigation = document.getElementById("navigation");

open_menu.addEventListener('click', showNavigation);
close_menu.addEventListener('click', closeNavigation);

function showNavigation() {
    //navigation.classList.toggle('block');
    navigation.classList.remove('hidden');
    navigation.classList.add('flex', 'flex-col', 'text-center');
    open_menu.classList.add('hidden');
    //open_menu.setAttribute('id', 'hide');
    close_menu.classList.remove('hidden');
    close_menu.classList.add('block');
    //close_menu.setAttribute('id', 'show');
}

// 
//

function closeNavigation() {
    //navigation.classList.toggle('hidden');
    //navigation.classList.remove('hidden');
    navigation.classList.remove('flex', 'flex-col', 'text-center', 'width', 'max-width');
    navigation.classList.add('hidden');
    open_menu.classList.remove('hidden');
    open_menu.classList.add('block');
    close_menu.classList.remove('block');
    close_menu.classList.add('hidden');
}

let currentYear = new Date().getFullYear();
let yearText = document.getElementById("year");
yearText.textContent = currentYear;
