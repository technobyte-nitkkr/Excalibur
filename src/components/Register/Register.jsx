import React from "react";
import "./Register.css";

const unstopWhiteLogo = "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/white/Unstop-Logo-White-Small.png"
const unstopBlueLogo = "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Small.png"

function Register() {
	return (
		<div className="register flex flex-col justify-center items-center text-white font-pirata text-[1.5rem] mt-10">
			<span className="font-mono font-semibold">
				Powered by
				<img
					src={unstopWhiteLogo}
					alt="Unstop Logo"
					className="inline h-8 ml-2"
				/>
			</span>
			<button>
				<a
					href="https://unstop.com/o/Gxp2Z70?lb=mEyD8FnM&utm_medium=Share&utm_source=debatdas3354&utm_campaign=Innovation_challenge"
					target="_blanck"
				>
					Register Here
				</a>
			</button>
		</div>
	);
}

export default Register;
