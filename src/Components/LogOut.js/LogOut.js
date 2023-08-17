// import { Fragment, useState } from "react";

// export default function () {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState("");

//   const validate = (e) => {
//     e.preventDefault();
//     const userData = {
//       name,
//       email,
//       password,
//     };
//     localStorage.setItem('token-info',JSON.stringify(userData));
//     setIsLoggedIn('true');
//     setEmail('');
//     setPassword('');
//     setUserName('');

//     const logOut = ()=>{
//         localStorage.removeItem('token-info') ;
//         setIsLoggedIn('false') ;
//     }
//   };
//   return <Fragment>
//     	{!isLoggedIn ? (
// 					<>
// 						<form action="">
// 							<input
// 								type="text"
// 								onChange={(e) => setName(e.target.value)}
// 								value={name}
// 								placeholder="Name"
// 							/>
// 							<input
// 								type="email"
// 								onChange={(e) => setEmail(e.target.value)}
// 								value={email}
// 								placeholder="Email"
// 							/>
// 							<input
// 								type="password"
// 								onChange={(e) => setPassword(e.target.value)}
// 								value={password}
// 								placeholder="Password"
// 							/>
// 							<button type="submit" onClick={login}>
// 								GO
// 							</button>
// 						</form>
// 					</>
// 				) : (
// 					<>
// 						<h1>User is logged in</h1>
// 						<button onClickCapture={logout}>logout user</button>
// 					</>
// 				)}
//   </Fragment>;
// }
