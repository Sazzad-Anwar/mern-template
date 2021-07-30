const bcrypt = require('bcryptjs');

let word = 'salith1234';

const makeHash = async () => {
    const hashpass = async () => {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(word, salt);
        return hashedPass;
    }
    console.log(await hashpass());
}

console.log(makeHash());
