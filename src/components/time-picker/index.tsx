import React from 'react'

type Props = {
	value?: string
	onChange?(event: React.BaseSyntheticEvent): any
}

const TimePicker = ({ value, onChange }: Props): JSX.Element => (
	<input
		type="time"
		className="w-full bg-tertiary text-white text-2xl font-bold outline-none rounded-lg border-4 border-primary px-3 py-3"
		title="Time Picker"
		placeholder="Time Picker"
		value={value}
		onChange={onChange}
	/>
)

export default TimePicker
