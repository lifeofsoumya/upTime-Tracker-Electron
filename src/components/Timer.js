import React, { useEffect } from 'react';
// import os from 'os-utils';

const Timer = () => {
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //             os.cpuUsage(function(v){
    //               mainWindow.webContents.send('cpu',v*100);
    //               mainWindow.webContents.send('mem',os.freememPercentage()*100);
    //               mainWindow.webContents.send('total-mem',os.totalmem()/1024);
    //             });
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

  return (
    <>
        <div className="timer">
            Screen Time: 11:00
        </div>
    </>
  )
}

export default Timer