import React, { useState, useEffect, BaseSyntheticEvent } from 'react'
import moment from 'moment'
import clsx from 'clsx'
import TimePicker from '@/components/time-picker'
import { baseButtonStyle } from '@/styles'

type Props = {
	handleBack(): any
	handleResults(value: string[]): any
}

const GoBed = ({ handleResults, handleBack }: Props): JSX.Element => {
	const timeNow = moment().format(`HH:mm`)
	const [timeValue, setTimeValue] = useState<string>(timeNow)

	const handleChange = (event: React.BaseSyntheticEvent): void => {
		event.preventDefault()

		setTimeValue(event.target.value)
	}

	const handleClick = (event: React.BaseSyntheticEvent): void => {
		event.preventDefault()

		const selectedTime = moment(timeValue, [`hh:mm`])
		const results: string[] = []

		results.push(selectedTime.minutes(selectedTime.minutes() - 465).format(`hh:mm A`))
		results.push(selectedTime.minutes(selectedTime.minutes() - 90).format(`hh:mm A`))

		handleResults(results)
	}

	useEffect(() => setTimeValue(timeNow), [timeNow])

	return (
		<div className="w-3/4 md:w-2/4 mx-auto">
			<div className="grid grid-cols-1 gap-4 justify-center">
				<p className="text-3xl text-primary text-center font-bold">Унтах цаг тооцоолох</p>
				<p className="text-2xl text-white text-center">Хэзээ сэрэх цагаа тохируулна уу.</p>

				<TimePicker onChange={handleChange} value={timeValue} />

				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-primary `)}
					onClick={handleClick}
				>
					Тооцоолох
				</button>

				<button
					type="button"
					className={clsx(baseButtonStyle, `bg-secondary text-white`)}
					onClick={handleBack}
				>
					Буцах
				</button>
			</div>
		</div>
	)
}

export default GoBed
