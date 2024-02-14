import css from "./notification.module.css"

const Notification = ({ message }) => {
  return (
    <div className={css.text}>{ message}</div>
  )
}

export default Notification;
