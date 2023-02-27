import Header from '~/components/Layout/components/Header';
import Banner from '~/components/Layout/components/Banner';
import Footer from '~/components/Layout/components/Footer';

function BannerOnly({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default BannerOnly;
