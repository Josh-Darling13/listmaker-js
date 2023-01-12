const listTitle = document.getElementsByClassName('listTitle');
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


let memberMeArray = [];
let sampleText = [];

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
        }
    }
    }
    const cleaned = noWhite(arrayMess);
    return cleaned
}

const noSpecialChars = ()=>{

}

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

const hideTwoAndTree = () =>{
    secondList.setAttribute("hidden","");
    thirdList.setAttribute("hidden","");
    eleName.setAttribute("hidden","");
    ArraysObjtLoops.setAttribute("hidden","");
}

const hideThree = ()=>{
    thirdList.setAttribute("hidden","");
    eleName.setAttribute("hidden","");
    ArraysObjtLoops.setAttribute("hidden","");
}


const hideOneAndTree = () =>{
    primaryList.setAttribute("hidden","");
    thirdList.setAttribute("hidden","");
}

/*
****************************************************************
Listeners:
****************************************************************
*/

clearAll.addEventListener('click', ()=>{
    primaryList.innerText = 'refer to text area and instructions';
    secondList.setAttribute("hidden","");
    thirdList.setAttribute("hidden","");
    buildIn.reset();
    sampleText = [];
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
            memberMeArray.push(breakBuild[ele]/*.replace('"', '')*/);
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

ulItems.addEventListener('click', (event)=>{
                                                        // ul list generator
    primaryList.innerText='<ul>';                       // HTML tag start (wrapping tag)
    sampleText.forEach(item =>{                         // being looping out array value
        let paratag = document.createElement('p');      // inner tag (keep as p)
        paratag.innerText = `<li>${item}</li>`;         // wrapping out put code --should be vriables
        primaryList.appendChild(paratag);               // end of inner wrapper
    })
    primaryList.append('</ul>');                        // HTML tag end  (wrapping tag)
    hideTwoAndTree();
});

pTag.addEventListener('click', (event)=>{
    // paragraph tag generator
    primaryList.innerHTML=" ";
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText = `<p>${item}</p>`;
        primaryList.appendChild(paratag);
    })
    hideTwoAndTree();
})

brTag.addEventListener('click', (event)=>{
    // br tag generator
    primaryList.innerHTML=" ";
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText = `<br />${item}`;
        primaryList.appendChild(paratag);
    })
    hideTwoAndTree();
})

hrTag.addEventListener('click', (event)=>{
    // hr tag generator
    primaryList.innerHTML=" ";
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText = `${item}<hr />`;
        primaryList.appendChild(paratag);
    })
    hideTwoAndTree();
})

OLItems.addEventListener('click', (event)=>{
    primaryList.innerText='<ol>';
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText = `<li>${item}</li>`;
        primaryList.appendChild(paratag);
    })
    primaryList.append('</ol>');
    hideTwoAndTree();
});

let codeName = 'array;'

arrayItems.addEventListener('click', (event)=>{
                                                //builds an array and works with addEventListener to fill in array code
    singleInput.removeAttribute('hidden');
    ArraysObjtLoops.removeAttribute('hidden');
    secondList.removeAttribute('hidden');
    arrayLang.textContent = 'const '
    nameIt.textContent = 'array';
    arrayElements.textContent = ' = [\n';
    sampleText.forEach(item =>{
        arrayElements.textContent += `'${item.replace('"', '')}', `;
    })
    arrayElements.append('];');
    hideOneAndTree();
});


/* ********************************* PAin in the arrays ********************************/
eleName.addEventListener('keyup', (event)=>{
    codeName = 'array';
    codeName = event.target.value;
    console.log(codeName);
    lazyLoops.innerHTML =`${codeName}`;
    lazyLoops.innerHTML = `for (const element in ${codeName}){\n`;
    lazyLoops.innerHTML += `\t<pre>console.log(${codeName}[element]);</pre>\n`;
    lazyLoops.innerHTML += `\t};<br/>\n`;
    arrayLang.textContent = "const ";
    nameIt.textContent = codeName;
})

{/*

<input type="checkbox" id="arrayItems" name="arrayItems">
<label for="ulItem">Build a JS Array=[] with matching const and let variables and prebuilt <i>for... in</i> loop</label>

            <hr />
            <p id="javObjt" name="javObjt">
            <label for="chex"> &lt;input type="checkbox"&gt; id matches label, JS variables and event listeners, matching <br />CSS id</label>
            </p>
*/}

mpNav.addEventListener('click', (event)=>{
                        //<ul> with multi-page navigation links to html pages
    // output to list 1
    primaryList.innerText = `<div ="nav-bar">`;
    primaryList.innerHTML += '<br/>';
    primaryList.innerText += `<ul class="nav-links}>`;          //  whereItGoes = which list out //outterCodeStart wrapping ie <div>
    sampleText.forEach(item =>{                               //  The Array being output
        const homeTest = item.toLowerCase()
        let paratag = document.createElement(`p`);//  innertag, best left to 'p' ... for now
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
    secondList.innerText = `Page names based on links`; 
    secondList.innerHTML += '<span class="alert"/> feature to download pre-made templates coming soon!<span/>';
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
        hideThree();
});

spaNav.addEventListener('click', (event)=>{
                                                                //<ul> with multi-page navigation links for SPAs
                                                                // output to list 1
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
                                                                // unhide list 2
    secondList.removeAttribute('hidden');
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
});

divbuild.addEventListener('click', (event)=>{
                                    // Builds div class="" with matching CSS classes/ids, and Javascript variables = document.getElementById(...)
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
    secondList.innerHTML = `/* CSS Classes */<br/>\n\n`;
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText = `.${item}{`;
        paratag.innerHTML += `\n\n`;
        paratag.innerText += `}`;
        secondList.appendChild(paratag);
    })
    secondList.innerHTML += `<br/>`;
    secondList.innerHTML += `\t\n<span class="alert">/* scroll down for elements by #id */</span><br/>\n\n`;
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
    thirdList.innerHTML = `/* const variable = document.getElementById('htmlId'); */<br/>\n\n`;
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText += `const ${item} = document.getElementById('${item}');`;
        thirdList.appendChild(paratag);
    })
    thirdList.innerHTML += `\n\n/* const variable = document.getElementsByClassName('htmlId'); */<br/>\n\n`;
    sampleText.forEach(item =>{
        let paratag = document.createElement('p');
        paratag.innerText += `const ${item} = document.getElementById('${item}');`;
        thirdList.appendChild(paratag);
    })
})

