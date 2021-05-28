import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';





const AboutAdmin = () => {

    const [about, setAbout] = useState('');
    const [aboutData, setAboutData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCondition, setMessageCondition] = useState(false);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/about`);
                // console.log(res.data);
                setAboutData(res.data);

            } catch (err) {

            }
        }

        fetchData();

    }, [aboutData])

    //onChange functionality

    const onchangeAbout = (e) => {
        setAbout(e.target.value); //updates everytime we push a key
        // console.log(about)

    }
    //submiting data
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('click');

        const postAbout = { about }

        setAbout('');
        axios.post(`/about`, postAbout)
            .then(res => {


            })
            .catch(err => console.log(err))
    }

    //delete functionality for about

    const deleteAbout = (id) => {
        axios.delete(`/about/${id}`)
            .then(res => {
                setMessageCondition(true);
                setMessage(`${res.data.msg}`);

                setTimeout(() => {
                    setMessage(''); //allows for delete icon to pop up and then go away
                    setMessageCondition(false);

                }, 2000)
            }).catch(err => console.log(err))



        //delete from ui
        const aboutFilterDel = aboutData.filter(item => item._id !== id)

        setAboutData(aboutFilterDel);

    }




    return (




        <div className="same-component">
            <div className="same-form">
                <form onSubmit={handleSubmit}>
                    <h4>about admin comp</h4>
                    <label htmlFor="text"> About</label>
                    <textarea name="textarea" cols="30" rows="3"
                        value={about} onChange={onchangeAbout} />
                    <button type="submit">Add About</button>
                </form>

            </div>

            <div className="same-item">
                {
                    aboutData.map((item) => (
                        <div className="about-info" key={item._id}>
                            <div className="icons">
                                <Link to={`/edit/${item._id}`} > <i className="fas fa-edit">edit</i></Link>
                                <i className="fas fa-trash" onClick={() => deleteAbout(item._id)}>delete
                                </i>
                            </div>
                            <p> {item.about}</p>
                            <h3 className={setMessage ? "new-delete item-delete-tab" : "item-delete-tab"}> {message}</h3>
                        </div>

                    ))}


            </div>


        </div>
        //need to finish mapping
    )
}

export default AboutAdmin
