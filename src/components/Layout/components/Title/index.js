import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title() {
    return <header className={cx('wrapper')}></header>;
}

export default Title;
