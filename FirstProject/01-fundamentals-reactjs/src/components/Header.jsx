import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';
//classe_do_css.elemento(id/class)
export function Header() {
    return (
        <header className={styles.header}>
            <img src= { igniteLogo } alt="Logotipo do Ignite"/>
            <strong>Ignite Feed</strong>
        </header>
    );
}