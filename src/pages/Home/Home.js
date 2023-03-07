import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { MusicIcon, NotSoundIcon, PauseIcon, SoundIcon } from '~/components/Icons';
import videos from '~/assets/videos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
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
                  <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
                  <span className={cx('action-number')}>793</span>
                </div>
              </button>

              <button className={cx('btn')}>
                <div className={cx('btn-content')}>
                  <FontAwesomeIcon className={cx('action-icon')} icon={faCommentDots} />
                  <span className={cx('action-number')}>6</span>
                </div>
              </button>

              <button className={cx('btn')}>
                <div className={cx('btn-content')}>
                  <FontAwesomeIcon className={cx('action-icon')} icon={faShare} />
                  <span className={cx('action-number')}>Share</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

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
                  <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
                  <span className={cx('action-number')}>793</span>
                </div>
              </button>

              <button className={cx('btn')}>
                <div className={cx('btn-content')}>
                  <FontAwesomeIcon className={cx('action-icon')} icon={faCommentDots} />
                  <span className={cx('action-number')}>6</span>
                </div>
              </button>

              <button className={cx('btn')}>
                <div className={cx('btn-content')}>
                  <FontAwesomeIcon className={cx('action-icon')} icon={faShare} />
                  <span className={cx('action-number')}>Share</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
