import { Inject, Injectable } from "@nestjs/common";
import { CART_REPOSITORY } from "src/core/constants";

@Injectable()
export class cartService {
    constructor(@Inject(CART_REPOSITORY) private readonly cartService: any){}
    
    // To add new size of pizza into Size table.
    async create(data){
        return this.cartService.create(data);
    }

    // To fetch the size table
    async fetch(id){
        return this.cartService.findAll({where:{
            User_id:id
        }});
    }
}