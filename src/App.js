import { Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import HomePage from './components/home/HomePage';
import SightingPage from './components/Sightings/SightingPage';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
      <div>
        <SiteNav />
        <Routes>
          <Route path='*' element={<HomePage/>} />
          <Route path='/allsightings' element={<SightingPage/>} />
        </Routes>
        <SiteFooter />
      </div>
      )}
    </Authenticator>
  );
}

export default App;
