import React, { createContext } from 'react';

// Contextを作成
export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    // ダークモード、ライトモードそれぞれのカラーコード
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      // Providerを与える
      // state内の全てのデータ
      // actionを与える
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {/* valueで子コンポーネントに与える値をセット */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
