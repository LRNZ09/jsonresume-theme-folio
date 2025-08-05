import type React from 'react';
import { useFormatter, useTranslations } from 'use-intl';
import type { ResumeSchema } from '../types/resumeSchema';
import { SidebarCard } from './ui/SidebarCard';
import { SidebarSection } from './ui/SidebarSection';
import { TrophyIcon } from '@phosphor-icons/react';

type Award = NonNullable<ResumeSchema['awards']>[number];

interface AwardsProps {
	awards?: Award[];
}

export const Awards: React.FC<AwardsProps> = ({ awards }) => {
	const f = useFormatter();
	const t = useTranslations();

	if (!awards?.length) {
		return null;
	}

	return (
		<SidebarSection title='sections.awards'>
			{awards.map((award, index) => {
				const dateInfo = award.date
					? `${t('date.label')}: ${f.dateTime(new Date(award.date))}`
					: '';

				return (
					<SidebarCard
						key={index}
						title={
							<div className='flex items-start'>
								<div className='mr-3 text-brand'>
									<TrophyIcon />
								</div>
								<div>{award.title}</div>
							</div>
						}
						subtitle={
							award.awarder
								? `${t('common.awardedBy')}: ${award.awarder}`
								: undefined
						}
						date={dateInfo}
						url={award.url as string}
						urlLabel={t('common.viewAward')}
						content={award.summary as string}
					/>
				);
			})}
		</SidebarSection>
	);
};
