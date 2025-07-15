import Navbar from "../assets/navbar"
import Gen from "../assets/gender-charts"
import Age from "../assets/age-chart";
import { useEffect, useState } from "react"




function Dash() {
  const[ data, setData ] = useState(null);
  const[ male, setMale ] = useState(0);
  const[ female, setFemale ] = useState(0);
  const[ ages, setAges ] = useState([]);
  let a1 = 0,a2=0,a3=0,a4=0,a5=0,a6=0,a7 = 0;


  useEffect(() => {
    // Fetch user data 
    const fetchData = async () =>{
      try {
        const response = await fetch("https://randomuser.me/api/?results=50")
        const result = await response.json()
        setData(result);// save to state
        console.log(result);

        let m = 0;
        let f = 0;

        result.results.forEach(user =>{
          if(user.gender === "male") m++;
          else if (user.gender === "female") f++;
        });
        setMale(m);
        setFemale(f);

        result.results.forEach(user =>{
          if(user.dob.age <= 13){
            a1++;
          }else if(user.dob.age >=14 && user.dob.age <= 19){
            a2++;
          }else if(user.dob.age >=20 && user.dob.age <= 29){
            a3++;
          }else if(user.dob.age >=30 && user.dob.age <= 39){
            a4++;
          }else if(user.dob.age >=40 && user.dob.age <= 49){
            a5++;
          }else if(user.dob.age >=50 && user.dob.age <= 59){
            a6++;
          }else{
            a7++;
          }
        });
        setAges([a1, a2, a3, a4, a5, a6 ,a7])
      

      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }

    fetchData();
  }, []);// use effect runs only on first render

  
  function renderUsers(){
    if (!data || !data.results)return( 
      <tr role="status" className="motion-safe:animate-pulse h-7">
        
        <td className="h-2 bg-gray-200"></td>
        <td className="h-2 bg-gray-200"></td>
        <td className="h-2 bg-gray-200"></td>
        <td className="h-2 bg-gray-200"></td>
      </tr> 
    )
    return (
      data.results.map((user,key)=>
        <tr key={key} className="hover:bg-slate-200 dark:hover:bg-slate-500 text-sm">
          <th className="sm:p-2">{user.name.title} {user.name.first} {user.name.last}</th>
          <td className="text-wrap sm:text-balance sm:p-2">{user.email}</td>
          <td>{user.cell}</td>
          <td>{user.phone}</td>
        </tr>
      
      )
    )

  }



  return (
    <>
      <Navbar />
      <div className="md:text-left mx-auto w-screen sm:w-8/10 mt-7">
          <h1 className="text-2xl font-bold">Random Account Information</h1>
          <p>This page shows fake random account information.</p>
      </div>
      
      <div className=" text-gray-700 shadow-md rounded-lg bg-clip-border mx-auto w-screen sm:w-8/10 mt-7 mb-7">
      
        <div className="flex flex-col sm:h-48 gap-2 my-2 sm:flex-row mb-10"> {/*Container for charts*/}
          <div className="bg-violet-200  dark:bg-slate-900 flex flex-col sm:flex-row p-2 items-center rounded-2xl">
            <p className="text-black dark:text-white sm:text-2xl font-bold text-left">Gender Split</p>
            <div className="hidden lg:block" ><Gen M={male} F={female} /></div>
            <div className="block lg:hidden text-white">
              
              Men:<div className="text-lg font-bold">{male} ({male*100/(male+female)})% </div>
              Women:<div className="text-lg font-bold">{female} ({female*100/(male+female)})%</div>

            </div>
            
          </div>

          <div className="bg-green-200  dark:bg-slate-900 flex sm:flex-row flex-col p-2 items-center rounded-2xl">
            <p className="text-black dark:text-white sm:text-2xl font-bold text-left">Age Ranges</p>
            <Age arr={ages}/>
            
          </div>


        </div>
        
       
      <table className="w-full text-left bg-white dark:bg-black dark:text-white rounded-xl text-2xs sm:text-base text-slate-800 shadow-2xs">
        <thead>
          <tr class="text-slate-500 dark:text-slate-50 border-b border-slate-300 bg-slate-50 dark:bg-slate-950">
                <th scope="col" className="sm:p-4">
                  <span class="text-sm leading-none font-normal">
                    Name
                  </span>
                </th>

                <th scope="col" className="sm:p-4">
                  <span class="text-sm leading-none font-normal">
                    Email
                  </span>
                </th>

                 <th scope="col" className="sm:p-4">
                  <span class="text-sm leading-none font-normal">
                    Cell No.
                  </span>
                </th>

                 <th scope="col" className="sm:p-4">
                  <span class="text-sm leading-none font-normal">
                    Mobile No.
                  </span>
                </th>
          </tr>

        </thead>


        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">{renderUsers()}</tbody>
      </table>
      </div>
      
    </>
  )
}

export default Dash
