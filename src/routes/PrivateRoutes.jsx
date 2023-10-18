import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;