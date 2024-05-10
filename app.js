function eidUlAdha() {
    var eidUlAdhaDate = new Date("June 17, 2024 00:00:00").getTime();

    function eidUpdate() {
        var now = new Date().getTime();
        var timeRemaining = eidUlAdhaDate - now;

        var months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
        var days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("months").innerText = months;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (timeRemaining > 0) {
            setTimeout(eidUpdate, 1000);
        } else {
            document.getElementById("arrived").textContent = "Eid ul Adha Mubarak!";
        }
    }

    eidUpdate();
}

eidUlAdha();
