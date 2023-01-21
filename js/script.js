const listTitle = document.getElementsByClassName('listTitle');

const arrayObjBox = document.getElementById('arrayObjBox');
const primaryList = document.getElementById('primaryList');
const secondList = document.querySelector('.secondList');
const thirdList = document.querySelector('.thirdList');


const buildIn = document.getElementById('buildIn');
const buildOut = document.getElementById('buildOut');
const ulItems = document.getElementById('ULItems');
const typeload = document.getElementById('typeload');
const arrayItems = document.getElementById('arrayItems');
const mpNav = document.getElementById('mpNav');
const clearAll = document.getElementById('clearAll');
const OLItems = document.getElementById('OLItems');
const divbuild = document.getElementById('divbuild');
const pTag = document.getElementById('pTag');
const brTag = document.getElementById('brTag');
const hrTag = document.getElementById('hrTag');
const spaNav = document.getElementById('spaNav');
const singleInput = document.getElementById('singleInput');
const ArraysObjtLoops = document.getElementById('ArraysObjtLoops');
const lazyLoops = document.getElementById('lazyLoops');
const nameIt = document.getElementById('nameIt');
const eleName = document.getElementById('eleName');
const arrayLang = document.getElementById('arrayLang');
const arrayElements = document.getElementById('arrayElements');
const langIs = document.getElementById('langIs');
const ojectItems = document.getElementById('ojectItems');
const copyOne = document.getElementById('copyOne');

const aObjCopy = document.getElementById('aObjCopy');
const priCopy = document.getElementById('priCopy');
const secCopy = document.getElementById('secCopy');
const thrdCopy = document.getElementById('thrdCopy');

let memberMeArray = [];
let sampleText = [];
const directions = [
    "Type stuff in the text area",
    "After each item, press enter. If you copy and past a big list make sure you can see it in the sample out area.",
    "Click on the LIST OPTIONS on the far left.",
    `Select and Copy and Paste your code as needed --or click on "Copy and Paste this code."`
];
let codeName = 'array;'
let arrayOrObject = "";



const validation = ()=>{

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
            // console.log('indexes' + indexes[n]);
            arrayMess.splice(indexes[n],1);
            n++;
        }}
    }
    const cleaned = noWhite(arrayMess);
    return cleaned
}

const noSpecialChars = ()=>{

}

const hideTwoAndThree = () =>{
    secondList.setAttribute("hidden","");
    secondList.innerText = "";
    secondList.innerHTML= `<span id="arrayLang" hidden></span><span id="nameIt" hidden></span><span id="arrayElements" hidden></span>`;
    secCopy.setAttribute("hidden","");
    thirdList.setAttribute("hidden","");
    thirdList.innerText = "";
    thrdCopy.setAttribute('hidden','');
    singleInput.setAttribute("hidden","");
    ArraysObjtLoops.setAttribute("hidden","");

}

const hideThree = ()=>{
    thirdList.setAttribute("hidden","");
    thirdList.innerText = "";
    thrdCopy.setAttribute('hidden', '')
    eleName.setAttribute("hidden","");
    ArraysObjtLoops.setAttribute("hidden","");
}

const hideOneAndThree = () =>{                               //for arrays and objects
    primaryList.setAttribute("hidden","");
    primaryList.innerText = "";
    priCopy.setAttribute('hidden','');
    thirdList.setAttribute("hidden","");
    thirdList.innerText = "";
    thrdCopy.setAttribute('hidden','');
}

const hideTopAndBottom = () =>{
    eleName.setAttribute("hidden","");
    ArraysObjtLoops.setAttribute("hidden","");
}

/*
****************************************************************
User Warnings:
****************************************************************
*/

