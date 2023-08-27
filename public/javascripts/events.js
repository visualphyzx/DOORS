

const form = document.querySelector("form");

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const fd = new FormData(form);

    const urlEncoded = new URLSearchParams(fd).toString()

    fetch('http://localhost:3000/upload',{
        method:'POST',
        body:urlEncoded,
        headers:{
            'content-type':'application/x-www-form-urlencoded'
    }})
})






// const button = document.getElementById("button_get_data")

// button.addEventListener("click", function(e){
//     console.log("hello")
// fetch('/get_data')
// .then(function(response){
//     if(response.ok){
//         console.log('click recorded in event file')
//         response.json()

//     .then(function(data){
//         console.log(data)
        
//     })
//     return;
//     }
//     throw new Error('request failed')
// })
// .catch(function(error){
//     console.log(error)
// })

// });



// const myfunc=()=>{
//     console.log('h')
// fetch('/get_data')
// .then(function(response){
//     if(response.ok){
//         console.log('click recorded in event file')

//     .then(function(data){
//         document.getElementById('output').innerHTML=data
//     })
//     return;
//     }
//     throw new Error('request failed')
// })
// .catch(function(error){
//     console.log(error)
// })
// }