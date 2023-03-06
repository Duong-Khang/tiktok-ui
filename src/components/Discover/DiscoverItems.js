import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MusicIcon, SharpIcon } from '../Icons';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

const DISCOVER_ITEMS = [
  {
    icon: <SharpIcon />,
    title: 'suthatla',
  },
  {
    icon: <SharpIcon />,
    title: 'mackedoi',
  },
  {
    icon: <SharpIcon />,
    title: 'sansangthaydoi',
  },
  {
    icon: <MusicIcon />,
    title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia',
  },
  {
    icon: <MusicIcon />,
    title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
  },
  {
    icon: <MusicIcon />,
    title: 'Thiên Thần Tình Yêu - RICKY STAR',
  },
  {
    icon: <SharpIcon />,
    title: '7749hieuung',
  },
  {
    icon: <SharpIcon />,
    title: 'genzlife',
  },
  {
    icon: <MusicIcon />,
    title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
  },
  {
    icon: <MusicIcon />,
    title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
  },
];

function DiscoverItems() {
  return (
    <div className={cx('discover-list')}>
      {DISCOVER_ITEMS.map((item, index) => (
        <Link key={index} className={cx('discover-item')} to={'/'}>
          <span className={cx('discover-icon')}>{item.icon}</span>
          <span className={cx('discover-title')}>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default DiscoverItems;
