import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import {
  ArrowIcon,
  CommentIcon,
  CopyLinkIcon,
  EmbedIcon,
  EmojiIcon,
  FacebookIcon,
  FlagIcon,
  HeartIcon,
  HeartIconRegular,
  LogoModalIcon,
  MenuIcon,
  MusicIcon,
  NextIcon,
  NotSoundIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  SendToFriendIcon,
  ShareIcon,
  SoundIcon,
  UserTagIcon,
  WhatsAppIcon,
} from '~/components/Icons';
import videos from '~/assets/videos';
import { memo, useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import TippyNoHeadless from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const cx = classNames.bind(styles);

function Home() {
  //Tạo state để lưu kết quả từ API
  const [userVideos, setUserVideos] = useState([]);
  const [volume, setVolume] = useState(50);

  //Gọi API
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://tiktok-all-in-one.p.rapidapi.com/search/video',
      params: { query: 'senyamiku', offset: '20', sort: '1' },
      headers: {
        'X-RapidAPI-Key': '37dce92fddmsh0469c5fb81dc9fbp1afcccjsnfba276d82b5e',
        'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setUserVideos(response.data.aweme_list);

        // Xử lý khi gọi api song
        const videoTags = document.querySelectorAll(`.${cx('video-tiktok')}`);
        const notSoundBtnEls = document.querySelectorAll(`.${cx('not-sound')}`);
        const soundBtnEls = document.querySelectorAll(`.${cx('sound')}`);

        notSoundBtnEls.forEach((notSoundBtnEl) => {
          notSoundBtnEl.addEventListener('click', () => {
            soundBtnEls.forEach((soundBtnEl) => {
              soundBtnEl.style.display = 'block';
            });
            videoTags.forEach((videoTag) => {
              videoTag.muted = false;
            });
            notSoundBtnEls.forEach((notSoundBtnEl) => {
              notSoundBtnEl.style.display = 'none';
            });
          });
        });

        soundBtnEls.forEach((soundBtnEl) => {
          soundBtnEl.addEventListener('click', () => {
            notSoundBtnEls.forEach((notSoundBtnEl) => {
              notSoundBtnEl.style.display = 'block';
            });
            videoTags.forEach((videoTag) => {
              videoTag.muted = true;
            });
            soundBtnEls.forEach((soundBtnEl) => {
              soundBtnEl.style.display = 'none';
            });
          });
        });

        const playActions = document.querySelectorAll(`.${cx('play-action')}`);
        const pauseActions = document.querySelectorAll(`.${cx('pause-action')}`);

        pauseActions.forEach((pauseAction, index) => {
          pauseAction.addEventListener('click', () => {
            pauseAction.style.display = 'none';
            playActions[index].style.display = 'block';
            videoTags[index].pause();
          });
        });

        playActions.forEach((playAction, index) => {
          playAction.addEventListener('click', () => {
            playAction.style.display = 'none';
            pauseActions[index].style.display = 'block';
            videoTags[index].play();
          });
        });

        window.addEventListener('scroll', () => {
          for (let i = 0; i < videoTags.length; i++) {
            if (videoTags[i].getBoundingClientRect().y > 0 && videoTags[i].getBoundingClientRect().y < 500) {
              videoTags[i].play();
              pauseActions[i].style.display = 'block';
              playActions[i].style.display = 'none';
            } else {
              videoTags[i].pause();
              pauseActions[i].style.display = 'none';
              playActions[i].style.display = 'block';
            }
          }
        });

        videoTags.forEach((videoTag) => {
          videoTag.volume = (volume / 100).toFixed(1);
        });

        //Modal
        const videoWrappers = document.querySelectorAll(`.${cx('video-wrapper')}`);
        const closeModal = document.querySelector(`.${cx('modal-content__left-close')}`);
        const modalEl = document.querySelector(`.${cx('modal')}`);

        videoWrappers.forEach((videoWrapper) => {
          videoWrapper.addEventListener('click', (e) => {
            const data = e.target.childNodes[0].getAttribute('data');
            if (data === 'cosplay') {
              modalEl.style.display = 'flex';
            }
          });
        });

        closeModal.addEventListener('click', () => {
          modalEl.style.display = 'none';
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   const videoWrappers = document.querySelectorAll(`.${cx('video-wrapper')}`);
  //   const closeModal = document.querySelector(`.${cx('modal-content__left-close')}`);
  //   const modalEl = document.querySelector(`.${cx('modal')}`);
  //   videoWrappers.forEach((videoWrapper) => {
  //     videoWrapper.addEventListener('click', (e) => {
  //       const data = e.target.childNodes[0].getAttribute('data');
  //       if (data === 'cosplay') {
  //         console.log('Re-render');
  //         modalEl.style.display = 'flex';
  //       }
  //     });
  //   });
  //   closeModal.addEventListener('click', () => {
  //     modalEl.style.display = 'none';
  //   });
  // }, []);

  // useEffect(() => {
  //   const videoTags = document.querySelectorAll(`.${cx('video-tiktok')}`);
  //   const notSoundBtnEls = document.querySelectorAll(`.${cx('not-sound')}`);
  //   const soundBtnEls = document.querySelectorAll(`.${cx('sound')}`);
  //   notSoundBtnEls.forEach((notSoundBtnEl) => {
  //     notSoundBtnEl.addEventListener('click', () => {
  //       soundBtnEls.forEach((soundBtnEl) => {
  //         soundBtnEl.style.display = 'block';
  //       });
  //       videoTags.forEach((videoTag) => {
  //         videoTag.muted = false;
  //       });
  //       notSoundBtnEls.forEach((notSoundBtnEl) => {
  //         notSoundBtnEl.style.display = 'none';
  //       });
  //     });
  //   });
  //   soundBtnEls.forEach((soundBtnEl) => {
  //     soundBtnEl.addEventListener('click', () => {
  //       notSoundBtnEls.forEach((notSoundBtnEl) => {
  //         notSoundBtnEl.style.display = 'block';
  //       });
  //       videoTags.forEach((videoTag) => {
  //         videoTag.muted = true;
  //       });
  //       soundBtnEls.forEach((soundBtnEl) => {
  //         soundBtnEl.style.display = 'none';
  //       });
  //     });
  //   });
  //   const playActions = document.querySelectorAll(`.${cx('play-action')}`);
  //   const pauseActions = document.querySelectorAll(`.${cx('pause-action')}`);
  //   pauseActions.forEach((pauseAction, index) => {
  //     pauseAction.addEventListener('click', () => {
  //       pauseAction.style.display = 'none';
  //       playActions[index].style.display = 'block';
  //       videoTags[index].pause();
  //     });
  //   });
  //   playActions.forEach((playAction, index) => {
  //     playAction.addEventListener('click', () => {
  //       playAction.style.display = 'none';
  //       pauseActions[index].style.display = 'block';
  //       videoTags[index].play();
  //     });
  //   });

  //   window.addEventListener('scroll', () => {
  //     for (let i = 0; i < videoTags.length; i++) {
  //       if (videoTags[i].getBoundingClientRect().y > 0 && videoTags[i].getBoundingClientRect().y < 500) {
  //         setListVideo([videoTags[i]]);
  //         videoTags[i].play();
  //         pauseActions[i].style.display = 'block';
  //         playActions[i].style.display = 'none';
  //       } else {
  //         videoTags[i].pause();
  //         pauseActions[i].style.display = 'none';
  //         playActions[i].style.display = 'block';
  //       }
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   if (listVideo.length > 0) {
  //     listVideo[0].loop = true;
  //     listVideo[0].play();
  //   }
  // }, [listVideo]);

  // useEffect(() => {
  //   const videoTags = document.querySelectorAll(`.${cx('video-tiktok')}`);
  //   videoTags.forEach((videoTag) => {
  //     videoTag.volume = (volume / 100).toFixed(1);
  //   });
  // }, [volume]);

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

  const renderShareModal = () => {
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
          </div>
        </PopperWrapper>
        <span className={cx('arrow-bottom')}></span>
      </div>
    );
  };

  return (
    <>
      <div className={cx('wrapper')}>
        {/* <div className={cx('video-wrapper')}>
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
                <video loop muted className={cx('video-tiktok')} width="280" height="500">
                  <source data={'cosplay'} src={videos.video1} type="video/mp4" />
                </video>

                <div className={cx('report-group')}>
                  <FlagIcon />
                  <span>Report</span>
                </div>

                <div className={cx('active-group', 'pause-action')}>
                  <PauseIcon />
                </div>

                <div className={cx('active-group', 'play-action')}>
                  <PlayIcon />
                </div>

                <div className={cx('sound-group')}>
                  <span className={cx('sound-icon', 'not-sound')}>
                    <NotSoundIcon />
                  </span>
                  <span className={cx('sound-icon', 'sound')}>
                    <SoundIcon />
                  </span>
                  <div className={cx('slide-container')}>
                    <input
                      onChange={(e) => {
                        setVolume(e.target.value);
                      }}
                      type="range"
                      value={volume}
                      min="0"
                      max="100"
                      className={cx('slider')}
                    />
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
                <video loop muted className={cx('video-tiktok')} width="280" height="500">
                  <source data={'cosplay'} src={videos.video2} type="video/mp4" />
                </video>
                <div className={cx('report-group')}>
                  <FlagIcon />
                  <span>Report</span>
                </div>

                <div className={cx('active-group', 'pause-action')}>
                  <PauseIcon />
                </div>

                <div className={cx('active-group', 'play-action')}>
                  <PlayIcon />
                </div>

                <div className={cx('sound-group')}>
                  <span className={cx('sound-icon', 'not-sound')}>
                    <NotSoundIcon />
                  </span>
                  <span className={cx('sound-icon', 'sound')}>
                    <SoundIcon />
                  </span>
                  <div className={cx('slide-container')}>
                    <input
                      onChange={(e) => {
                        setVolume(e.target.value);
                      }}
                      type="range"
                      value={volume}
                      min="0"
                      max="100"
                      className={cx('slider')}
                    />
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
        </div> */}

        {/* Begin iển thị danh sách video */}
        {userVideos.map((userVideo, index) => (
          <div key={index} className={cx('video-wrapper')}>
            <img className={cx('avatar')} src={userVideo.author.avatar_thumb.url_list[0]} alt="avatar" />

            <div className={cx('info')}>
              <Link className={cx('info-link')}>
                <h3 className={cx('name')}>{userVideo.author.unique_id}</h3>
                <h4 className={cx('nickname')}>{userVideo.author.nickname}</h4>
                <span className={cx('time')}> · {userVideo.create_time}</span>
              </Link>

              <div className={cx('video-desc')}>
                <Link className={cx('video-desc__link')}>
                  <strong>{userVideo.desc}</strong>
                </Link>
              </div>

              <div className={cx('video-music')}>
                <Link>
                  <MusicIcon /> {userVideo.music.title}
                </Link>
              </div>
              <div className={cx('video-content')}>
                <div className={cx('video')}>
                  <video autoPlay loop muted className={cx('video-tiktok')} width="280" height="500">
                    <source data={'cosplay'} src={userVideo.video.play_addr.url_list[0]} type="video/mp4" />
                  </video>

                  <div className={cx('report-group')}>
                    <FlagIcon />
                    <span>Report</span>
                  </div>

                  <div className={cx('active-group', 'pause-action')}>
                    <PauseIcon />
                  </div>

                  <div className={cx('active-group', 'play-action')}>
                    <PlayIcon />
                  </div>

                  <div className={cx('sound-group')}>
                    <span className={cx('sound-icon', 'not-sound')}>
                      <NotSoundIcon />
                    </span>
                    <span className={cx('sound-icon', 'sound')}>
                      <SoundIcon />
                    </span>
                    <div className={cx('slide-container')}>
                      <input
                        onChange={(e) => {
                          setVolume(e.target.value);
                        }}
                        type="range"
                        value={volume}
                        min="0"
                        max="100"
                        className={cx('slider')}
                      />
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
        ))}
        {/* End hiển thị danh sách video */}
      </div>
      {/* Video popup */}
      <div className={cx('modal', 'modal-js')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-content')}>
            <div className={cx('modal-content__left')}>
              {/* Video */}
              <div className={cx('modal-content__left-video-group')}>
                {/* <video
                  className={cx('modal-content__left-video')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src={videos.video1} type="video/mp4" />
                </video> */}
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
                {/* <div className={cx('modal-content__left-slide-container')}>
                  <input onChange={null} type="range" min="1" max="100" className={cx('modal-content__left-slider')} />
                </div> */}
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
                <div className={cx('modal-content__right-top-header')}>
                  <div className={cx('modal-content__right-top-header-info')}>
                    <img
                      className={cx('modal-content__right-top-header-avatar')}
                      src={images.avatarVideo}
                      alt="avatar"
                    />
                    <Link className={cx('modal-content__right-top-header-info-link')}>
                      <span className={cx('modal-content__right-top-header-info-username')}>anhngoc6010</span>
                      <div className={cx('modal-content__right-top-header-info-nickname')}>
                        chúa tể tình yêu
                        <span> · </span>
                        <span className={cx('modal-content__right-top-header-info-time')}>5h ago </span>
                      </div>
                    </Link>
                  </div>

                  <div className={cx('modal-content__right-top-header-btn-follow')}>
                    <Button className={cx('modal-content__right-top-header-btn')} outlineColor>
                      Following
                    </Button>
                  </div>
                </div>

                <div className={cx('modal-content__right-top-tag')}>
                  <Link className={cx('modal-content__right-top-tag-item')}>#cosplay</Link>
                  <Link className={cx('modal-content__right-top-tag-item')}>#rdcossplay</Link>
                </div>

                <div className={cx('modal-content__right-top-music')}>
                  <MusicIcon />
                  <Link className={cx('modal-content__right-top-music-link')}>
                    Boys a Liar Pt2 Sped Up - Kuya Magik
                  </Link>
                </div>

                <div className={cx('modal-content__right-top-social')}>
                  <div className={cx('modal-content__right-top-social-action')}>
                    <button className={cx('modal-content__right-top-social-action-btn-group')}>
                      <span className={cx('modal-content__right-top-social-action-btn-group-heart-icon')}>
                        <HeartIcon />
                      </span>
                      <span className={cx('modal-content__right-top-social-action-btn-group-number')}>157</span>
                    </button>

                    <button className={cx('modal-content__right-top-social-action-btn-group')}>
                      <span className={cx('modal-content__right-top-social-action-btn-group-comment-icon')}>
                        <CommentIcon />
                      </span>
                      <span className={cx('modal-content__right-top-social-action-btn-group-number')}>3</span>
                    </button>
                  </div>

                  <div className={cx('modal-content__right-top-share')}>
                    <TippyNoHeadless content="Embed">
                      <Link className={cx('modal-content__right-top-share-icon')}>
                        <EmbedIcon />
                      </Link>
                    </TippyNoHeadless>

                    <TippyNoHeadless content="Send to Friends">
                      <Link className={cx('modal-content__right-top-share-icon')}>
                        <SendToFriendIcon />
                      </Link>
                    </TippyNoHeadless>

                    <TippyNoHeadless content="Share to Facebook">
                      <Link className={cx('modal-content__right-top-share-icon')}>
                        <FacebookIcon />
                      </Link>
                    </TippyNoHeadless>

                    <TippyNoHeadless content="Share to WhatsApp">
                      <Link className={cx('modal-content__right-top-share-icon')}>
                        <WhatsAppIcon />
                      </Link>
                    </TippyNoHeadless>

                    <TippyNoHeadless content="Copy link">
                      <Link className={cx('modal-content__right-top-share-icon')}>
                        <CopyLinkIcon />
                      </Link>
                    </TippyNoHeadless>

                    <Tippy
                      offset={[-110, 8]}
                      placement="bottom"
                      interactive
                      delay={[800, 800]}
                      render={renderShareModal}
                    >
                      <Link className={cx('modal-content__right-top-share-icon')}>
                        <span className={cx('modal-content__right-top-share-icon-arrow')}>
                          <ShareIcon />
                        </span>
                      </Link>
                    </Tippy>
                  </div>
                </div>

                <div className={cx('modal-content__right-top-copy')}>
                  <Link className={cx('modal-content__right-top-copy-link')}>
                    https://www.tiktok.com/@a_doy2/video/7207567527344360705?is_from_webapp=1&sender_device=pc&web_id=7177605755355743745
                  </Link>
                  <Link className={cx('modal-content__right-top-copy-btn')}>Copy link</Link>
                </div>
              </div>
              {/* center */}
              <div className={cx('modal-content__right-center')}>
                <div className={cx('modal-content__right-center-body')}>
                  <div className={cx('modal-content__right-center-body-info')}>
                    <div className={cx('modal-content__right-center-img')}>
                      <img alt="avatar" className={cx('modal-content__right-center-avatar')} src={images.avatarVideo} />
                    </div>

                    <div className={cx('modal-content__right-center-info')}>
                      <div className={cx('modal-content__right-center-name')}>user5099284401524</div>
                      <div className={cx('modal-content__right-center-content')}>
                        nhìn rất điêu thuyền nhưng ko phải😄😄😄
                      </div>
                      <div className={cx('modal-content__right-center-reply')}>
                        <div className={cx('modal-content__right-center-time')}>1h ago</div>
                        <div className={cx('modal-content__right-center-reply-btn')}>Reply</div>
                      </div>
                    </div>
                  </div>

                  <div className={cx('modal-content__right-center-social')}>
                    <span className={cx('modal-content__right-center-social-menu-icon')}>
                      <MenuIcon />
                    </span>
                    <span className={cx('modal-content__right-center-social-heart-icon')}>
                      <HeartIconRegular />
                    </span>
                    <span className={cx('modal-content__right-center-social-number')}>10</span>
                  </div>
                </div>
              </div>

              {/* bottom */}
              <div className={cx('modal-content__right-bottom')}>
                <div className={cx('modal-content__right-bottom-body')}>
                  <div className={cx('modal-content__right-bottom-input')}>
                    <input className={cx('modal-content__right-bottom-input-comment')} type="text" />
                    <div className={cx('modal-content__right-bottom-input-icon')}>
                      <TippyNoHeadless content="@ a user to tag them in your comments">
                        <span className={cx('modal-content__right-bottom-user-icon')}>
                          <UserTagIcon />
                        </span>
                      </TippyNoHeadless>
                      <TippyNoHeadless content="Click to add emoji">
                        <span className={cx('modal-content__right-bottom-emoji-icon')}>
                          <EmojiIcon />
                        </span>
                      </TippyNoHeadless>
                    </div>
                  </div>
                  <div className={cx('modal-content__right-bottom-btn-post')}>Post</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
