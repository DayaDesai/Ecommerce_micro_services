import { Optional } from 'sequelize';

/** interface for the create purchase order params */
export type CreateFeatureParams = Optional<{
    id?: string;
    name: string;
}, 'id'>;