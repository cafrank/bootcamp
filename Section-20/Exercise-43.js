// DEFINE YOUR FUNCTION BELOW:
function returnDay(dayNum) {
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (dayNum <1 || dayNum>7) {
        return null;
    } else {
        return day[dayNum - 1];
    }
}
