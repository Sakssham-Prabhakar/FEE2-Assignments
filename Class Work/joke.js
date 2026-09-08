let url = "https://official-joke-api.appspot.com/random_joke";
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const btn = document.querySelector(".btn");
getJoke();

btn.addEventListener("click",getJoke);

// then ~ catch

// function getJoke(){
//     const data = fetch(url);

// data.then((data)=>{
//     return data.json();
// }).then((originaldata)=>{
//     console.log(originaldata);
//     setup.textContent=originaldata.setup;
//     punchline.textContent=originaldata.punchline;
// })
// .catch(()=>{
//     console.log(error);
// });
// }

// async ~ await

// async function getJoke(){
//     const data = await fetch(url);
//     const originaldata = await data.json();
//     console.log(originaldata);
// }

// try ~ catch
function getJoke(){
    try{
        const data = await fetch(url);
        const originaldata = await data.json();
        console.log(originaldata);
        setup.textContent=originaldata.setup;
        punchline.textContent=originaldata.punchline;
    }
    catch(error){
        console.log(error);
        
    }
};