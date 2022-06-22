import React from "react";
import style from "./style.module.css";
import cashout from "./cashout.png";
import emoney from "./emoney.png";
import paket from "./paket.png";
import pulsa from "./pulsa.png";
import { Link } from "react-router-dom";

const LogoRedeem = (props) => {
	const image = () => {
		if (props.text == "cashout") {
			return cashout;
		}
		if (props.text == "emoney") {
			return emoney;
		}
		if (props.text == "paket") {
			return paket;
		}
		if (props.text == "pulsa") {
			return pulsa;
		}
	};
	return (
		<>
			{/* Ada style activenya ya */}

			<Link to="" className={`${style.redeem__category}`}>
				<img src={image()} alt="" />
				<span>{props.text}</span>
			</Link>
		</>
	);
};

export default LogoRedeem;
