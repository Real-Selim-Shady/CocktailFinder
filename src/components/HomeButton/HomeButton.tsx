import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeButton.css"

const HomeButton = ()=>{

	const navigate = useNavigate();


	return (
		<>
			<button className="home-button" onClick={()=>{navigate("/")}}>
				<i className="fa-solid fa-house"></i>
			</button>
		</>
	)
}

export default HomeButton;