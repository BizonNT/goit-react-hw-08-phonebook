import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';

import css from './contactlist.module.css';

const Filter = () => {
  const {filter} = useSelector(selectFilter);

  const dispatch = useDispatch();
  
  const onChange = event => {
    return dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.field}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
