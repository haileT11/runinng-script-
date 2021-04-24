const joke = 'knock knock. whos there? banana. banana who?';

// -------------------------
// while loop 
// -------------------------

let k = 1;

while (k <= 5) {
    console.log("start of loop, k: " + k)
    console.log("joke: " + joke + " count: " + k);
    k++;
    console.log("end of loop, k: " + k)
    if (k === 5) break;
}

console.log("\n\norange. orange who? orange you glad I didn't say banana.")

console.log("\n\n\n\n end of while loop. \n\n\n\n") 

// -------------------------
// for loop 
// -------------------------

console.log("\n\n\n\n start for loop. \n\n\n\n") 

for (let i = 1; i <= 5; i++) {
    console.log(i)
    console.log(joke + " count: " + i)
    if (i === 4) break;
}

console.log("\n\norange. orange who? orange you glad I didn't say banana.")