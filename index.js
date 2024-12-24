function countword(str){
        
    let result = [];
    let seen = new Set();

    for (const char of str.replace(/\s/g, '')) {

        if(!seen.has(char)){
            let count = str.split(char).length - 1;
            result.push({letter: char, count: count});
            seen.add(char);
        }
    }
    return result;
}

let str1 = countword("kinjal patil");

console.log(str1);