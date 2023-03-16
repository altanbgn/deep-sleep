import React, { useState } from 'react'
import clsx from 'clsx'
import WakeUp from '@/components/selector/wake-up'
import GoBed from '@/components/selector/go-bed'
import Result from '@/components/selector/results'
import { baseButtonStyle } from '@/styles'

const Selector = (): JSX.Element => {
	const [content, setContent] = useState<number>(0)
	const [results, setResults] = useState<string[]>([])

	const handleBack = (): void => {
		setContent(0)
		setResults([])
	}

	const handleResults = (value: string[]): void => {
		setResults(value)
		setContent(3)
	}

	if (content === 1) return <WakeUp handleResults={handleResults} handleBack={handleBack} />
	if (content === 2) return <GoBed handleResults={handleResults} handleBack={handleBack} />
	if (content === 3) return <Result results={results} handleBack={handleBack} />

	return (
		<div className="w-3/4 md:w-2/4 mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-primary text-gray-800`)}
					onClick={() => setContent(1)}
				>
					Сэрэх цаг тооцоолох
				</button>
				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-primary text-gray-800`)}
					onClick={() => setContent(2)}
				>
					Унтах цаг тооцоолох
				</button>
			</div>
		</div>
	)
}

export default Selector
