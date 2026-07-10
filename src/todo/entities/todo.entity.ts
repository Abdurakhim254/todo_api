import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('todos')
export class Todo {
  @ApiProperty({ example: 1, description: 'The unique identifier of the todo task' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Buy groceries', description: 'The title of the todo task' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Need to buy milk and eggs', description: 'Detailed description of the task', required: false, nullable: true })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ example: false, description: 'The completion status of the todo task', default: false })
  @Column({ default: false })
  isCompleted: boolean;

  @ApiProperty({ example: '2026-07-04T05:58:00Z', description: 'The date and time when the task was created' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: '2026-07-04T05:58:00Z', description: 'The date and time when the task was last updated' })
  @UpdateDateColumn()
  updatedAt: Date;
}
