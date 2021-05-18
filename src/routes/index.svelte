<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'

	import Hero from '@/lib/comps/Hero.svelte'
	import Features from '@/lib/comps/Features.svelte'
	import Trailer from '@/lib/comps/Trailer.svelte'

	const ss = stitch({
		bg: '$background',
		color: '$foreground',
		fontFamily: '$main',
	})
</script>

<Box cls={ss}>
	<Hero />
	<Features />
	<Trailer />
</Box>
