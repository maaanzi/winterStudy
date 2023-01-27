import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev)
  }
  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        // style = {{
        //   justifyContent: clicked ? "center" : "flex-start",
        //   alignItems: clicked ? "center" : "flex-start",
        // }}
      >
        {/* layout : 부드럽게 움직인다 */}
        {!clicked ? <Circle layoutId="circle" style={{borderRadius:50}} /> : null}
      </Box>
      {/* layoutId : framer가 둘을 이어준다(없으면 깜빡임 끊겨서) */}
      <Box>
        {clicked ? <Circle layoutId="circle" style={{borderRadius:0, scale:2}} /> : null}
      </Box>
    </Wrapper>
  );
}

export default App;