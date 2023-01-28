const listTitle = document.getElementsByClassName('listTitle');
const helloTone = document.getElementById('helloTone');
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
const loopsCopy = document.getElementById('loopsCopy');
const priCopy = document.getElementById('priCopy');
const secCopy = document.getElementById('secCopy');
const thrdCopy = document.getElementById('thrdCopy');
const sizeWarning = document.getElementById('sizeWarning');
const tooBigWarn = document.getElementById('tooBigWarn');
const constEvent = document.getElementById('constEvent');
const perlVars = document.getElementById('perlVars');
const reHook = document.getElementById('reHook');
const classMethJS = document.getElementById('classMethJS');

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

class TextCleaning {
    /**
    Validation
    You're good enough, I hope that feels validating.
    Validation is pretty no white space before or after and no duplicate values.
    */

    noWhite = (imDirty) => {
        //removes white space and empty values in arrays
        const cleanThis = imDirty.filter(n => n);
        let imClean = [];
        for (const element in cleanThis){
            const soap = cleanThis[element].trim();
            imClean.push(soap);
        }
        return imClean
    }

    noDuplicates =(arrayMess)=>{
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
        const cleaned = arrayMess;
        return cleaned
    }
}

/*
****************************************************************
Hide all unused divs:
****************************************************************
*/

const hideAll = () => {
    arrayObjBox.setAttribute("hidden","");
    loopsCopy.setAttribute("hidden","");
    aObjCopy.setAttribute("hidden","");
    primaryList.setAttribute("hidden","");
    primaryList.innerText = "";
    priCopy.setAttribute('hidden','');
    secondList.setAttribute("hidden","");
    secondList.innerText = "";
    secCopy.setAttribute("hidden","");
    thirdList.setAttribute("hidden","");
    thirdList.innerText = "";
    thrdCopy.setAttribute('hidden','');
    eleName.setAttribute("hidden","");
    ArraysObjtLoops.setAttribute("hidden","");
    singleInput.setAttribute('hidden','');
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
        hideAll();
        return 0;
    }
}

/*
****************************************************************
 *  size warning nothing smaller than 1000px
****************************************************************
*/

let screenSize = document.body.clientWidth;

if (screenSize < 1000){
    sizeWarning.removeAttribute('hidden');
}

tooBigWarn.addEventListener('click', ()=>{
    //keep working with it when it looks like garbage
    sizeWarning.setAttribute("hidden","");
})

/*
****************************************************************
Copy and Paste functions in HTML
****************************************************************
*/

const priLstCopy = () =>{
    const range = document.createRange();
    range.selectNode(primaryList);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const secListCopy = () => {
    const range = document.createRange();
    range.selectNode(secondList);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const thrListCopy = () => {
    const range = document.createRange();
    range.selectNode(thirdList);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const arrObjCopy = () => {
    const range = document.createRange();
    range.selectNode(arrayObjBox);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

const loopCopy = () =>{
    const range = document.createRange();
    range.selectNode(ArraysObjtLoops);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

/*
**************************************************************
Audio:
**************************************************************
*/

setTimeout( function(){
    helloTone.muted = false;
    helloTone.play();
},2000
)

/*
****************************************************************
Listeners:
****************************************************************
*/

clearAll.addEventListener('click', ()=>{
    location.reload();
    return false;
})

/**********************************************************************************************
 * Text input handler:

***********************************************************************************************
***********************************************************************************************
 */

buildIn.addEventListener('keydown', (event)=>{
    /**
     * Runs code if "enter key press detected"
     */

    if (event.key === 'Enter'){
        let splitLtrs = event.target.value;
        let breakBuild = [];
        let strValidation = new TextCleaning;
        breakBuild = splitLtrs.split(/[\r\n]+/).filter(Boolean);
        let cleanThis = strValidation.noWhite(breakBuild);
        sampleText = strValidation.noDuplicates(cleanThis);
        buildOut.innerHTML='';
        sampleText.forEach(item => {
            let li = document.createElement('p');
            li.innerText = item;
            buildOut.appendChild(li);
        })
    }
    }
);

pTag.addEventListener('click', (event)=>{
    // paragraph tag generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerHTML=" ";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `<p>${item}</p>`;
            primaryList.appendChild(paratag);
        })}
    })

brTag.addEventListener('click', (event)=>{
    // br tag generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerHTML=" ";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `<br />${item}`;
            primaryList.appendChild(paratag);
        })}
})

hrTag.addEventListener('click', (event)=>{
    // hr tag generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        langIs.innerText = 'HTML';
        primaryList.innerHTML=" ";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `${item}<hr />`;
            primaryList.appendChild(paratag);
    })}
})

ulItems.addEventListener('click', (event)=>{
    // ul list generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
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
});

OLItems.addEventListener('click', (event)=>{
    // ol list generator
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
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
});

mpNav.addEventListener('click', (event)=>{
    //<ul> with multi-page navigation links to html pages
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
        // output to list 1
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
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
        secCopy.removeAttribute('hidden');
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
        }}
    );

spaNav.addEventListener('click', (event)=>{
    //<ul> with multi-page navigation links for SPAs
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
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
}
});

