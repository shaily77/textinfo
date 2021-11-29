const textareaEl=document.querySelector('#text');
let text=null;
// const setText=()=>
// {
//     console.log(textareaEl.value);
// }
let data={
    words:0,
    sentences:0,
    uppercase:0,
    lowercase:0,
    number:0,
    spaces:0,
    digits:0,
    vovels:0,
    consonant:0,
}

const fl=(item)=>(item==null ?0:item.length);
fl()


const setText=()=>
{


    
    text=textareaEl.value;
    //console.log(text.match([A-Z/g]));
    if (text !=null){
        data.sentences=fl(text.match(/\056/g));
        data.words=fl(text.match(/[a-zA-Z]+/gi));// upper lower search
        data.spaces=fl(text.match(/\s/g));// space search
        data.uppercase=fl(text.match(/[A-Z]/g));// upper search
        data.lowercase=fl(text.match(/[a-z]/g));// lower search
        data.digits=fl(text.match(/\d/g));//number
        data.vowels=fl(text.match(/[aeiou]/gi));
        data.consonant=fl(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));


    }
    localStorage.setItem('data',JSON.stringify(data));

    window.location="info.html";
};

const getData=()=>{
    return JSON.parse(localStorage.getItem('data'));
};

const showdata=()=>
{  
    let data=getData();
     let htmlContent='';

     for (item in data){
         htmlContent+=
       ` <div class='box'>
             <h2>${data[item]}</h2>
             <p>${item}</p>
         </div>`
     }
     document.querySelector('.info-wrapper').innerHTML=htmlContent;
 }
 