const TimerModel = (() => {
    let seconds = 900;
    let degree = 270;
    return {
      setSeconds(sec: number) {
        seconds = sec;
        degree = 360 - sec / 10;
      },
      setDegree(deg: number) {
        degree = deg;
        seconds = (360 - deg) * 10;
      },
    };
})();

export const setSeconds = TimerModel.setSeconds;
export const setDegree = TimerModel.setDegree;
