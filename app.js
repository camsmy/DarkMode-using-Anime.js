const moon = "M58 114.599C58 177.836 119 229.099 119 229.099C53.2781 229.099 0 177.836 0 114.599C0 51.3626 53.2781 0.0992393 119 0.0992393C119 0.0992393 58 51.3626 58 114.599Z";
const sunpath = "M238 114.5C238 177.737 184.722 229 119 229C53.2781 229 0 177.737 0 114.5C0 51.2634 53.2781 0 119 0C184.722 0 238 51.2634 238 114.5Z";
const darkmode = document.querySelector('#darkmode');

let toggle = false;

///to click the sun
darkmode.addEventListener('click', () => {
    ///we will use the animate.js
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //add different animations; morphing the shape
    timeline.add({
        targets: ".sun",
        d: [{
            value: toggle ? sunpath : moon
        }]
    })
    .add({
        targets: "#darkmode",
        rotate: toggle ? 0 : 320
    },'-= 350')
    .add({
        targets: "section",
        background:toggle ? '#ecf0f1' :'#121212',
        color: toggle ? '#0000' : '#F9D71C'
    },'-= 700')
    // every time that the sun is clicked
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }


});