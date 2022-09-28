let title = document.getElementById("tital"); 
let pric = document.getElementById("price")
let tex = document.getElementById("taxes");
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit  = document.getElementById("creat")
let search = document.getElementById("Search")
let tbody = document.getElementById("tbody");
console.log(submit)
let temp;
function getTotal()
{
   if (tex.value !=''&&pric.value!=''&&ads.value!=''&&discount.value!='')
   {
    total.innerHTML= ''; 
    let tot = +pric.value + +tex.value + +ads.value - +discount.value; 
    total.innerHTML = `${tot}`;
    console.log(tot)
    total.style.background = "green"; 
   }
   else 
   {
    
    total.style.backgroundColor = "red"; 
   }
       
}

// creat procuct 
let datapro;
if (localStorage.product!=null)
{
    datapro = JSON.parse(localStorage.product);
}
else 
{
    datapro =[]; 
}

submit.onclick = function() {
    let t = +pric.value + +tex.value + +ads.value - +discount.value;
    let newPro = {
        title : title.value,
        pric :pric.value,
        tex :tex.value,
        ads :ads.value,
        discount :discount.value,
        total : t,
        count :count.value,
        category :category.value
    }
    console.log(title.value)
    if (title.value!=''&&pric.value!=''&&tex.value!=''&&ads.value!=''&&discount.value!=''&&category.value!=''){
        console.log('nameee')
       if (submit.innerHTML == "Create")
         { for (let i=0;i<newPro.count;i++)
                datapro.push(newPro);
            } 
      else 
       {
        console.log('nam')
        datapro[temp] = newPro; 
        submit.innerHTML= 'Create'; 
        count.style.display = 'block'; 
       }
    localStorage.setItem("product" , JSON.stringify(datapro)) 
    clearData(); 
    creat(); }
}

function clearData (){
    title.value = ''; 
    pric.value='';
    tex.value= ''; 
    discount.value =''
    ads.value = '';
    category.value = '';
    count.value =""; 
    total.innerHTML=''; 
    total.style.backgroundColor = "red"; 

}
 window.onload = function()
 {
    creat();
 }
 function creat () {
    let  number =1; 
    tbody.innerHTML=''; 
    for (let i=0;i<datapro.length;i++)
    {
            let tr = document.createElement("tr"); 
            let td1 =document.createElement("td")
            let td2 =document.createElement("td")
            let td3 =document.createElement("td")
            let td4 =document.createElement("td")
            let td5 =document.createElement("td")
            let td6 =document.createElement("td")
            let td7 =document.createElement("td")
            let td8 =document.createElement("td")
            let td9 =document.createElement("td")
            let td10 =document.createElement("td")
            td1.append(number++); 
            td2.append(datapro[i].title)
            td3.append(datapro[i].pric)
            td4.append(datapro[i].tex)
            td5.append(datapro[i].ads)
            td6.append(datapro[i].discount)
            td7.append(datapro[i].total)
            td8.append(datapro[i].category)
            let up = document.createElement("button"); 
            let de = document.createElement("button"); 
            up.append("Update")
            de.append("delete"); 
            de.onclick = function(){
                DeletData(i); 
            }
            up.onclick = function(){
               title.value = datapro[i].title;  
               pric.value = datapro[i].pric;  
               tex.value = datapro[i].tex;  
               ads.value = datapro[i].ads;  
               discount.value = datapro[i].discount;
               category.value = datapro[i].category 
               getTotal();
               count.style.display = 'none'; 
               submit.innerHTML = "Up Date";
               temp=i; 
               scroll ({
                top:0,
                behavior :'smooth'

               })  
            }
            td9.append(up); 
            td10.append(de); 
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            tr.append(td4)
            tr.append(td5)
            tr.append(td6)
            tr.append(td7)
            tr.append(td8)
            tr.append(td9)
            tr.append(td10)
            tbody.append(tr); 
        
    }
    let deletAll =document.getElementById("dleteAll"); 
    if (datapro.length>0)
    {
        let btndelet = document.createElement("button"); 
        btndelet.append(`Delete All   (${number-1})`)
        deletAll.innerHTML=''
        deletAll.append(btndelet);
    }
    else 
    {
        deletAll.innerHTML=''; 
    }
    deletAll.onclick =function()
    {
        localStorage.clear(); 
        datapro.length=0; 
        creat(); 
    }
}


