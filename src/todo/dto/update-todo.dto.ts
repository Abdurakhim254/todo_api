import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiPropertyOptional({ example: true, description: 'The completion status of the task' })
  isCompleted?: boolean;
}
