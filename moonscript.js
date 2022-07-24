fetch(`https://api.weatherapi.com/v1/astronomy.json?key=609cfefc62374bfa95c204645222307&q=Pl5&dt=2022-07-23`, {
    method: 'get'
})
    .then(res => res.json())
    .then((data) => {
        let moonphase = data.astronomy.astro.moon_phase;
        let moonpercent = data.astronomy.astro.moon_illumination;
        changeMoonImg(moonphase,moonpercent);
    })

function changeMoonImg(phase,illumination) {

    if (phase == 'New Moon'){

        document.getElementById("moonphaseimage").src="./src/img/moonimages/moon0.jpg";

    }else if (phase == 'Waxing Crescent' || phase == 'First Quarter' || phase == 'Waxing Gibbous'){
        if (illumination >= 1 && illumination < 16 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon1.jpg";
        }else if (illumination >= 16 && illumination < 24 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon2.jpg";
        }else if (illumination >= 24 && illumination < 32 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon3.jpg";
        }else if (illumination >= 32 && illumination < 40 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon4.jpg";
        }else if (illumination >= 40 && illumination < 45 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon5.jpg";
        }else if (illumination >= 45 && illumination < 50 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon6.jpg";
        }else if (illumination >= 48 && illumination < 52 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon7.jpg";
        }else if (illumination >= 52 && illumination < 61 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon8.jpg";
        }else if (illumination >= 61 && illumination < 70 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon9.jpg";
        }else if (illumination >= 70 && illumination < 79 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon10.jpg";
        }else if (illumination >= 79 && illumination < 88 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon11.jpg";
        }else if (illumination >= 88 && illumination < 97 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon12.jpg";
        }else if (illumination >= 97 && illumination < 101 ) {
            document.getElementById("moonphaseimage").src = "./src/img/moonimages/moon13.jpg";
        }

    }else if(phase == 'Full Moon'){

        document.getElementById("moonphaseimage").src="./src/img/moonimages/moon13.jpg";

    }else if(phase == 'Waning Gibbous' || phase == 'Third Quarter' || phase == 'Waning Crescent'){
        if (illumination <= 100 && illumination > 91 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon14.jpg";
        }else if (illumination <= 91 && illumination > 82 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon15.jpg";
        }else if (illumination <= 82 && illumination > 73 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon16.jpg";
        }else if (illumination <= 73 && illumination > 64 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon17.jpg";
        }else if (illumination <= 64 && illumination > 55 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon18.jpg";
        }else if (illumination <= 55 && illumination > 49 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon19.jpg";
        }else if (illumination <= 49 && illumination > 37 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon20.jpg";
        }else if (illumination <= 37 && illumination > 25 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon21.jpg";
        }else if (illumination <= 25 && illumination > 13 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon22.jpg";
        }else if (illumination <= 13 && illumination > 0 ){
            document.getElementById("moonphaseimage").src="./src/img/moonimages/moon23.jpg";
        }

    }else{

    }



}