import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layout/main";
import Communities from "~/pages/communities";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Messages from "~/pages/messages";
import NotFound from "~/pages/notFound";
import Notifications from "~/pages/notifications";
import Premium from "~/pages/premium";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'communities',
                element: <Communities />
            },
            {
                path: 'premium',
                element: <Premium />
            },
            {
                path: '/:username',
                element: <Profile />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
])

export default routes 