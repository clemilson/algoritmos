const receiver = require("prompt-sync")()

async function calculate(values) {
    try {
        let data = "";
        const arrayValues = values.replace(/ +/g, ' ').split(" ")

        if(arrayValues.length < 2 | arrayValues.length > 2) {
            throw "É necessário dois valores separados por espaço EX(2 4)"
        }

        arrayValues.map((value) => {
            if(value < 1 || value > 99) {
                throw "Só é permitido valores ente 1 e 99"
            }
        })

        for(let column = 0; column < parseInt(arrayValues[0]); column++) {
            for(let line = 0; line < parseInt(arrayValues[1]); line++) {
                if(column % 2 === 0 ) {
                    data += line % 2 === 0 ? "*" : "." 
                } else {
                    data += line % 2 === 0 ? "." : "*" 
                }
            }
            data += "\n"
        }
        return data
    } catch (error) {
        return error
    }
}


async function init() {
    const values = receiver("Digite um ou dois valores separados por espaço EX(5 6) ")    
    const result = await calculate(values)
    console.log(`${result}`)
}

init()