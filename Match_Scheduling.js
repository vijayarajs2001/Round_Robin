teams = ['  Chennai ', '   Mumbai ', '  Kolkata ', ' Bangalore', '   Delhi  '/*, ' Rajasthan', ' Hydrabad ', '   Pune   ', '   Cochin  ', 'Jharkhand ', 'Ahamadabad', 'Gujarat', '  Punjab  '*/]
startDate = [new Date]
function matchsFixingFunction() {                               //FUNCTON WILL FIX THE MATCH BETWEEN EACH TEAMS BY ROUND ROBIN METHOD.
    arr = []
    count = 0
    for (i = 0; i < teams.length; i++) {
        for (j = i + 1; j < teams.length; j++) {
            if (!(teams[i] == teams[j])) {
                count++
                arr.push([teams[i], 'vs', teams[j]])
            }
        }
    }
    return arr
}
function shufflingFunction(array) {                             //FUNCTION WILL RANDOMLY SHUFFLE THE MATCH ARRAY.
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        if (!(arr[i] == arr[j])) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    } return array
}
function conditionalShufflingFunction(arr) {                    //FUNCTION WILL CHECK AND AVOID THE REPETETIVENESS OF THE MATCHES OF SAME TEAMS ON THE SAME DAY.
    arr = shufflingFunction(arr)
    scheduleArr = []
    scheduleArr.push(arr[0])
    // console.log(scheduleArr)
    for (let i = 0; i < Math.round(arr.length / 2); i++) {
        for (j of arr) {
            // console.log(i)
            if (!(scheduleArr.includes(j))) {
                if ((scheduleArr[scheduleArr.length - 1][0] != j[0]) && (scheduleArr[scheduleArr.length - 1][2] != j[0]) && (scheduleArr[scheduleArr.length - 1][0] != j[2]) && (scheduleArr[scheduleArr.length - 1][2] != j[2])) {
                    scheduleArr.push(j)
                }
            }
        }
    } return scheduleArr
}
matchsFixingFunction(teams)
let finalSchedule;
if (teams.length < 2) {
    console.log("MINIMUM TWO TEAMS ARE REQUIRED")
} else {
    if (teams.length <= 4) {
        arr1 = []
        for (i of arr) {
            arr1.push(i)
        }
        arr1 = arr1.reverse()
        // console.log(arr1)
        list = []
        if (arr.length % 2 == 0) {
            for (i = 0; i < (arr.length) / 2; i++) {
                for (j = i; j < (arr1.length) / 2; j++) {
                    // console.log(list)
                    if (!(list.includes(arr[i])) && !(list.includes(arr[j]))) {
                        list.push(arr[i])
                        list.push(arr1[j])
                    }
                }
            }
        }
        else {
            for (i = 0; i < ((arr.length) / 2 - 0.5); i++) {
                for (j = i; j < ((arr1.length) / 2 - 0.5); j++) {
                    if (!(list.includes(arr[i])) && !(list.includes(arr[j]))) {
                        list.push(arr[i])
                        list.push(arr1[j])
                    }
                }
            }
            for (i of arr) {
                if (!(list.includes(i))) {
                    list.splice(Math.round(list.length), 0, i)
                }
            }
        }
        finalSchedule = list
    }
    else {
        finalSchedule = conditionalShufflingFunction(arr)
    }
    console.log(finalSchedule)
    //---------------------------------------------------------DATE LOGIC------------------------------------------------------------- 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(startDate)
    var saturday = new Date()
    var sunday = new Date()
    // Finding the Date
    dateList = []
    for (let i = 0; i <= 6; i++) {
        if (d.getDay() + i == 6) {
            saturday.setDate(d.getDate() + i + 1)
            sunday.setDate(saturday.getDate() - 1)
        }
    }
    //----------------------------------------------------------DAY LOGIC-------------------------------------------------------------
    day = []
    var dt = new Date(saturday);
    var dt2 = new Date(sunday)
    for (e = 0; e <= finalSchedule.length / 4; e++) {
        dateList.push((new Date(dt2)).toString().substring(4, 15))
        dateList.push((new Date(dt)).toString().substring(4, 15))
        day.push(days[dt2.getDay(sunday)])
        day.push(days[dt.getDay(saturday)])
        dt.setDate(dt.getDate() + 7)
        dt2.setDate(dt2.getDate() + 7)
    }
    if (finalSchedule.length % 2 != 0) {
        finalSchedule.push("dope")
    }
    //--------------------------------------------------------MATCH SCHEDULING--------------------------------------------------------
    count = 0
    matchList = []
    for (i = 0; i < finalSchedule.length; i = i + 2) {
        d = i
        slot1Timing = "3:30 PM IST  "
        slot1Venue = "Chepauk"
        slot2Timing = "7:30 PM IST  "
        slot2Venue = "Eden Gardens"
        console.log("-----------------------------------------------------------------------------------")
        console.log("|", "DAY :", day[count], ("                                              "), "DATE :", dateList[count], "")
        console.log("|", "                    ", finalSchedule[i], "                     ", " ")
        console.log("|", "VENUE :", slot1Venue, ("                                          "), "TIMING :", slot1Timing, "")
        console.log("-----------------------------------------------------------------------------------")
        if (finalSchedule[d + 1] != "dope") {
            console.log("|", "DAY :", day[count], ("                                              "), "DATE :", dateList[count], "")
            console.log("|", "                    ", finalSchedule[d + 1], "                     ", " ")
            console.log("|", "VENUE :", slot2Venue, ("                                     "), "TIMING :", slot2Timing, "")
        }
        console.log("-----------------------------------------------------------------------------------")
        console.log()
        slotOne = {}
        slotTwo = {}
        slotOne["Match_No       "] = i + 1
        slotOne["Match          "] = finalSchedule[i]
        slotOne["Date           "] = dateList[count]
        slotOne["Day            "] = day[count]
        slotOne["Venue          "] = "Wankhede"
        slotOne["Time           "] = "3:30PM IST"
        if (finalSchedule[d + 1] != "None") {
            slotTwo["Match_No       "] = i + 2
            slotTwo["Match          "] = finalSchedule[d + 1]
            slotTwo["Date           "] = dateList[count]
            slotTwo["Day            "] = day[count]
            slotTwo["Venue          "] = "Chepauk"
            slotTwo["Time           "] = "7:30PM IST"
        }
        matchList.push(slotOne)
        matchList.push(slotTwo)
        count++
    }
    console.log(matchList)
    //------------------------------------------------------------MATCH ID--------------------------------------------------------------
    count = 1
    schedule = {}
    for (i in matchList) {
        schedule["M" + count] = matchList[i]
        count++
    }
    // console.log(matchList)
    console.log(schedule.M1)
}