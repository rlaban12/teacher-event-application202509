import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import EventPage from '../pages/EventPage.jsx';
import RootLayout from '../layouts/RootLayout.jsx';
import EventDetailPage from '../pages/EventDetailPage.jsx';
import EventLayout from '../layouts/EventLayout.jsx';
import {eventListLoader, eventDetailLoader} from '../loader/events-loader.js';
import { saveAction } from '../loader/events-actions.js';
import NewEventPage from '../pages/NewEventPage.jsx';
import EditPage from '../pages/EditPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'events',
        element: <EventLayout/>,
        children: [
          {
            index: true,
            element: <EventPage/>,
            // loader함수는 언제 실행되냐? 페이지가 라우팅될 때 트리거됨
            loader: eventListLoader
          },
          {
            path: 'new',
            element: <NewEventPage />,
            // action함수는 CUD를 트리거
            action: saveAction
          },
          {
            path: ':eventId',
            element: <EventDetailPage/>,
            loader: eventDetailLoader
          },
          {
            path: ':eventId/edit',
            element: <EditPage />
          },
        ]
      },
    ]
  },
]);

export default router;