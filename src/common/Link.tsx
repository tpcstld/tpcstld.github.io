import {Link as GatsbyLink} from 'gatsby';
import {AnchorHTMLAttributes, ReactNode} from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
}

export default function Link({href, children, ...props}: LinkProps) {
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return (
      <GatsbyLink to={href} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
