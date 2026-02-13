export default function BrokerCard({ broker }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <img
            src={broker.logo}
            alt={broker.name}
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-2xl font-semibold">{broker.name}</h2>
        </div>

        {/* Feature Labels */}
        <div className="flex flex-wrap gap-3">
          {broker.features.map((feature, index) => (
            <span
              key={index}
              className="flex items-center gap-1 bg-orange-100 text-orange-600 
                         px-3 py-1 rounded-full text-sm font-medium"
            >
              ✔ {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
        <div>
          <p className="text-gray-500">Account Opening</p>
          <p className="font-semibold">{broker.accountOpening}</p>
        </div>

        <div>
          <p className="text-gray-500">Account Maintenance</p>
          <p className="font-semibold">{broker.maintenance}</p>
        </div>

        <div>
          <p className="text-gray-500">Equity Delivery</p>
          <p className="font-semibold">{broker.delivery}</p>
        </div>

        <div>
          <p className="text-gray-500">Equity Intraday</p>
          <p className="font-semibold">{broker.intraday}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-200 transition">
          View Details
        </button>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition">
          Open Account
        </button>
      </div>
    </div>
  );
}
