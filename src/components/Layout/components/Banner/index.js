import classNames from 'classnames/bind';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Hello</h2>
            </div>
        </header>
    );
}

export default Banner;
