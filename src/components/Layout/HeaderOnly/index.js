import Header from '~/components/Layout/components/Header';
import Contact from '~/components/Layout/components/Contact';
import Title from '~/components/Layout/components/Title';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
