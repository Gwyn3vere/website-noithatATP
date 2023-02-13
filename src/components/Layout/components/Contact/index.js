import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('hotline')}>
                    <BsTelephoneFill className={cx('icon')}></BsTelephoneFill>
                    <p className={cx('numberphone')}>Hotline: 0905 577 164 - 0935 567 319</p>
                    <BsEnvelopeFill className={cx('icon')}></BsEnvelopeFill>
                    <p className={cx('gmail')}>anthuongphuc2014@gmail.com</p>
                </div>
            </div>
        </header>
    );
}

export default Contact;
