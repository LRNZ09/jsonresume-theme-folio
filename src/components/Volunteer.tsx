import type { FC } from 'react'
import type { ResumeSchema } from '../types/resumeSchema'
import { SectionCard } from './ui/SectionCard'
import { TimelineEntry } from './ui/TimelineEntry'
import { TimelineSection } from './ui/TimelineSection'

type Volunteer = NonNullable<ResumeSchema['volunteer']>[number]

interface VolunteerProps {
	volunteer?: Volunteer[]
}

export const Volunteer: FC<VolunteerProps> = ({ volunteer }) => {
	if (!volunteer?.length) return null

	return (
		<TimelineSection title='sections.volunteer'>
			{volunteer.map((volunteerItem, index) => (
				<TimelineEntry
					key={`volunteer-${index}`}
					startDate={volunteerItem.startDate}
					endDate={volunteerItem.endDate}
				>
					<SectionCard
						title={volunteerItem.position}
						subtitle={volunteerItem.organization}
						url={volunteerItem.url}
						highlights={volunteerItem.highlights}
						summary={volunteerItem.summary}
						actionUrl={volunteerItem.url}
						actionLabelKey='common.visitWebsite'
					/>
				</TimelineEntry>
			))}
		</TimelineSection>
	)
}
