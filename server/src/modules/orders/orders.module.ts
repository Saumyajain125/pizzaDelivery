import { Module } from '@nestjs/common';
import { orderController } from './orders.controller';
import { orderProvider } from './orders.provider';
import { orderService } from './orders.service';

@Module({
    providers: [orderService, ...orderProvider],
    exports: [orderService],
    controllers: [orderController],
})
export class OrderModule {}
