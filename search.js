const accesskey ="hlzCVvVFpHs1ZrINF4c93lM3MbCKztps52Xb-Erhi_Q";
 
const form=document.querySelector("form");
const searchinput=document.getElementById("Searchbar");
const searchres=document.querySelector(".box");
const showmore=document.getElementById("showmore");

let inputdata="";
let page=1;

async function search(){
 inputdata=searchinput.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

const response= await fetch(url);
const data = await response.json();
const results = data.results;

if (page===1){
searchres.innerHTML="";
}
results.map((result)=> {
   const imageres=document.createElement("div");
   imageres.classList.add("imagebox");
   const img=document.createElement("img");
   img.src=result.urls.small;
   img.alt=result.alt_description;
   const link=document.createElement("a");
   link.href=result.links.html;
   link.target="_blank";
    link.textContent=result.alt_description;

    imageres.appendChild(img);
    imageres.appendChild(link);
    searchres.appendChild(imageres);
});
    page++;
if(page>1)
{
    showmore.style.display="block";
}

}
form.addEventListener("submit",(event)=>{
event.preventDefault();
page=1;
    search();


});
showmore.addEventListener("click",()=>{
search();


});

