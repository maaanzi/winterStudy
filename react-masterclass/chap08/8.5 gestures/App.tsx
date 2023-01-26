import React, { useRef } from "react";
import styled from "styled-components";
import {motion} from "framer-motion"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width:600px;
  height: 600px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
  // drag: { backgroundColor:"rgb(46,204,113)" } // 색은 무조건 숫자로 (blue : X)
};



function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null) // 특정요소잡기
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag // drag="x" // x축으로만 드래그
          dragSnapToOrigin // 드래그 후 놓으면 중앙으로 돌아감
          dragElastic={0.5} // 도형이 당기는힘? 기본값:0.5 / 0은 biggerbox크기를 벗어나지 못함 / 1은 마우스 가는데로 따라감
          dragConstraints={biggerBoxRef} // (+ 가장자리 벗어나지 못함)
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
      
    </Wrapper>
  );
}

export default App;
