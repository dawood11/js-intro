function handleSearch() {
    const searchValue = document.getElementById("inputValue").value;
    let car = null;

    switch (searchValue) {
        case "Tesla":
            car = "Tesla Model 3";
            break;

        case "Mercedes":
            car = "Mercedes Benz e350 de";
            break;

        default:
            car = "Fant ikke bilen du søker etter...";
    }

    if (car == "Fant ikke bilen du søker etter...") {
        document.getElementById("car").innerHTML = car;
    } else {
        const resultMsg = "Bilen du søkte etter ga treff på denne bilen: " + car
        document.getElementById("car").innerHTML = resultMsg;
    }
};