const readDirections = (sampleArray, directions) => {       // Message for those not following the directions
    primaryList.removeAttribute('hidden');
    if(sampleArray.length === 0){
        primaryList.innerHTML = "<p>You didn't follow the directions:</p>";
        primaryList.innerHTML += '<ul id="numberMe">';
        directions.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML += `<i class="fa-solid fa-cog fa-spin"></i>\t`+ item;
            primaryList.appendChild(li);
        })
        primaryList.innerHTML += '</ul>'
        hideTwoAndThree();
        hideTopAndBottom();
        return 0;
    }
}



/*
****************************************************************
Copy and Paste functions in HTML
****************************************************************
*/

const priLstCopy = () =>{
    var range = document.createRange();
    range.selectNode(primaryList);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const secListCopy = () => {
    var range = document.createRange();
    range.selectNode(secondList);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const thrListCopy = () => {
    var range = document.createRange();
    range.selectNode(thirdList);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const arrayCopy = () => {}

/*
****************************************************************
Listeners:
****************************************************************
*/

clearAll.addEventListener('click', ()=>{
    location.reload();
    return false;
})

buildIn.addEventListener('keydown', (event)=>{
    let evt = JSON.stringify(event.target.value);
    if (event.key === 'Enter'){
        let breakBuild = [];
        let finalOut = [];
        breakBuild = evt.split('/\n?\r/');
        for (const ele in breakBuild){
            const spaceStrip = breakBuild[ele].trim().replace(/['"]+/g, '');
            console.log(spaceStrip);
            finalOut = spaceStrip.split('\\n');
            memberMeArray.push(breakBuild[ele]);
        }
        sampleText = noDuplicates(finalOut);
        buildOut.innerHTML='';
        sampleText.forEach(item => {
            let li = document.createElement('p');
            li.innerText = item;
            buildOut.appendChild(li);
        })
    }
});

pTag.addEventListener('click', (event)=>{
    // paragraph tag generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerHTML=" ";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `<p>${item}</p>`;
            primaryList.appendChild(paratag);
        })}
    hideTwoAndThree();
    })

brTag.addEventListener('click', (event)=>{
    // br tag generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerHTML=" ";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `<br />${item}`;
            primaryList.appendChild(paratag);
        })}
    hideTwoAndThree();
    hideTopAndBottom();
})

hrTag.addEventListener('click', (event)=>{
    // hr tag generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerHTML=" ";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `${item}<hr />`;
            primaryList.appendChild(paratag);
    })}
    hideTwoAndThree();
    hideTopAndBottom();
})

ulItems.addEventListener('click', (event)=>{
    // ul list generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        primaryList.innerText = "";
        langIs.innerText = 'HTML';
        primaryList.innerText='<ul>';
        sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText = `<li>${item}</li>`;
        primaryList.appendChild(paratag);
    })
    primaryList.append('</ul>');}
    hideTwoAndThree();
    hideTopAndBottom();
});

OLItems.addEventListener('click', (event)=>{
    // ol list generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerText='<ol>';
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `<li>${item}</li>`;
            primaryList.appendChild(paratag);
        })
        primaryList.append('</ol>');}
    hideTwoAndThree();
    hideTopAndBottom();
});

mpNav.addEventListener('click', (event)=>{
    //<ul> with multi-page navigation links to html pages
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        // output to list 1
        primaryList.removeAttribute('hidden');
        // priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerText = `<div id="nav-bar">`;
        primaryList.innerHTML += '<br/>';
        primaryList.innerText += `<ul class="nav-links}>`;
        sampleText.forEach(item =>{
            const homeTest = item.toLowerCase()
            let paratag = document.createElement(`p`);
            if (homeTest === 'home' || homeTest === 'main'){
                paratag.innerText += `<li><a href="index.html" class="nav-link" id="nav-${item}" >${item}</a></li>`;
            } else {
                paratag.innerText += `<li><a href="${item}.html" class="nav-link" id="nav-${item}" >${item}</a></li>`;
            }
            primaryList.appendChild(paratag);
        })
        primaryList.append('</ul>\n');
        primaryList.innerHTML += '<br/>';
        primaryList.innerText += '</div>';
        // unhide list 2
        secondList.removeAttribute('hidden');
        // secCopy.removeAttribute('hidden');
        secondList.innerHTML = '<span class="alert"/> feature to download pre-made templates coming soon!<span/>';
        secondList.innerHTML += '<br/>';
        secondList.innerText += `type "home" or "main" for index.html`;
        secondList.innerHTML += '<hr/>';
        sampleText.forEach(item =>{
            const homeTest = item.toLowerCase()
            let paratag = document.createElement(`p`);
            if (homeTest === 'home' || homeTest === 'main'){
                paratag.innerText += `index.html`;
                } else {
                paratag.innerText += `${item}.html`;
                }
                secondList.appendChild(paratag);
            })
            // hideThree();
            hideTopAndBottom();
        }}
    );

