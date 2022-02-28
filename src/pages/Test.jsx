import { useEffect } from "react"
import { useStore } from "react-redux"
import { getProfile } from "../utils/service/fetchAPI"

export default function Test() {
    const store = useStore()
    const state = store.getState()

    useEffect(() => {
        getProfile(store, state.user.token)
    }, [store, state])


    return (
        <h1>Test</h1>
    )
}