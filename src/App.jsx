import {useEffect, useState} from "react"
import Loading from "./Loading"
import Tours from "./Tours"
const url = "https://course-api.com/react-tours-project"

const App = () => {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataArr, setDataArr] = useState([])

    const onClick = (id) => {
        const newTours = dataArr.filter((user) => user.id !== id)
        setDataArr(newTours)
    }

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const data = await fetch(url)
            const res = await data.json()
            setIsLoading(false)
            setDataArr(res)
        } catch (error) {
            setIsLoading(true)
            setIsError(true)
            console.log("There was an error")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    if (isError) {
        return (
            <main>
                <h1>There was an error</h1>
            </main>
        )
    }
    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }
    if (dataArr.length === 0) {
        return (
            <main>
                <button
                    className="btn"
                    type="button"
                    onClick={() => fetchData()}>
                    Refresh
                </button>
            </main>
        )
    }
    return (
        <main>
            <h1 className="title">Tours</h1>
            <p className="title-underline"></p>
            <Tours data={dataArr} onClick={onClick} />
        </main>
    )
}
export default App
