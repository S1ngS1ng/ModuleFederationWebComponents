import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Wrapper from './wrapper/wrapper';
import Home from './home/home';

export function App() {
  const [username, setUsername] = React.useState('');
  document.addEventListener('user-selected', (event: any) => {
    setUsername(event.detail);
  });

  return (
    <React.Suspense fallback={null}>
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-header">
            <img
              className="react-icon"
              src="assets/react-icon.svg"
              width="90px"
              alt="React Icon"
            />
            <h1>React Host</h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/angular-module">Angular Module</Link>
              <ul>
                <li>
                  <a href="/angular-module/material">Material</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/react-module">React Module</Link>
              <ul>
                <li>
                  <a href="/react-module/mui">MUI</a>
                </li>
              </ul>
            </li>
          </ul>
          {username && <p className="user">Hello {username}!</p>}
        </div>
        <div className="federated-module">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/react-module/*"
              element={
                <Wrapper
                  importName="react-module"
                  elementName="react-module-root"
                />
              }
            />
            <Route
              path="/angular-module/*"
              element={
                <Wrapper
                  importName="angular-module"
                  elementName="angular-module-root"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
