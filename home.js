const topCoins=document.querySelector(".trending");
window.addEventListener("load",getCoins);

async function getCoins(){
    const rep=await fetch("https://api.coingecko.com/api/v3/search/trending");
    const resp=await rep.json();
    const rep2=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
    const resp2=await rep2.json();
    console.log(resp2)
    const val=resp2.bitcoin.inr;
    resp.coins.forEach(ele=>{
        const div=document.createElement("div");
        div.classList.add("cc");
        const img=document.createElement("img");
        img.src=ele.item.thumb;
        const div_=document.createElement("div");
        div_.classList.add("ima");
        div_.append(img);
        const h2=document.createElement("h2");
        h2.innerHTML=ele.item.name+" ( "+ ele.item.symbol +" ) ";
        const div1=document.createElement("div");
        div1.classList.add("cc-child");
        const price=document.createElement("p");
        price.innerText="₹"+Math.round(val*ele.item.price_btc*10000)/10000;
        div1.append(h2,price);
        div.append(div_,div1);
        topCoins.append(div);
    })
}