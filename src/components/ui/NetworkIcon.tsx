import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	MediumLogoIcon,
	StackOverflowLogoIcon,
	XLogoIcon,
} from '@phosphor-icons/react'

interface NetworkIconProps {
	name: string // TODO: Change to enum?
}

export const NetworkIcon = ({ name }: NetworkIconProps) => {
	const lowercasedName = name.toLowerCase()

	switch (lowercasedName) {
		case 'github':
			return <GithubLogoIcon color='#333333' />
		case 'linkedin':
			return <LinkedinLogoIcon color='#0077B5' />
		case 'twitter':
		case 'x':
			return <XLogoIcon color='#000000' />
		case 'medium':
			return <MediumLogoIcon color='#000000' />
		case 'stackoverflow':
			return <StackOverflowLogoIcon color='#F48024' />
		default: {
			console.warn(`Icon for network "${name}" not found.`)
			return null
		}
	}
}
