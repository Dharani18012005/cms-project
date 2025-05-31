import React from 'react';

function Bookings() {
    const [showAddBooking, setShowAddBooking] = React.useState(false);
    const [bookings, setBookings] = React.useState([
        {
            id: 'BK001',
            customerName: 'Ashwini',
            tourPackage: 'Ooty',
            date: '2025-08-10',
            status: 'Confirmed',
        },
        {
            id: 'BK002',
            customerName: 'Aruldharanu',
            tourPackage: 'Safari Adventure',
            date: '2025-07-15',
            status: 'Pending',
        },
    ]);
    const [form, setForm] = React.useState({
        customerName: '',
        tourPackage: '',
        date: '',
        status: 'Confirmed',
    });
    const [selectedBooking, setSelectedBooking] = React.useState(null);

    const handleAddBooking = () => {
        setShowAddBooking(true);
        setForm({
            customerName: '',
            tourPackage: '',
            date: '',
            status: 'Confirmed',
        });
    };

    const handleBackToBookings = () => {
        setShowAddBooking(false);
        setSelectedBooking(null);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newBooking = {
            id: `BK${(bookings.length + 1).toString().padStart(3, '0')}`,
            ...form,
        };
        setBookings((prev) => [...prev, newBooking]);
        setShowAddBooking(false);
        setSelectedBooking(newBooking);
    };

    const handleCancel = () => {
        setShowAddBooking(false);
        setSelectedBooking(null);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Bookings</h2>
            {selectedBooking ? (
                <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
                    <div className="mb-2"><strong>Booking ID:</strong> {selectedBooking.id}</div>
                    <div className="mb-2"><strong>Customer Name:</strong> {selectedBooking.customerName}</div>
                    <div className="mb-2"><strong>Tour Package:</strong> {selectedBooking.tourPackage}</div>
                    <div className="mb-2"><strong>Date:</strong> {selectedBooking.date}</div>
                    <div className="mb-4"><strong>Status:</strong> {selectedBooking.status}</div>
                    <div className="flex gap-2">
                        <button
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            onClick={handleBackToBookings}
                        >
                            Back to Bookings
                        </button>
                        {selectedBooking.status !== 'Cancelled' && (
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                onClick={() => {
                                    setBookings((prev) =>
                                        prev.map((b) =>
                                            b.id === selectedBooking.id
                                                ? { ...b, status: 'Cancelled' }
                                                : b
                                        )
                                    );
                                    setSelectedBooking((prev) =>
                                        prev ? { ...prev, status: 'Cancelled' } : prev
                                    );
                                }}
                            >
                                Cancel Booking
                            </button>
                        )}
                    </div>
                </div>
            ) : showAddBooking ? (
                <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Add Booking</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter customer name"
                                value={form.customerName}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Tour Package</label>
                            <input
                                type="text"
                                name="tourPackage"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter tour package"
                                value={form.tourPackage}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Date</label>
                            <input
                                type="date"
                                name="date"
                                className="w-full px-3 py-2 border rounded"
                                value={form.date}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Status</label>
                            <select
                                name="status"
                                className="w-full px-3 py-2 border rounded"
                                value={form.status}
                                onChange={handleFormChange}
                            >
                                <option>Confirmed</option>
                                <option>Pending</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                onClick={handleBackToBookings}
                            >
                                Back to Bookings
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Save Booking
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <>
                    <button
                        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        onClick={handleAddBooking}
                    >
                        Add Booking
                    </button>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Booking ID</th>
                                    <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Customer Name</th>
                                    <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Tour Package</th>
                                    <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Date</th>
                                    <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr className="border-b" key={booking.id}>
                                        <td className="py-3 px-4">{booking.id}</td>
                                        <td className="py-3 px-4">{booking.customerName}</td>
                                        <td className="py-3 px-4">{booking.tourPackage}</td>
                                        <td className="py-3 px-4">{booking.date}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                booking.status === 'Confirmed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : booking.status === 'Pending'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-red-100 text-red-700'
                                            }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            {booking.status !== 'Cancelled' && (
                                                <button
                                                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs"
                                                    onClick={() => {
                                                        setBookings((prev) =>
                                                            prev.map((b) =>
                                                                b.id === booking.id
                                                                    ? { ...b, status: 'Cancelled' }
                                                                    : b
                                                            )
                                                        );
                                                    }}
                                                >
                                                    Cancel Booking
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            {(showAddBooking || selectedBooking) && (
                <div className="mt-8 flex justify-end">
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}

export default Bookings;