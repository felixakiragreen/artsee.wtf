<script lang="ts">
	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Image from '@/lib/atoms/Image.svelte'

	import ImgFeatureModes from '@/assets/feature_modes.svg'
	import ImgFeatureFileTypes from '@/assets/feature_filetypes.svg'
	import ImgFeatureFrame from '@/assets/feature_frame.svg'
	import ImgFeatureNoLogin from '@/assets/feature_nologin.svg'

	const cssInl = {
		display: 'grid',
		justifyItems: 'center',

		'@initial': {
			gridTemplateRows: '1fr 1fr',
			justifyContent: 'center',
			alignItems: 'end',
			justifyItems: 'center',
			'& img': {
				gridRow: '1',
			},
		},
		'@md': {
			gridTemplateRows: '1fr',
			gridTemplateColumns: '1fr 1fr',
			alignItems: 'center',
			justifyContent: 'center',
			'& img': {
				gridColumn: '2',
			},
		},
	}
</script>

<Box>

	<Content>

		<Stack>
			<Box css={cssInl}>
				<Stack css={{ p: '$16' }}>
					<Text mdx="h5">
						displays your art in gallery, fullscreen, & slideshow modes
					</Text>
					<Text mdx="p">
						see your art in all its glory every time you open a new tab
					</Text>
				</Stack>
				<Image
					src={ImgFeatureModes}
					alt="graphic for various modes"
					css={{ size: '$56' }}
				/>
			</Box>

			<Box css={cssInl}>
				<Stack css={{ p: '$16' }}>
					<Text mdx="h5">
						supports image, video, audio and even interactive NFTs
					</Text>
					<Text mdx="p">
						artsee supports common NFT file types including images, video, audio
						and interactive NFTs. interact with your art right from your browser
						window
					</Text>
				</Stack>
				<Image
					src={ImgFeatureFileTypes}
					alt="graphic for various filetypes"
					css={{ size: '$56' }}
				/>
			</Box>

			<Box css={cssInl}>
				<Stack css={{ p: '$16' }}>
					<Text mdx="h5">turns your device into a digital frame</Text>
					<Text mdx="p">
						turn any device with Chrome into a digital frame by leaving a new
						tab open on fullscreen mode
					</Text>
				</Stack>
				<Image
					src={ImgFeatureFrame}
					alt="graphic for digital frame"
					css={{ size: '$56' }}
				/>
			</Box>

			<Box css={cssInl}>
				<Stack css={{ p: '$16' }}>
					<Text mdx="h5">no accounts or logins</Text>
					<Text mdx="p">
						artsee uses your public Ethereum wallet address or .eth url and
						doesn’t collect any user data
					</Text>
				</Stack>
				<Image
					src={ImgFeatureNoLogin}
					alt="graphic for no login"
					css={{ size: '$56' }}
				/>
			</Box>
		</Stack>
	</Content>
</Box>
