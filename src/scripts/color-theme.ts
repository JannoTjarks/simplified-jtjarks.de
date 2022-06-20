function getColorScheme(): string {
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            return "dark"
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    else {
        return "ligth"
    }
}

function toggleDarkModeSwitch(): void {
    let darkModeSwitch = <HTMLInputElement>document.getElementById("switchDarkMode");
    if (darkModeSwitch.checked) {
        console.log(darkModeSwitch.checked);
        darkModeSwitch.checked = false;
    }
    else {
        darkModeSwitch.checked = true;
    }
}

function toggleDarkTheme(): void {
    let element = document.body;
    element.classList.toggle("bg-dark");
    element.classList.toggle("text-white");
}

function onInit(): void {
    let darkModeSwitch = <HTMLInputElement>document.getElementById("switchDarkMode");
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

