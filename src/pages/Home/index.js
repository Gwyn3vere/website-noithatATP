import styles from './Homepage.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Nội dung 1 */}
                <div className={cx('introduction')}>
                    <div className={cx('pre-intro')}>
                        <p className={cx('name-company')}>giới thiệu về an thượng phúc</p>
                        <p className={cx('describe')}>
                            An Thượng Phúc là đơn vị chuyên thiết kế, thi công và lắp nặt nội thất nhà cửa chuyên
                            nghiệp. Chúng tôi luôn muốn mang lại nhiều giá trị bền vững đi kèm với chất lượng nội thất
                            để có thể phục vụ quý khách hàng muốn tìm đến dịch vụ của chúng tôi. Đem lại một cách nhìn
                            nội thất đẹp và ấm cúng trong căn nhà của quý khách.
                        </p>
                        <p className={cx('describe')}>
                            Trải qua nhiều năm kinh nghiệp, An Thượng Phúc dần nhận được nhiều sự tin tưởng và ủng hộ
                            của quý khách hàng. Đó là điều vô cùng hãnh diện khi quý khách hàng tin tưởng và chọn lựa
                            dịch vụ của chúng tôi.
                        </p>
                        <p className={cx('describe')}>
                            Cùng với đội ngũ thi công chuyên nghiệp và nhiều kinh nghiệm, An Thượng Phúc sẽ luôn đồng
                            hành cùng quý khách hàng thực hiện mọi mong muốn một không gian nội thất hiện đại, đem lại
                            sự hài lòng cho quý khách và phát triển nét đẹp nhà cửa lên một tầm cao mới...
                        </p>
                        <div className={cx('more')}>
                            <a className={cx('more-btn')} href={'http://localhost:3000/'}>
                                xem thêm
                            </a>
                        </div>
                    </div>
                    <div className={cx('pre-intro')}>
                        <img src={images.intro} alt="intro" />
                    </div>
                </div>
                {/* Nội dung 2 */}
                <div className={cx('special')}>
                    <div className={cx('left-icon')}>
                        <div className={cx('icon-1')}>
                            <div className={cx('inner-content')}>
                                <h2>Kinh nghiệm</h2>
                                <p>
                                    Với hơn 10 năm hoạt động, An Thượng phúc có đội ngũ dày dặn kinh nghiệm trong việc
                                    thiết kế và thi công nội thất, luôn đảm bảo sản phẩm được thực hiện đúng với yêu cầu
                                    của quý khách
                                </p>
                            </div>
                        </div>
                        <div className={cx('icon-2')}>
                            <div className={cx('inner-content')}>
                                <h2>Phong cách</h2>
                                <p>
                                    Sở hữu hơn 200 mẫu mã thiết kế, An Thượng Phúc mang đến khách hàng một cách nhìn
                                    phong phú và đa dạng, khách hàng có thể lựa chọn phù hợp phong cách nội thất với căn
                                    nhà của mình
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('center-icon')}>
                        <div className={cx('center-circle')}>
                            <div className={cx('inside-circle')}>
                                <img className={cx('inside')} src={images.circle} alt="circle" />
                            </div>
                        </div>
                    </div>

                    <div className={cx('right-icon')}>
                        <div className={cx('icon-3')}>
                            <div className={cx('inner-content')}>
                                <h2>Chi phí</h2>
                                <p>
                                    Chi phí luôn là mối quan tâm hàng đầu của khách hàng, vì vậy An Thượng Phúc luôn tối
                                    ưu chi phí để phù hợp với tài chính và luôn đảm bảo hoàn thành yêu cầu của khách
                                    hàng
                                </p>
                            </div>
                        </div>
                        <div className={cx('icon-4')}>
                            <div className={cx('inner-content')}>
                                <h2>Chất lượng</h2>
                                <p>
                                    Mẫu mã đẹp đi kèm với chất lượng, An Thượng Phúc luôn tỉ mỉ từ việc thiết kế thi
                                    công đến khi hoàn thành một cách cẩn thận và uy tín nhất, tạo sự yên tâm cho khách
                                    hàng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nội dung 3 */}
                <div className={cx('hl-product')}></div>
            </div>
        </div>
    );
}

export default HomePage;
