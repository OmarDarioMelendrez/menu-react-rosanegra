import React from "react";

import Layout from "../../components/layout";

import Tragos from '../../images/tragos.jpg'
import "../../styles/menu.css";

const tragos = () => {
	return (
		<Layout>
			<section className="menu">
				<h1>Tragos</h1>
				<img src={Tragos} alt="menu de tragos" />
			</section>
		</Layout>
	);
};

export default tragos;
