import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { BsFillXCircleFill, BsSearch } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}></div>
                <div className={cx('menu')}>
                    <nav>
                        <ul className={cx('navmenu')}>
                            <li className={cx('navblock')}>
                                <a className={cx('navtext')} href={'https://www.facebook.com/'}>
                                    Trang chủ
                                </a>
                            </li>
                            <li className={cx('navblock')}>
                                <a className={cx('navtext')} href={'https://www.facebook.com/'}>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className={cx('navblock')}>
                                <a className={cx('navtext')} href={'https://www.facebook.com/'}>
                                    Sản phẩm
                                </a>
                            </li>
                            <li className={cx('navblock')}>
                                <a className={cx('navtext')} href={'https://www.facebook.com/'}>
                                    Dịch vụ
                                </a>
                            </li>
                            <li className={cx('navblock')}>
                                <a className={cx('navtext')} href={'https://www.facebook.com/'}>
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm sản phẩm" spellCheck={false}></input>

                    <button className={cx('clear')}>
                        <BsFillXCircleFill className={cx('icon')}></BsFillXCircleFill>
                    </button>

                    <button className={cx('search-btn')}>
                        <BsSearch></BsSearch>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
