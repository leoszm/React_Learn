import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leoszm.png',
      name: 'Leonardo Souza Martins',
      role: 'Analista de Sistemas'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👌' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. é um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2022-05-03 22:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fehmaciel.png',
      name: 'Felipe Maciel',
      role: 'Analista de Sistemas'
    },
    content: [
      { type: 'paragraph', content: 'Quero Nada com nada' },
      { type: 'paragraph', content: 'front end > back end' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2024-05-02 08:00'),
  },  
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/o-danilo.png',
      name: 'Danilo Oliveira',
      role: 'Engenheiro de IOT'
    },
    content: [
      { type: 'paragraph', content: 'ROBOOOOOO' },
      { type: 'paragraph', content: 'EXTERMINAR!!!' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2023-05-01 13:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
           return (
           <Post 
           author={post.author}
           content = {post.content}
           publishedAt = {post.publishedAt}
           />
          )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
