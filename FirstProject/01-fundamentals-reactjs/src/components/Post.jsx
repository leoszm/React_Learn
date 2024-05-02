import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    //estado: variáveis que eu quero que o componente monitore
    const [comments, setComments] = useState([
        'post muito bacana, hein?!'
    ]);
    /* Através do mdn intl
        const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',
            {
                day: '2-digit',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit',
            }
        ).format(publishedAt);*/
    /* Através do date-fns */
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;

        //imutabilidade
        //setComments([1,2,3]); limitase quando chega ao 3, para tratar isso a forma esta abaixo
        setComments([...comments, newCommentText]);
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                {/* O html é muito exigente para trabalhar com datas, 
                para resolver isso podemos utilizar bibliotecas do javascipt, como: mdn intl, date-fns */}
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea className="" 
                name="comment"
                placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    );
}