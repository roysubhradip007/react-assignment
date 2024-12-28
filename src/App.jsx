
import './App.css'
import Button from './component/Button/Button'
import Header from './component/Header/Header'
import List from './component/List/List'
import Person from './component/Person/person'

function App() {
  const handleClick = () => alert("Button clicked!");
  const people = ["subhradip", "suman", "somnath", "rohit", "virat"];
  const name = "subhradip roy";
  const age = 21;
  const text = 'Click Me';

  return (
    <>
      <Header title="Welcome to the App" />
      <Person name={name} age={age} />
      <Button text={text} onClick={handleClick} />
      <List items={people} />
    </>
  )
}

export default App
