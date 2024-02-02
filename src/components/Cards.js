import Card from "./Card";
import { useState } from "react";
function Cards({courses,category}){
  // Pehle ek empty array liya hua hai
  const [likedCourses, setLikedCourses] = useState([]);

  console.log("Abhi ka card",category);
  console.log(courses[category]);


   
  function getCourses() {
    if(category === "All") {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else {
        //main sirf specific categiry ka data array krunga  
        return courses[category];      
    }

}

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">

        {getCourses().map( (course)=>{
          return <Card key={course.id} course={course}  likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        })}

        </div>
    )

}

export default Cards;