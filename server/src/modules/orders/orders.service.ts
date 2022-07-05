import { Inject, Injectable } from "@nestjs/common";
import { ORDERS_REPOSITORY } from "src/core/constants";

@Injectable()
export class orderService{
    constructor(@Inject(ORDERS_REPOSITORY) private readonly orderService: any){}

    async create(data){  
        return this.orderService.create(data);
    }

    // To fetch the size table
    async fetch(id){
        return this.orderService.findAll({where:{id:id}});
    }
}