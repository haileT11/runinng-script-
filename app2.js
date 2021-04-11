//if (1 === 1){
//  console.log("It's True!");
//}
//console.log("3 + 4")

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// 0 - WTF 

let rating = 1
if (rating === 3){
    console.log('You are a superstar');
}
else if (rating === 2){
     console.log('meets expectations');
        
    }
else if (rating === 1) {
    console.log('meets expectations'); 
}
let age = 30
 if (age < 6 || age >= 65){
     console.log('you get in for free');
 } 
 else {
     console.log('you must pay!');
 }
 let day = 7
    switch (day) {
        case 1:
            console.log ('Monday');
        case 2:
            console.log ('Tuesday');
        case 3:
            console.log ('Wednesday');
        case 4:
            console.log ('Thursday');
        case 5:
            console.log ('Friday');
        case 6:
            console.log ('Saturday');
        case 7:
            console.log ('Sunday');
    }
 let status = 'online';
 
// 'online' === 'offline' 
// expression ? true : false 
// false ? true : false
 let color = 'online' === 'offline' ? 'red' : 'green';
 console.log(status)
 console.log(color)
