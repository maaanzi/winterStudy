import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      {/* <Box transition={{delay:3}} animate={{borderRadius:"100px"}} /> delay : 3초 후 실행, duration : 3초동안 실행 */}
      {/* <motion.div></motion.div>  애니메이션을 주려면 motion을 꼭 붙여줘야한다 */}
      <Box 
        transition={{type:"spring"}}
        initial={{ scale : 0 }}
        animate={{ scale:1, rotateZ: 360 }} />
    </Wrapper>
  );
}

export default App;

/* 
transition : 수정값
{ type : "tween" (안튕기게 해줌(default:spring))
  mass : 5 (살짝 무거운 느낌)
  bounce : 0.5 (튕기기)
  damping : 100 (반동력) }

initial : 초기값
{ scale : 0 } -> 크기
rotateZ : Z축을 기준으로 회전
animate : 최종값
*/