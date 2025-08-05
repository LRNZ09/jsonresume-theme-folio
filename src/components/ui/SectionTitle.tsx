import type { FC, ReactNode } from 'react';
import { useTranslations } from 'use-intl';
import { colors } from '../../lib/styleTokens';
import { cn } from '../../lib/utils';

interface SectionTitleProps {
	children?: ReactNode;
	title?: string;
	id?: string;
	className?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
	children,
	title,
	id,
	className,
}) => {
	const t = useTranslations();
	const content = children || (title ? t(title) : null);

	return (
		<h2
			id={id}
			className={cn(
				'flex items-center mt-2 mb-1 font-semibold uppercase text-base',
				colors.text.brand,
				'print:text-sm print:mt-0 print:mb-0.5',
				className,
			)}
		>
			<span>{content}</span>
			<span className='flex-grow ml-1 border-b border-brand print:hidden'></span>
		</h2>
	);
};
