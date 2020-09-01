import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ backgroundColor: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ backgroundColor: theme.ui }}>The way of kings</li>
          <li style={{ backgroundColor: theme.ui }}>The name of wind</li>
          <li style={{ backgroundColor: theme.ui }}>The final empire</li>
        </ul>
      </div>
    );
  }
}
