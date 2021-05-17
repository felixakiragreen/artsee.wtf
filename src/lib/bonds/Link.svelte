<script lang="ts">
	import { stitch } from '@/ui'
	import Anchor from '../atoms/Anchor.svelte'

	export let url
	export let newTab = false

	export let css = null
	export let appearance = 'blockinho'

	const ss = stitch({
		variants: {
			appearance: {
				none: {
					textDecoration: 'none',
				},
				blocky: {
					// text: '$lg',
					// fontWeight: '$bold',
					color: '$foreground',
					textDecoration: 'none',
					borderBottom: '2px solid $foreground',
					display: 'inline-block',
					// transition: '$1',

					'& span': {
						display: 'inline-block',
						transition: '$1',
						py: '$1',
						my: '$-1',
					},

					'&:hover': {
						// backgroundColor: '$felixgreen',
						// color: '$indigo',
						// color: '$background',
						cursor: 'pointer',

						'& span': {
							backgroundColor: '$highlight',
							px: '$2',
							mx: '$-2',
						},
					},
				},
				blockinho: {
					// color: '$highlight',
					// textDecoration: 'underline',
					color: '$foreground',
					textDecoration: 'none',
					display: 'inline-block',
					borderBottom: '1px solid $foreground',
					// transition: '$1',

					'& span': {
						display: 'inline-block',
						transition: '$1',

						// py: '$1',
						// my: '$-1',
					},

					'&:hover': {
						// color: '$background',
						cursor: 'pointer',
						borderBottom: '1px solid transparent',

						'& span': {
							backgroundColor: '$highlight',
							px: '$1',
							mx: '$-1',
						},
					},
				},
			},
			// textTransform: {
			// 	initial: {
			// 		textTransform: "initial"
			// 	},
			// 	uppercase: {
			// 		textTransform: 'uppercase',
			// 	},
			// }
		},

		defaultVariants: {
			appearance: 'blockinho',
		},
	})
</script>

<Anchor cls={ss} vrt={{ appearance }} {css} {url} {newTab}>
	<span>
		<slot />
	</span>
</Anchor>
