<script lang="ts">
	import { stitch } from '@/ui'
	import { ambition } from '@/lib/datum/socials'

	import Box from '../atoms/Box.svelte'
	import Anchor from '../atoms/Anchor.svelte'
	import Image from '../atoms/Image.svelte'
	import Hexagon from '../bonds/Hexagon.svelte'

	import ambitionLogo from '@/assets/ambition_sharp_flat_clean_empty.svg'

	export let css = null
	export let size = 'md'

	const iconSizes = {
		sm: '$8',
		md: '$12',
		lg: '$16',
		xl: '$20',
		'2xl': '$24',
	}

	$: iconSize = iconSizes[size] || size

	$: cssInl = { '> *': { size: iconSize } }

	const ss = stitch({
		display: 'block',
		color: 'var(--fill)',
		transition: '$3',
		position: 'relative',
		'--fill': 'var(--base-fill)',
		'&:hover': {
			'--fill': 'var(--hover-fill)',
		},
	})
</script>

<Box css={cssInl}>
	<Anchor
		url={ambition.url}
		newTab
		cls={ss}
		{css}
		style="--base-fill: transparent; --hover-fill: var(--colors-felixgreen);"
	>
		<Hexagon fill="currentcolor" />
		<Image
			src={ambitionLogo}
			alt="Ambition Hexagonal Logo"
			css={{ position: 'absolute', top: '8.5%', left: '6%', height: '83%' }}
		/>
	</Anchor>
</Box>
