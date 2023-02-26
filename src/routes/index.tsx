import { component$, useStore, useTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
	const store = useStore({
		timeline: [
			{
				name: 'first event',
				start: 1,
				duration: 4,
			},
		],
		component: <></>,
	})

	useTask$(() => {})

	return (
		<div>
			<div class='border-4 border-red-400 rounded-xl bg-red-100 w-full h-[30rem] overflow-y-hidden overflow-x-scroll'>
				<div class='max-h-full min-w-full w-max border-y-[20px] border-red-100 w-full overflow-y-scroll'>
					<div class='px-5'>
						<h1>Timeline</h1>
						<div class='grid grid-cols-30 gap-2 w-[240vw]'>
							{store.timeline.map((n) => (
								<div class={`border border-red-600 p-4 col-[${n.start}_/_span_${n.duration}]`}>{n.name}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
}
