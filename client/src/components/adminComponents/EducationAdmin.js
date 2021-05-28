import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const EducationAdmin = () => {
    const [education, setEducation] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCondition, setMessageCondition] = useState(false);

    // fetching the data
    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await axios.get(`/education`);
                setEducationData(res.data);
                //   console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData();

    }, [])

    //submiting data
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('click');

        const postEducation = { education }

        setEducation('');
        axios.post(`/education`, postEducation)
            .then(res => {


            })
            .catch(err => console.log(err))
    }

    const handleChangeInput = (e) => {
        setEducation(e.target.value)


    }

//delete education functionality
    const deleteEducation = (id) => {
        axios.delete(`/education/${id}`)
            .then(res => {
                setMessageCondition(true);
                setMessage(`${res.data.msg}`);
    
                setTimeout(() => {
                    setMessage(''); //allows for delete icon to pop up and then go away
                    setMessageCondition(false);
    
                }, 2000)
            }).catch(err => console.log(err))
    
    
    
        //delete from ui
        const educationFilterDel = educationData.filter(item => item._id !== id)
        setEducationData(educationFilterDel);
    }

    return (
        <div className="same-component">
            <div className="same-form">
                <form onSubmit={handleSubmit}>
                    <h4>Education Component</h4>
                    <label htmlFor="text">Education</label>
                    <input type="text" 
                    value={education} onChange={handleChangeInput}/>
                    <button type="submit">Add Edu</button>
                </form>
            </div>

            <div className="same-item">

                <div className="about-info">
                    {
                        educationData.map(item => (

                            <div className="same-admin" key={item._id}>
                                <div className="icons">
                                    <Link to={`/editEducation/${item._id}`}><i className="fas fa-edit">edit</i></Link>
                                    <i className="fas fa-trash" onClick={() => deleteEducation(item._id)}>delete</i>
                                </div>

                                <div className="single-education">
                                    <p>{item.education}</p>
                                </div>
                                <h3 className={messageCondition ? "new-delete item-delete-tab" : "item-delete-tab"}>{message}</h3>

                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
export default EducationAdmin;
