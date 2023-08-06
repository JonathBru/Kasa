import { Outlet } from "react-router-dom";
import classes from "../styles/Root.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function RootLayout() {
    return (
        <>
            <div className={classes.Layout}>
                <div className={classes.Header}>
                <Header />
                </div>

                <main className={classes.Main_content}>
                <Outlet></Outlet>
                </main>

                <Footer />    
            </div>
        </>
    );
}