import React, { Component } from 'react';
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer'
import Banner from "./Home"
import RowList from "../../Components/Rows/RowList/RowList"
const Home = () => {
  
        return (
            <>
                < Header/>
              <Banner />
              <RowList />
                 <Footer /> 
            </>
        );
    }


export default Home;

