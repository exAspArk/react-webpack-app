import React from 'react';

import style from './index.css';

const Parrot = ({ match }) => (
  <h1 className={style.gray}>Hello {match.params.path}</h1>
);

export default Parrot;
