import classNames from 'classnames/bind';

import images from '~/assets/images';
import NumberCounter from './number';
import styles from './Homepage.module.scss';

import { BsFillDropletFill, BsFillDoorOpenFill, BsFillGearFill, BsBriefcaseFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Nội dung 1 */}
                <section className={cx('container1')}>
                    <div className={cx('introduction')}>
                        <div className={cx('pre-intro')}>
                            <p className={cx('name-company')}>giới thiệu về an thượng phúc</p>
                            <p className={cx('describe')}>
                                An Thượng Phúc là đơn vị chuyên thiết kế, thi công và lắp nặt nội thất nhà cửa chuyên
                                nghiệp. Chúng tôi luôn muốn mang lại nhiều giá trị bền vững đi kèm với chất lượng nội
                                thất để có thể phục vụ quý khách hàng muốn tìm đến dịch vụ của chúng tôi. Đem lại một
                                cách nhìn nội thất đẹp và ấm cúng trong căn nhà của quý khách.
                            </p>
                            <p className={cx('describe')}>
                                Trải qua nhiều năm kinh nghiệp, An Thượng Phúc dần nhận được nhiều sự tin tưởng và ủng
                                hộ của quý khách hàng. Đó là điều vô cùng hãnh diện khi quý khách hàng tin tưởng và chọn
                                lựa dịch vụ của chúng tôi.
                            </p>
                            <p className={cx('describe')}>
                                Cùng với đội ngũ thi công chuyên nghiệp và nhiều kinh nghiệm, An Thượng Phúc sẽ luôn
                                đồng hành cùng quý khách hàng thực hiện mọi mong muốn một không gian nội thất hiện đại,
                                đem lại sự hài lòng cho quý khách và phát triển nét đẹp nhà cửa lên một tầm cao mới...
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
                </section>

                {/* Nội dung 2 */}
                <section className={cx('container2')}>
                    <div className={cx('top-box')}></div>
                    <div className={cx('bot-box', 'shape')}></div>
                    <img className={cx('background2', 'middle-img')} src={images.background2} alt="background2" />
                    <div className={cx('center-box')}>
                        <div className={cx('text-box')}>
                            <h3>An Thượng Phúc</h3>
                            <h2>Thiết kế nội thất & Định hướng sáng tạo</h2>
                        </div>
                    </div>
                </section>

                {/* Nội dung 3 */}
                <section className={cx('container3')}>
                    <div className={cx('spl')}>
                        <h2 className={cx('title-spl')}>
                            Tại sao nên chọn dịch vụ của <span>An Thượng Phúc</span>
                        </h2>

                        <div className={cx('special')}>
                            <div className={cx('left-icon')}>
                                <div className={cx('icon-1')}>
                                    <div className={cx('inner-content')}>
                                        <h2>Kinh nghiệm</h2>
                                        <p>
                                            Với hơn 10 năm hoạt động, An Thượng phúc có đội ngũ dày dặn kinh nghiệm
                                            trong việc thiết kế và thi công nội thất, luôn đảm bảo sản phẩm được thực
                                            hiện đúng với yêu cầu của quý khách
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('icon-2')}>
                                    <div className={cx('inner-content')}>
                                        <h2>Phong cách</h2>
                                        <p>
                                            Sở hữu hơn 200 mẫu mã thiết kế, An Thượng Phúc mang đến khách hàng một cách
                                            nhìn phong phú và đa dạng, khách hàng có thể lựa chọn phù hợp phong cách nội
                                            thất với căn nhà của mình
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
                                            Chi phí luôn là mối quan tâm hàng đầu của khách hàng, vì vậy An Thượng Phúc
                                            luôn tối ưu chi phí để phù hợp với tài chính và luôn đảm bảo hoàn thành yêu
                                            cầu của khách hàng
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('icon-4')}>
                                    <div className={cx('inner-content')}>
                                        <h2>Chất lượng</h2>
                                        <p>
                                            Mẫu mã đẹp đi kèm với chất lượng, An Thượng Phúc luôn tỉ mỉ từ việc thiết kế
                                            thi công đến khi hoàn thành một cách cẩn thận và uy tín nhất, tạo sự yên tâm
                                            cho khách hàng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nội dung 4 */}
                <section className={cx('container4')}>
                    <img className={cx('background1')} src={images.background1} alt="background1" />
                    <div className={cx('table')}>
                        <div className={cx('table-content')}>
                            <div className={cx('total')}>
                                <h1 className={cx('number')}>
                                    +
                                    <NumberCounter number={27} />
                                </h1>
                                <p>Công trình</p>
                            </div>
                            <div className={cx('total')}>
                                <h1 className={cx('number')}>
                                    +
                                    <NumberCounter number={300} />
                                </h1>
                                <p>Sản phẩm</p>
                            </div>
                            <div className={cx('total')}>
                                <h1 className={cx('number')}>
                                    +
                                    <NumberCounter number={54} />
                                </h1>
                                <p>Mẫu mã</p>
                            </div>
                            <div className={cx('total')}>
                                <h1 className={cx('number')}>
                                    +
                                    <NumberCounter number={100} />
                                </h1>
                                <p>Dự án</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nội dung 5 */}
                <section className={cx('container5')}>
                    <div className={cx('row')}>
                        <div className={cx('services')}>
                            <img className={cx('background3')} src={images.background3} alt="background3" />
                        </div>
                        <div className={cx('services')}>
                            <div className={cx('top-service')}>
                                <div className={cx('serv')}>
                                    <BsFillDropletFill className={cx('icon')}></BsFillDropletFill>
                                    <h2>Trang trí nội thất</h2>
                                    <p className={cx('text')}>
                                        Sàn gỗ, sàn gỗ nhựa hèm khóa, tấm ốp lam sóng, tấm nano, tấm pvc vân đá, alu,
                                        poly....
                                    </p>
                                </div>
                                <div className={cx('serv')}>
                                    <BsFillDoorOpenFill className={cx('icon')}></BsFillDoorOpenFill>
                                    <h2>Cung cấp nội thất</h2>
                                    <p>
                                        Cung cấp sản phẩm nội thất cho các đội thi công, nhà thầu công trình và công ty
                                        thiết kế thi công
                                    </p>
                                </div>
                            </div>
                            <div className={cx('bot-service')}>
                                <div className={cx('serv')}>
                                    <BsFillGearFill className={cx('icon')}></BsFillGearFill>
                                    <h2>Thi công cơ khí</h2>
                                    <p className={cx('text')}>
                                        Cửa chống cháy, cửa lề sàn, cửa cuốn, cửa sắt, mái vòm sắt và tất cả các công
                                        trình cơ khí liên quan tại Đà Nẵng.
                                    </p>
                                </div>
                                <div className={cx('serv')}>
                                    <BsBriefcaseFill className={cx('icon')}></BsBriefcaseFill>
                                    <h2>Thi công lắp đặt</h2>
                                    <p>
                                        Cửa nhôm xingfa, vách nhôm kính mặt dựng, cửa gỗ nhựa cmposite, cửa gỗ nhựa ép
                                        tấm ecowood (ABS)...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nội dung 6 */}
                <section className={cx('container6')}>
                    <div className={cx('link')}>
                        <div className={cx('left-box')}>
                            <img className={cx('background4')} src={images.background4} alt="background4" />
                            <div className={cx('content-box')}>
                                <h3>Dịch vụ thiết kế và thi công nội thất</h3>
                                <p>
                                    Mang đến mang đến nhiều phong cách mới lạ và đầy tính sáng tạo cho không gian nội
                                    thất của bạn.
                                </p>
                            </div>
                        </div>
                        <div className={cx('right-box')}>
                            <div className={cx('shape-box')}>
                                <div className={cx('rectangle')}></div>
                                <img className={cx('background5')} src={images.background5} alt="background5" />
                            </div>
                            <div className={cx('button-box')}>
                                <p>
                                    Bằng tất cả tâm huyết, tận tâm và tận tình, <span>An Thượng Phúc</span> luôn muốn
                                    biến không gian ngôi nhà của bạn trở nên thư giãn, xinh đẹp và yên bình nhất. Và
                                    cũng là nơi cho mọi người trong gia đình khi trở về thật sự ấm cúng.
                                </p>
                                <div className={cx('contact')}>
                                    <a className={cx('contact-btn')} href="http://localhost:3000/lien-he">
                                        Liên hệ chúng tôi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nội dung 7 */}
                <section className={cx('container7')}>
                    <div className={cx('library')}>
                        <div className={cx('top-library')}>
                            <div className={cx('animation')}>
                                <figure>
                                    <img className={cx('lib1')} src={images.lib1} alt="lib1" />
                                </figure>
                                <img className={cx('logo')} src={images.text} alt="logo" />
                            </div>
                            <div className={cx('animation')}>
                                <figure>
                                    <img className={cx('lib2')} src={images.lib2} alt="lib2" />
                                </figure>
                                <img className={cx('logo')} src={images.text} alt="logo" />
                            </div>
                            <div className={cx('animation')}>
                                <figure>
                                    <img className={cx('lib3')} src={images.lib3} alt="lib3" />
                                </figure>
                                <img className={cx('logo')} src={images.text} alt="logo" />
                            </div>
                        </div>
                        <div className={cx('bot-library')}>
                            <div className={cx('animation')}>
                                <figure>
                                    <img className={cx('lib4')} src={images.lib4} alt="lib4" />
                                </figure>
                                <img className={cx('logo')} src={images.text} alt="logo" />
                            </div>
                            <div className={cx('animation')}>
                                <figure>
                                    <img className={cx('lib5')} src={images.lib5} alt="lib5" />
                                </figure>
                                <img className={cx('logo')} src={images.text} alt="logo" />
                            </div>
                            <div className={cx('animation')}>
                                <figure>
                                    <img className={cx('lib6')} src={images.lib6} alt="lib6" />
                                </figure>
                                <img className={cx('logo')} src={images.text} alt="logo" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