spaNav.addEventListener('click', (event)=>{
    //<ul> with multi-page navigation links for SPAs
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerText = `<div ="nav-bar">`;
        primaryList.innerHTML += '<br/>';
        primaryList.innerText += `<ul class="nav-links}>`;
        sampleText.forEach(item =>{
            const homeTest = item.toLowerCase()
            let paratag = document.createElement(`p`);
            if (homeTest === 'home' || homeTest === 'main'){
                paratag.innerText += `<li><a href="#home">home</a></li>`;
            } else {
                paratag.innerText += `<li><a href="#${item}">${item}</a></li>`;
            }
        primaryList.appendChild(paratag);
        })
        primaryList.append('</ul>\n');
        primaryList.innerHTML += '<br/>';
        primaryList.innerText += '</div>';
        secondList.removeAttribute('hidden');
        secCopy.removeAttribute('hidden');
        sampleText.forEach(item =>{
            const homeTest = item.toLowerCase()
            let paratag = document.createElement(`p`);
            if (homeTest === 'home' || homeTest === 'main'){
                paratag.innerText += `<a id="home"></a>`;
            } else {
                paratag.innerText += `<a id="${item}"></a>`;
            }
            secondList.appendChild(paratag);
        })
    hideThree();
    hideTopAndBottom();}
});

divbuild.addEventListener('click', (event)=>{
    // Builds div class="" with CSS classes/ids, and Javascript variables = document.getElementById(...)
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML, CSS, Javascript';
        primaryList.innerText = `<div class="container">`;
        primaryList.innerHTML += `<br/>`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `<div class="${item}" id="${item}"> </div>`;
            primaryList.appendChild(paratag);
        })
        primaryList.innerHTML += `<br/>`;
        primaryList.innerText += `</div>`;
        secondList.removeAttribute('hidden');
        secCopy.removeAttribute('hidden');
        secondList.innerHTML = `/* CSS Classes */<br/>\n\n`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `.${item}{`;
            paratag.innerHTML += `\n\n`;
            paratag.innerText += `}`;
            secondList.appendChild(paratag);
        })
        secondList.innerHTML += `<br/>`;
        secondList.innerHTML += `\t\n/* CSS ids */\n`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `#${item}{`;
            paratag.innerHTML += `\n\n`;
            paratag.innerText += `}`;
            secondList.appendChild(paratag);
        })
        secondList.innerHTML += `\n<span class="alert">/* scroll down for elements by #id:hover*/<br/>\n\n`;
        secondList.innerHTML += `\n/* CSS id:hover */\n`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `#${item}:hover{`;
            paratag.innerHTML += `\t\nfilter: brightness(200%);`;
            paratag.innerHTML += `\t\ntransition: 0.5s;\n`;
            paratag.innerText += `}`;
            secondList.appendChild(paratag);
        })
        thirdList.removeAttribute('hidden');
        thrdCopy.removeAttribute('hidden');
        thirdList.innerHTML = `<p>/* const variable = document.getElementById('htmlId'); */<p/>\n\n`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `const ${item} = document.getElementById('${item}');`;
            thirdList.appendChild(paratag);
        })
        thirdList.innerHTML += `\n\n<p>/* const variable = document.getElementsByClassName('htmlClass'); */<p/>\n\n`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `const ${item} = document.getElementById('${item}');`;
            thirdList.appendChild(paratag);
        })}
    hideTopAndBottom();
})

