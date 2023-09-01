
import {loginStart, loginSuccess, loginFailure} from './Redux/UserRedux';
import {publicRequest} from './requsetMethod'

 const adminLogin=(dispatch, user)=>{
    console.log('apiCall')
    dispatch(loginStart());
    const getUser=async ()=>{
        try {
            const res=await publicRequest.post('/auth/login',user);
            dispatch(loginSuccess(res.data))
        } catch (error) {
            dispatch(loginFailure())
        }
    };
    getUser();
};

export default adminLogin;