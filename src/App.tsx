import type { FC } from 'react';
import { Resume } from './components/Resume';
import { locales, type Locale } from './i18n/config';
import type { ResumeSchema } from './types/resumeSchema';
import { IntlProvider } from 'use-intl';

interface AppProps {
	resume: ResumeSchema;
	locale?: Locale;
}

const App: FC<AppProps> = ({ resume, locale = 'en' }) => {
	// useEffect(() => {
	// 	console.log('Setting language to:', language);
	// 	i18n.changeLanguage(language);

	// 	const html = document.documentElement;
	// 	html.setAttribute('lang', language);
	// }, [language]);

	return (
		<IntlProvider
			messages={locales[locale].messages}
			locale={locale}
			timeZone='UTC'
		>
			<Resume resume={resume} />
		</IntlProvider>
	);
};

export { App };
