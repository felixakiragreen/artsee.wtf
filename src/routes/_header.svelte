<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Ambition from '@/lib/comps/Ambition.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	const ss = stitch({
		position: 'relative',
		zIndex: 100,
	})
</script>

<header class={ss()}>
	<Content>
		<Inline css={{ justifyContent: 'space-between' }} alignV="center">
			<Box css={{ position: 'relative', size: '$10' }}>
				<Ambition />
			</Box>
			<Socials space="no" />
		</Inline>
	</Content>
</header>
