import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label, seeAll }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('see-all')}>{seeAll}</p>
    </div>
  );
}

SuggestedAccount.prototype = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
