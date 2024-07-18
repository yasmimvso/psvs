function showDay(day) {
    var days = document.getElementsByClassName('day-content');
    for (var i = 0; i < days.length; i++) {
        days[i].style.display = 'none';
    }
    document.getElementById(day).style.display = 'block';
}
