const listTitle = document.getElementsByClassName("listTitle");
const primaryList = document.getElementById("primaryList");
const secondList = document.getElementsByClassName("secondList");
const thirdList = document.getElementsByClassName("thirdList");
const buildIn = document.getElementById("buildIn");
const buildOut = document.getElementById("buildOut");
const ulItems = document.getElementById("ULItems");
const typeload = document.getElementById("typeload");
const arrayItems = document.getElementById("arrayItems");

let memberMeArray = [];

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
            // console.log("indexes" + indexes[n]);
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

buildIn.addEventListener('keydown', (event)=>{
    let evt = JSON.stringify(event.target.value);
    // console.log(evt);
    if (event.key === 'Enter'){
        let breakBuild = [];
        let finalOut = [];
        let noReturn = [];
        breakBuild = evt.split('/\n?\r/');
        for (const ele in breakBuild){
            const spaceStrip = breakBuild[ele].trim().replace('"', '');
            console.log(spaceStrip);
            finalOut = spaceStrip.split('\\n');
            memberMeArray.push(breakBuild[ele].replace('"', ''));
        }

        const sampleText = noDuplicates(finalOut);
            // console.log(sampleText);
        buildOut.innerHTML='';
        sampleText.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item;
            buildOut.appendChild(li);
        })
    }
});

/*
Things for tonight:

updated array verification --done

add show hide for list options (instructions for use and about is what's in it's place)

change list to radio buttons with matching array

update z index for input text box divs (might have to deal with that later 

updated show/hide scroll bars

show hide for second dairy and thrid outboxes 

Actual code will be in the variout div

*/ 


ulItems.addEventListener('change', (event)=>{
    let checkVal = Boolean(event.target.value);
    // ulItems.getElementsByClassName(ulItems);
    const noDupes = noDuplicates(memberMeArray);
    console.log("event is called " + event.target.value);
    console.log("noDupes" + checkVal);
    console.log("noDupes is a typeof " + typeof(noDupes));
    if(checkVal === true){
    primaryList.innerText='<ul>';
    noDupes.forEach(item =>{
        let paratag = document.createElement("p");
        paratag.innerText = `<li>${item.replace('"', '')}</li>`  ;
        primaryList.appendChild(paratag);
        ulItems.classList.add("checked");
        ulItems.setAttribute("value", !checkVal);
    }) 
    primaryList.append('</ul>');
    
  
    } else if (checkVal === false){
        primaryList.innerText="All gone";
        ulItems.classList.remove("checked");
    }

});

arrayItems.addEventListener('change', (event)=>{

    primaryList.textContent='const array = [\n';
    memberMeArray.forEach(item =>{
        primaryList.textContent += `"${item.replace('"', '')}", `  ;
    })
    primaryList.append('];');

});