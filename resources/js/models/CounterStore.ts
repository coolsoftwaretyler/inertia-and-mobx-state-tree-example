import { router } from '@inertiajs/react';
import { Instance, types } from 'mobx-state-tree';

export const CounterStore = types
    .model('CounterStore', {
        count: types.number,
        isSaving: types.optional(types.boolean, false),
    })
    .actions((self) => ({
        setIsSaving(isSaving: boolean) {
            self.isSaving = isSaving;
        },
        setCount(count: number) {
            self.count = count;
        },
    }))
    .actions((self) => ({
        increment() {
            self.count += 1;
        },
        decrement() {
            self.count -= 1;
        },
        async saveToServer() {
            self.setIsSaving(true);
            try {
                await router.put(
                    route('counter.update'),
                    {
                        value: self.count,
                    },
                    {
                        preserveState: false,
                        preserveScroll: true,
                    },
                );
            } finally {
                self.setIsSaving(false);
            }
        },
    }));

export type ICounterStore = Instance<typeof CounterStore>;

export const counterStore = CounterStore.create({ count: 0 });

// Update store from Inertia page props
router.on('navigate', (event) => {
    const page = event.detail.page;
    if ('count' in page.props) {
        counterStore.setCount(page.props.count as number);
    }
});
