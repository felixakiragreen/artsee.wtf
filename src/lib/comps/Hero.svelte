<script lang="ts">
	import { stitch } from '@/ui'

	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Hide from '@/lib/bonds/Hide.svelte'
	import AddToChrome from '@/lib/comps/AddToChrome.svelte'
	import SupportProject from './SupportProject.svelte'

	import ImgArtseeTextLarge from '@/assets/artsee_text_large.svg'
	import ImgArtseeGoldLogo from '@/assets/artsee_gold_logo.svg'
	import IconEth from '@/assets/icon_ethereum.svg'

	const ss = stitch({
		bg: '$grey200',
		fontFamily: '$main',
		// py: '$12',
	})

	const ss1 = stitch({
		// width: '50%',
		position: 'relative',
		left: '$-12',
		// top: '$-12',
		// bottom: '$-12',
		height: '$full',
		display: 'flex',
		alignItems: 'center',
		// my: '$-12',

		// '@initial': {
		// width: '0px',
		// },
		// '@sm': {
		// 	width: '320px',
		// },
		// '@md': {
		// 	width: '100%',
		// },
		// '@lg': {
		// 	width: '640px',
		// },
	})

	const cssHero = {
		py: '$12',
		pr: '$12',
		'@initial': {
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
		},
		'@md': {
			minWidth: '$sm',
			alignItems: 'start',
			textAlign: 'left',
		},
		'@lg': {
			minWidth: '$lg',
		},
	}
</script>

<Box cls={ss}>
	<Content>
		<Inline align="center">
			<Hide below="md">
				<Box cls={ss1}>
					<Image src={ImgArtseeTextLarge} css={{ width: '$full' }} />
				</Box>
			</Hide>
			<Stack align="leading" space="md" css={cssHero}>
				<Image src={ImgArtseeGoldLogo} alt="artsee logo" />
				<Text
					css={{ color: '$gold', textTransform: 'uppercase', fontWeight: '$semi' }}
				>
					artsee for chrome
				</Text>
				<Text mdx="h5">bring NFTs into your daily life</Text>
				<Text mdx="p" css={{ maxWidth: '$md' }}>
					artsee uses your
					<Image
						src={IconEth}
						css={{ position: 'relative', top: '$1', left: '$0_5' }}
					/>
					Ethereum wallet to display art from your collection every time you
					open a new tab
				</Text>
				<AddToChrome />
				<SupportProject />
			</Stack>
		</Inline>
	</Content>
</Box>
