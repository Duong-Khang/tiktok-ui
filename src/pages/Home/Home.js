import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import {
  ArrowIcon,
  CommentIcon,
  CopyLinkIcon,
  EmbedIcon,
  FacebookIcon,
  HeartIcon,
  MusicIcon,
  NotSoundIcon,
  PauseIcon,
  SendToFriendIcon,
  ShareIcon,
  SoundIcon,
  WhatsAppIcon,
} from '~/components/Icons';
import videos from '~/assets/videos';
import { useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentDots, faHeart, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
  useEffect(() => {
    const videoLists = document.querySelectorAll('video');
  }, []);

  const renderShare = (...props) => {
    return (
      <div className={cx('share')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <div className={cx('share-group')}>
            <Button className={cx('btn-wrapper')}>
              <div className={cx('btn-share')}>
                <EmbedIcon />
                <span className={cx('share-text')}> Embed</span>
              </div>
            </Button>

            <Button className={cx('btn-wrapper')}>
              <div className={cx('btn-share')}>
                <SendToFriendIcon />
                <span className={cx('share-text')}> Send to friends</span>
              </div>
            </Button>

            <Button className={cx('btn-wrapper')}>
              <div className={cx('btn-share')}>
                <FacebookIcon />
                <span className={cx('share-text')}> Share to Facebook</span>
              </div>
            </Button>

            <Button className={cx('btn-wrapper')}>
              <div className={cx('btn-share')}>
                <WhatsAppIcon />
                <span className={cx('share-text')}> Share to WhatsApp</span>
              </div>
            </Button>

            <Button className={cx('btn-wrapper')}>
              <div className={cx('btn-share')}>
                <CopyLinkIcon />
                <span className={cx('share-text')}> Copy link </span>
              </div>
            </Button>

            <div className={cx('btn-arrow')}>
              <ArrowIcon />
            </div>
          </div>
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video-wrapper')}>
        <img className={cx('avatar')} src={images.avatarVideo} alt="avatar" />

        <div className={cx('info')}>
          <Link className={cx('info-link')}>
            <h3 className={cx('name')}>vitamincos</h3>
            <h4 className={cx('nickname')}>🌟vitamin_cosplay🍡</h4>
            <span className={cx('time')}> · 4h ago</span>
          </Link>

          <div className={cx('video-desc')}>
            <Link className={cx('video-desc__link')}>
              <strong>#cos</strong>
            </Link>
            <Link className={cx('video-desc__link')}>
              <strong>#cosplay</strong>
            </Link>
            <Link className={cx('video-desc__link')}>
              <strong>#genshinimpact</strong>
            </Link>
            <Link className={cx('video-desc__link')}>
              <strong>#vitamincos</strong>
            </Link>
          </div>

          <div className={cx('video-music')}>
            <Link>
              <MusicIcon /> nhạc nền - 🌟vitamin_cosplay🍡
            </Link>
          </div>
          <div className={cx('video-content')}>
            <div className={cx('video')}>
              <video className={cx('video-tiktok')} width="280" height="500">
                <source src={videos.video1} type="video/mp4" />
              </video>

              <div className={cx('active-group')}>
                <PauseIcon />
                {/* <FontAwesomeIcon icon={faPlay} /> */}
              </div>

              <div className={cx('sound-group')}>
                <span className={cx('sound-icon')}>
                  {/* <SoundIcon /> */}
                  <NotSoundIcon />
                </span>
                <div className={cx('slide-container')}>
                  <input type="range" min="1" max="100" value="50" className={cx('slider')} />
                </div>
              </div>
            </div>

            <div className={cx('video-action')}>
              <button className={cx('btn', 'heart')}>
                <div className={cx('btn-content')}>
                  <span className={cx('action-icon')}>
                    <HeartIcon />
                  </span>
                  {/* <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} /> */}
                  <span className={cx('action-number')}>793</span>
                </div>
              </button>

              <button className={cx('btn')}>
                <div className={cx('btn-content')}>
                  <span className={cx('action-icon')}>
                    <CommentIcon />
                  </span>
                  {/* <FontAwesomeIcon className={cx('action-icon')} icon={faCommentDots} /> */}
                  <span className={cx('action-number')}>6</span>
                </div>
              </button>

              <Tippy offset={[90, 0]} placement="top" interactive delay={[800, 0]} render={renderShare}>
                <button className={cx('btn')}>
                  <div className={cx('btn-content')}>
                    <span className={cx('action-icon')}>
                      <ShareIcon />
                    </span>
                    <span className={cx('action-number')}>Share</span>
                  </div>
                </button>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
