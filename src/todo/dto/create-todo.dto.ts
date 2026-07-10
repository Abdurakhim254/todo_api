import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ example: 'Buy groceries', description: 'The title of the todo task' })
  title: string;

  @ApiPropertyOptional({ example: 'Need milk and bread', description: 'Additional description details' })
  description?: string;
}
