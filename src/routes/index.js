//Layout
import { HeaderOnly, ContactOnly, TitleOnly, BannerOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import News from '~/pages/News';
import Introduction from '~/pages/Introduction';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: Introduction },
    { path: '/tin-tuc', component: News, layout: TitleOnly, ContactOnly, HeaderOnly },
    { path: '/tat-ca-san-pham', component: News, layout: BannerOnly, ContactOnly, HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
