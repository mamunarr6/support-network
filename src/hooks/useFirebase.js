import { useEffect, useState } from "react"
import initailizeAuthentication from "../Firebase/firebase.init";

initailizeAuthentication();

const useFirebase = () => {
    const [supports, setSupports] = useState();
    useEffect(() => {
        fetch('./support.json')
            .then(res => res.json())
            .then(data => setSupports(data));
    }, [])
    return {
        supports
    }
}

export default useFirebase;