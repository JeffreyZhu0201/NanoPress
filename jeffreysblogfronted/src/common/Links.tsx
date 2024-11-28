import { Navigate } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects'

const links = [
    {
        name:'',
        path:'/',
        page:<Navigate to='/home' replace></Navigate>
    },
    {
        name:"Home",
        path:'/home',
        page:<Homepage/>
    },
    {
        name:"Blogs",
        path:'/blogs',
        page:<Blogs/>
    },
    {
        name:"Projects",
        path:'/projects',
        page:<Projects/>
    }
]

export default links
