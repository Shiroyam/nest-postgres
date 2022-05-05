import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { User } from '../../user/entities/user.entity';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, {
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'postId' })
  post: Post;
}
