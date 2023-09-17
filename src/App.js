import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';


function App() {
  const clickOnButton = () => {
    console.log('click on button') 
  }  

return (
    <div className="App">
      <Button
      click={clickOnButton}
      text='some button'
      />
      <Input placeholder='Enter some text'/>
      <div style={{'display': 'flex' , 'gap': '20px', 'justify-content': 'center'}}>
      <Card 
      title='card 1'
      />
      <Card 
      title='card 2'
      />
      </div>
    </div>
  );
}

export default App;
