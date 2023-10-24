import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = ()=>{

	const navigate = useNavigate();


	return (
		<>
			<button className="home-button" onClick={()=>{navigate("/")}}>
				<p>Go to home page</p>
			</button>
		</>
	)
}

export default HomeButton;