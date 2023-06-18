import {Component} from 'react'
import {
  Heading1,
  Heading2,
  MainContainer,
  WidthContainer,
  MemeContainer,
  MemeText,
  FormContainer,
  InputContainer,
  Label,
  Input,
  GenerateBtn,
  SelectDropDown,
  MemeBgContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    inputUrl: '',
    inputTopText: '',
    inputBottomText: '',
    inputFontSize: fontSizesOptionsList[0].optionId,
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeUrl = e => {
    this.setState({inputUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({inputTopText: e.target.value})
  }

  onChangeButtomtext = e => {
    this.setState({inputBottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({
      inputFontSize: e.target.value,
    })
  }

  onSubmitToGenerateMeme = e => {
    e.preventDefault()
    const {inputUrl, inputTopText, inputBottomText, inputFontSize} = this.state

    this.setState({
      imgUrl: inputUrl,
      topText: inputTopText,
      bottomText: inputBottomText,
      fontSize: inputFontSize,
    })
  }

  render() {
    const {
      imgUrl,
      topText,
      bottomText,
      fontSize,
      inputUrl,
      inputTopText,
      inputBottomText,
      inputFontSize,
    } = this.state
    return (
      <MainContainer testid="meme">
        <WidthContainer>
          <MemeBgContainer>
            <Heading1>Meme Generator</Heading1>
            {imgUrl !== '' && (
              <MemeContainer url={imgUrl} data-testid="meme">
                {topText !== '' && (
                  <MemeText fontSize={fontSize}>{topText}</MemeText>
                )}
                {bottomText !== '' && (
                  <MemeText fontSize={fontSize}>{bottomText}</MemeText>
                )}
              </MemeContainer>
            )}
          </MemeBgContainer>
          <div>
            <Heading2>Meme Generator</Heading2>
            <FormContainer onSubmit={this.onSubmitToGenerateMeme}>
              <InputContainer>
                <Label htmlFor="url">Image URL</Label>
                <Input
                  type="text"
                  id="url"
                  placeholder="Enter the image url"
                  value={inputUrl}
                  onChange={this.onChangeUrl}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="topText">Top Text</Label>
                <Input
                  type="text"
                  id="topText"
                  placeholder="Enter the Top Text"
                  value={inputTopText}
                  onChange={this.onChangeTopText}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="bottmText">Bottom Text</Label>
                <Input
                  type="text"
                  id="bottmText"
                  placeholder="Enter the Bottom Text"
                  value={inputBottomText}
                  onChange={this.onChangeButtomtext}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="fontSize">Font Size</Label>
                <SelectDropDown
                  id="fontSize"
                  value={inputFontSize}
                  onChange={this.onChangeFontSize}
                >
                  {fontSizesOptionsList.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </SelectDropDown>
              </InputContainer>
              <GenerateBtn type="submit">Generate</GenerateBtn>
            </FormContainer>
          </div>
        </WidthContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
