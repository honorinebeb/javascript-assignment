function switcaseOfdays(days) {
    switch (days) {
        case 1:
            return "MONDAY";
            break;
        case 2:
            return "TUESDAY";
            break;
        case 3:
            return "WEDNESDAY";
            break;
        case 4:
            return "THURSDAY";
            break;
        case 5:
            return "FRIDAY";
            break;
        case 6:
            return "SATURDAY";
            break;
        case 7:
            return "SUNDAY";
            break;
            default:
                return "this is not the day of the week";
    }
    
}
console.log(switcaseOfdays(7));