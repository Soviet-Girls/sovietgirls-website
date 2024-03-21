import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Root: FC = () => {
    return (
        <div className="root">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Root;