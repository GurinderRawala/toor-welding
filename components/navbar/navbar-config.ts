export interface NavbarConfig {
  name: string
  route: string
}
export const navbarConfig: NavbarConfig[] = [
  {
    name: 'Services',
    route: '/services',
  },
  {
    name: 'About Us',
    route: '/about-us',
  },
  {
    name: 'Contact Us',
    route: '/contact-us',
  },
  {
    name: 'Get a Quote',
    route: '/get-quote',
  },
]
