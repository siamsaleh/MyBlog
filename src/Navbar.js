import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className="my-blog">My blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;








{/* <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Create Blog</Link> */}




// <a href="/">Home</a>
//                 <a href="/create" style={{
//                     color: "white",
//                     backgroundColor: "#f1356d",
//                     borderRadius: '8px'
//                 }}>New Blog</a>