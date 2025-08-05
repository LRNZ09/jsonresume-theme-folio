import type { FC } from 'react';
// import { I18nextProvider } from 'react-i18next';
// import { Resume } from './components/Resume';
import type { Locale } from './i18n/config';
// import i18n from './i18n/config';
import type { ResumeSchema } from './types/resumeSchema';

interface AppProps {
	resume?: ResumeSchema;
	language?: Locale;
}

const App: FC<AppProps> = ({ resume, language = 'en' }) => {
	return (
		<p>
			Hello, this is a placeholder for the App component. Please replace this
			with your actual content.
		</p>
	);
	// useEffect(() => {
	// 	console.log('Setting language to:', language);
	// 	i18n.changeLanguage(language);

	// 	const html = document.documentElement;
	// 	html.setAttribute('lang', language);
	// }, [language]);

	// return (
	// 	<I18nextProvider i18n={i18n}>
	// 		<Resume resume={resume} />
	// 	</I18nextProvider>
	// );
};

export { App };
