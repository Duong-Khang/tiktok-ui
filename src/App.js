import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '37dce92fddmsh0469c5fb81dc9fbp1afcccjsnfba276d82b5e',
//     'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
//   },
// };

// fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/user/search?keywords=lebong&count=5&cursor=0', options)
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

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
