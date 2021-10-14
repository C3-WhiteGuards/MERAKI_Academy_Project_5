import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const GymsView = () =>{


    return (<div style={{display:"flex" , }}>

        <Link to='/ALLGyms'>
        <div style={{width:"200px" , height:"500px" , backgroundColor:"lightblue" , fontSize:"20px" , textAlign:"center" , marginLeft:"50px" }}>
            Gyms

        </div>
        </Link>

        <Link to = '/AllTrainers'>

        <div style={{width:"200px" , height:"500px" , backgroundColor:"lightblue" , fontSize:"20px" , textAlign:"center", marginLeft:"50px" }}>
            All Trainers

        </div>
        </Link>

        <Link to = '/AllRestaurnats'>

        <div style={{width:"200px" , height:"500px" , backgroundColor:"lightblue" , fontSize:"20px" , textAlign:"center", marginLeft:"50px" }}>
            All Restaurnats

        </div>
        </Link>

        





    </div>)
}


// export const ALLGyms = () => {
//     const [gyms, setAllGym] = useState([]);
//     useEffect(() => {
//       axios
//         .get("http://localhost:5000/gym")
//         .then((res) => {
//           console.log(res.data);
//           setAllGym([...res.data.result]);
//         })
//         .catch((error) => {
//           console.log(error.response);
//         });
//     }, []);
//     return (
//       <div className="gym">
//         <div className="child">
//           {gyms &&
//             gyms.map((element, index) => {
//               return (
//                 <div key={index}>
//                   <img src={element.image} />
//                   <div className="childtwo">
//                     <h5>{element.name}</h5>
//                     <h5>{element.phoneNumber}</h5>
//                     <h5>{element.priceMonthly}</h5>
//                     <h5>{element.description}</h5>
//                     <h5
//                       onClick={() => {
//                         window.open(element.location, "_blank");
//                       }}
//                     >
//                       {" "}
//                       LOCATION
//                     </h5>
//                     <button>subscribe</button>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   };