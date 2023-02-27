import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Hello</h2>
            </div>
        </header>
    );
}

export default Title;
