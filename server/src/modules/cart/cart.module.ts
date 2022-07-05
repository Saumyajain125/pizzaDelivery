import { Module } from '@nestjs/common';
import { cartController } from './cart.controller';
import { cartProvider } from './cart.provider';
import { cartService } from './cart.service';

@Module({
    providers: [cartService, ...cartProvider],
    exports: [cartService],
    controllers: [cartController],
})
export class CartModule {}
