import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Slidebar from './Slidebar/slidebar';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <Slidebar />
                <div className={cx('container')}>
                    <div className={cx('content')}> {children} </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
