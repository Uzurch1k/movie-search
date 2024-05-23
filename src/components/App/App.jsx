import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Wrapper from '../Layout/Wrapper/Wrapper';
import Main from '../Layout/Main/Main';
import Section from '../Layout/Section/Section';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { Loader } from '../Loader/Loader';

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
      <Wrapper>
        <Navigation />
        <Main>
          <Section>
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
          </Section>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
