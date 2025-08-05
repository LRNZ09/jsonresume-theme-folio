import type React from 'react';
import type { ReactNode } from 'react';
import { useDuration } from '../../lib/hooks/useDuration';
import { useFormatter } from 'use-intl';

interface TimelineEntryProps {
	// ! FIXME: Use Date type for startDate and endDate
	startDate?: string;
	endDate?: string;
	children: ReactNode;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
	startDate,
	endDate,
	children,
}) => {
	const f = useFormatter();
	const duration = useDuration(startDate, endDate);

	const dateRange =
		startDate && endDate
			? f.dateTimeRange(new Date(startDate), new Date(endDate))
			: '';

	return (
		<div
			className='mb-4 print:m-0 print:py-2 print:border-b print:border-color'
			role='article'
		>
			{startDate && (
				<div className='mb-2 text-sm print:mb-1 print:text-[9px]'>
					<div className='flex items-center'>
						<span className='font-medium text-foreground' role='time'>
							{dateRange}
						</span>
						{!!duration && (
							<span
								className='ml-2 text-sm text-foreground-tertiary print:ml-1'
								role='time'
								aria-label={`Duration: ${duration}`}
							>
								({duration})
							</span>
						)}
					</div>
				</div>
			)}

			{children}
		</div>
	);
};
