/* start the external action and say hello */
console.log("App is alive");

/* Menu buttons */
// Es mejor usar let y const. var puede dar errores y funcionar cuando no deberia
let home = {
    name: "Home",
    selected: false,
};
let services = {
    name: "Services",
    selected: false,
};
let test1 = {
    name: "Test1",
    selected: false,
};
let test2 = {
    name: "Test2",
    selected: false,
};
let about = {
    name: "About",
    selected: false,
};
let currentMenu = home;

/* Precarga de datos*/

function onLoadData() {
    switchMenu(currentMenu);
}

/**
 * Switch menu name in the navigation menu
 * @param menuObject
 */

function switchMenu(menuObject) {
    // highlight the selected #main_menu. //INEFICIENT
    $('#main_menu li').removeClass('selected');
    $('#main_menu li i').removeClass('fas');
    $('#main_menu li:contains(' + menuObject.name + ')').addClass('selected');
    $('#main_menu li:contains(' + menuObject.name + ') i').toggleClass('fas');
    currentMenu = menuObject;
}