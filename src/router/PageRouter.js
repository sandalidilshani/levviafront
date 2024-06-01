import{
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import LoginPage from "../Pages/LoginPage"
export const PageRouter=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
    </Router>
    )
}