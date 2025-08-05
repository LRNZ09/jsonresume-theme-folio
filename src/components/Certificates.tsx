import type React from 'react'
import { useFormatter, useTranslations } from 'use-intl'
import type { ResumeSchema } from '../types/resumeSchema'
import { SidebarCard } from './ui/SidebarCard'
import { SidebarSection } from './ui/SidebarSection'
import { CertificateIcon } from '@phosphor-icons/react'

type Certificate = NonNullable<ResumeSchema['certificates']>[number]

interface CertificatesProps {
	certificates?: Certificate[]
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
	const f = useFormatter()
	const t = useTranslations()

	if (!certificates?.length) return null

	return (
		<SidebarSection title='sections.certificates' contentClassName='space-y-3'>
			{certificates.map((certificate, index) => {
				const dateInfo = certificate.date
					? `${t('date.label')}: ${f.dateTime(new Date(certificate.date))}`
					: ''

				return (
					<SidebarCard
						key={index}
						title={
							<div className='flex items-start'>
								<div className='mr-3 text-brand'>
									<CertificateIcon />
								</div>
								<div>{certificate.name}</div>
							</div>
						}
						subtitle={
							certificate.issuer
								? `${t('common.issuedBy')}: ${certificate.issuer}`
								: undefined
						}
						date={dateInfo}
						url={certificate.url}
						urlLabel={t('common.viewCertificate')}
					/>
				)
			})}
		</SidebarSection>
	)
}
