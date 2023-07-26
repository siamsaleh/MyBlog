import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;














// {/* <button onClick={(e) =>handleClickAgain('mario', e)}>Click Me Again</button> */}

// const handleClickAgain = (name, e) => {
//     console.log("Hello " + name, e.target);
// }





// const [name, setName] = useState('mario');
// const [age, setAge] = useState(25);

// const handleClick = () => {
//     //name = 'siam';
//     setName('luigi');
//     setAge('20');
// }

{/* <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button> */}



// <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" />

// const [name, setName] = useState('mario');
{/* <button onClick={() => setName('luigi')}>change name</button> */ }
            // <p>{name}</p>

// const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
// ]);

// handleDelete={handleDelete}

// const handleDelete = (id) => {
//     const newBlog = blogs.filter(blog => blog.id !== id );
//     setBlogs(newBlog);
// }

// setTimeout(() => {

// }, 1000);