import styled from '@emotion/styled';
import { colors } from '../styles/colors';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.secondary[700]};
  z-index: 100;
`;

function Modal({ children, onModalClose }) {
  return (
    <StyledModal data-type='modal' onClick={onModalClose}>
      {children}
    </StyledModal>
  );
}

export default Modal;
