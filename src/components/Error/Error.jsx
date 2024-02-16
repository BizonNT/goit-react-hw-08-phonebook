import { Link } from 'react-router-dom';

import css from './error.module.css';

const Error = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Page not Found. Return to the Home page</h1>
      <Link to="/" className={css.link}>
        To Home page ...
      </Link>
    </div>
  );
};

export default Error;
