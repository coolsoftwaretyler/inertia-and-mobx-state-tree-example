import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CounterStore } from '@/models/CounterStore';
import { Head } from '@inertiajs/react';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';

interface Props {
    count: number;
}

function Dashboard({ count: initialCount }: Props) {
    const store = useRef(CounterStore.create({ count: initialCount }));

    const increment = () => {
        store.current.increment();
    };

    const decrement = () => {
        store.current.decrement();
    };

    const saveToServer = () => {
        store.current.saveToServer();
    };

    const { count, isSaving } = store.current;

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
                                <div className="mt-4">
                                    <button
                                        onClick={saveToServer}
                                        disabled={isSaving}
                                        className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                    >
                                        {isSaving
                                            ? 'Saving...'
                                            : 'Save to Server'}
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

export default observer(Dashboard);
