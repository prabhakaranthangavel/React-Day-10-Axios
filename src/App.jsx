//! Axios Example
//! Async & await

// import axios from 'axios'
// import React from 'react'

// function App() {

//   const fetchPosts = async() => {

//   try {
//     console.log("Fetching Posts .....");
//     const response = await axios.get ("https://restcountries.com/v2/all");
//     console.log(response.data); 
//   } 
  
//   catch (error) {
//     console.log("Error Fetching Address .....",error); 
//   }
// }

//   return (
//     <div>
//     <button onClick={fetchPosts}> Kindly see the console </button>
//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************

//! CRUD

//! R => Read Opeartions Example:

// import React, { useState } from 'react'

// function App(props) {

//   const [notes,setNotes] = useState(props.notes);
//   return (
//     <div>
//       <h1>BOX OFFICE MOVIES</h1>
//       <ul>
//         {
//           notes.map(note => 
//             <li key={note.id}> {note.content} </li>
//             )
//         }
//       </ul>
//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************

//! C => Create Opeartions Example:

// import React, { useRef, useState } from 'react'

// function App() {

//   const [notes,setNotes] = useState([]);

//   // Define a contentRef to access and manipulate the content element
//   const newNoteContentRef = useRef(null);

//   // Add a new state
//   const [newNoteContent,setNewNoteContent] = useState('');

//   const [newNoteImport,setNewNoteImport] = useState('');

//   <select onChange={e=> setNewNoteImportant (e.target.value) }></select>

//   const addNote = (event) => {
//     event.preventDefault();

//   // Create a newNote Object
//   let noteObject = {
//     id : notes.length + 1 ,
//     content : newNoteContent,
//     important : newNoteImport === 'true',
//   }
//   setNotes(notes.concat(noteObject));

//   // Clear all inputs
//   setNewNoteContent('');
//   setNewNoteContent('');

//   newNoteContentRef.current.focus();
//   }

//   return (
//     <div>
//       <h1>BOX OFFICE MOVIES</h1>
//       <ul>
//         {
//           notes.map(note => 
//             <li key={note.id}> {note.content} </li>
//             )
//         }
//       </ul>

//       <hr></hr>

//       <h2>Add a New Note</h2>

//       <form onSubmit={addNote}>
//         <label>
//           Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <input 
//             type='text'
//             ref={newNoteContentRef}
//             value={newNoteContent}
//             onChange={e => setNewNoteContent(e.target.value)}
//           />
//         </label>

//         <br></br><br></br>

//         <label>Is Important : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <select>
//             <option disabled> --select-- </option>
//             <option> true </option>
//             <option> false </option>
//           </select>
//           </label>

//           <br></br><br></br>

//           <button type='Sumbit'>Add a New Movie Name </button>

//       </form>
//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************