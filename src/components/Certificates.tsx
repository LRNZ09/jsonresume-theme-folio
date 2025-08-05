import type React from 'react';
import { useTranslation } from 'react-i18next';
import { BsAward } from 'react-icons/bs';
import { useDate } from '../lib/hooks/useDate';
import type { ResumeSchema } from '../types/resumeSchema';
import { SidebarCard } from './ui/SidebarCard';
import { SidebarSection } from './ui/SidebarSection';

type Certificate = NonNullable<ResumeSchema['certificates']>[number];

interface CertificatesProps {
	certificates?: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
	if (!certificates?.length) return null;

	const { t } = useTranslation();

	return (
		<SidebarSection title='sections.certificates' contentClassName='space-y-3'>
			{certificates.map((certificate, index) => {
				const formattedDate = useDate(certificate.date);
				const dateInfo = certificate.date
					? `${t('date.label')}: ${formattedDate}`
					: '';

				return (
					<SidebarCard
						key={index}
						title={
							<div className='flex items-start'>
								<div className='mr-3 text-brand'>
									<BsAward className='w-5 h-5' />
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
				);
			})}
		</SidebarSection>
	);
};
