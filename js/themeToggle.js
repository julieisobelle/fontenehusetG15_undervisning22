function themeToggle() {
    console.log("Changed theme?");

    const body = document.querySelector("body");
    console.log(body);

    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
    } else if (body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        console.log("Something wrong");
    }
}

export { themeToggle };