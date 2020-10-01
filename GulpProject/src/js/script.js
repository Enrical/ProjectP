/* start the external action and say hello */
console.log("App is alive");

/* Menu buttons */
var home = {
    name: "Home",
    selected: false,
};
var services = {
    name: "Services",
    selected: false,
};
var test1 = {
    name: "Test1",
    selected: false,
};
var test2 = {
    name: "Test2",
    selected: false,
};
var about = {
    name: "About",
    selected: false,
};
var currentMenu = home;

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