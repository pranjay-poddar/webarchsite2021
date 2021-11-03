import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: green;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: #1fe4e4;
  z-index:3
  height: 100vh;
  color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)``;
