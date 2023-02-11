//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import News from '~/pages/News';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: Introduction },
    { path: '/tin-tuc', component: News, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
