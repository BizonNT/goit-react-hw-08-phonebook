import css from './button.module.css';

const Button = ({ onClick, title, type, menu = false }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={menu ? css.btnmenu : css.btn}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
