//Layout
import { HeaderOnly, TitleOnly, BannerOnly, FooterOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import News from '~/pages/News';
import Product from '~/pages/Product';
import Introduction from '~/pages/Introduction';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: Introduction },
    { path: '/tin-tuc', component: News, layout: TitleOnly, FooterOnly, HeaderOnly },
    { path: '/tat-ca-san-pham', component: Product, layout: BannerOnly, FooterOnly, HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
