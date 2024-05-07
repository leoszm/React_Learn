import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
     onDeleteComment(content);
    }

    function handleLikeComment(){
        //state vai devolver qual o valor de likecount mais atual
        setLikeCount((state)=>{
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/leoszm.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Souza Martins</strong>
                            <time title="11 de Maio às 08:13:30" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir{' '}<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}