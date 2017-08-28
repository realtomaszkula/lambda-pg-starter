import * as pgPromise from 'pg-promise';
import { IDatabase, IMain } from 'pg-promise';
import { config } from './config';
import { options, IExtensions } from './options';

type Database = IDatabase<IExtensions> & IExtensions;
const pgp: IMain = pgPromise(options);
export const db = pgp<IExtensions>(config);

