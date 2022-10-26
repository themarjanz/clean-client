import Home from '../pages/Home/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Login from '../pages/Login';

export const publicRoute = [
    { path: "/home", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/sevices", name: "Services", Component: Services },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login ", name: "Login", Component: Login },
]
