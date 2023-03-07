import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts';
import Button from '~/components/Button';
import { GotoTopIcon } from './components/Icons';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '37dce92fddmsh0469c5fb81dc9fbp1afcccjsnfba276d82b5e',
//     'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
//   },
// };

// fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/user/info?unique_id=cosplaygjrl', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }

            return <Route key={index} path={route.path} element={<Layout>{<Page />}</Layout>} />;
          })}
        </Routes>
        {/* Go top */}
        <div className={cx('goto-top')}>
          <Button small rounded>
            Get app
          </Button>
          <div className={cx('goto-top-icon')}>
            <GotoTopIcon />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
