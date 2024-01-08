import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [p1, setP1] = useState("");
	const [p2, setP2] = useState("");
	const [submit, setSubmit] = useState(false);
	const [alert, setAlert] = useState("");
	const [hideP1, sethideP1] = useState(true);
	const [hideP2, sethideP2] = useState(true);
	const [shake, setShake] = useState(false);

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
		if (name === "") {
			setAlert("name is require !");
			setSubmit(false);
		} else if (email === "") {
			setAlert("email is require !");
			setSubmit(false);
		} else if (p1.length < 6) {
			setAlert("password : 7 charachers minimum !");
			setSubmit(false);
			setShake(true);
			setTimeout(() => {
				setShake(false);
			}, 1000);
		} else if (p1 !== p2) {
			setAlert("passwords are not the same");
			setSubmit(false);
			setShake(true);
			setTimeout(() => {
				setShake(false);
			}, 1000);
		} else {
			setAlert("");
			setSubmit((prev) => !prev);
		}
	};
	const handleHideP1 = () => {
		sethideP1((prev) => !prev);
	};
	const handleHideP2 = () => {
		sethideP2((prev) => !prev);
	};
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
					<motion.section
						animate={{ scale: submit ? 1 : 0 }}
						initial={{ scale: 0 }}
						transition={{ type: "spring", bounce: 0.6 }}
					>
						<div>
							<label>{name}</label>
							<label>{email}</label>
							<label>{p1}</label>
						</div>
						<motion.button whileTap={{ scale: 0.98 }} onClick={handleSubmit}>
							Edit your information
						</motion.button>
					</motion.section>
				) : (
					<motion.form
						animate={{ scale: submit ? 0 : 1 }}
						initial={{ scale: 0 }}
						transition={{ type: "spring", bounce: 0.6 }}
						onSubmit={handleSubmit}
					>
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
							<motion.input
								type={hideP1 ? "password" : "text"}
								placeholder="azerty"
								name="p1"
								value={p1}
								onChange={handleP1Change}
								className={` ${
									alert === "passwords are not the same" ||
									alert === "password : 7 charachers minimum !"
										? "borderRed"
										: ""
								}  ${shake ? "shake" : ""}`}

								//transition={{ type: "spring", bounce: 60 }}
							/>
							<FontAwesomeIcon
								icon={hideP1 ? "eye" : "eye-slash"}
								onClick={handleHideP1}
							/>
						</div>

						<label>Confirm your Password</label>
						<div className="inputContainer">
							<input
								type={hideP2 ? "password" : "text"}
								placeholder="azerty"
								name="p2"
								value={p2}
								onChange={handleP2Change}
								className={` ${
									alert === "passwords are not the same" ||
									alert === "password : 7 charachers minimum !"
										? "borderRed"
										: ""
								}  ${shake ? "shake" : ""}`}
							/>
							<FontAwesomeIcon
								icon={hideP2 ? "eye" : "eye-slash"}
								onClick={handleHideP2}
							/>
						</div>
						<p className="alert">{alert}</p>
						<motion.button whileTap={{ scale: 0.98 }}>Register</motion.button>
					</motion.form>
				)}
			</section>
			<Footer />
		</>
	);
}

export default App;
