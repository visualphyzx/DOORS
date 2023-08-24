


//home_page
 exports.home = function(req,res,next){
    res.render('home_page');
  }

//Get results and display on results_page
  exports.results = async function(req,res,next){
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{
      method:'GET',
      headers:{
          accept:"application/json",
          mode:"no-cors"
      }
  })
  const jsonuserdata = await response.json();
 
  
  const useremailarray = jsonuserdata.map(user=>{
      return user
  })

    //place data into ejs template 
    html=useremailarray

    //render ejs template with data
    res.render('results_page',{html})

  }






