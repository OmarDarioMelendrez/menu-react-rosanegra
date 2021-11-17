import React from 'react'

import Layout from "../../components/layout"

import Menu1 from '../../images/mp1.jpg'
import Menu2 from '../../images/mp2.jpg'
import '../../styles/menu.css'


const MenuPrincipal = () => {
    return (
        <Layout>
        <section className="menu">
            <h1>Menú Principal</h1>
            <img src={Menu1} alt="imagen menu principal" />
            <img src={Menu2} alt="imagen menu principal" />
          </section>
      </Layout>
    )
}

export default MenuPrincipal
