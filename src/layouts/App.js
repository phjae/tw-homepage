import { Routes, Route } from 'react-router-dom';
import LatestNewsDetail from '../pages/LatestNewsDetail';
import NewsRoom from '../pages/NewsRoom';
import PressDetail from '../pages/PressDetail';
import PressRoom from '../pages/PressRoom';
import StoriesRoom from '../pages/StoriesRoom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsRoom />} />
      <Route path="/newsroom" element={<NewsRoom />} />
      <Route path="/pressroom" element={<PressRoom />} />
      <Route path="/pressdetail/:dt/*" element={<PressDetail />} />
      <Route path="/storiesroom" element={<StoriesRoom />} />
      <Route path="/latestnewsdetail/:dt/*" element={<LatestNewsDetail />} />
    </Routes>
  );
}

export default App;
