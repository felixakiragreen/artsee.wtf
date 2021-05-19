<script>
	import '$lib/style/global.css'
	import { globalCss } from '@/ui'

	const globalStyles = globalCss({
		'#svelte': {
			visibility: 'visible !important',
		},
	})

	globalStyles()

	import Header from './_header.svelte'
	import Footer from './_footer.svelte'
</script>

<svelte:head>
	<title>artsee.wtf</title>
	<script
		src="https://cdn.usefathom.com/script.js"
		data-site="ZHMIRDXE"
		data-excluded-domains="localhost"
		defer>

	</script>
</svelte:head>

<Header />

<slot />

<Footer />
