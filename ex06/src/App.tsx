import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import PieChartCard from "./components/pie-chart-card";
import { FilterData, PieChartConfig, SalesByStore, SalesSummary } from "./types";
import { makeRequest } from "./utils/request";
import { buildSalesByStoreChart } from "./helpers";

function App() {
	const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
	const [salesSummary, setsalesSummary] = useState<SalesSummary>();
	const [filterData, setFilterData] = useState<FilterData>();

	const onFilterChange = (filter: FilterData) => {
		setFilterData(filter);
	};

	useEffect(() => {
		makeRequest
			.get<SalesByStore[]>(`/sales/by-gender?storeId=${filterData?.storeId ?? 0}`)
			.then(response => {
				const newSalesByStore = buildSalesByStoreChart(response.data);
				setSalesByStore(newSalesByStore);
			})
			.catch(() => {});
	}, [filterData]);

	useEffect(() => {
		makeRequest
			.get<SalesSummary>(`/sales/summary?storeId=${filterData?.storeId ?? 0}`)
			.then(response => {
				setsalesSummary(response.data);
			})
			.catch(() => {});
	}, [filterData]);

	return (
		<>
			<Header />
			<div className="app-container">
				<Filter onFilterChange={onFilterChange} />
				<div className="sales-overview-container base-card">
					<PieChartCard
						labels={salesByStore?.labels}
						series={salesByStore?.series}
						name={""}
						total={salesSummary?.sum}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
