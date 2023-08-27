

//GET Routes

//home_page
 exports.home = function(req,res,next){
    res.render('home_page');
  }

//results
  exports.results = async function(req,res,next){
    try{
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

  } catch(error){
    console.error(error)
    res.render('error')
  }
}

//https://kbr-sys-clm.ibmcloud.com/rm/rootservices

//TEST ROUTE////////////// - use this to try to connect to doors
  exports.test = async function(req,res,next){
    try{
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

  } catch(error){
    console.error(error)
    res.render('error')
  }
}


//POST Routes
exports.upload = function(req,res,next){
  console.log(req.body)
}








