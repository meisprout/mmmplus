import React, { useState, useEffect } from 'react'
import styles from '@component/styles/Countdown.module.css'

export default function Countdown(){
    const calculateTimeLeft = () =>{
        //KST=UTC+09:00
        const difference = +new Date(`2023-03-29 18:00:00 UTC+09:00`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
        return timeLeft;
    }
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
            <div>
                <h2>{timeLeft[interval]}</h2>
                <p>{interval}</p>
            </div>
        );
      });
      return (
        <div className={styles.countdown}>{timerComponents}</div>
      );
}