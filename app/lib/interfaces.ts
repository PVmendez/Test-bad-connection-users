export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CardProps {
  data: Post[];
}

export interface MenuItem {
  name: string;
  link: string;
}

export interface FooterItem {
  links: MenuItem[];
  title: string;
}