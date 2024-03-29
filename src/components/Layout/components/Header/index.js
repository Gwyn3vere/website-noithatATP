import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { BsSearch, BsJustify } from 'react-icons/bs';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import useSticky from './sticky';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Header() {
    const { sticky, stickyRef, stickyColor } = useSticky();

    return (
        <header ref={stickyRef} className={cx('wrapper', { sticky, stickyColor })}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="atp" />
                </div>
                <div className={cx('menu-btn')}>
                    <input type="checkbox" id="menu-active" className={cx('none')} />
                    <label htmlFor="menu-active">
                        <BsJustify className={cx('menu-ico')}></BsJustify>
                    </label>
                    <div className={cx('menu')}>
                        <nav>
                            <ul className={cx('navmenu')}>
                                <li className={cx('navblock')}>
                                    <a className={cx('navtext')} href={'http://localhost:3000/'}>
                                        Trang chủ
                                    </a>
                                </li>
                                <li className={cx('navblock')}>
                                    <a className={cx('navtext')} href={'http://localhost:3000/tat-ca-san-pham'}>
                                        Giới thiệu
                                    </a>
                                </li>
                                <li className={cx('navblock')}>
                                    <div className={cx('dropdown-hover')}>
                                        <a className={cx('navtext')} href={'http://localhost:3000/gioi-thieu'}>
                                            Sản phẩm
                                        </a>
                                    </div>
                                    <div className={cx('dropdown-menu')}>
                                        <ul>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={cx('navblock')}>
                                    <a className={cx('navtext')} href={'http://localhost:3000/tin-tuc'}>
                                        Tin tức
                                    </a>
                                </li>
                                <li className={cx('navblock')}>
                                    <a className={cx('navtext')} href={'http://localhost:3000/lien-he'}>
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm sản phẩm" spellCheck={false}></input>

                    <Tippy content="Tìm kiếm" placement="bottom">
                        <button className={cx('search-btn')}>
                            <BsSearch></BsSearch>
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
