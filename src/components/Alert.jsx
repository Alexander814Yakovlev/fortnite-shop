import { useEffect } from "react";

function Alert(props) {
  const { title, closeAlert } = props;

  useEffect(() => {
    const show = setTimeout(closeAlert, 3000);
    return () => clearTimeout(show);
    // eslint-disable-next-line
  }, [title]);

  return (
    <div id="toast-container">
      <div className="toast rounded">{title} добавлен в корзину!</div>
    </div>
  );
}

export default Alert;
