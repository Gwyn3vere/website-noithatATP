import Header from '~/components/Layout/components/Header';
import Banner from '~/components/Layout/components/Banner';

function BannerOnly({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default BannerOnly;
