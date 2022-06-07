import React from "react";
import style from "./TotalPoint.module.css";

const TotalPoint = () => {
	return (
		<div className={`mb-4 mx-1 mb-xxl-0 ${style.container_card}`}>
			<span className={style.point}>30.000</span>
			<span className={style.description}>Total Entry Points</span>
		</div>
	);
};

export default TotalPoint;
