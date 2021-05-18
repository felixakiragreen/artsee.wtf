<script lang="ts">
	import Image from '@/lib/atoms/Image.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'

	import Button from '@/lib/bonds/Button.svelte'
	import IconChrome from '@/assets/icon_chrome.svg'
</script>

<Button>
	<Inline alignV="center" space="sm">
		<Image src={IconChrome} />
		add to chrome
	</Inline>
</Button>
