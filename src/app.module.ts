import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BooksModule, MembersModule, AuthModule],
})
export class AppModule {}
