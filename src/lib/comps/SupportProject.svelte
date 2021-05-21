<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	export let css = null

	const ss = stitch({
		position: 'absolute',
		'@initial': {
			w: '$screen-w',
			px: '$4',
			left: 0,
			right: 0,
		},
		'@md': {
			w: '$xl',
			px: '$0',
		},
	})

	let show = false
	function toggle() {
		show = !show
	}
</script>

<Box>
	<div on:click={toggle}>
		<Link css={{ text: '$sm' }}>support this project :)</Link>
	</div>
	{#if show}
		<Box cls={ss} {css}>
			<Text>just send Eth to artsee.eth 🙏</Text>
			<br />
			<Text css={{ text: '$xs' }}>
				(or NFTs and they'll show up in the public gallery!)
			</Text>
		</Box>
	{/if}
</Box>
