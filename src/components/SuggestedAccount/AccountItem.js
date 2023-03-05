import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountReview from './AccountReview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderReview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountReview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy offset={[-24, 0]} placement="bottom" interactive delay={[800, 0]} render={renderReview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            alt="avatar"
            src="https://pbs.twimg.com/profile_images/1551732363964858369/_hfZX9pD_normal.jpg"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>@nickname</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>A</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.prototype = {};

export default AccountItem;
