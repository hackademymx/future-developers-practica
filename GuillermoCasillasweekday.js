
Function weekday(i) {
switch(i) {
    
    Case 1:
    return 'Monday'
    break
    Case 2:
    return 'Tuesday'
    break
    Case 3:
    return 'Wednesday'
    break
    Case 4:
    return 'Thursday'
    break
    Case 5:
    return 'Friday'
    break
    Case 6:
    return 'Saturday'
    break
    Case 7:
    return 'Sunday'
    break
  default:
    return'null'
    break
}
}

let  day1 =weekday(7)
printDay(day1)
            
let  day2 =weekday(2)
printDay2(day2)
            
let  day3 =weekday(99)
printDay3('Today is ${day3})            
            
    
    
    
