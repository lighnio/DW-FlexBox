// CV Script !!!
function lazyColors(){
    let elements = document.getElementsByClassName('elemento');

    Array.from(elements).forEach((element) => {
        let hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        element.style.background = ("background-color", hue);
        console.log();
    })
}