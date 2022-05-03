import employees from '../data/employees.json';

export const Employees = () => {
	return (
		<>
			<h2>Employees</h2>
			<p>This is the employees page.</p>

			<ul>
				{employees.map((emp, index) => {
					return (
						<li key={index}>{emp.firstName} {emp.lastName}</li>
				)
				})}
			</ul>
		</>
	);
};
