// In App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventDetails from './pages/eventdetails/EventDetails';

import About from './pages/about/About';
import Layout from './components/layout/Layout';
import Contact from './pages/contact/Contact';
import EventList from './pages/EvenList/EventList';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <EventList />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "eventDetail",
          element: <EventDetails/>
        },
        {
          path: "events/:id/book",
          element: <EventDetails />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
