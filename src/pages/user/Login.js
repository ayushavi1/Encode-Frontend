import React from 'react'
import { loginUser } from '../../actions/action';
import { connect } from 'react-redux';
import  { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const handleLogin = async (e) =>{
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        const res = await props.loginUser({'username':username,'password':password});
        console.log("res: ",res);
        if(res.status===200)
            navigate('/profile');
    }
    if(props.isAuthenticated&&!props.user.first_name) return <Navigate to='/profile'/>
    if(props.isAuthenticated) return <Navigate to='/dashboard'/>
    return  (
        <div>
           <h3>Login</h3> 
           <form onSubmit={handleLogin}>
               <input type = "text" placeholder="Enter username" name="username"></input>
               <input type = "password" placeholder="Enter password" name="password"></input>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (loginData) => loginUser(loginData, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
