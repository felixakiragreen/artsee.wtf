<script lang="ts">
	import { stitch } from '@/ui'
	import Button from '../atoms/Button.svelte'

	export let css = null
	export let rounding = 'partial'
	// export let mdx = null

	const ss = stitch({
		bg: '$gold',
		color: '$black',
		border: '2px solid $black',
		px: '$4',
		py: '$2',
		fontFamily: '$main',
		fontWeight: '$bold',
		text: '$lg',
		boxShadow: '0 4px 0px 0 rgba(0, 0, 0)',
		cursor: 'pointer',
		transition: '$1',

		'&:active': {
			boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 1)',
			transform: 'translateY(4px)',
		},

		variants: {
			rounding: {
				partial: {
					borderRadius: '$xl',
				},
				full: {
					borderRadius: '$full',
				},
			},
		},
	})
</script>

<Button cls={ss} vrt={{ rounding }} {css}>
	<slot />
</Button>
