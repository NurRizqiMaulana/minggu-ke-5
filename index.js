let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < n; j++) {
        string += "A"
    }
    string += "\n";
}
console.log(string);