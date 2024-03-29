import Header from '~/components/Layout/components/Header';
import Title from '~/components/Layout/components/Title';
import Footer from '~/components/Layout/components/Footer';

function TitleOnly({ children }) {
    return (
        <div>
            <Header />
            <Title />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default TitleOnly;
