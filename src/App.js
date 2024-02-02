import React from "react";
import Card from "./components/Card";
import { useEffect,useState} from "react";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl,filterData} from './data'
import { toast } from "react-toastify";
const App = () => {
const[loading,setLoading]=useState(true);
const[courses,setCourses]=useState('');
const[category,setCategory]=useState(filterData[0].title);

console.log(category);

async function fetchData(){
  // jb tk data aa rha tb tk true mark kr diya loader ko
  setLoading(true);
  try{
    const res=await fetch(apiUrl);
    const output=await res.json();

    // output-> res hai jo ki json format me hai
    setCourses(output.data);
    // Save data into Variable
     

  }
  catch(error){

    toast.error("Network me koe error hai");

    // toast.error("Something Went Wrong");

  }
  setLoading(false);
  
}
  useEffect(()=>{
    fetchData();
  },[])

 


  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar></Navbar>

      </div>
      <div className=" ">
      <div>
      <Filter filterData={filterData}  category={category} setCategory={setCategory}></Filter>

      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading?<Spinner/>:<Cards  courses={courses} category={category} />


        }
      </div>
       


      </div>
    </div>
   
  );
};

export default App;
