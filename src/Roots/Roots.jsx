import React from 'react';
import Home from '../Pages/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};

export default Roots;