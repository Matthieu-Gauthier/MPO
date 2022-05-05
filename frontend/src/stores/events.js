import { defineStore, BaseModel } from './store.pinia' // (1)
import { api } from '../feathers'

export class Event extends BaseModel {}

const servicePath = 'events'
export const useEvents = defineStore({
    idField: '_id', // (2)
    servicePath,
    Model: Event,
})

api.service(servicePath).hooks({})