
import stales from './Input.module.css';

const Input = (props) => {
  const inputChange = (event) => {
    const inputValue = event.target.value;
    if (!inputValue) {
      console.log('error');
    } else {
      console.log(inputValue);
    }
  }

  return (
    <form className={stales.form}>
      <input onChange={inputChange} className={stales.input} type="text" placeholder={props.placeholder}/>
    </form>
  )
}

export default Input;