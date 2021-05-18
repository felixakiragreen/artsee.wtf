<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Socials from '@/lib/comps/Socials.svelte'

	const ss = stitch({
		display: 'flex',
		flexDirection: 'column',
		// fontFamily: '$main',
		pt: '$8',
		sy: '$8',
	})
</script>

<footer class={ss()}>
	<Socials align="center" space="no" />

	<Box css={{ bg: '$grey700', h: '$4' }} />
</footer>
