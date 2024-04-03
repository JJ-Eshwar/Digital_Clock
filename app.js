
    let hourHand = document.getElementById('hr');
    let minuteHand = document.getElementById('min');
    let secondHand = document.getElementById('sec');


    const setTime = () => {
        const currentTime = new Date();
        // console.log(currentTime);
        const seconds = currentTime.getSeconds();
        // console.log(seconds);
        const minutes = currentTime.getMinutes();
        // console.log(minutes);
        const hours = currentTime.getHours();
        // console.log(hours);
        const secondsRatio = seconds / 60;
        const minutesRatio = (minutes) / 60;
        const hoursRatio = (hours) / 12;
        // console.log(hoursRatio);

        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);
    }


    const setRotation = (element, rotationRatio) => {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }

    setTime();
    setInterval(setTime, 1000);