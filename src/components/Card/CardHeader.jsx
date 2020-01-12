import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import style from './styles.module.scss';

const CardHeader = ({ as: Tag, heading, }) => {
  return (
    <Tag className={style.card__header}>
      { heading }
    </Tag>
  );
};

CardHeader.propTypes = {
  as: elementType,
  heading: PropTypes.string.isRequired,
};

CardHeader.defaultProps = {
  as: 'div',
}

export default CardHeader;
