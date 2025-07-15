import Navbar from "../assets/navbar"
import Charts from "../assets/gender-charts";
import Age from "../assets/age-chart";
import { useEffect, useState } from "react"


function Dash() {
  const[ data, setData ] = useState(null);
  const[ male, setMale ] = useState(0);
  const[ female, setFemale ] = useState(0);


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
          <th className="sm:p-4">{user.name.title} {user.name.first} {user.name.last}</th>
          <td className="">{user.email}</td>
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
      
        <div className="flex h-48 w-6">
          <div className="bg-violet-200  dark:bg-slate-900 flex p-2 items-center">
            <p className="text-black dark:text-white text-2xl font-bold text-left">Gender Split</p>
            <Charts M={male} F={female} />
          </div>

          <div>
            Chart 2
          </div>


        </div>
        
       
      <table className="w-full text-left bg-white dark:bg-black dark:text-white rounded-xl  text-slate-800 shadow-2xs">
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
