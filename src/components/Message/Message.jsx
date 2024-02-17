import css from './message.module.css';

const Message = ({ message, text, red = false }) => {
  return (
    <div className={css.container}>
      <p className={red ? css.red : css.message}>
        {message} {text}
      </p>
    </div>
  );
};

export default Message;
