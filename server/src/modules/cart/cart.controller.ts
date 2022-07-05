import { Body, Controller, Get, Post ,Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { cartService } from "./cart.service";


// To handel the api/size API requests.
@Controller('cart')
export class cartController {
    constructor(private readonly cartService: cartService){}
    @UseGuards(AuthGuard('jwt'))
    @Get('fetch')
    async getData(@Request() req) {
        console.log(req);
        return this.cartService.fetch(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async addData(@Body() data,@Request() req){
        console.log(req)
        const requestObject = {
            "User_id": req.user.id,
            "Price": data.Price
        }
        return this.cartService.create(requestObject);
    }
}