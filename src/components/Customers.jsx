import customers from '../data/customers.json';

export const Customers = () => {
	return (
		<>
			<h2>Customers</h2>
			<p>This is the customers page.</p>
			<ul>
				{customers.slice(1, 10).map((cust, index) => {
					return <li key={index}>{cust.contactName}</li>;
				})}
			</ul>
		</>
	);
};
