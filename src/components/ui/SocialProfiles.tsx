import { type FC, memo } from 'react';
import { useTranslations } from 'use-intl';
import type { ResumeSchema } from '../../types/resumeSchema';
import { NetworkIcon } from './NetworkIcon';

interface SocialProfilesProps {
	profiles?: NonNullable<ResumeSchema['basics']>['profiles'];
}

export const SocialProfiles: FC<SocialProfilesProps> = memo(({ profiles }) => {
	const t = useTranslations();

	if (!profiles || profiles.length === 0) return null;

	return (
		<div className='mt-2 print:mt-1'>
			<div className='flex flex-wrap gap-3'>
				{profiles.map((profile, index) => {
					if (!profile.network) return null;

					return (
						<a
							key={index}
							href={profile.url}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-1 text-sm hover:text-foreground-muted hover:underline'
							title={`${profile.network} ${t('common.profile')}`}
						>
							<NetworkIcon name={profile.network} />
							{profile.network}
						</a>
					);
				})}
			</div>
		</div>
	);
});
