import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const PagesLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                { children }
            </main>
            <Footer />
        </>
    );
};

export default PagesLayout;