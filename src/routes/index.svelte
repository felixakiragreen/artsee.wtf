<script lang="ts">
	import { stitch } from '@/ui'

	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	const ss = stitch({
		bg: '$grey200',
		// position: 'relative',
		// zIndex: 100,
	})

	const ss1 = stitch({
		bg: '$grey200',
		// position: 'relative',
		// zIndex: 100,
	})
</script>

<Box cls={ss}>
	<Content>
		<Stack css={{ fontFamily: '$main', text: '$9xl' }}>
			<Text>art</Text>
			<Text>see</Text>
		</Stack>
		<Stack>
			<Text>asdf</Text>
		</Stack>
	</Content>
</Box>
