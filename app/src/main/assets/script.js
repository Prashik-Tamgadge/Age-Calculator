function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var nowDate = new Date();

    var age = nowDate.getFullYear() - dobDate.getFullYear();
    var monthDiff = nowDate.getMonth() - dobDate.getMonth();
    var dayDiff = nowDate.getDate() - dobDate.getDate();
    var hourDiff = nowDate.getHours() - dobDate.getHours();
    var minuteDiff = nowDate.getMinutes() - dobDate.getMinutes();
    var secondDiff = nowDate.getSeconds() - dobDate.getSeconds();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    var nextBirthday = new Date(nowDate.getFullYear(), dobDate.getMonth(), dobDate.getDate());

    if (nextBirthday < nowDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    var timeDiff = nextBirthday.getTime() - nowDate.getTime();
    var daysToNextBirthday = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    var ageText = "Your age is: " + age + " years, " + monthDiff + " months, " + dayDiff + " days, " + hourDiff + " hours, " + minuteDiff + " minutes, " + secondDiff + " seconds.";
    var nextBirthdayText = "Days to your next birthday: " + daysToNextBirthday;

    document.getElementById("result").innerHTML = ageText;
    document.getElementById("next-birthday").innerHTML = nextBirthdayText;
}
