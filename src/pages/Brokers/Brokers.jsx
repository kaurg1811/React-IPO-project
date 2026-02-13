import BrokerCard from "../../components/UI/BrokerCard";
const brokersData = [
  {
    name: "Zerodha",
    logo: "https://media.ipoji.com/broker/images/zerodha-logo.jpeg",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    accountOpening: "Free",
    maintenance: "₹300",
    delivery: "Zero",
    intraday: "0.03%",
  },
  {
    name: "Angel One",
    logo: "https://media.ipoji.com/broker/images/angel-logo.jpeg",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    accountOpening: "Free",
    maintenance: "₹240",
    delivery: "Zero",
    intraday: "0.03%",
  },
];


export default function Brokers() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Top Stock Brokers
      </h1>

      <div className="space-y-6 max-w-6xl mx-auto">
        {brokersData.map((broker, index) => (
          <BrokerCard key={index} broker={broker} />
        ))}
      </div>
    </div>
  );
}
