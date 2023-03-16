import React from 'react'
import clsx from 'clsx'
import { baseButtonStyle, baseCardStyle, baseContextStyle } from '@/styles'

type Props = {
	results: string[]
	handleBack(): any
}

const Result = ({ results, handleBack }: Props): JSX.Element => {
	const renderResults = (): JSX.Element[] => {
		return results.map((item: string, index: number) => (
			<div className={clsx(baseCardStyle, `bg-tertiary-dark text-white`)} key={index}>
				<p>{item}</p>
			</div>
		))
	}

	return (
		<div className="w-3/4 md:w-2/4 mx-auto">
			<div className="grid grid-cols-2 gap-4 justify-center">
				<p className="text-3xl text-primary text-center font-bold col-span-2">
					Тооцоолсон цаг
				</p>
				<p className={clsx(baseContextStyle, `col-span-2`)}>
					Хүн дундажаар 15 минутын дотор унтдаг байна. Унталтын мөчлөг нь 90 минут байдаг
					ба нийт 5-6 мөчлөгт хүний нойр бүрэн ханадаг байна.
				</p>
				{renderResults()}
				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-secondary text-white col-span-2`)}
					onClick={handleBack}
				>
					Буцах
				</button>
			</div>
		</div>
	)
}

export default Result
