import { formatDuration, intervalToDuration } from 'date-fns'
import type React from 'react'
import { type ReactNode, useMemo } from 'react'
import { useFormatter } from 'use-intl'

interface TimelineEntryProps {
	// ! FIXME: Use Date type for startDate and endDate
	startDate?: string
	endDate?: string
	children: ReactNode
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
	startDate,
	endDate,
	children,
}) => {
	const f = useFormatter()

	const dateRange = useMemo(
		() =>
			startDate && endDate
				? f.dateTimeRange(new Date(startDate), new Date(endDate))
				: '',
		[startDate, endDate, f.dateTimeRange],
	)

	// TODO: Not localized yet
	const duration = useMemo(
		() =>
			startDate
				? formatDuration(
						intervalToDuration({
							start: new Date(startDate),
							end: endDate ? new Date(endDate) : new Date(),
						}),
					)
				: '',
		[startDate, endDate],
	)

	return (
		<article className='mb-4 print:m-0 print:py-2 print:border-b print:border-color'>
			{startDate && (
				<div className='mb-2 text-sm print:mb-1 print:text-[9px]'>
					<div className='flex items-center'>
						<time className='font-medium text-foreground'>{dateRange}</time>
						{!!duration && (
							<time className='ml-2 text-sm text-foreground-tertiary print:ml-1'>
								({duration})
							</time>
						)}
					</div>
				</div>
			)}

			{children}
		</article>
	)
}
