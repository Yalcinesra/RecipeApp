import styled from "styled-components";

export const AboutContainer = styled.div`
  /* bütün about */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  height: calc(100% - 100px);
  /*  Ekran yüksekliğiniz mesela 1000 piksel ise, öğenizin yüksekliği 900 piksele  eşit olacaktır.(1000 pikselin %100'ü ve eksi 100 piksel) */
  line-height: 2;
  span {
    color: orange;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
`;
export const StyledImage = styled.img`
  width: 200px;
  margin-bottom: 2rem;
  border-radius: 50%;
  margin-top: 1rem;
`;

export const HeaderContainer = styled.div`
text-align:center;
display: flex;
align-items: center;
  background-color: white;
  border-radius: 10px;
  height: 6rem;
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin: 0 10px;
  max-width: 1000px;
  border: 1px solid white;
  padding: 25px;
  border-radius: 5px;
  a {
    color: orange;
  }
`;
