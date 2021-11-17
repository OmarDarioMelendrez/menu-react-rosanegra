import React from 'react'
import {Link} from 'react-router-dom'

import Layout from "../../components/layout"
import BannerCelu from "../../images/banner-celu.jpg"
import BannerWeb from "../../images/banner-web.jpg"

import "../../styles/menu.css"

const menu = () => {
    return (
        <Layout>
        <section className="menu">
          <h1>Seleccionar menú</h1>
          <div className="btnsContainer">
            <Link to="/menu-principal" className="btn-link">
              <button className="btn">Menú Principal</button>
            </Link>
            <Link to="/vinos" className="btn-link">
              <button className="btn">Vinos</button>
            </Link>
            <Link to="/tragos" className="btn-link">
              <button className="btn">Tragos</button>
            </Link>
          </div>
          <img src={BannerCelu} id="baner__celu" alt="usar barbijo" />
          <img src={BannerWeb} id="baner__web" alt="usar barbijo" />
        </section>
      </Layout>
    )
}

export default menu
