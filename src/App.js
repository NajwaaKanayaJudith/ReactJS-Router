import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <div> <hr />
      <link to="/">Beranda</link> |
      <link to="/tentangsaya">TentangSaya</link> |
      <link to="/karya">Karya</link> |
      <link to="/kontak">Kontak</link> <hr />
      <p><Utama /></p>
    </div>
  );
  }
}

export default App;
