import styles from './Header.module.css'
import { AiFillHeart } from 'react-icons/ai'
import { useFavoites } from '../../hooks/useFavorites'

export default function Header() {
    const { favorites } = useFavoites()
    return (
        <header className={styles.header}>
            <AiFillHeart />
            <span>{favorites.length}</span>
        </header>
    )
}