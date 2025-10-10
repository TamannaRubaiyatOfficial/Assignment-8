import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Root;