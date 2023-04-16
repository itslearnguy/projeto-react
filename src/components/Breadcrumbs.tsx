import { Link } from "react-router-dom";

export type BreadcrumbsProps = {
  links: { title: string; link: string }[];
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <nav className="flex flex-row items-center gap-4">
      {links.map(({ title, link }, index) => (
        <span className="flex flex-row items-center">
          <Link
            key={index}
            to={link}
            className="uppercase text-sm text-black-600 hover:text-black-400"
          >
            {title}
          </Link>
        </span>
      ))}
    </nav>
  );
}
