<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Hide from '@/lib/bonds/Hide.svelte'
	import Button from '@/lib/bonds/Button.svelte'
	import AddToChrome from '@/lib/comps/AddToChrome.svelte'
	import SupportProject from './SupportProject.svelte'

	import ImgArtseeTextLarge from '@/assets/artsee_text_large.svg'
	import ImgArtseeGoldLogo from '@/assets/artsee_gold_logo.svg'
	import IconEth from '@/assets/icon_ethereum.svg'
	import IconArrow from '@/assets/icon_arrow.svg'

	const ss = stitch({
		bg: '$grey200',
		fontFamily: '$main',
		'@initial': {
			height: 'auto',
		},
		'@md': {
			minHeight: 'calc(100vh - 80px)',
			overflow: 'hidden',
		},
	})

	const ssBox = stitch({
		display: 'grid',
		height: '$full',

		'@initial': {
			gridTemplateColumns: '1fr',
		},
		'@md': {
			gridGap: '$4',
			gridTemplateColumns: '1fr 400px',
			pr: '$12',
		},
		'@lg': {
			gridGap: '$12',
			gridTemplateColumns: '1fr 500px',
		},
		'@xl': {
			gridGap: '$24',
		},
	})

	const ssArtSee = stitch({
		// width: '50%',
		// bg: '$red400',
		position: 'relative',
		right: '$12',
		top: '$-2',
		// bottom: '$12',
		height: '$full',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

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

	const cssContent = {
		py: '$12',
		// pr: '$12',
		'@initial': {
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
		},
		'@md': {
			height: 'calc(100vh - 80px)',
			// width: '$sm',
			alignItems: 'start',
			textAlign: 'left',
		},
		'@lg': {
			// width: '$lg',
		},
	}
</script>

<Box cls={ss}>
	<Box cls={ssBox}>
		<Hide below="md">
			<Box cls={ssArtSee}>
				<Image src={ImgArtseeTextLarge} css={{ size: '$full' }} />
			</Box>
		</Hide>
		<Stack align="leading" space="md" css={cssContent}>
			<Image src={ImgArtseeGoldLogo} alt="artsee logo" />
			<Text appearance="subtitle">artsee for chrome</Text>
			<Text mdx="h5">bring NFTs into your daily life</Text>
			<Text mdx="p" css={{ maxWidth: '$md' }}>
				artsee uses your
				<Image
					src={IconEth}
					css={{ position: 'relative', top: '$1', left: '$0_5' }}
				/>
				Ethereum wallet to display art from your collection every time you open
				a new tab
			</Text>
			<AddToChrome />
			<SupportProject />
			<Hide below="md">
				<Button
					rounding="full"
					css={{ position: 'absolute', bottom: '$12', size: '$16', fontWeight: '$base' }}
				>
					<Image src={IconArrow} css={{ position: 'relative', top: '$1' }} />
				</Button>
			</Hide>
		</Stack>
	</Box>
</Box>
