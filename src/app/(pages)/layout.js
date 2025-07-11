import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const PagesLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </>
    );
};

export default PagesLayout;