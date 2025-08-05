import type { FC } from 'react';
import { SectionCard } from './ui/SectionCard';
import { SectionTitle } from './ui/SectionTitle';

interface SummaryProps {
	summary: string;
}

export const Summary: FC<SummaryProps> = ({ summary }) => {
	if (!summary) return null;

	return (
		<>
			<SectionTitle title='sections.about' />
			<SectionCard summary={summary} />
		</>
	);
};
