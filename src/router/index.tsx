import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import Layout from '@/layouts/index'

const Routes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout/>,
			children: [
				{
					path: '/',
					element: <HomeView/>,
				},
				{
					path: '/about',
					element: <AboutView/>,
				}
			]
		}
	])
	return routes
}


export default () => {
	return (
		<Router>
			<Routes/>
		</Router>
	)
}
