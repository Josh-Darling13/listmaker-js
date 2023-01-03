const arrayMess = ["safd","fdsws","sss","sdfrtwe","yt","ffes","sss","sfgersdgf","tgv","yjkjn","hju","sss","yt","foo","ikmjo","slemrp","sss","tr","yt","seddsa","trunt","trunt"];
let extraMess = [...arrayMess];
let indexes = [];
let grid = [];
let justOne = [];
let lessMess = [];
let findex = "";
let accumulator = [];

let i = 1;




for (const element in extraMess.reverse()){
const indexes = arrayMess.reduce((accumulator, current, index) => {
    if (current === extraMess[element]) {
    accumulator.push(index);

    }
    return accumulator;
}, []);



//  console.log(indexes);

  if(indexes.length >= 2){
    let n = 1;
    while(n < indexes.length){
        console.log("indexes" + indexes[n]);
        arrayMess.splice(indexes[n],1);

        n++;
    }


  }


}
console.log(arrayMess);

