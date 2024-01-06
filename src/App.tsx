import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [p1, setP1] = useState("");
	const [p2, setP2] = useState("");
	const [submit, setSubmit] = useState(false);
	const [alert, setAlert] = useState("");
	const [hideP1, sethideP1] = useState(true);
		const [hideP2, sethideP2] = useState(true);

	const handleNameChange = (event: any) => {
		const value = event.target.value;
		setName(value);
	};
	const handleEmailChange = (event: any) => {
		const value = event.target.value;
		setEmail(value);
	};
	const handleP1Change = (event: any) => {
		const value = event.target.value;
		setP1(value);
	};
	const handleP2Change = (event: any) => {
		const value = event.target.value;
		setP2(value);
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (p1 !== p2) {
			setAlert("password are not the same");
		} else {
			setAlert("");
			setSubmit((prev) => !prev);
		}
	};
	const handleHideP1 = () => {
		sethideP1(prev => !prev);
	}
		const handleHideP2 = () => {
		sethideP2(prev => !prev);
	}
	return (
		<>
			<Header
				title={
					name !== "" && email !== "" && p1.length > 6 && p1 === p2 && submit
						? "Results"
						: "Create account"
				}
			/>
			<section>
				{name !== "" && email !== "" && p1.length > 6 && p1 === p2 && submit ? (
					<section>
						<div>
							<label>{name}</label>
							<label>{email}</label>
							<label>{p1}</label>
						</div>
						<button onClick={handleSubmit}>Edit your information</button>
					</section>
				) : (
					<form onSubmit={handleSubmit}>
						<label>Name</label>
						<input
							type="text"
							placeholder="My name"
							name="name"
							value={name}
							onChange={handleNameChange}
						/>
						<label>Email</label>
						<input
							type="email"
							placeholder="sebi@gmail.com"
							name="email"
							value={email}
							onChange={handleEmailChange}
						/>
						<label>Password</label>


						<div className="inputContainer">
							<input
								type={hideP1 ? "password" :"text" }    
								placeholder="azerty"
								name="p1"
								value={p1}
								onChange={handleP1Change}
								className={alert === "" ? "" : "borderRed"}
							/>
							<FontAwesomeIcon icon={hideP1 ? "eye" :"eye-slash" }  onClick={handleHideP1} />
						</div>

						<label>Confirm your Password</label>
						<div className="inputContainer">
							<input
								type={hideP2 ? "password" :"text" }    
								placeholder="azerty"
								name="p2"
								value={p2}
								onChange={handleP2Change}
								className={alert === "" ? "" : "borderRed"}
							/>
							<FontAwesomeIcon icon={hideP2 ? "eye" :"eye-slash" } onClick={handleHideP2}/>
						</div>

						<p className="alert">{alert}</p>

						<button>Register</button>
					</form>
				)}
			</section>

			<Footer />
		</>
	);
}

export default App;
