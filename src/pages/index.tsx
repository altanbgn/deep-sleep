import React from 'react'
import Title from '@/components/title'
import Selector from '@/components/selector'

const Home = (): JSX.Element => (
	<div className="container mx-auto my-8">
		<div className="h-screen grid grid-cols-1 gap-4 content-center">
			<Title />
			<Selector />
		</div>
	</div>
)

export default Home
