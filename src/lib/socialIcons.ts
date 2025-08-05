import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

export const contactIcons = {
	email: { icon: FaEnvelope, color: '#6c6c6c' },
	phone: { icon: FaMobileAlt, color: '#6c6c6c' },
	location: { icon: FaMapMarkerAlt, color: '#6c6c6c' },
} as const;

export const getContactIcon = (type: keyof typeof contactIcons) =>
	contactIcons[type];
