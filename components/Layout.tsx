import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props: any) => {
    return (
        <div className={"content"}>
            <Navbar/>
            {
                props.children
            }
            <Footer/>
        </div>
    )
}

export default Layout;