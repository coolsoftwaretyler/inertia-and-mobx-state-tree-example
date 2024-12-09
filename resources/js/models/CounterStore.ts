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
            await router.post(route('counter.increment'), {
                value: self.count,
            });
            self.setIsSaving(false);
        },
    }));

export type ICounterStore = Instance<typeof CounterStore>;
