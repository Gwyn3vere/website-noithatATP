import Header from '~/components/Layout/components/Header';
import Slidebar from './Slidebar/slidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Slidebar />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
