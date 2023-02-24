import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import images from '~/assets/images';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Slidebar() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('title')}>
                    <h1>an thượng phúc</h1>
                    <p className={cx('text-index')}>thiết kế, trang trí và thi công lắp đặt nội thất</p>
                    <p className={cx('content')}>
                        An Thượng Phúc tự hào là đơn vị thiết kế và thi công nội thất chuyên nghiệp, luôn mang lại giá
                        trị bền vững cho quý khách hàng
                    </p>
                    <div className={cx('more')}>
                        <a className={cx('more-btn')} href={'http://localhost:3000/'}>
                            Liên hệ chúng tôi
                        </a>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className={cx('slider')}>
                        <img src={images.slide1} alt="slide1" />
                    </div>
                    <div className={cx('slider')}>
                        <img src={images.slide2} alt="slide2" />
                    </div>
                    <div className={cx('slider')}>
                        <img src={images.slide3} alt="slide3" />
                    </div>
                    <div className={cx('slider')}>
                        <img src={images.slide4} alt="slide4" />
                    </div>
                    <div className={cx('slider')}>
                        <img src={images.slide5} alt="slide5" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Slidebar;
