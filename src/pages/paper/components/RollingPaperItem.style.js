import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardList = styled(motion.li)`
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export default CardList;
