import { Header } from './components/Header';
import { NamedPost } from './Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <NamedPost
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus autem dignissimos quo velit qui nulla iusto, doloribus nobis quod, laudantium quidem! Placeat, veniam exercitationem unde quia obcaecati illum mollitia eum!"
          />
          <NamedPost
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
