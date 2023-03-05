import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <h3 className={cx('header-title')}>{title}</h3>
      </button>
    </header>
  );
}

Header.prototype = {
  title: PropTypes.node.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;
