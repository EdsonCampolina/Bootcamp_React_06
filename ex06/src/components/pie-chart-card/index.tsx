import "./styles.css";
import { buildPieChartConfig } from "./helpers";
import ReactApexChart from "react-apexcharts";
import { formatPrice } from "../../utils/formatters";

type Props = {
	labels?: string[];
	name: string;
	series?: number[];
	total?: number;
};

function PieChartCard({ labels = [], total, series = [] }: Props) {
	return (
		<>
			<div className="sales-container">
				<h2 className="sales-quantity">{formatPrice(total ?? 0)}</h2>
				<span className="sales-quantity-label">Total de vendas</span>
			</div>

			<div className="pie-chart-card">
				<ReactApexChart options={buildPieChartConfig(labels)} type="donut" width="400" height="400" series={series} />
			</div>
		</>
	);
}

export default PieChartCard;
