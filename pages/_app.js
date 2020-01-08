import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

//Example theme for the styledcomponents themeprovider
const theme = {
	primary: "#005b9f",
	secondary: "#003f8c",
	tertiary: "#009045",
	alternative: "#ce6b00",
	gray: "#eeeeee",
	darkGray: "#373737",
  white: "#fff",
  desktop: "1200px",
};
const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Fira Sans', sans-serif;    
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
      margin: 0; 
      padding: 0;
    }
    body {
      padding: 0;
      margin: 0;
      font-family: 'Fira Sans', sans-serif; 
      background-color: #F9f9f9;
      width: auto!important; 
      overflow-x: hidden!important;
    }
    body.active {
      overflow: hidden;
    }
    a {
      text-decoration: none;
      color: ${theme.black};
    }
    button {  font-family: 'Fira Sans', sans-serif;  }
  body {
    .pac-container {
      z-index: 1051 !important;
    }
    .modal {
      background: rgba(0, 0, 0, 0.4);
    }  
  }
`;

export class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		);
	}
}

export default MyApp;
