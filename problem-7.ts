enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }

    return "Weekday"
}

// getDayType(Day.Monday);   // Output: "Weekday"
// getDayType(Day.Sunday);   // Output: "Weekend"

console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Wednesday));