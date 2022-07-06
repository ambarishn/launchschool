function getDayOfWeek(date) {
    let daysOfWeek = [
        'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday'
];

return daysOfWeek[date.getDay()];
}

let birthday = new Date('October 14, 1993');
console.log(getDayOfWeek(birthday));
console.log(birthday.toLocaleDateString());
