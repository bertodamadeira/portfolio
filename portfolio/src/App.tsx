import { Container, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Experience/Experience';

import { Routes, Route } from 'react-router-dom';

import './App.css';

export default function App(){
  return(
    <Container className='top_60'>
      <Grid container spacing={5} className="row align-items-center">
        <Grid item lg={3} md={4} sm={12} xs={12} className="profile_container">
          <Profile/>
        </Grid>
        <Grid item xs>
          <Header />
          <Routes>
            <Route path='/' element={<Resume/>}/>
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  );
}