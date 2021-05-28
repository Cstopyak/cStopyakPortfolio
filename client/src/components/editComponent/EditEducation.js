import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const EditEducation = (props) => {

    const [education, setEducation] = useState([]);
    const [message, setMessage] = useState('');
    const history = useHistory();

     //gathering specific Id from about

     useEffect(() => {
        axios.get(`/education/${props.match.params.id}`) //finding specific id
            .then(res => {
                setEducation(res.data.education) //initial about

            }).catch(err => console.log(err))

    }, [])

    //onChange functionality

    const onchangeEducation= (e) => {
        setEducation(e.target.value); //updates everytime we push a key
        // console.log(education)

    }

    //updating about

    const updateEducation = (e) => {
        e.preventDefault();

        const postEducation = {
            education
        }

        axios.put(`/education/update/${props.match.params.id}`, postEducation)
        .then(res =>{
            setMessage(res.data.msg);

        }).catch(err=>console.log(err))

        setEducation('');

        setTimeout(()=>{
            history.push("/admin");

        },2000)

    }


    return (
        <div className="edit">
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form onSubmit={updateEducation}>
                        <h3 className="updated">{message}</h3>
                            <h4> Education component</h4>
                            <label htmlFor="text">Education</label>
                            <input type="text" 
                            value={education} onChange={onchangeEducation}/>
                            <div className="btns">
                                <button type="submit">Update</button>
                                <Link to='/admin'><button className='cancel-btn'>Cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EditEducation;
