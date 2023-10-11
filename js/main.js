let btn = document.getElementById("myBtn");
let spoiler = document.getElementById("spoiler");
let isSpoilerVisible = false;

function changeDisplayStatus() {
    if (isSpoilerVisible) {
        spoiler.style.display = "none";
    } else {
        spoiler.style.display = "block";
    }
    isSpoilerVisible = !isSpoilerVisible;
}

btn.onclick = () => {
    changeDisplayStatus();
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
        spoiler.style.display = "none";
        isSpoilerVisible = false;
    }
});
