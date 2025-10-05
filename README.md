# Atividade Prática: Desenvolvimento de API REST com NestJS

## Descrição da Atividade
Esta atividade prática tem como objetivo consolidar os conhecimentos adquiridos no [tutorial introdutório de API REST e NestJS](https://github.com/infoweb-pos/api-nest-notas-01-introducao) através da implementação de um CRUD completo para gerenciamento de tarefas.

## Objetivos de Aprendizado
Ao final desta atividade, o aluno será capaz de:
- Configurar um projeto NestJS do zero
- Implementar um CRUD completo com TypeORM
- Configurar banco de dados SQLite3
- Aplicar validações com Class Validator
- Testar endpoints de uma API REST
- Implementar boas práticas de desenvolvimento com NestJS

# Checklist de Progresso da Atividade

Use este checklist para acompanhar seu progresso durante a implementação da API de tarefas.

## ✅ Pré-requisitos e Configuração

### Verificação do Ambiente
- [ ] Node.js (v18+) instalado e funcionando
- [ ] npm instalado e funcionando
- [ ] Git instalado e configurado
- [ ] Editor de código (VS Code recomendado) configurado
- [ ] Cliente REST (Postman/Insomnia/Thunder Client) instalado

### Configuração Inicial
- [ ] Fork do repositório tutorial realizado
- [ ] Repositório clonado localmente
- [ ] NestJS CLI instalado globalmente (`npm install -g @nestjs/cli`)
- [ ] Projeto NestJS criado (`nest new tasks-api`)
- [ ] Dependências instaladas (TypeORM, SQLite, class-validator, etc.)

## 🗂️ Estrutura do Projeto

### Criação de Diretórios
- [ ] Diretório `src/tasks` criado
- [ ] Diretório `src/tasks/dto` criado
- [ ] Estrutura de pastas organizada conforme especificação

### Arquivos Base
- [ ] `app.module.ts` configurado com TypeORM
- [ ] `main.ts` configurado com CORS e ValidationPipe
- [ ] Configuração do banco SQLite implementada

## 📊 Implementação da Entity

### Task Entity (src/tasks/task.entity.ts)
- [ ] Classe `Task` criada com decorator `@Entity()`
- [ ] Campo `id` com `@PrimaryGeneratedColumn()`
- [ ] Campo `title` com `@Column()`
- [ ] Campo `description` com `@Column()`
- [ ] Campo `status` com enum `TaskStatus` e configuração adequada
- [ ] Campos `createdAt` e `updatedAt` com decorators de timestamp
- [ ] Enum `TaskStatus` definido corretamente (aberto, fazendo, finalizado)

## 📝 Implementação dos DTOs

### CreateTaskDto (src/tasks/dto/create-task.dto.ts)
- [ ] Classe `CreateTaskDto` criada
- [ ] Validação `@IsString()` e `@IsNotEmpty()` no campo `title`
- [ ] Validação `@IsString()` e `@IsNotEmpty()` no campo `description`
- [ ] Validação `@IsEnum()` e `@IsOptional()` no campo `status`

### UpdateTaskDto (src/tasks/dto/update-task.dto.ts)
- [ ] Classe `UpdateTaskDto` criada
- [ ] Todos os campos opcionais com `@IsOptional()`
- [ ] Validações adequadas mantidas para cada campo

## 🔧 Implementação do Service

### TasksService (src/tasks/tasks.service.ts)
- [ ] Classe `TasksService` com decorator `@Injectable()`
- [ ] Injeção do repositório com `@InjectRepository(Task)`
- [ ] Método `findAll()` implementado
- [ ] Método `findOne(id)` implementado com tratamento de erro 404
- [ ] Método `create(createTaskDto)` implementado
- [ ] Método `update(id, updateTaskDto)` implementado
- [ ] Método `remove(id)` implementado
- [ ] Tratamento adequado de erros em todos os métodos

## 🎮 Implementação do Controller

### TasksController (src/tasks/tasks.controller.ts)
- [ ] Classe `TasksController` com decorator `@Controller('tasks')`
- [ ] Injeção do service no construtor
- [ ] Endpoint `GET /tasks` com decorator `@Get()`
- [ ] Endpoint `GET /tasks/:id` com `@Get(':id')` e `ParseIntPipe`
- [ ] Endpoint `POST /tasks` com `@Post()` e `@Body()`
- [ ] Endpoint `PUT /tasks/:id` com `@Put(':id')` e validações
- [ ] Endpoint `DELETE /tasks/:id` com `@Delete(':id')`
- [ ] Status codes HTTP adequados configurados

## 📦 Configuração do Module

### TasksModule (src/tasks/tasks.module.ts)
- [ ] Classe `TasksModule` com decorator `@Module()`
- [ ] Importação do `TypeOrmModule.forFeature([Task])`
- [ ] Controller adicionado ao array `controllers`
- [ ] Service adicionado ao array `providers`
- [ ] Módulo importado no `AppModule`

## 🚀 Execução e Testes

### Inicialização da Aplicação
- [ ] Aplicação inicia sem erros (`npm run start:dev`)
- [ ] Banco de dados SQLite criado automaticamente (tasks.db)
- [ ] Console mostra "API rodando em http://localhost:3000"
- [ ] Hot reload funcionando adequadamente

### Teste dos Endpoints - GET
- [ ] `GET /tasks` retorna array vazio inicialmente (200 OK)
- [ ] `GET /tasks/1` retorna 404 Not Found quando não há tarefas

### Teste dos Endpoints - POST
- [ ] `POST /tasks` com dados válidos cria tarefa (201 Created)
- [ ] `POST /tasks` retorna tarefa criada com ID, timestamps
- [ ] `POST /tasks` com título vazio retorna 400 Bad Request
- [ ] `POST /tasks` com status inválido retorna 400 Bad Request

### Teste dos Endpoints - GET com dados
- [ ] `GET /tasks` retorna array com tarefa(s) criada(s)
- [ ] `GET /tasks/1` retorna tarefa específica (200 OK)
- [ ] `GET /tasks/999` retorna 404 Not Found

### Teste dos Endpoints - PUT
- [ ] `PUT /tasks/1` com dados válidos atualiza tarefa (200 OK)
- [ ] `PUT /tasks/1` retorna tarefa atualizada
- [ ] `PUT /tasks/999` retorna 404 Not Found
- [ ] Atualização parcial funciona (apenas alguns campos)

### Teste dos Endpoints - DELETE
- [ ] `DELETE /tasks/1` remove tarefa (204 No Content)
- [ ] `DELETE /tasks/999` retorna 404 Not Found
- [ ] Tarefa removida não aparece mais em `GET /tasks`

## 📋 Testes de Validação

### Validação de Entrada
- [ ] Campos obrigatórios (title, description) são validados
- [ ] Status aceita apenas valores válidos (aberto, fazendo, finalizado)
- [ ] Campos extras são ignorados (whitelist ativa)
- [ ] Mensagens de erro são claras e específicas

### Validação de IDs
- [ ] IDs não numéricos retornam 400 Bad Request
- [ ] IDs decimais são tratados adequadamente
- [ ] IDs negativos são tratados adequadamente
