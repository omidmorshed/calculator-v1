import React ,{ useState } from 'react';
import { StyledCalculator , StyledAnswer , StyledButton} from './components/styles/Calculator.styled'

function App() {

  const [result , setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value))
  }

  const clearHandler = () => {
    setResult("")
  }

  const calculate = ()=> {
    setResult(eval(result).toString())
  }

  return(
    <StyledCalculator>
      <StyledAnswer type="text" id='answer' placeholder='0' value={result} />
      <StyledButton type="button" value='9' onClick={clickHandler} />
      <StyledButton type="button" value='8' onClick={clickHandler}/>
      <StyledButton type="button" value='7' onClick={clickHandler}/>
      <StyledButton type="button" value='+' onClick={clickHandler}/>
      <StyledButton type="button" value='6' onClick={clickHandler}/>
      <StyledButton type="button" value='5' onClick={clickHandler}/>
      <StyledButton type="button" value='4' onClick={clickHandler}/>
      <StyledButton type="button" value='-' onClick={clickHandler}/>
      <StyledButton type="button" value='3' onClick={clickHandler}/>
      <StyledButton type="button" value='2' onClick={clickHandler}/>
      <StyledButton type="button" value='1' onClick={clickHandler}/>
      <StyledButton type="button" value='*' onClick={clickHandler}/>
      <StyledButton type="button" value='.' onClick={clickHandler}/>
      <StyledButton type="button" value='0' onClick={clickHandler}/>
      <StyledButton type="button" value='/' onClick={clickHandler}/>
      <StyledButton type="button" value='%' onClick={clickHandler}/>
      <StyledButton type="button" value='clear' className='last-button clear' onClick={clearHandler}/>
      <StyledButton type="button" value='=' className='last-button' onClick={calculate}/>
    </StyledCalculator>
  )
}

export default App;
