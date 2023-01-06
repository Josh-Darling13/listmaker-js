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
    // console.log(evt);
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
            // console.log(sampleText);
        buildOut.innerHTML='';
        sampleText.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item;
            buildOut.appendChild(li);
        })
    }
});

/*
change options lists to just p tags

*/ 


ulItems.addEventListener('click', (event)=>{
    let checkVal = Boolean(event.target.value);
    console.log("checkVal "+checkVal);
    primaryList.innerText='<ul>';                       // HTML tag start (wrapping tag)
    sampleText.forEach(item =>{                         // being looping out array value
        let paratag = document.createElement('p');      // inner tag (keep as p)
        paratag.innerText = `<li>${item}</li>`  ;       // wrapping out put code --should be vriables
        primaryList.appendChild(paratag);               // end of inner wrapper
    })
    primaryList.append('</ul>');                        // HTML tag end  (wrapping tag)
    hideTwoAndTree();
});

OLItems.addEventListener('click', (event)=>{
    let checkVal = Boolean(event.target.value);
    console.log("checkVal "+checkVal);
    primaryList.innerText='<ol>';                       // HTML tag start (wrapping tag)
    sampleText.forEach(item =>{                         // being looping out array value
        let paratag = document.createElement('p');      // inner tag (keep as p)
        paratag.innerText = `<li>${item}</li>`  ;       // wrapping out put code --should be vriables
        primaryList.appendChild(paratag);               // end of inner wrapper
    })
    primaryList.append('</ol>');                        // HTML tag end  (wrapping tag)
    hideTwoAndTree();
});





arrayItems.addEventListener('click', (event)=>{
    primaryList.textContent ='const ';
    primaryList.innerHTML +='<span id="">array</span>';
    primaryList.textContent +=' = [\n';
    sampleText.forEach(item =>{
        primaryList.textContent += `'${item.replace('"', '')}', `  ;
    })
    primaryList.append('];');
    hideTwoAndTree();
});


{/*


words separated with <p> 




words separated with <br/> 
words separated with <hr/> 
<ol> list with items

<input type="checkbox" id="spaNav" name="spaNav">
<label for="spanav">Build &lt;ul&gt; with SPA navigation</label>
<hr />
<input type="checkbox" id="arrayItems" name="arrayItems">
<label for="ulItem">Build a JS Array=[] with matching const and let variables and prebuilt <i>for... in</i> loop</label>


            <hr />
            <p id="javObjt" name="javObjt">
            <label for="chex"> &lt;input type="checkbox"&gt; id matches label, JS variables and event listeners, matching <br />CSS id</label>
            </p>

*/}

mpNav.addEventListener('click', (event)=>{
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
secondList.innerHTML += '<br/>';
secondList.innerHTML += '<p class="alert"/> feature to download pre-made templates coming soon!<p/>';
secondList.innerHTML += '<br/>';
secondList.innerText += `type "home" or "main" for index.html`;
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
});