classMethJS.addEventListener('click', (event)=>{

    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){

        hideAll();

        arrayOrObject = 'class';
        aObjCopy.removeAttribute('hidden');
        singleInput.removeAttribute('hidden');
        eleName.removeAttribute('hidden');
        arrayObjBox.removeAttribute('hidden');
        langIs.innerText = 'Javascript';
        arrayLang.innerText = `class `;
        nameIt.innerText = 'className';
        arrayElements.textContent += ' {';
        arrayElements.innerHTML += `<br/>`;
        arrayElements.innerHTML += `constructor() {}`;
        arrayElements.innerHTML += `<br/>`;
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText = `${item} = () => {\n`
            paratag.innerHTML += `\n<p>return</p>\n`;
            paratag.innerText += `\n}`;
            arrayElements.appendChild(paratag);
        })
        arrayElements.append('}');
}});

divbuild.addEventListener('click', (event)=>{
    // Builds div class="" with CSS classes/ids, and Javascript variables = document.getElementById(...)
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
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
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `const ${item} = document.getElementById('${item}');`;
            thirdList.appendChild(paratag);
        })
}});

constEvent.addEventListener('click', (event)=>{
    // write getElementById with matching addEventListener
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){

        hideAll();

        langIs.innerText = 'Javascript';

        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `const ${item} = document.getElementById('${item}');`;
            primaryList.appendChild(paratag);
        })

        secondList.removeAttribute('hidden');
        secCopy.removeAttribute('hidden');

        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `${item}.addEventListener('click', (event)=>{`
            paratag.innerHTML += `\n<p></p>`;
            paratag.innerText += `\n});`;
            secondList.appendChild(paratag);
        })
    }});

/* *********************************
Javascript arrays
********************************/

arrayItems.addEventListener('click', (event)=>{
    //writes an array and works with addEventListener to fill in array code
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        arrayOrObject = 'array';

        hideAll();

        singleInput.removeAttribute('hidden');
        loopsCopy.removeAttribute('hidden');
        ArraysObjtLoops.removeAttribute('hidden');
        nameIt.removeAttribute('hidden');
        eleName.removeAttribute('hidden');
        primaryList.removeAttribute('hidden');
        arrayObjBox.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        aObjCopy.removeAttribute('hidden')
        thrdCopy.removeAttribute('hidden');
        thirdList.removeAttribute('hidden');
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

ojectItems.addEventListener('click', (event)=>{
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
    arrayOrObject = 'object';

    hideAll();

    singleInput.removeAttribute('hidden');
    loopsCopy.removeAttribute('hidden');
    ArraysObjtLoops.removeAttribute('hidden');
    nameIt.removeAttribute('hidden');
    eleName.removeAttribute('hidden');
    primaryList.removeAttribute('hidden');

    priCopy.removeAttribute('hidden');
    aObjCopy.removeAttribute('hidden');
    thrdCopy.removeAttribute('hidden');
    thirdList.removeAttribute('hidden');
    primaryList.textContent = '';
    thirdList.textContent = '';

    langIs.innerText = 'Javascript';
    arrayLang.innerText = 'const ';
    nameIt.textContent = 'object';
    arrayElements.textContent = ' = {\n';

    sampleText.forEach(item =>{
        arrayElements.textContent += `'${item.replace('"', '')}': , `;
        })
        arrayElements.append('};');

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
}});

/*
******************************************************
React
******************************************************
*/
reHook.addEventListener('click', (event)=>{
 //writes an array and works with addEventListener to fill in array code
    // write getElementById with matching addEventListener
    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        hideAll();
        langIs.innerText = 'Javascript/React';
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');

        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `const [${item}, set${item}] = useState();`;
            primaryList.appendChild(paratag);
        })
}});


/*
******************************************************
Perl
******************************************************
*/

perlVars.addEventListener('click', (event)=>{

    let runcode = readDirections(sampleText, directions);
    if (runcode !== 0){
        arrayOrObject = 'array';
        hideAll();
        langIs.innerText = 'Perl';
        primaryList.removeAttribute('hidden');
        priCopy.removeAttribute('hidden');
        primaryList.innerText = `#!/usr/bin/perl`;
        primaryList.innerHTML += "<p></p>";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `$${item} = ;`;
            primaryList.appendChild(paratag);
        })

        secondList.removeAttribute('hidden');
        secCopy.removeAttribute('hidden');

        secondList.innerText = `#!/usr/bin/perl`;
        secondList.innerHTML += "<p></p>";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `my $${item} = ;`;
            secondList.appendChild(paratag);
        })

        thirdList.removeAttribute('hidden');
        thrdCopy.removeAttribute('hidden');

        thirdList.innerText = `#!/usr/bin/perl`;
        thirdList.innerHTML += "<p></p>";
        sampleText.forEach(item =>{
            let paratag = document.createElement('p');
            paratag.innerText += `out $${item} = ;`;
            thirdList.appendChild(paratag);
        })
    }});

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
        lazyLoops.innerHTML =`${codeName}`;
        lazyLoops.innerHTML = `for (const element of ${codeName}){\n`;
        lazyLoops.innerHTML += `\t<pre>console.log(${codeName}[element]);</pre>\n`;
        lazyLoops.innerHTML += `\t};<br/>\n`;
        arrayLang.textContent = "";
        nameIt.textContent = codeName;
    } else if (arrayOrObject === 'class'){
        codeName = 'class';
        codeName = event.target.value;
        nameIt.textContent = codeName;
    }
})