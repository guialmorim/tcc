import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="application-name" content="Parker" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content="Parker" />
					<meta name="description" content="Trabalho de Conclusão de Curso" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/static/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#000000" />

					<link rel="apple-touch-icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
					<link rel="apple-touch-icon" sizes="167x167" href="/favicon.ico" />

					<link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="mask-icon" href="/favicon.ico" color="#5bbad5" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content="https://tcc-steel.vercel.app" />
					<meta name="twitter:title" content="Parker" />
					<meta
						name="twitter:description"
						content="Parker - Your Parking Helper!"
					/>
					<meta
						name="twitter:image"
						content="https://tcc-steel.vercel.app/static/icons/android-chrome-192x192.png"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Parker" />
					<meta
						property="og:description"
						content="Parker - Your Parking Helper!"
					/>
					<meta property="og:site_name" content="Parker" />
					<meta property="og:url" content="https://tcc-steel.vercel.app" />
					<meta
						property="og:image"
						content="https://tcc-steel.vercel.app/static/icons/apple-touch-icon.png"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
