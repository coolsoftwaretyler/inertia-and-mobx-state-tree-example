import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="text-center">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Interactive Counter
                                </h3>
                                <div className="mb-4 text-4xl font-bold">
                                    {count}
                                </div>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={decrement}
                                        className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                        Decrement
                                    </button>
                                    <button
                                        onClick={increment}
                                        className="rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Increment
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 border-t pt-4 dark:border-gray-700">
                                You're logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
