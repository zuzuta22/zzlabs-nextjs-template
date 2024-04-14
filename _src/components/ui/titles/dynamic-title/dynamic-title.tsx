import React from 'react';
import styles from './dynamic-title.module.scss';
import { DyanmicTitleType } from './dynamic-title.types';

const DynamicTitle = (props: DyanmicTitleType) => {
  const {tag = 'div', text} = props;
  const className = styles[tag] || '';

  return React.createElement(tag, {className}, text);
}

export default DynamicTitle;