function getColorScheme(): string {
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === "dark") {
            return "dark"
        }
        else {
            return "ligth"
        }
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    else {
        return "ligth"
    }
}

function toggleDarkTheme(): void {
    let element = document.body;
    let darkModeSwitch = <HTMLInputElement>document.getElementById("switchDarkMode");
    let svgIcons = document.getElementsByClassName(
        'icon',
    ) as HTMLCollectionOf<HTMLElement>;
    let svgLargeIcons = document.getElementsByClassName(
        'large-icon',
    ) as HTMLCollectionOf<HTMLElement>;
    const svgIcons_arr = Array.from(svgIcons);
    const svgLargeIcons_arr = Array.from(svgLargeIcons);
    if (element.classList.contains("bg-dark") &&
        element.classList.contains("text-white")) {
        element.classList.remove("bg-dark");
        element.classList.remove("text-white");
        darkModeSwitch.checked = false;
        svgIcons_arr.forEach(svg => {
            svg.classList.remove("dark-svg");
            svg.classList.add("ligth-svg");
        });
        svgLargeIcons_arr.forEach(svg => {
            svg.classList.remove("dark-svg");
            svg.classList.add("ligth-svg");
        });
        localStorage.setItem("theme", "ligth");
    }
    else {
        element.classList.add("bg-dark");
        element.classList.add("text-white");
        darkModeSwitch.checked = true;
        svgIcons_arr.forEach(svg => {
            svg.classList.remove("ligth-svg");
            svg.classList.add("dark-svg");
        });
        svgLargeIcons_arr.forEach(svg => {
            svg.classList.remove("ligth-svg");
            svg.classList.add("dark-svg");
        });
        localStorage.setItem("theme", "dark");
    }
}

let darkModeSwitch = <HTMLInputElement>document.getElementById("switchDarkMode");
darkModeSwitch.defaultChecked = false;
if (getColorScheme() === "dark") {
    toggleDarkTheme();
}

darkModeSwitch.addEventListener('click', function handleClick() {
    toggleDarkTheme();
});
