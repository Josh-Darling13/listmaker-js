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

const noDuplicates =(orgArray)=>{

    const copyArray = [...orgArray];
    let searchForMe = [];
    const prepArray = orgArray.reverse();
    let revArray = [...prepArray];

    for (let element in orgArray){
        let searchFor = copyArray.shift();
        let whereInArray = copyArray.indexOf(searchFor);
    
        if (whereInArray !== -1){
            searchForMe.push(searchFor);
        }
    }
    for (elm in searchForMe){
        let whereDelete = revArray.indexOf(searchForMe[elm]);
        revArray.splice(whereDelete,1);
    }
    return revArray.reverse();
}

const noSpecialChars = ()=>{

}

buildIn.addEventListener('keydown', (event)=>{
    let evt = JSON.stringify(event.target.value);
    console.log(evt);

    if (event.key === 'Enter'){
        let breakBuild = [];
        let finalOut = [];
        breakBuild = evt.split('\\n');
        for (const ele in breakBuild){
            finalOut.push(breakBuild[ele].replace('"', ''));
            memberMeArray.push(breakBuild[ele].replace('"', ''));
        }
        buildOut.innerHTML='';
        finalOut.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item;
            buildOut.appendChild(li);
        })
    }
});


ulItems.addEventListener('change', (event)=>{
    let checkVal = Boolean(event.target.value);


    const noDupes = noDuplicates(memberMeArray);
    console.log("event is called " + event.target.value);

    console.log("noDupes" + noDupes);
    console.log("noDupes is a typeof " + typeof(noDupes));

    if(checkVal === true){
    primaryList.innerText='<ul>';
    noDupes.forEach(item =>{
        let paratag = document.createElement("p");
        paratag.innerText = `<li>${item.replace('"', '')}</li>`  ;
        primaryList.appendChild(paratag);

    })
    primaryList.append('</ul>');
    ulItems.setAttribute("value", !checkVal);
  
    } else if (checkVal === false){
        primaryList.innerText="All gone";
        ulItems.setAttribute("value", !checkVal);
    }

});

arrayItems.addEventListener('change', (event)=>{

    primaryList.innerText='const array = [';
    memberMeArray.forEach(item =>{
        primaryList.innerText += `"${item.replace('"', '')}", `  ;
    })
    primaryList.append('];');

});