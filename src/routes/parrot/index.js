import React from 'react';

import style from './index.css';

const Parrot = ({ match }) => (
  <div className={style.container}>
    <h1 className={style.gray}>Hello {match.params.path}</h1>
  </div>
);

export default Parrot;
