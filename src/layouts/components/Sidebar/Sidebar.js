import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import Discover from '~/components/Discover';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <>
      <aside className={cx('wrapper')}>
        <Menu>
          <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          />
          <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>
        <SuggestedAccount label="Suggested accounts" seeAll="See all" />
        <SuggestedAccount label="Following accounts" seeAll="See more" />

        {/* Discover */}
        <Discover label="Discover" />
      </aside>
    </>
  );
}

export default Sidebar;
