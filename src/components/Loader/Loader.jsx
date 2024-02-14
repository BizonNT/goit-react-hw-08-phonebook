import { ThreeDots } from 'react-loader-spinner';

import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3f51b5"
        radius="9"
        ariaLabel="Loading..."
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
