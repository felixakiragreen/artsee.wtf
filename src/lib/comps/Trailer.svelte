<script lang="ts">
	import Image from '@/lib/atoms/Image.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'
	import AddToChrome from '@/lib/comps/AddToChrome.svelte'
	import SupportProject from '@/lib/comps/SupportProject.svelte'

	import { ambition } from '@/lib/datum/socials'

	import ImgArtseeFullLogo from '@/assets/artsee_full_logo.svg'
</script>

<Stack space="md" align="center" css={{ py: '$24' }}>
	<Image src={ImgArtseeFullLogo} css={{ w: '$96', maxWidth: '90vw' }} />
	<Text>bring NFTs into your daily life</Text>
	<Text css={{ text: '$xs' }}>
		a project by
		<Link newTab url={ambition.url}>ambition.wtf</Link>
	</Text>
	<AddToChrome />
	<SupportProject css={{ textAlign: 'center', mx: 'auto' }} />
</Stack>
