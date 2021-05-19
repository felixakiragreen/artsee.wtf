<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	const ss = stitch({
		bg: '$grey200',
		fontFamily: '$main',
	})

	let show = false
	function toggle() {
		show = !show
	}
</script>

<Box css={{ position: 'relative' }}>
	<div on:click={toggle}>
		<Link css={{ text: '$sm' }}>support this project :)</Link>
	</div>
	{#if show}
		<Box css={{ position: 'absolute', w: '$xl' }}>
			<Text>just send Eth to artsee.eth 🙏</Text>
			<br />
			<Text css={{ text: '$xs' }}>
				(or NFTs and they'll show up in the public gallery!)
			</Text>
		</Box>
	{/if}
</Box>
