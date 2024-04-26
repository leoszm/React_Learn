import styles from './Header.module.css'

//classe_do_css.elemento(id/class)
export function Header() {
    return (
        <header className={styles.header}>
            <strong>Ignite Feed!</strong>
        </header>
    );
}