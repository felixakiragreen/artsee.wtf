<script lang="ts">
	import { stitch } from '@/ui'

	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'
	import Hide from '@/lib/bonds/Hide.svelte'
	import Button from '@/lib/bonds/Button.svelte'
	import AddToChrome from '@/lib/comps/AddToChrome.svelte'

	import ImgArtseeTextLarge from '@/assets/artsee_text_large.svg'
	import ImgArtseeGoldLogo from '@/assets/artsee_gold_logo.svg'
	import IconEth from '@/assets/icon_ethereum.svg'
	import IconChrome from '@/assets/icon_chrome.svg'

	const ss = stitch({
		bg: '$grey200',
		fontFamily: '$main',
		// position: 'relative',
		// zIndex: 100,
	})

	const ss1 = stitch({
		width: '640px',
		position: 'relative',
		left: '$-12',

		'@initial': {
			width: '0px',
		},
		'@sm': {
			width: '320px',
		},
		'@md': {
			width: '480px',
		},
		'@lg': {
			width: '640px',
		},
		// bg: '$grey200',
		// position: 'relative',
		// zIndex: 100,
	})
</script>

<Box cls={ss}>
	<Hide below="sm">
		<!-- <Box css={{ width: '60vw', position: 'absolute', left: '$-12' }}>
			<Image
				src={ImgArtseeTextLarge}
				alt="artsee logo"
				css={{ maxWidth: '$full', maxHeight: '$full' }}
			/>
		</Box> -->
	</Hide>
	<Content>
		<Inline>

			<Hide below="sm">
				<Box cls={ss1}>
					<Image src={ImgArtseeTextLarge} css={{ width: '$full' }} />
				</Box>
			</Hide>
			<Stack align="leading" space="md">
				<Image src={ImgArtseeGoldLogo} alt="artsee logo" />
				<Text
					css={{ color: '$gold', textTransform: 'uppercase', fontWeight: '$semi' }}
				>
					artsee for chrome
				</Text>
				<Text mdx="h5">bring NFTs into your daily life</Text>
				<Text mdx="p">
					artsee uses your
					<Image
						src={IconEth}
						css={{ position: 'relative', top: '$1', left: '$0_5' }}
					/>
					Ethereum wallet to display art from your collection every time you
					open a new tab
				</Text>
				<AddToChrome />
				<Text css={{ text: '$sm' }}>support this project :)</Text>
			</Stack>
		</Inline>
	</Content>
</Box>
