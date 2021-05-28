import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [about, setAbout] = useState([]);
    const [project, setProject] = useState([]);
    const [education, setEducation] = useState([]);


    const checkLogin = async () =>{
        const token = localStorage.getItem('tokenStore');
        if(token){
            const verified = await axios.get(`/user/verify`, {headers:{Authorization:token}})
            console.log(verified);

            setIsLogin(verified.data);
            if(verified.data=== false){
                return localStorage.clear();
            }
            
        }else{
            setIsLogin(false);
        }

    }

    useEffect(()=>{
        try {
            checkLogin();


        } catch (err) {
            console.log(err);
        }
    },[])
    const fetchData = async () => {
        const res1 = await axios.get(`/about`);
        // console.log(res1.data);
        setAbout(res1.data);

        //fetching projects
        const res2= await axios.get(`/project`);
        // console.log(res2.data);
        setProject(res2.data);

        const res3= await axios.get(`/education`);
        // console.log(res3.data);
        setEducation(res3.data);


    }

    useEffect(() => {
        

        try {
            fetchData();
        } catch (err) {
            console.log(err)
        }
    }, [])

    const state = {
        about:[about, setAbout], 
        project:[project, setProject],
        education:[education, setEducation],
        isLogin:[isLogin, setIsLogin]
    }






    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )

}
