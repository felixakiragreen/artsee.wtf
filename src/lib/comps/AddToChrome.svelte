<script lang="ts">
	import Image from '@/lib/atoms/Image.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Link from '@/lib/bonds/Link.svelte'
	import Button from '@/lib/bonds/Button.svelte'
	import IconChrome from '@/assets/icon_chrome.svg'

	import { chrome } from '@/lib/datum/socials'
</script>

<Link newTab url={chrome.url} appearance="clean">
	<Button>
		<Inline alignV="center" space="sm">
			<Image src={IconChrome} />
			add to chrome
		</Inline>
	</Button>
</Link>
