import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import ScrollUp from '../ScrollUp/ScrollUp';
import { Loader } from '../Loader/Loader';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);

import './App.scss';

function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <main className="main">
          <div className="container">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<MovieCast />} />
                  <Route path="reviews" element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
          <ScrollUp />
        </main>
        <Footer />
      </div>
      <Background />
    </>
  );
}

export default App;
