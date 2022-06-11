import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #DFBDC8;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super oferta! Recibe un descuento del 10% en  productos seleccionados</Container>;
};

export default Announcement;