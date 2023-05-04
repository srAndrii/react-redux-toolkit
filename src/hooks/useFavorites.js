import { useSelector } from "react-redux"

export const useFavoites = () => {
    const { favorites } = useSelector(state => state)
    return { favorites }
}