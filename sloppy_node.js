// const arrayMess = ["dp", "Ted", "Bonnie", "Alexis Texas", "Chasey--", "Alexis Texas",  "options", "August", "Chasey", "August", "Asia", "", "", "Ed", "Ted", "Bonnie", "tots", "Chasey",  "", "Ed", "Ted", "Bonnie--", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd",  "Asia", "listDisplay", "listBox,", "options", "textInIt", "instructions", "sample", "listDisplay", "listBox", "height: 100%;", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "tots", "Ted", "Bonnie", "Chasey", " August", "August", "Asia", "options", "textInIt--", "instructions", "sample", "", "", "Ted", "Bonnie", "Chasey", "August", "Asia", "", "", "Ed", "Ted",  "extInIt--", "instructions", "sample", "Ted", "Bonnie", "Chasey", "August", "Asia", "", "", "Ed", "Ted", "Bonnie", "Chasey", "Chasey", "August","Bonnie",  "tots" ];




const array = ["Ed","Ted", "Bonnie","Chasey","August","Asia", ];
// let extraMess = [...arrayMess];

// let grid = [];
// let justOne = [];
// let lessMess = [];
// let findex = "";
// const primaryList = document.getElementById('primaryList');



// const arrayToOutPut = (whereItGoes, outterCodeStart, theArray, innerWrapper, codeStart) =>{
//     // HTML Build
//     const codeEnd = `</${outterCodeStart}/>`;
//     const outterCodeEnd = codeEnd.replace('<','</'g)
//     whereItGoes.innerText= `<${outterCodeStart}>`;          //  whereItGoes = which list out //outterCodeStart wrapping ie <div>
//     theArray.forEach(item =>{                               //  The Array being output
//     let paratag = document.createElement(`${innerWrapper}`);//  innertag, best left to 'p' ... for now
//     paratag.innerText = `${codeStart, item, codeEnd}`  ;    //  actual code to copy
//     primaryList.appendChild(paratag);               
// }) 
// primaryList.append(`${outterCodeEnd}`);                        
// }

const htmlCloser = (codeSearch) =>{
    // searches for html tags in code and returns end tag
    const checkitem = ['div', 'ul', 'a', 'p', 'input', 'li', 'img' ];
    for (const elts in checkitem){
        let searchThis = new RegExp(`^${checkitem[elts]}`,'g');
        let whatItBe = codeSearch.search(searchThis);
        // console.log('[whatItBe] '+ whatItBe + " insanity  " + checkitem[elts]);
        if (whatItBe !== -1){
            console.log(checkitem[elts]);
            return `</${checkitem[elts]}>`
        }
    }
}


htmlCheck('div class="nav-link"');