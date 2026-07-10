import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new todo task' })
  @ApiResponse({ status: 201, description: 'The task has been successfully created.', type: Todo })
  create(@Body() createTodoDto: CreateTodoDto) {
    console.log("create")
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all todo tasks' })
  @ApiResponse({ status: 200, description: 'Return all todo tasks.', type: [Todo] })
  findAll() {
    console.log("findAll");
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a todo task by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the todo task', type: Number })
  @ApiResponse({ status: 200, description: 'Return the matching todo task.', type: Todo })
  @ApiResponse({ status: 404, description: 'Todo not found.' })
  findOne(@Param('id') id: string) {
    console.log("findOne");
    return this.todoService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a todo task by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the todo task to update', type: Number })
  @ApiResponse({ status: 200, description: 'The task has been successfully updated.', type: Todo })
  @ApiResponse({ status: 404, description: 'Todo not found.' })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    console.log("update");
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a todo task by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the todo task to delete', type: Number })
  @ApiResponse({ status: 200, description: 'The task has been successfully deleted.', type: Todo })
  @ApiResponse({ status: 404, description: 'Todo not found.' })
  remove(@Param('id') id: string) {
    console.log("remove");
    return this.todoService.remove(+id);
  }
}
