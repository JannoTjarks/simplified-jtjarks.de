function getColorScheme() {
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            return "dark";
        }
    }
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    else {
        return "ligth";
    }
}
function toggleDarkModeSwitch() {
    var darkModeSwitch = document.getElementById("switchDarkMode");
    if (darkModeSwitch.checked) {
        console.log(darkModeSwitch.checked);
        darkModeSwitch.checked = false;
    }
    else {
        darkModeSwitch.checked = true;
    }
}
function toggleDarkTheme() {
    var element = document.body;
    element.classList.toggle("bg-dark");
    element.classList.toggle("text-white");
}
function onInit() {
    var darkModeSwitch = document.getElementById("switchDarkMode");
    darkModeSwitch.defaultChecked = false;
    if (getColorScheme() == "dark") {
        toggleDarkTheme();
        toggleDarkModeSwitch();
    }
    darkModeSwitch.addEventListener('click', function handleClick() {
        toggleDarkTheme();
    });
}
onInit();