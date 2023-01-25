import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState); // atom의 값과 atom을 수정할 수 있는 함수를 전달해준다
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinuteChange = (event:React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value); // + : string을 number로 바꿔줌
    };
    const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    }
    return (
        <div>
            <input value={minutes} onChange={onMinuteChange} type="number" placeholder="Minutes" />
            <input onChange={onHoursChange} value={hours} type="number" placeholder="Hours" />

        </div>
      
    );
}

export default App;