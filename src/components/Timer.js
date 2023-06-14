import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';

const Timer = () => {
  const [systemUptime, setSystemUptime] = useState(0);

  useEffect(() => {
    ipcRenderer.on('system-uptime', (event, uptime) => {
      setSystemUptime(uptime);
    });

    return () => {
      ipcRenderer.removeAllListeners('system-uptime');
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="timer">
        System Uptime: {formatTime(systemUptime)}
      </div>
    </>
  );
};

export default Timer;
