<script lang="ts">
	import Box from '@/lib/atoms/Box.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'
	import AddToChrome from '@/lib/comps/AddToChrome.svelte'

	import ImgArtseeFullLogo from '@/assets/artsee-full-logo.svg'
</script>

<Stack>
	<Image src={ImgArtseeFullLogo} />
	<Text>bring NFTs into your daily life</Text>
	<Text>
		a project by
		<Link>ambition.wtf</Link>
	</Text>
	<AddToChrome />
	<Text css={{ text: '$sm' }}>support this project :)</Text>
</Stack>
