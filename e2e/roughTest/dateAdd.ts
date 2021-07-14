// const dt = new Date("2021-11-28")
// dt.setDate(dt.getDate() + 4)
// console.log(`${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()}`)

// // console.log(new Date())


function getDateOfRange(range: string) {
    const currentEndDate: Date = new Date();
    if (range.includes("-")) {
        currentEndDate.setDate(currentEndDate.getDate() - parseInt(range.replace("-", ""), 10));
    } else {
        currentEndDate.setDate(currentEndDate.getDate() + parseInt(range.replace("+", ""), 10));
    }
    return currentEndDate;
}

console.log(getDateOfRange("0"))