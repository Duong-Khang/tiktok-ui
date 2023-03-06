import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import DiscoverItems from './DiscoverItems';

const cx = classNames.bind(styles);

function Discover({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {/* Discover item */}
      <DiscoverItems />
    </div>
  );
}

export default Discover;
