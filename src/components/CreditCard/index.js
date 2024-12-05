// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CreditCardContainer,
  CreditCardHeading,
  CreditCardMainContainer,
  FormContainer,
  FormHeading,
  CardNumberInput,
  CardHolderNameInput,
  CreditCardNumber,
  CreditCardName,
  CardHolderNameText,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState()
  const [cardHolderName, setCardHolderName] = useState('')

  const changeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const changeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CreditCardMainContainer data-testid="creditCard">
          <CreditCardNumber>{cardNumber}</CreditCardNumber>
          <CardHolderNameText>CARDHOLDER NAME</CardHolderNameText>
          <CreditCardName>{cardHolderName}</CreditCardName>
        </CreditCardMainContainer>
      </CreditCardContainer>
      <FormContainer>
        <FormHeading>Payment Method</FormHeading>
        <CardNumberInput
          type="text"
          placeholder="Card Number"
          onChange={changeCardNumber}
        ></CardNumberInput>
        <CardHolderNameInput
          type="text"
          placeholder="Cardholder Name"
          onChange={changeCardHolderName}
        ></CardHolderNameInput>
      </FormContainer>
    </AppContainer>
  )
}

export default CreditCard
