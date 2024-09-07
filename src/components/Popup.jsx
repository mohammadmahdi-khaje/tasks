import React, { useState, useEffect } from "react";
import style from "./Popup.module.scss";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // بعد از یک تاخیر پنجره را نشان میدهد
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showPopup && (
        <div className={style.popup}>
          {/* پاپ اپ  */}
          <button
            className={style.popup__button}
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
          <div className={style.popup__container}>
            <p className={style.popup__text}>
              از اینکه وقت ارزشمند خود را برای بررسی نمونه کار من گذاشتید، بسیار
              سپاسگزارم. امیدوارم این نمونه کار، توانایی‌های من در زمینه
              برنامه‌نویسی را به خوبی نشان دهد. برای کسب اطلاعات بیشتر، در هر
              زمان آماده پاسخگویی به سوالات شما هستم. به پاس توجه شما به نمونه
              کارم، از شما بسیار متشکرم.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
