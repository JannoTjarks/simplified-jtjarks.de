let theme="light";

function detectColorScheme(){            
    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        var element = document.body;
        element.classList.toggle("bg-dark");
        element.classList.toggle("text-white");
    }
}

function toggleDarkTheme() {
    var element = document.body;
    element.classList.toggle("bg-dark");
    element.classList.toggle("text-white");
}

detectColorScheme();
if(theme === "light") {
    $('#switchDarkMode').prop('checked', false).change();
} else {
    $('#switchDarkMode').prop('checked', true).change();            
}

$('#switchDarkMode').on('change.bootstrapSwitch', function(e) {
    toggleDarkTheme();
});

var year = new Date().getFullYear()
document.getElementById("year").innerHTML=String(year);