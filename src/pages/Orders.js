import React from 'react';

// Mock data for orders
const orders = [
  { id: 1, date: '2023-05-01', total: 4597, status: 'Delivered' },
  { id: 2, date: '2023-05-05', total: 3299, status: 'Shipped' },
  { id: 3, date: '2023-05-10', total: 1899, status: 'Processing' },
];

function Orders() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">rs.{order.total.toFixed(2)}</td>
                <td className="py-3 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;

