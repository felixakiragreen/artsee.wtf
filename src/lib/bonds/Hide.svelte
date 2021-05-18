<script lang="ts">
	import { stitch } from '@/ui'
	import Box from '../atoms/Box.svelte'

	export let css = null
	export let below = null
	export let above = null
	export let inline = true

	const ss = stitch({
		// display: 'flex',

		variants: {
			inline: {
				true: {
					display: 'inline-block',
				},
				false: {
					display: 'block',
				},
			},
			below: {
				sm: {
					'@initial': {
						display: 'none',
					},
					'@sm': {
						display: 'initial',
					},
				},
				md: {
					'@initial': {
						display: 'none',
					},
					'@md': {
						display: 'initial',
					},
				},
				lg: {
					'@initial': {
						display: 'none',
					},
					'@lg': {
						display: 'initial',
					},
				},
			},
			above: {
				sm: {
					'@initial': {
						display: 'initial',
					},
					'@sm': {
						display: 'none',
					},
				},
				md: {
					'@initial': {
						display: 'initial',
					},
					'@md': {
						display: 'none',
					},
				},
				lg: {
					'@initial': {
						display: 'initial',
					},
					'@lg': {
						display: 'none',
					},
				},
			},
		},
	})
</script>

<Box cls={ss} vrt={{ inline, above, below }} {css}>
	<slot />
</Box>
