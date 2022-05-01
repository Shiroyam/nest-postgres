import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  photoUrl: string;

  @Column()
  text: string;

  @ManyToMany(() => User)
  @JoinTable()
  user: User[];
}
