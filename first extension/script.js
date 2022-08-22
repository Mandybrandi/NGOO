fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json();
 }).then((completedata)=>{
     //console.log(completedata[2].title);
     let data1= "";
     completedata.map((values)=>{
         data1=`<div class="card">
         <h1 class="title">${values.title}</h1>
         <img src=${values.image} alt="img" class="images">
         <p>${values.description}</p>
         <p class="category">${values.category}</p>
         <p class="price">${values.price}</p>
     </div>`
     });
     document.getElementById('cards').innerHTML=data1
 
 }).catch((err)=>{
     console.log(err);
 })

/*
let data1="";
    completedata.map((values)=>{
        data1= <div class="card">
        <h1 class="title">${values.idDrink}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.strDrink}</p>
        <p class="category">category</p>
        <p class="price">price</p>
    </div>
    });
    document.getElementById("cards").innerHTML=data1;
    

    fetch('https://fakestoreapi.com/products').then((data)=>{
   //console.log(data);
   return data.json();
}).then((completedata)=>{
    //console.log(completedata[2].title);
    let data1= "";
    completedata.map((values)=>{
        data1=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById('cards').innerHTML=data1

}).catch((err)=>{
    console.log(err);
})
    
    
    
    */

    