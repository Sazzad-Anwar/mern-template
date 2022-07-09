const { readFileSync, writeFileSync } = require("fs");
const { join } = require('path')

let dir = join(__dirname, './server/config/variables.json')

try {
    let data = readFileSync(dir, 'utf-8')

    let config = JSON.parse(data)

    if (config.errorEmail) {
        data = writeFileSync(dir, JSON.stringify({ ...config, errorEmail: false }), 'utf-8')
    }

    data = readFileSync(dir, 'utf-8')

    console.log(JSON.parse(data))
} catch (error) {
    console.log(error)
}

