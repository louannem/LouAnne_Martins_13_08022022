import { useSelector } from "react-redux"
import { selectError } from "../redux/selectors"

export default function Error() {
    const error = useSelector(selectError)
    if(!error || error === null) return null

    return (
        <div className='error-message'>
            <p>{error}</p>
        </div>
    )
}