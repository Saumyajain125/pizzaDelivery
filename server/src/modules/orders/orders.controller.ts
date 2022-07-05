import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {orderService} from './orders.service';
@Controller('orders')
export class orderController{
    constructor(private readonly orderService: orderService ){}
    @UseGuards(AuthGuard('jwt'))
    @Get('fetch')
    async getData(@Request() req) {
        return this.orderService.fetch(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async addData(@Body() data:any,@Request() req){
        const requestObject = {
            "User_id": req.user.id,
            "Price": data.Price
        }
        return this.orderService.create(requestObject)
    }
}