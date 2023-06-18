import styled from 'styled-components'

export const Heading1 = styled.h1`
  color: #35469c;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Heading2 = styled(Heading1)`
  color: #35469c;
  text-align: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`
export const WidthContainer = styled.div`
  width: 90%;
  max-width: 900px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    // justify-content: center;
    justify-content: space-between;
  }
`
export const MemeBgContainer = styled.div`
  @media screen and (min-width: 768px) {
    order: 2;
    // width: 50%;
    margin-left: 40px;
  }
`

export const MemeContainer = styled.div`
  background-color: green;
  background-image: url(${props => props.url});
  background-size: cover;

  //   height: 300px;
  //   max-width: 300px;
  height: 30vh;
  max-width: 400px;
  margin: auto;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 40vh;
  }
`
export const MemeText = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: ${props => props.fontSize}px;
  width: 90%;
`

export const FormContainer = styled.form``

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 15px;
  color: #7e858e;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 17px;
  cursor: pointer;
`

export const Input = styled.input`
  color: #7e858e;
  border: 1px solid #d7dfe9;
  height: 40px;
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 15px;
`

export const GenerateBtn = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 19px;
  font-size: 15px;
  border-radius: 4px;
`
export const SelectDropDown = styled.select`
  color: #1e293b;
  border: 1px solid #d7dfe9;
  height: 40px;
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 15px;
`
