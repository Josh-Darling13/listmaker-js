// const arrayMess = ["dp", "Ted", "Bonnie", "Alexis Texas", "Chasey--", "Alexis Texas",  "options", "August", "Chasey", "August", "Asia", "", "", "Ed", "Ted", "Bonnie", "tots", "Chasey",  "", "Ed", "Ted", "Bonnie--", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd",  "Asia", "listDisplay", "listBox,", "options", "textInIt", "instructions", "sample", "listDisplay", "listBox", "height: 100%;", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "Ted", "Bonnie", "Chasey", "August", "AsiaEd", "tots", "Ted", "Bonnie", "Chasey", " August", "August", "Asia", "options", "textInIt--", "instructions", "sample", "", "", "Ted", "Bonnie", "Chasey", "August", "Asia", "", "", "Ed", "Ted",  "extInIt--", "instructions", "sample", "Ted", "Bonnie", "Chasey", "August", "Asia", "", "", "Ed", "Ted", "Bonnie", "Chasey", "Chasey", "August","Bonnie",  "tots" ];

{/* <hr />
<p id="chexBox" name="chexBox">
    &lt;input type="checkbox"&gt; id matches label, JS variables and event listeners, matching <br />CSS id</label>
</p> */}


const array = ["Ed","Ted", "Bonnie","Chasey","August","Asia", ];
// let extraMess = [...arrayMess];

// let grid = [];
// let justOne = [];
// let lessMess = [];
// let findex = "";
// const primaryList = document.getElementById('primaryList');


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
    }}

const arrayToOutPut = (whereItGoes, outterCodeStart, theArray, innerWrapper, codeStart) =>{
    // HTML Build
    // arrayToOutPut(whereItGoes, outterCodeStart, theArray, innerWrapper, codeStart);
    const codeEnd = htmlCloser(outterCodeStart);
    const outterCodeEnd = htmlCloser(codeStart);
    whereItGoes.innerText= `<${outterCodeStart}>`;          //  whereItGoes = which list out //outterCodeStart wrapping ie <div>
    theArray.forEach(item =>{                               //  The Array being output
        let paratag = document.createElement(`${innerWrapper}`);//  innertag, best left to 'p' ... for now
        paratag.innerText = `${codeStart, item, codeEnd}`  ;    //  actual code to copy
        primaryList.appendChild(paratag);
    })
    primaryList.append(`${outterCodeEnd}`);
}


// htmlCheck('div class="nav-link"');

const directions = [
    "Type stuff in the text area",
    "After each item, press enter. If you copy and past a big list make sure you can see it in the sample out area.",
    "Click on the LIST OPTIONS on the far left.",
    `Select and Copy and Paste your code as needed --or click on "Copy and Paste this code."`
];


const empray = [];

const readDirections = (sampleArray) => {
    // console.log(sampleArray.length)
    if(sampleArray.length === 0){
        console.log('here I am')

        // primaryList.innerText = "<p>You didn't follow the directions:</p>"
        // primaryList.innerText += '<ol>'
        directions.forEach(item => {

            console.log(item)

            // let li = document.createElement('li');
            // li.innerText += item;
            // primaryList.appendChild(li);
        })
        // primaryList.innerText += '</ol>'


    }
}

readDirections(empray);

preWhite(imDirty){

    let extraCheck = this.imDirty.split(' ');
    let imClean = [];
    for (let element in extraCheck){
        console.log("extraCheck[element]"+ extraCheck[element]);
        let checkME = extraCheck[element]
        console.log("checkME[0]"+ checkME[0]);
        if(checkME[0] === " " || checkME[0] === null || checkME[0] === undefined){
            console.log("YT Space @ start");
            return false
        }
    }
}

postWhite(imDirty){

    let extraCheck = imDirty.split(' ');
    let imClean = [];
    for (let element in extraCheck){
        console.log("extraCheck[element]"+ extraCheck[element]);
        let checkME = extraCheck[element]
        console.log("checkME[-1]"+ checkME[0]);
        if(checkME[-1] === " " || checkME[0] === null || checkME[0] === undefined){
            console.log("YT Space @ end");
            return false
        }
    }
}