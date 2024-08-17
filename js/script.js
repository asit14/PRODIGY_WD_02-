window.onload = function () {

    var hour = 0;
    var minute = 0;
    var centiSecond = 0;
    var second = 0;
    var Interval;

    // accessing hour, minute, seconds and centiseconds from document
    var hourElement = document.getElementById("hour");
    var minuteElement = document.getElementById("minute");
    var secondElement = document.getElementById("second");
    var centiSecondElement = document.getElementById("centisecond");
    var timeElement = document.getElementById("time");

    // accessing the stop time display
    var timeList = document.getElementById("time_list");


    // accessing the three buttons - start, stop and reset
    var bStart = document.getElementById("start");
    var bStop = document.getElementById("stop");
    var bReset = document.getElementById("reset");
    var running = false;

    // Adding event listeners for the buttons
    // For start button
    bStart.onclick = function () {
        clearInterval(Interval);
        // start new interval
        running = true;
        timeElement.style.border = "3px solid #40916c";
        // call every 10 milliseconds
        Interval = setInterval(timer, 10);
    }

    // For stop button
    bStop.onclick = function () {
        // clear interval (stop time)
        if (running) {
            running = false;
            timeElement.style.border = "3px solid #c9184a";
            // add the selected stop time to UI
            var innerContent = "<li>" + hour + " : " + minute + " : " + second + " : " + centiSecond + "</li>";
            timeList.insertAdjacentHTML("afterbegin", innerContent);

            // clear interval
            clearInterval(Interval);
        }
        clearInterval(Interval);
    }

    // For reset button
    bReset.onclick = function () {
        timeElement.style.border = "3px solid #0077b6";
        clearInterval(Interval);
        running = false;
        // reset all values to zero
        hour = 0;
        minute = 0;
        second = 0;
        centiSecond = 0;
        hourElement.innerHTML = "00";
        minuteElement.innerHTML = "00";
        secondElement.innerHTML = "00";
        centiSecondElement.innerHTML = "00";
        timeList.innerHTML = "";
    }

    // timer function which starts on each interval
    function timer() {

        centiSecond++;

        // -------------------------- for centiseconds ------------------------------
        // if centiseconds is less than 10, prepend 0
        if (centiSecond <= 9) {
            centiSecondElement.innerHTML = "0" + centiSecond;
        }
        // if centiseconds is greater than 10, replace as it is
        if (centiSecond > 9) {
            centiSecondElement.innerHTML = centiSecond;
        }
        // if centiseconds is greater than 99, increment second and reset centisecond 
        if (centiSecond > 99) {
            second++;
            secondElement.innerHTML = "0" + second;
            centiSecond = 0;
            centiSecondElement.innerHTML = "00";
        }
        // -----------------------------------------------------------------------


        // -------------------------- for seconds ------------------------------
        // if seconds is greater than 10, save as it is
        if (second > 9) {
            secondElement.innerHTML = second;
        }

        // if seconds is greater than 59, increment minute and reset second
        if (second > 59) {
            minute++;
            minuteElement.innerHTML = "0" + minute;
            second = 0;
            secondElement.innerHTML = "00";
        }
        // if minutes is greater than 10, replace as it is
        if (minute > 9) {
            minuteElement.innerHTML = minute;
        }
        // -----------------------------------------------------------------------

        // -------------------------- for minutes ------------------------------
        // if minutes is greater than 10, save as it is
        if (minute > 9) {
            minuteElement.innerHTML = minute;
        }
        // if minutes is greater than 59, increment hour and reset minute
        if (minute > 59) {
            hour++;
            hourElement.innerHTML = "0" + hour;
            minute = 0;
            minuteElement.innerHTML = "00";
        }
        // if hours is greater than 9, replace as it is
        if (hour > 9) {
            hourElement.innerHTML = hour;
        }      
        // -----------------------------------------------------------------------

        // if hour exceeds 59, you may want to reset or stop the timer based on your needs
        if (hour > 59) {
            hour = 0;
            minute = 0;
            second = 0;
            centiSecond = 0;
            hourElement.innerHTML = "00";
            minuteElement.innerHTML = "00";
            secondElement.innerHTML = "00";
            centiSecondElement.innerHTML = "00";
            timeList.innerHTML = "";
        }

    }

}
