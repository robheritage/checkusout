import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import classnames from 'classnames';
import style from './styles.module.scss';

const Button = ({
  as: Tag,
  children,
  className,
  type,
  onClick,
  href,
  block,
  theme,
  ghost,
  ...props
}) => {
  const Element = href ? 'a' : Tag;
  return (
    <Element
      className={classnames(style.button, {
        [style[`button__${theme}${ghost ? '__ghost' : ''}`]]: theme,
        [style.button__block]: block,
      }, className)}
      href={href}
      type={Element === 'button' ? type : null}
      onClick={onClick}
      {...props}
    >
      { children }
    </Element>
  );
};

Button.propTypes = {
  as: elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  block: PropTypes.bool,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  ghost: PropTypes.bool,
};

Button.defaultProps = {
  as: 'button',
  className: null,
  onClick: () => {},
  href: null,
  block: false,
  type: 'button',
  theme: null,
  ghost: false,
};

export default Button;
