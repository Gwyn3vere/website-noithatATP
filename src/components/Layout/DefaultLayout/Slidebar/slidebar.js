import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';

const cx = classNames.bind(styles);

function Slidebar() {
    return <div className={cx('wrapper')}></div>;
}

export default Slidebar;
