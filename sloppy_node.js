const arrayMess = ["dp", "Ted", "Bonnie", "Alexis Texas", "Chasey--", "Alexis Texas",  "options", "August", "Chasey", "August", "Asia", "", "", "Ed", "Ted", "Bonnie", "tots", "Chasey",  "", "Ed", "Ted", "Bonnie--", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd",  "Asia", "listDisplay", "listBox,", "options", "textInIt", "instructions", "sample", "listDisplay", "listBox", "height: 100%;", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "tots", "Ted", "Bonnie", "Chasey", " August", "August", "Asia", "options", "textInIt--", "instructions", "sample", "", "", "Ted", "Bonnie", "Chasey", "August", "Asia", "", "", "Ed", "Ted",  "extInIt--", "instructions", "sample", "Ted", "Bonnie", "Chasey", "August", "Asia", "", "", "Ed", "Ted", "Bonnie", "Chasey", "Chasey", "August","Bonnie",  "tots" ];




// const array = ["Ed","Ted", "Bonnie","Chasey","August","Asia", ];
// let extraMess = [...arrayMess];

// let grid = [];
// let justOne = [];
// let lessMess = [];
// let findex = "";


// let i = 1;


const noDuplicates =(arrayMess)=>{

    //this verifies there is no duplicate data while keeping  data in order

    let extraMess = [...arrayMess];
    for (const element in extraMess.reverse()){
        const indexes = arrayMess.reduce((accumulator, current, index) => {
        if (current === extraMess[element]) {
            accumulator.push(index);
            }
        return accumulator;
    }, []);

    if(indexes.length > 1){
        let n = 1;
        while(n < indexes.length){
            // console.log("indexes" + indexes[n]);
            arrayMess.splice(indexes[n],1);
            n++;
        }
    }
    }
    return arrayMess
}

const noWhite = (imDirty) => {
    //removes white space and empty values in arrays
    const cleanThis = imDirty.filter(n => n);
    console.log(cleanThis);
    imClean = [];
    for (const element in cleanThis){
        const soap = cleanThis[element].trim();
            imClean.push(soap);
    }
return imClean
}

const cleanArray = noWhite(arrayMess);

// console.log(cleanArray);


let workDupes = noDuplicates(cleanArray);

console.log(workDupes);

// for (const ets in workDupes){
//     console.log(workDupes[ets]);
// }
