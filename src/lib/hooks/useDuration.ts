import { isValid } from 'date-fns';
import { useTranslations } from 'use-intl';

export const useDuration = (
	startDateString?: string,
	endDateString?: string,
) => {
	const t = useTranslations();

	if (!startDateString) return '';

	const startDate = new Date(startDateString);
	if (!isValid(startDate)) return '';

	const endDate = endDateString ? new Date(endDateString) : new Date();
	if (endDateString && !isValid(endDate)) return '';

	const diffYears = endDate.getFullYear() - startDate.getFullYear();
	const diffMonths = endDate.getMonth() - startDate.getMonth();

	let years = diffYears;
	let months = diffMonths;
	if (diffMonths < 0) {
		years -= 1;
		months += 12;
	}

	const parts = [];

	if (years > 0) {
		parts.push(
			`${years} ${years === 1 ? t('common.duration.year') : t('common.duration.years')}`,
		);
	}

	if (months > 0) {
		parts.push(
			`${months} ${months === 1 ? t('common.duration.month') : t('common.duration.months')}`,
		);
	}

	if (parts.length === 0) {
		return t('common.duration.lessThanMonth');
	}

	return parts.join(', ');
};
