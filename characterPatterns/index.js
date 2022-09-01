const input = require("fs").readFileSync("input.txt", "utf-8")

const dataRows = input.split("\n")
let data = ""

for(let numberRow = 0; numberRow < dataRows.length; numberRow++) {
    const values  = dataRows[numberRow].split(" ")
    if(values.length === 2) {
        for(let row = 0; row < parseInt(values[0]); row++) {
            for(let column = 0; column < parseInt(values[1]); column++) {
                if(row % 2 === 0 ) {
                    data += column % 2 === 0 ? "*" : "." 
                } else {
                    data += column % 2 === 0 ? "." : "*" 
                }
            }
            data += "\n"
        }
        data += "\n"
    }
}

console.log(data)

