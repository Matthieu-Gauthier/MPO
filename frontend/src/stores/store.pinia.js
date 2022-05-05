import { setupFeathersPinia } from 'feathers-pinia'
import { api } from '../feathers'

export const { defineStore, BaseModel } = setupFeathersPinia({
    clients: { api },
    idField: '_id',
})