// delete function
function DeletData (i)
{
    
    datapro.splice(i,1); 
    localStorage.product = JSON.stringify(datapro); 
    creat(); 
}
let searchMood ='title'; 
let btnTitle  = document.getElementById("searchTitle")
let btncat = document.getElementById("searchcat")


      btnTitle.onclick = function()
      {
        searchMood = "title";
        console.log(searchMood) 
        search.focus(); 
        search.placeholder = "search by Title"
      }
      btncat.onclick = function()
      {
        searchMood = 'cat';
        console.log(searchMood)
        search.focus(); 
        search.placeholder = "search by Category"
      }

search.onkeyup = function () {
    let key = search.value; 
   if (key!=''){
    if (searchMood =='title')
    {
        let  number =1; 
        tbody.innerHTML=''; 
        for (let i=0;i<datapro.length;i++)
        {
           
            if (datapro[i].title.includes(key))
            {
               
                        let tr = document.createElement("tr"); 
                        let td1 =document.createElement("td")
                        let td2 =document.createElement("td")
                        let td3 =document.createElement("td")
                        let td4 =document.createElement("td")
                        let td5 =document.createElement("td")
                        let td6 =document.createElement("td")
                        let td7 =document.createElement("td")
                        let td8 =document.createElement("td")
                        let td9 =document.createElement("td")
                        let td10 =document.createElement("td")
                        td1.append(number++); 
                        td2.append(datapro[i].title)
                        td3.append(datapro[i].pric)
                        td4.append(datapro[i].tex)
                        td5.append(datapro[i].ads)
                        td6.append(datapro[i].discount)
                        td7.append(datapro[i].total)
                        td8.append(datapro[i].category)
                        let up = document.createElement("button"); 
                        let de = document.createElement("button"); 
                        up.append("Update")
                        de.append("delete"); 
                        de.onclick = function(){
                            DeletData(i); 
                        }
                        up.onclick = function(){
                           title.value = datapro[i].title;  
                           pric.value = datapro[i].pric;  
                           tex.value = datapro[i].tex;  
                           ads.value = datapro[i].ads;  
                           discount.value = datapro[i].discount;
                           category.value = datapro[i].category 
                           getTotal();
                           count.style.display = 'none'; 
                           submit.innerHTML = "Up Date";
                           temp=i; 
                           scroll ({
                            top:0,
                            behavior :'smooth'
            
                           })  
                        }
                        td9.append(up); 
                        td10.append(de); 
                        tr.append(td1)
                        tr.append(td2)
                        tr.append(td3)
                        tr.append(td4)
                        tr.append(td5)
                        tr.append(td6)
                        tr.append(td7)
                        tr.append(td8)
                        tr.append(td9)
                        tr.append(td10)
                        tbody.append(tr); 
                    
            
            }
            
        }
 

    }
    else 
    {
        let  number =1; 
        tbody.innerHTML=''; 
        for (let i=0;i<datapro.length;i++)
        {
           
            if (datapro[i].category.includes(key))
            {
               
                        let tr = document.createElement("tr"); 
                        let td1 =document.createElement("td")
                        let td2 =document.createElement("td")
                        let td3 =document.createElement("td")
                        let td4 =document.createElement("td")
                        let td5 =document.createElement("td")
                        let td6 =document.createElement("td")
                        let td7 =document.createElement("td")
                        let td8 =document.createElement("td")
                        let td9 =document.createElement("td")
                        let td10 =document.createElement("td")
                        td1.append(number++); 
                        td2.append(datapro[i].title)
                        td3.append(datapro[i].pric)
                        td4.append(datapro[i].tex)
                        td5.append(datapro[i].ads)
                        td6.append(datapro[i].discount)
                        td7.append(datapro[i].total)
                        td8.append(datapro[i].category)
                        let up = document.createElement("button"); 
                        let de = document.createElement("button"); 
                        up.append("Update")
                        de.append("delete"); 
                        de.onclick = function(){
                            DeletData(i); 
                        }
                        up.onclick = function(){
                           title.value = datapro[i].title;  
                           pric.value = datapro[i].pric;  
                           tex.value = datapro[i].tex;  
                           ads.value = datapro[i].ads;  
                           discount.value = datapro[i].discount;
                           category.value = datapro[i].category 
                           getTotal();
                           count.style.display = 'none'; 
                           submit.innerHTML = "Up Date";
                           temp=i; 
                           scroll ({
                            top:0,
                            behavior :'smooth'
            
                           })  
                        }
                        td9.append(up); 
                        td10.append(de); 
                        tr.append(td1)
                        tr.append(td2)
                        tr.append(td3)
                        tr.append(td4)
                        tr.append(td5)
                        tr.append(td6)
                        tr.append(td7)
                        tr.append(td8)
                        tr.append(td9)
                        tr.append(td10)
                        tbody.append(tr); 
                    
            
            }
            
        }


    }}
    else 
    {
        creat()
    }
    console.log('na')
   
}
