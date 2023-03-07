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
  FlagIcon,
  HeartIcon,
  LogoModalIcon,
  MusicIcon,
  NextIcon,
  NotSoundIcon,
  PauseIcon,
  PrevIcon,
  SendToFriendIcon,
  ShareIcon,
  SoundIcon,
  WhatsAppIcon,
} from '~/components/Icons';
import videos from '~/assets/videos';
import { memo, useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
  useEffect(() => {
    const videoWrappers = document.querySelector(`.${cx('video-wrapper')}`);
    const videoTag = document.querySelector('video');

    videoWrappers.addEventListener('click', (e) => {
      const data = e.target.childNodes[0].getAttribute('data');
      if (data === 'cosplay') {
        console.log('Re-render');
        modalEl.style.display = 'flex';
      }
    });

    const closeModal = document.querySelector(`.${cx('modal-content__left-close')}`);
    const modalEl = document.querySelector(`.${cx('modal')}`);
    closeModal.addEventListener('click', () => {
      modalEl.style.display = 'none';
    });

    // console.log('Re-render');
  }, []);

  const renderShare = () => {
    return (
      <div className={cx('share')} tabIndex="-1">
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
        <span className={cx('arrow-top')}></span>
      </div>
    );
  };

  return (
    <>
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
                  <source data={'cosplay'} src={videos.video1} type="video/mp4" />
                </video>
                <div className={cx('report-group')}>
                  <FlagIcon />
                  <span>Report</span>
                </div>

                <div className={cx('active-group')}>
                  <PauseIcon />
                </div>

                <div className={cx('sound-group')}>
                  <span className={cx('sound-icon')}>
                    <NotSoundIcon />
                  </span>
                  <div className={cx('slide-container')}>
                    <input onChange={null} type="range" min="1" max="100" className={cx('slider')} />
                  </div>
                </div>
              </div>

              <div className={cx('video-action')}>
                <button className={cx('btn', 'heart')}>
                  <div className={cx('btn-content')}>
                    <span className={cx('action-icon')}>
                      <HeartIcon />
                    </span>
                    <span className={cx('action-number')}>793</span>
                  </div>
                </button>

                <button className={cx('btn')}>
                  <div className={cx('btn-content')}>
                    <span className={cx('action-icon')}>
                      <CommentIcon />
                    </span>
                    <span className={cx('action-number')}>6</span>
                  </div>
                </button>

                <Tippy offset={[90, 8]} placement="top" interactive delay={[800, 800]} render={renderShare}>
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
      {/* Video popup */}
      <div className={cx('modal', 'modal-js')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-content')}>
            <div className={cx('modal-content__left')}>
              {/* Video */}
              <div className={cx('modal-content__left-video-group')}>
                <video
                  className={cx('modal-content__left-video')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src={videos.video1} type="video/mp4" />
                </video>
              </div>
              {/* Close video */}
              <div className={cx('modal-content__left-close')}>
                <FontAwesomeIcon icon={faClose} />
              </div>
              {/* Logo */}
              <div className={cx('modal-content__left-logo')}>
                <LogoModalIcon />
              </div>
              {/* Report */}
              <div className={cx('modal-content__left-report')}>
                <FlagIcon />
                <span>Report</span>
              </div>
              {/* button prev */}
              <div className={cx('modal-content__left-prev')}>
                <PrevIcon />
              </div>
              {/* button next */}
              <div className={cx('modal-content__left-next')}>
                <NextIcon />
              </div>
              {/* Sound */}
              <div className={cx('modal-content__left-sound-group')}>
                <span className={cx('modal-content__left-sound-icon')}>
                  <NotSoundIcon />
                </span>
                <div className={cx('modal-content__left-slide-container')}>
                  <input onChange={null} type="range" min="1" max="100" className={cx('modal-content__left-slider')} />
                </div>
              </div>
              {/* Range video */}
              <div className={cx('modal-content__left-range-group')}>
                <input type="range" min="1" max="100" className={cx('modal-content__left-range')} />
                <span className={cx('modal-content__left-range-time')}>10:00/20:00</span>
              </div>
            </div>

            <div className={cx('modal-content__right')}>
              {/* top */}
              <div className={cx('modal-content__right-top')}>
                <div className={cx('modal-content__right-top-header')}></div>
              </div>
              {/* bottom */}
              <div className={cx('modal-content__right-bottom')}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
