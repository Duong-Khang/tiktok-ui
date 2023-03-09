import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu';
import {
  AddIcon,
  CoinsIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  SettingIcon,
  UploadIcon,
  UserIcon,
} from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Vietnamese',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const currentUser = true;

  const userMenu = [
    {
      icon: <UserIcon />,
      title: 'View profile',
      to: '/user',
    },
    {
      icon: <CoinsIcon />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <SettingIcon />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            {' '}
            <img src={images.logo} alt="logo" />
          </Link>
        </div>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <div className={cx('action-btn', 'action-btn-upload')}>
                  <AddIcon />
                  <span className={cx('action-btn-title')}>Upload</span>
                </div>
              </Tippy>

              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon className={cx('msg-icon')} />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <sub className={cx('action-inbox')}>64</sub>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/219732745_1155562984929930_2704001488776663981_n.jpg?stp=dst-jpg_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=1Z63cDM1PP4AX_k3_KY&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCkyIilsJRfd65a2Xiw5C5zFmDlpJuJs3lgxrHVmZTHKw&oe=64072628"
                // fallback="https://avatars.githubusercontent.com/u/18712667?s=48&v=4"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
