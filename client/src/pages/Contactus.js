import React from "react";

 const Contact = () => {
     return (
         <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
             <h1>Contact Us</h1>
             <h3>Name: email</h3>
             <h3>Name: email</h3>
             <h3>Name: email</h3>
             <h3>Name: email</h3>
             <h3>Name: email</h3>
             <h3><a href="https://github.com/ManuhuiaBarcham/family-knowledge-exchange">Github</a></h3>

         </div>
     )
 }

// import React from "react";

// const Contact = () => {
//     return (
//         <div style={{display: "flex", justifyContent: "center"}}>
//             <h1>Contact Us</h1>
//             <form>
//         <input
//           value={fullName}
//           name="fullName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Email Address"
//         />
//         <label>
//             Comments:
//             <textarea
//             value={comments}
//           name="comments"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Comments"
//             />
//         </label>
          
        
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//         </div>
//         );
    
// };

export default Contact;