function onInit(): void {
    let year: number = new Date().getFullYear()
    document.getElementById("year").innerHTML = String(year);
}

onInit();
