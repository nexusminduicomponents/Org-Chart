/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-var */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { PrimeReactProvider } from 'primereact/api';
import OrgChartComponent from './OrgChartComponent';
import "primereact/resources/themes/tailwind-light/theme.css";

const App = (props: any) => {
	const value = {
		appendTo: 'self',
	};
	const data = props.ComponentFrameworkContext.parameters.data.raw;
	var parsedData = [] as any;
	if (data) {
		try {
			parsedData = JSON.parse(data);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			{
				//@ts-ignore
				<PrimeReactProvider value={value}>
					<OrgChartComponent data={parsedData} />
				</PrimeReactProvider>
			}
		</>
	)
}

export default App