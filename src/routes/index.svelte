<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Content from '@/lib/bonds/Content.svelte'

	import Hero from '@/lib/comps/Hero.svelte'

	const ss = stitch({
		bg: '$grey200',
		fontFamily: '$main',
		// position: 'relative',
		// zIndex: 100,
	})
</script>

<Box cls={ss}>
	<Hero />
</Box>
