export const changeRouteWithENV = (route: string) =>
  process.env.NODE_ENV === 'development' ? route : `${route}.html`

export interface NavbarConfig {
  name: string
  route: string
}
export const navbarConfig: NavbarConfig[] = [
  {
    name: 'Services',
    route: changeRouteWithENV('/services'),
  },
  {
    name: 'About Us',
    route: changeRouteWithENV('/about-us'),
  },
  {
    name: 'Contact Us',
    route: changeRouteWithENV('/contact-us'),
  },
  {
    name: 'Get a Quote',
    route: changeRouteWithENV('/get-quote'),
  },
]
