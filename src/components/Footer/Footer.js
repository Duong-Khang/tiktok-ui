import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FooterIcon } from '../Icons';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('footer-title')}>
        <Link className={cx('footer-link')} to="#">
          <img className={cx('footer-img')} src={images.footerImage} alt="footer images" />
          <div className={cx('footer-create')}>
            <FooterIcon className={cx('footer-icon')} />
            <h4>Create effects</h4>
          </div>
        </Link>
      </div>

      <div className={cx('footer-content')}>
        <Link className={cx('footer-content__link')}>About</Link>
        <Link className={cx('footer-content__link')}>Newsroom</Link>
        <Link className={cx('footer-content__link')}>Contact</Link>
        <Link className={cx('footer-content__link')}>Careers</Link>
        <Link className={cx('footer-content__link')}>ByteDance</Link>
      </div>

      <div className={cx('footer-content')}>
        <Link className={cx('footer-content__link')}>TikTok for Good</Link>
        <Link className={cx('footer-content__link')}>Advertise</Link>
        <Link className={cx('footer-content__link')}>Developers</Link>
        <Link className={cx('footer-content__link')}>Transparency</Link>
        <Link className={cx('footer-content__link')}>TikTok Rewards</Link>
        <Link className={cx('footer-content__link')}>TikTok Browse</Link>
        <Link className={cx('footer-content__link')}>TikTok Embeds</Link>
      </div>

      <div className={cx('footer-content')}>
        <Link className={cx('footer-content__link')}>Help</Link>
        <Link className={cx('footer-content__link')}>Safety</Link>
        <Link className={cx('footer-content__link')}>Terms</Link>
        <Link className={cx('footer-content__link')}>Privacy</Link>
        <Link className={cx('footer-content__link')}>Creator Portal</Link>
        <Link className={cx('footer-content__link')}>Community Guidelines</Link>
      </div>

      <p className={cx('footer-copyright')}>© 2023 TikTok</p>
    </div>
  );
}

export default Footer;
