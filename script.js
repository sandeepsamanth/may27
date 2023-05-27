let input=document.getElementById("search");
let mkt=document.getElementById("mkt");
let percentage=document.getElementById("percentage");

let search=`${input}`;
let response=fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false/${search}`);
console.log(response);
response.then((data)=>{
    let prom=data.json();

    prom.then((data)=>{
        appendtowebpage(data[0])
    })

    prom.catch((data)=>{
        console.log(data);
    });
})
