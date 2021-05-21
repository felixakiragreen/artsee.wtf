<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Ambition from '@/lib/comps/Ambition.svelte'

	const ss = stitch({
		display: 'flex',
		flexDirection: 'column',
		pt: '$8',
		sy: '$8',
	})
</script>

<footer class={ss()}>
	<Inline align="center">
		<Ambition />
		<Socials space="no" />
	</Inline>

	<Box css={{ bg: '$grey700', h: '$4' }} />
</footer>
