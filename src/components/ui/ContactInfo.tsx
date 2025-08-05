import type { FC } from 'react'
import { useTranslations } from 'use-intl'
import { AtIcon, GlobeIcon, PhoneIcon } from '@phosphor-icons/react'

interface ContactInfoProps {
	email?: string
	phone?: string
	url?: string
}

export const ContactInfo: FC<ContactInfoProps> = ({ email, phone, url }) => {
	const t = useTranslations()

	return (
		<div
			className='flex flex-wrap gap-6 mt-4 text-sm text-foreground-tertiary print:mt-0 print:align-middle'
			role='contentinfo'
			aria-label={t('common.contactInfo')}
		>
			{email && (
				<a
					href={`mailto:${email}`}
					className='flex items-center gap-2 transition-colors hover:text-brand print:gap-1'
					aria-label={`${t('common.email')}: ${email}`}
				>
					<AtIcon
						className='w-4 h-4 text-brand print:w-3 print:h-3'
						aria-hidden='true'
					/>
					{email}
				</a>
			)}
			{phone && (
				<a
					href={`tel:${phone}`}
					className='flex items-center gap-2 transition-colors hover:text-brand print:gap-1'
					aria-label={`${t('common.phone')}: ${phone}`}
				>
					<PhoneIcon
						className='w-4 h-4 text-brand print:flex'
						aria-hidden='true'
					/>
					{phone}
				</a>
			)}
			{url && (
				<a
					href={url}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center gap-2 transition-colors hover:text-brand print:gap-1'
					aria-label={`${t('common.website')}: ${url}`}
				>
					<GlobeIcon
						className='w-4 h-4 text-brand print:w-4 print:h-4'
						aria-hidden='true'
					/>
					{url}
				</a>
			)}
		</div>
	)
}
