import { ORDERS_REPOSITORY } from "src/core/constants";
import { Orders } from "./orders.entity";
export const orderProvider = [{
    provide: ORDERS_REPOSITORY,
    useValue: Orders,
}]