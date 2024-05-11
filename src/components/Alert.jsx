import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context";

function Alert() {
  const { alertName, closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const show = setTimeout(closeAlert, 3000);
    return () => clearTimeout(show);
    // eslint-disable-next-line
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast rounded">{alertName} добавлен в корзину!</div>
    </div>
  );
}

export default Alert;
