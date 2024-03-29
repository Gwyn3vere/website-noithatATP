import classNames from 'classnames/bind';

import styles from './News.module.scss';

const cx = classNames.bind(styles);

function News({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}> {children} </div>
            </div>
        </div>
    );
}

export default News;
