import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import style from './styles.module.scss';

const CardContent = ({ as: Tag, children, }) => {
  return (
    <Tag className={style.card__content}>
      { children }
    </Tag>
  );
};

CardContent.propTypes = {
  as: elementType,
  children: PropTypes.node.isRequired,
};

CardContent.defaultProps = {
  as: 'div',
}

export default CardContent;
