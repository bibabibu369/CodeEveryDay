function populate(selector, start, end) {
    for (var i = start; i <= end; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        selector.add(option);
    }
}

window.onload = function () {
    var daySelector = document.getElementById("day");
    var monthSelector = document.getElementById("month");
    var yearSelector = document.getElementById("year");

    populate(daySelector, 1, 31);
    populate(monthSelector, 1, 12);
    populate(yearSelector, 1900, new Date().getFullYear());
};