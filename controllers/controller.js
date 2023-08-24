


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



  //TEST ROUTE////////////// - use this to try to connect to doors
  exports.test = async function(req,res,next){
    try{
    const response = await fetch('https://kbr-sys-clm.ibmcloud.com/rm/rootservices',{
      method:'GET',
      headers:{
          accept:"application/json",
          mode:"no-cors"
      }
  })
  const doors_data = await response.json();
 
  
  const doors_data_array = doors_data.map(requirements=>{
      return requirements
  })

    //place data into ejs template 
    doors_html=doors_data_array
    console.log(doors_data_array)

    //render ejs template with data
    res.render('test_route',{doors_html})

  }
 catch(error){
    console.error(error)
    res.render('error')
  }
}






