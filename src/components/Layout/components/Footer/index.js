import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Footer.module.scss';

import { BsFillCaretRightFill, BsFacebook, BsMessenger, BsInstagram } from 'react-icons/bs';
import { SiZalo } from 'react-icons/si';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <figure>
                    <img className={cx('background6')} src={images.background6} alt="background6" />
                </figure>
                <div className={cx('footer-box')}>
                    <div className={cx('footer-left')}>
                        <div className={cx('logo')}>
                            <img src={images.logo} alt="logo" />
                            <p>
                                An Thượng Phúc là trang web chuyên cung cấp những mẫu nội thất, các dịch vụ thiết kế và
                                thi công lắp đặt nội thất cho các toà nhà, mẫu nhà đẹp, chung cư, văng phòng, biệt
                                thự,...
                            </p>
                            <p>
                                Sự uy tín và chất lượng tạo nên thương hiệu, An Thượng Phúc cùng với đội ngũ làm việc
                                chuyên nghiệp sẽ mang đến cho khách hàng những công trình nội thất chất lượng nhất.
                                Thường xuyên theo dõi fanpage cũng như trang web hoặc liên hệ chúng tôi để cập nhật
                                những mẫu thiết kế nội thất mới.
                            </p>
                        </div>
                    </div>
                    <div className={cx('footer-center')}>
                        <div className={cx('services')}>
                            <h2>Thông tin dịch vụ</h2>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">Dịch vụ lắp đặt cửa nhựa, sàn gỗ, vách...</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">Gia công cơ khí</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">Cung cấp vật liệu trang trí nội thất</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">Cung cấp nội thất cho các đội thi công</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">Xử lý và tráng phủ kim loại khác</a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-right')}>
                        <div className={cx('services')}>
                            <h2>Thông tin liên hệ</h2>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">ĐC: 326 Ngô Quyền, Sơn Trà, Đà Nẵng</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">GM: anthuongphuc2014@gmail.com</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">SĐT: 0905 577 164 - 0935 567 319</a>
                            </div>
                            <div className={cx('link-service')}>
                                <BsFillCaretRightFill className={cx('arrow')}></BsFillCaretRightFill>
                                <a href="http://localhost:3000/gioi-thieu">Các trang kết nối</a>
                            </div>
                            <div className={cx('platform-service')}>
                                <a className={cx('platform')} href="http://localhost:3000/gioi-thieu">
                                    <BsFacebook className={cx('icon')}></BsFacebook>
                                </a>
                                <a className={cx('platform')} href="http://localhost:3000/gioi-thieu">
                                    <BsMessenger className={cx('icon')}></BsMessenger>
                                </a>
                                <a className={cx('platform')} href="http://localhost:3000/gioi-thieu">
                                    <BsInstagram className={cx('icon')}></BsInstagram>
                                </a>
                                <a className={cx('platform')} href="http://localhost:3000/gioi-thieu">
                                    <SiZalo className={cx('icon')}></SiZalo>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('nocopyright')}>
                    <p>
                        ©2022 Copyright <span>An Thuong Phuc</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
