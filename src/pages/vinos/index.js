import React from "react";

import Layout from "../../components/layout";

import Vinos from '../../images/vino1.jpg'
import Vinos2 from '../../images/vino2.jpg'
import "../../styles/menu.css";

const tragos = () => {
	return (
		<Layout>
		<section className="menu">
			<h1>Vinos</h1>
			<img src={Vinos} alt="menu de vinos" />
			<img src={Vinos2} alt="menu de vinos" />
			{/* <img src={Flyer} alt="flyer de vinos" /> */}
		  </section>
	  </Layout>
	);
};

export default tragos;
