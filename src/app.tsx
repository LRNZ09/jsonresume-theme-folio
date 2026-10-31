import { IconContext } from '@phosphor-icons/react'
import type { FC } from 'react'
import { IntlProvider } from 'use-intl'
import { Resume } from './components/Resume'
import { type Locale, locales } from './i18n/config'
import type { ResumeSchema } from './types/resumeSchema'

interface AppProps {
	resume: ResumeSchema
	locale?: Locale
}

const App: FC<AppProps> = ({ resume, locale = 'en' }) => {
	return (
		<IntlProvider
			messages={locales[locale].messages}
			locale={locale}
			timeZone='UTC'
		>
			<IconContext.Provider value={{ size: 16, weight: 'duotone' }}>
				<Resume resume={resume} />
			</IconContext.Provider>
		</IntlProvider>
	)
}

export { App }