/* ********************************* Javascript arrays ********************************/

arrayItems.addEventListener('click', (event)=>{
    //writes an array and works with addEventListener to fill in array code
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        arrayOrObject = 'array';
        secondList.removeAttribute('hidden');

        singleInput.removeAttribute('hidden');

        ArraysObjtLoops.removeAttribute('hidden');
        nameIt.removeAttribute('hidden');
        eleName.removeAttribute('hidden');

        primaryList.removeAttribute('hidden');

        thirdList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        secCopy.removeAttribute('hidden');
        thrdCopy.removeAttribute('hidden');


        primaryList.textContent = '';
        thirdList.textContent = '';
        langIs.innerText = 'Javascript';

        arrayLang.innerText = 'const ';
        nameIt.innerText = 'array';
        arrayElements.textContent = ' = [\n';
        sampleText.forEach(item =>{
            arrayElements.textContent += `\`${item.replace('"', '')}\`, `;
            console.log(item);
        })
        arrayElements.append('];');

        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = "const " + item + " = ``;";
            primaryList.appendChild(paratag);
        })

        sampleText.forEach(item =>{
            let prtag = document.createElement('p');
            prtag.innerText = "let " + item + " = ``;";
            thirdList.appendChild(prtag);
        })
}}
);

/* ********************************* Javascript objects ********************************/

// ojectItems.addEventListener('click', (event)=>{
//                                     //writes an object and works with eleName.addEventListener to fill in object code
//     arrayOrObject = 'object';
//     singleInput.removeAttribute('hidden');
//     ArraysObjtLoops.removeAttribute('hidden');
//     eleName.removeAttribute('hidden');
//     secondList.removeAttribute('hidden');
//     langIs.innerText = 'Javascript';
//     arrayLang.textContent = ''
//     nameIt.textContent = 'object';
//     arrayElements.textContent = ' = {\n';
//     sampleText.forEach(item =>{
//     arrayElements.textContent += `'${item.replace('"', '')}': , `;
//     })
//     arrayElements.append('};');
//     hideOneAndThree();
// });

eleName.addEventListener('keyup', (event)=>{

    if(arrayOrObject === 'array'){
        codeName = 'array';
        codeName = event.target.value;
        lazyLoops.innerHTML =`${codeName}`;
        lazyLoops.innerHTML = `<pre>for (const element in ${codeName}){</pre>\n`;
        lazyLoops.innerHTML += `\t<pre>console.log(${codeName}[element]);</pre>\n`;
        lazyLoops.innerHTML += `\t<pre>};</pre><br/>\n`;
        lazyLoops.innerHTML +=`<br/>`;
        lazyLoops.innerHTML +=`<pre>let n = 0;</pre>\n`;
        lazyLoops.innerHTML += `<pre>while (n < ${codeName}.length){</pre>\n`;
        lazyLoops.innerHTML += `\t<pre>console.log(${codeName}[n]);</pre>\n`;
        lazyLoops.innerHTML +=`\t<pre>n++;</pre>\n`;
        lazyLoops.innerHTML += `\t<pre>};</pre><br/>\n`;
        nameIt.textContent = codeName;
    } else if (arrayOrObject === 'object'){
        codeName = 'object';
        codeName = event.target.value;
        console.log(codeName);
        lazyLoops.innerHTML =`${codeName}`;
        lazyLoops.innerHTML = `for (const element of ${codeName}){\n`;
        lazyLoops.innerHTML += `\t<pre>console.log(${codeName}[element]);</pre>\n`;
        lazyLoops.innerHTML += `\t};<br/>\n`;
        arrayLang.textContent = "";
        nameIt.textContent = codeName;
    }
})