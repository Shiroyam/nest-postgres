import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5050,
      username: 'postgres',
      password: '147896325',
      database: 'nest-db',
      entities: [User, Post],
      synchronize: true,
    }),
    UserModule,
    PostModule,
  ],
})
export class AppModule {}
