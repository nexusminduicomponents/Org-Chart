/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrganizationChart } from 'primereact/organizationchart'
import * as React from 'react'
import { useState } from 'react';

const OrgChartComponent = (props: any) => {
	debugger
	const [selection, setSelection] = useState([]);

	const nodeTemplate = (node: any) => {
		if (node.type === 'person') {
			return (
				<div className="flex flex-column">
					<div className="flex flex-column align-items-center">
						<img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
						<span className="font-bold mb-2">{node.data.name}</span>
						<span>{node.data.title}</span>
					</div>
				</div>
			);
		}

		return node.label;
	};

	return (
		<>
			<div className="card overflow-x-auto">
				<OrganizationChart value={props.data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => {
					if (e.data) {
						setSelection(e.data as any)
					}
				}}
					nodeTemplate={nodeTemplate} />
			</div>
		</>
	)
}

export default OrgChartComponent


