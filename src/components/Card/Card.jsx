import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import style from './styles.module.scss';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Card = ({ as: Tag, children, ...props }) => {
  return (
    <Tag className={style.card} {...props}>
      {children}
    </Tag>
  );
};

Card.propTypes = {
  as: elementType,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  as: 'div',
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
export default Card;
