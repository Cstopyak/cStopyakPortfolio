import React, { useContext } from 'react';
import AdminAhAh from './adminImg/AdminAhAh.gif';
import AboutAdmin from './AboutAdmin';
import ProjectAdmin from './ProjectAdmin';
import EducationAdmin from './EducationAdmin';
import { Link } from 'react-router-dom';
import { DataContext } from '../myContext/GlobalContext';


const Admin = () => {

    const state = useContext(DataContext);
    const [isLogin] = state.isLogin;



    return (
        <div className="main-container">
            <br />
            <h2 className="title">Admin forms</h2>
            {
                isLogin ?
                <div className="admin-center">

                {/* aboutAdmin component */}
                <h4 className="admin-title">About component</h4>
                <AboutAdmin />
                {/* end of aboutAdmin component */}

                <br />
                <br />
                <hr style={{ border: "1px solid white" }} />
                <br />

                {/*projectsAdmin component */}
                <h4 className="admin-title">Projects component</h4>
                <ProjectAdmin />

                {/*end of projectsAdmin component */}

                <br />
                <br />
                <hr style={{ border: "1px solid white" }} />
                <br />

                {/* educationAdmin component */}
                <h4 className="admin-title">Education component</h4>
                <EducationAdmin />

                {/*end of educationAdmin component */}
                <br />
                <br />
                <hr style={{ border: "1px solid white" }} />
                <br />



            </div>





            
            


                    :
                    

                        
                    <div className="back_to_home"> 
                    <div className="back_box">
                        <h2>Only Admin is allowed</h2><br/><span><img src={AdminAhAh} alt=""/></span>
                        
                        </div>
                    
                    </div>}

        </div>
    )
}

export default Admin;
