import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config/API'

const JobDetails = () => {
    const [job, setJob] = useState({})
    const [applied, setApplied] = useState([])
    const { id } = useParams()
    const getApplication = async () => {
        let res = await API.get(`/applications/job/${id}`)
        const { data } = res
        setJob(data.job)
        setApplied(data.app)

    }
    useEffect(() => { getApplication() }, [id])

    console.log(job, applied)

    return (
        <div>
            <h1>job details</h1>
            <h2>{job?.title}</h2>
            <h3>{job?.endDate}</h3>
        </div>
    )
}

export default JobDetails