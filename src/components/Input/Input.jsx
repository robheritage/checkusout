import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './styles.module.scss';

const Input = ({ className, id, multiline, name, type, ...props }) => {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <Tag
      type={multiline ? null : type}
      id={id}
      name={name}
      className={classnames(style.input, className)}
      {...props}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  className: null,
  multiline: false,
};

export default Input;
