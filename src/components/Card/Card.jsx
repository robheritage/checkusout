import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import classnames from 'classnames';
import style from './styles.module.scss';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Card = ({ as: Tag, children, className, ...props }) => {
  return (
    <Tag className={classnames(style.card, className)} {...props}>
      {children}
    </Tag>
  );
};

Card.propTypes = {
  as: elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  as: 'div',
  className: null,
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
export default Card;
