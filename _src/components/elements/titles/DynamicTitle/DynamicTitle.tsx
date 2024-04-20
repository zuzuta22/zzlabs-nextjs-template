import React from 'react';
import styles from './DynamicTitle.module.scss';
import { DyanmicTitleType } from './DynamicTitle.types';

const DynamicTitle = (props: DyanmicTitleType) => {
  const {tag = 'div', text} = props;
  const className = styles[tag] || '';

  return React.createElement(tag, {className}, text);
}

export default DynamicTitle;