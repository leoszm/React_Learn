import Post from "./Post";
import { NamedPost } from "./Post";

import './styles.css';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Olá Mundo</h2>
      <input
        type="button"
        value="teste"
      />
      <h3>Exemplo Default Export</h3>
      <Post />
      <h3>Exemplo Named Export</h3>
      <NamedPost
        author="Leonardo"
        content="Lorem ipsum dolor sit amet..."
      />

      <NamedPost
        author="Daniel"
        content="Max Verstappen"
      />
    </div>
  )
}

export default App
