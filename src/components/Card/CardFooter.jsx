import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import style from './styles.module.scss';

const CardFooter = ({ as: Tag, children, }) => {
  return (
    <Tag className={style.card__footer}>
      { children }
    </Tag>
  );
};

CardFooter.propTypes = {
  as: elementType,
  children: PropTypes.node.isRequired,
};

CardFooter.defaultProps = {
  as: 'div',
}

export default CardFooter;
