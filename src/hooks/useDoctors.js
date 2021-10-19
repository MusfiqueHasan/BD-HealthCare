import  { useEffect, useState } from 'react';

const useDoctors = (option) => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const url = `/doctors.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return option ? [doctors.slice(0,3)]: [doctors]
};

export default useDoctors;