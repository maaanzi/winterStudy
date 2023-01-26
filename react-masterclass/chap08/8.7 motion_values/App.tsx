import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion"

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
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


function App() {
  const x = useMotionValue(0);
  // const potato = useTransform(x, [-800,0,800], [2,1,0]) // -800에 가까워지면 2로 반환
  // useEffect(() => {
  //   // x.onChange(() => console.log(x.get()))
  //   potato.onChange(() => console.log(potato.get()))
  // }, [x])
  const rotateZ = useTransform(x, [-800,800], [-360,360]);
  const gradient = useTransform(
    x, 
    [-800,800], 
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0,1], [1,5])
  return (
    <Wrapper style={{ background: gradient}}>
        <Box style={{ x ,rotateZ, scale }} drag="x" dragSnapToOrigin/>
    </Wrapper>
  );
}

export default App;
