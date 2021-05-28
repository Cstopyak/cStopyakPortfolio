import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Edit.css';

const EditAbout = (props) => {
    const [about, setAbout] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    //gathering specific Id from about

    useEffect(() => {
        axios.get(`/about/${props.match.params.id}`) //finding specific id
            .then(res => {
                setAbout(res.data.about) //initial about

            }).catch(err => console.log(err))

    }, [])

    //onChange functionality

    const onchangeAbout = (e) => {
        setAbout(e.target.value); //updates everytime we push a key
        console.log(about)

    }

    //updating about

    const updateAbout = (e) => {
        e.preventDefault();

        const postAbout = {
            about
        }

        axios.put(`/about/update/${props.match.params.id}`, postAbout)
        .then(res =>{
            setMessage(res.data.msg);

        }).catch(err=>console.log(err))

        setAbout('');

        setTimeout(()=>{
            history.push("/admin");

        },2000)

    }







    return (
        <div className="edit">
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form onSubmit={updateAbout}>
                            <h3 className="updated">
                                {message}
                            </h3>
                            <label htmlFor="text"> About</label>
                            <textarea name="textarea" id="" cols="30" rows="3"
                                value={about} onChange={onchangeAbout}/>

                            <div className="btns">
                                <button type="submit"> Update About</button>

                                <Link to="/admin"><button className="cancel-btn">Cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditAbout
