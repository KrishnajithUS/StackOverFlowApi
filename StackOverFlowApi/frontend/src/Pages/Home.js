import React from 'react'
import Navbar from '../Components/Navbar'
import Pagination from '../Components/Pagination';
import Content from '../Components/Content'
import { useState, useEffect, useMemo, useRef } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [q, setQ] = useState(null)
    const inputElement = useRef(null)

    const questions = async (q = null) => {
        console.log("called data", currentPage)
        if (q === null) {
            console.log("first call")
            const response = await axios.get(`http://localhost:8000/api/all_questions/`, {
                params: {
                    page: currentPage
                }
            })
            setData(response.data.items)
        } else {
            try {
                const response = await axios.get(`http://localhost:8000/api/search_questions/`, {
                    params: {
                        page: currentPage,
                        query: q
                    }
                })
                setData(response.data.items)
            }
            catch (err) {
                const errorMessage = err.response ? err.response.data.detail : 'An error occurred';
                alert(errorMessage)
            }

        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        console.log("call inside handle change")
        setQ(inputElement.current.value)
        console.log(q, "the value of q")
        questions(q)
    }
    useEffect(() => {
        questions()

    }, [currentPage])
    let PageSize = 10;

    const Data = useMemo(() => {

        return data ? data : '';
    }, [currentPage, data]);
    console.log("query", inputElement.current?.value, q)
    return (
        <div>
            <Navbar q={q} setQ={setQ} inputElement={inputElement} handleChange={handleChange} />
            <Content data={data ? Data : ''} />
            {data ? <Pagination
                currentPage={currentPage}
                totalCount={400}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            /> : ""}
        </div>
    )
}

export default Home