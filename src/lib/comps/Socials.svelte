<script lang="ts">
	import { socials } from '@/lib/datum/socials'

	import HexIcon from '../bonds/HexIcon.svelte'
	import Inline from '../bonds/Inline.svelte'

	import { map } from 'lodash'
	import type { SocialLink } from '@/types'

	let listSocials: SocialLink[] = map(
		socials,
		(value: SocialLink, key, collection) => value
	)

	// console.log({ listSocials })

	// const ss = stitch({
	// 	display: 'grid',
	// 	gridTemplateColumns: 'repeat(auto-fill, $16)',
	// 	w: '$96',

	// 	'& a': {
	// 		// size: '$16',
	// 	},
	// })

	export let space = 'sm'
	export let align = null
	export let size = 'md'
	export let css = null

	const iconSizes = {
		sm: '$8',
		md: '$12',
		lg: '$16',
		xl: '$20',
		'2xl': '$24',
	}

	$: iconSize = iconSizes[size] || size

	$: cssInl = css || { '> *': { size: iconSize } }
</script>

<Inline css={cssInl} {space} {align}>
	{#each listSocials as social}
		<HexIcon {...social} />
	{/each}
</Inline>
