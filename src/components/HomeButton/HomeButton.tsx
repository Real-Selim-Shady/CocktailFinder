import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeButton.css"

const HomeButton = ()=>{

	const navigate = useNavigate();


	return (
		<>
			<button className="home-button" onClick={()=>{navigate("/")}}>
				<p>{"<"}</p>
			</button>
		</>
	)
}

export default HomeButton;