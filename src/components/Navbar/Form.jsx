// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./form.css";

// const Form = () => {
//   const [role, setRole] = useState("Choose Role");
//   const [subrole, setsubrole] = useState("");
//   let parti = document.getElementsByClassName("parti");
//   let tour = document.getElementsByClassName("tournament");
//   let team = document.getElementsByClassName("teamname");
//   let cteam = document.getElementsByClassName("cteam");
//   let collabshow = document.getElementsByClassName("collabshow");
//   let submem = document.getElementsByClassName("submem");
//   let cproblem = document.getElementsByClassName("cproblem");
//   useEffect(() => {
//     switch (role) {
//       case "Members":
//         submem[0].style.display = "inline";
//         parti[0].style.display = "none";
//         tour[0].style.display = "none";
//         cteam[0].style.display = "none";
//         for (let i = 0; i < collabshow.length; i++) {
//           collabshow[i].style.display = "none";
//         }
//         break;
//       case "Participant":
//         parti[0].style.display = "inline";
//         submem[0].style.display = "none";
//         for (let i = 0; i < collabshow.length; i++) {
//           collabshow[i].style.display = "none";
//         }
//         break;
//       case "Collabrator":
//         parti[0].style.display = "none";
//         cteam[0].style.display = "none";
//         submem[0].style.display = "none";

//         tour[0].style.display = "none";
//         for (let i = 0; i < collabshow.length; i++) {
//           collabshow[i].style.display = "inline";
//         }
//         cproblem[0].style.display = "none";
//         break;
//       case "Interns":
//         cproblem[0].style.display = "inline";
//         tour[0].style.display = "inline";
//         for (let i = 0; i < collabshow.length; i++) {
//           collabshow[i].style.display = "none";
//         }
//         break;
//       default:
//         break;
//     }

//     switch (subrole) {
//       case "indivisual":
//         if (role == "Members" || role == "Collabrator" || role == "Interns") {
//           tour[0].style.display = "none";
//         } else {
//           team[0].style.display = "none";
//           tour[0].style.display = "inline";
//         }
//         break;
//       case "teamlead":
//         if (role == "Members" || role == "Collabrator" || role == "Interns") {
//           cteam[0].style.display = "none";
//         } else {
//           cteam[0].style.display = "inline";

//           cteam[0].style.display = "none";
//         }

//         break;
//       case "teammember":
//         if (role == "Members" || role == "Collabrator" || role == "Interns") {
//           tour[0].style.display = "none";
//           cteam[0].style.display = "none";
//         } else {
//           tour[0].style.display = "inline";
//           cteam[0].style.display = "inline";
//         }

//         break;
//     }
//   }, [role, subrole]);

