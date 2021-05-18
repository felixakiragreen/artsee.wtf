<script lang="ts">
	import { stitch } from '@/ui'

	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
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
		<Text>
			new episodes
			<b>friday @ 09:00 et</b>
		</Text>
	</Content>
</header>