//   return (
//     <>
//       <div className="formcontainer">
//         <form className="form" id="form">
//           <div className="headerf">Add User</div>
//           <div className="inputs">
//             <select
//               id="design"
//               name="Choose Role"
//               onChange={(e) => {
//                 setRole(e.target.value);
//               }}
//             >
//               <option value="Choose Role">Choose Role</option>
//               <option value="Members">Members</option>
//               <option value="Participant">Participant</option>
//               <option value="Collabrator">Collabrator</option>
//               <option value="Interns">Interns</option>
//             </select>
//             <select
//               id="design"
//               name="Sub members"
//               className="submem"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="">Sub members</option>
//               <option value="Jury">Jury</option>
//               <option value="chair">chair</option>
//               <option value="Fight assistent">Fight assistent</option>
//               <option value="Directorate">Directorate</option>
//             </select>
//             <br />
//             <select
//               id="design"
//               name="participent"
//               className="parti"
//               onChange={(e) => {
//                 setsubrole(e.target.value);
//               }}
//             >
//               <option value="Subparticipent">Sub participent</option>
//               <option value="indivisual">Indivisual</option>
//               <option value="teamlead">Team lead</option>
//               <option value="teammember">Team member</option>
//             </select>
//             <select id="design" name="tournament" className="tournament">
//               <option value="">Choose Tournamnet</option>
//               <option value="Pypt">
//                 PYPT(Pakistan Young physicist's Tournamnet)
//               </option>
//               <option value="Pynt">
//                 PYNT(Pakistan Young Naturalists Tournament)
//               </option>
//               <option value="Ptym">
//                 PTYM(Pakistan Tournaments for Young Mathematics)
//               </option>
//               <option value="P-IMSAF">P-IMSAF</option>
//               <option value="PchTo">
//                 PchTo(Pakistan Chemistry Tournament)
//               </option>
//               <option value="IYBT">
//                 IYBT(International Young Biologists' Tournament)
//               </option>
//               <option value="PYMT">
//                 PYMT(Pakistan Young Medicos Tournament)
//               </option>
//               <option value="PYET">
//                 PYET(Pakistan Young entrepreneurship Tournament)
//               </option>
//               <option value="PYRT">
//                 PYRT(Pakistan Young Robotics Tournament)
//               </option>
//               <option value="PYHT">
//                 PYHT(Pakistan Tournament of young Historian)
//               </option>
//               <option value="Karvaan">Karvaan-e-Jhustajo</option>
//               <option value="PYPAT">
//                 PYPAT(Pakistan Young Performing arts Tournament)
//               </option>
//               <option value="PYLC">PYLC(Pakistan Young Leaders Club)</option>
//             </select>
//             <select
//               id="design"
//               name="cteam"
//               className="cteam"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="">Choose Team</option>
//               <option value="aps">Aps Gracy lines</option>
//               <option value="allied1">Allied school</option>
//               <option value="allied2">Allied school </option>
//               <option value="Pc1">Punjab college</option>
//               <option value="Pc2">Punjab college</option>
//             </select>
//             <input
//               id="design"
//               type="text"
//               placeholder="Enter Team Name"
//               className="teamname"
//               style={{
//                 display: "none",
//               }}
//             />
//             <input id="design" type="text" placeholder="Enter Name" />
//             <br />
//             <input id="design" type="text" placeholder="Enter Username" />
//             <br />
//             <input id="design" type="password" placeholder="Enter Password" />
//             <br />
//             <input id="design" type="email" placeholder="Enter email" />
//             <br />
//             <input id="design" type="Date" placeholder="Enter Age" />
//             <br />
//             <input id="design" type="number" placeholder="Enter Mobile No." />
//             <br />
//             <input id="design" type="text" placeholder="Enter Organization" />
//             <br />
//             <select
//               id="design"
//               name="Dicipline"
//               className="collabshow"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="Choose Role">Choose Dicipline</option>
//               <option value="Maths">Mathmatics</option>
//               <option value="Physics">Physics</option>
//               <option value="Chemistry">Chemistry</option>
//             </select>
//             <select
//               id="design"
//               name="Scope"
//               className="collabshow"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="Choose Role">Choose Scope</option>
//               <option value="national">National</option>
//               <option value="international">International</option>
//               <option value="regional">Regional</option>
//             </select>
//             <select
//               id="design"
//               name="ctype"
//               className="collabshow"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="Choose Collabration type">Choose Scope</option>
//               <option value="research">Research</option>
//               <option value="project">Project</option>
//             </select>
//             <select
//               id="design"
//               name="creward"
//               className="collabshow"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="Choose Reward">Choose Reward</option>
//               <option value="certificates">certificates</option>
//               <option value="Rauthorship">Research Authorship</option>
//               <option value="internship">internship</option>
//               <option value="pinternship">Paid internship</option>
//               <option value="Diplomas">Diplomas</option>
//             </select>
//             <input
//               id="design"
//               type="text"
//               placeholder="No of interns"
//               className="collabshow"
//               style={{
//                 display: "none",
//               }}
//             />
//             <select
//               id="design"
//               name="ceducationlevel"
//               className="collabshow"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="Choose Reward">Choose Education level</option>
//               <option value="undergraduate">Undergraduate</option>
//               <option value="graduate">Graduate</option>
//               <option value="phd">phd</option>
//               <option value="hschool">High school</option>
//               <option value="mschool">Middle school</option>
//             </select>
//             <select
//               id="design"
//               name="cproblem"
//               className="cproblem"
//               style={{
//                 display: "none",
//               }}
//             >
//               <option value="">Choose Problem</option>
//               <option value="prob1">
//                 The problem statement is the oppurtunity to expalin why you care
//                 and what you propose to do in the way of researching the problem
//                 a problem statement is an expalnation in research that describes
//                 the issue that is a need of study.what problem is research
//                 attempting to adress ?{" "}
//               </option>
//               <option value="prob2">write 2000 words about mars planet</option>
//             </select>
//             <input
//               id="design"
//               type="file"
//               name="file"
//               placeholder="Choose File"
//             />{" "}
//             <br />
//           </div>
//         </form>
//         <Link
//           to="https://curiositylabpakistan.com/pyims/dashboard.php"
//           target="_blank"
//         >
//           <button id="formbtn" className="submit-button">
//             Create Account
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Form;
