# Checklist de Progresso da Atividade

Use este checklist para acompanhar seu progresso durante a implementação da API de tarefas.

## ✅ Pré-requisitos e Configuração

### Verificação do Ambiente
- [X] Node.js (v18+) instalado e funcionando
- [X] npm instalado e funcionando
- [X] Git instalado e configurado
- [X] Editor de código (VS Code recomendado) configurado
- [ ] Cliente REST (Postman/Insomnia/Thunder Client) instalado

### Configuração Inicial
- [X] Fork do repositório tutorial realizado
- [X] Repositório clonado localmente
- [X] NestJS CLI instalado globalmente (instalei localmente => `npm install -D @nestjs/cli`)
- [X] Projeto NestJS criado (instalei na raiz =: `npx nest new . --skip-git`)
- [X] Dependências instaladas (TypeORM, SQLite, class-validator, etc.)

## 🗂️ Estrutura do Projeto

### Criação de Diretórios
- [X] Diretório `src/tasks` criado
- [X] Diretório `src/tasks/dto` criado
- [X] Estrutura de pastas organizada conforme especificação

### Arquivos Base
- [X] `app.module.ts` configurado com TypeORM
- [X] `main.ts` configurado com CORS e ValidationPipe
- [X] Configuração do banco SQLite implementada

## 📊 Implementação da Entity

### Task Entity (src/tasks/task.entity.ts)
- [X] Classe `Task` criada com decorator `@Entity()`
- [X] Campo `id` com `@PrimaryGeneratedColumn()`
- [X] Campo `title` com `@Column()`
- [X] Campo `description` com `@Column()`
- [X] Campo `status` com enum `TaskStatus` e configuração adequada
- [X] Campos `createdAt` e `updatedAt` com decorators de timestamp
- [X] Enum `TaskStatus` definido corretamente (aberto, fazendo, finalizado)

## 📝 Implementação dos DTOs

### CreateTaskDto (src/tasks/dto/create-task.dto.ts)
- [X] Classe `CreateTaskDto` criada
- [X] Validação `@IsString()` e `@IsNotEmpty()` no campo `title`
- [X] Validação `@IsString()` e `@IsNotEmpty()` no campo `description`
- [X] Validação `@IsEnum()` e `@IsOptional()` no campo `status`

### UpdateTaskDto (src/tasks/dto/update-task.dto.ts)
- [X] Classe `UpdateTaskDto` criada
- [X] Todos os campos opcionais com `@IsOptional()`
- [X] Validações adequadas mantidas para cada campo

## 🔧 Implementação do Service

### TasksService (src/tasks/tasks.service.ts)
- [X] Classe `TasksService` com decorator `@Injectable()`
- [X] Injeção do repositório com `@InjectRepository(Task)`
- [X] Método `findAll()` implementado
- [X] Método `findOne(id)` implementado com tratamento de erro 404
- [X] Método `create(createTaskDto)` implementado
- [X] Método `update(id, updateTaskDto)` implementado
- [X] Método `remove(id)` implementado
- [X] Tratamento adequado de erros em todos os métodos

## 🎮 Implementação do Controller

### TasksController (src/tasks/tasks.controller.ts)
- [X] Classe `TasksController` com decorator `@Controller('tasks')`
- [X] Injeção do service no construtor
- [X] Endpoint `GET /tasks` com decorator `@Get()`
- [X] Endpoint `GET /tasks/:id` com `@Get(':id')` e `ParseIntPipe`
- [X] Endpoint `POST /tasks` com `@Post()` e `@Body()`
- [X] Endpoint `PUT /tasks/:id` com `@Put(':id')` e validações
- [X] Endpoint `DELETE /tasks/:id` com `@Delete(':id')`
- [X] Status codes HTTP adequados configurados

## 📦 Configuração do Module

### TasksModule (src/tasks/tasks.module.ts)
- [X] Classe `TasksModule` com decorator `@Module()`
- [X] Importação do `TypeOrmModule.forFeature([Task])`
- [X] Controller adicionado ao array `controllers`
- [X] Service adicionado ao array `providers`
- [X] Módulo importado no `AppModule`

## 🚀 Execução e Testes

### Inicialização da Aplicação
- [X] Aplicação inicia sem erros (`npm run start:dev`)
- [X] Banco de dados SQLite criado automaticamente (tasks.db)
- [X] Console mostra "API rodando em http://localhost:3000"
- [X] Hot reload funcionando adequadamente

### Teste dos Endpoints - GET
- [X] `GET /tasks` retorna array vazio inicialmente (200 OK)
- [X] `GET /tasks/1` retorna 404 Not Found quando não há tarefas

### Teste dos Endpoints - POST
- [X] `POST /tasks` com dados válidos cria tarefa (201 Created)
- [X] `POST /tasks` retorna tarefa criada com ID, timestamps
- [X] `POST /tasks` com título vazio retorna 400 Bad Request
- [X] `POST /tasks` com status inválido retorna 400 Bad Request

### Teste dos Endpoints - GET com dados
- [X] `GET /tasks` retorna array com tarefa(s) criada(s)
- [X] `GET /tasks/1` retorna tarefa específica (200 OK)
- [X] `GET /tasks/999` retorna 404 Not Found

### Teste dos Endpoints - PUT
- [X] `PUT /tasks/1` com dados válidos atualiza tarefa (200 OK)
- [X] `PUT /tasks/1` retorna tarefa atualizada
- [X] `PUT /tasks/999` retorna 404 Not Found
- [X] Atualização parcial funciona (apenas alguns campos)

### Teste dos Endpoints - DELETE
- [X] `DELETE /tasks/1` remove tarefa (204 No Content)
- [X] `DELETE /tasks/999` retorna 404 Not Found
- [X] Tarefa removida não aparece mais em `GET /tasks`

## 📋 Testes de Validação

### Validação de Entrada
- [X] Campos obrigatórios (title, description) são validados
- [X] Status aceita apenas valores válidos (aberto, fazendo, finalizado)
- [X] Campos extras são ignorados (whitelist ativa)
- [X] Mensagens de erro são claras e específicas

### Validação de IDs
- [X] IDs não numéricos retornam 400 Bad Request
- [X] IDs decimais são tratados adequadamente
- [X] IDs negativos são tratados adequadamente

## 📚 Documentação

### README do Projeto
- [X] Instruções de instalação claras
- [X] Comandos para executar o projeto
- [X] Lista de endpoints documentada
- [X] Exemplos de uso para cada endpoint
- [X] Seção de troubleshooting

### Código Documentado
- [X] Comentários em partes complexas do código
- [X] Nomes de variáveis e métodos descritivos
- [X] Estrutura de arquivos organizada
- [X] Imports organizados e limpos

## 🎯 Funcionalidades Extras (Opcional)

### Melhorias Avançadas
- [X] Testes unitários implementados
- [X] Swagger/OpenAPI configurado
- [X] Middleware de logging implementado
- [X] Docker configurado
- [X] Paginação implementada
- [X] Filtros de busca implementados

### Boas Práticas
- [X] Tratamento global de exceções
- [X] Logs estruturados
- [X] Configuração por variáveis de ambiente
- [X] Separação adequada de responsabilidades

## ✅ Checklist Final

### Antes da Entrega
- [X] Todos os endpoints testados e funcionando
- [X] Código revisado e limpo
- [X] README.md completo e atualizado
- [X] Commits com mensagens descritivas
- [X] Banco de dados com dados de exemplo
- [X] Screenshots ou vídeos de demonstração

### Verificação Técnica Final
- [X] Aplicação inicia sem warnings ou erros
- [X] Todos os endpoints retornam status codes corretos
- [X] Validações funcionam adequadamente
- [X] Banco de dados é criado e populado corretamente
- [X] CORS configurado e funcionando

### Entregáveis
- [X] Link do repositório GitHub fornecido
- [X] Repositório é público ou acesso concedido ao professor
- [X] README.md está na raiz do projeto
- [X] Código está na branch principal (main/master)

---

## 📊 Pontuação por Seção

- **Configuração e Estrutura**: 15 pontos
- **Entity e DTOs**: 20 pontos  
- **Service**: 25 pontos
- **Controller**: 20 pontos
- **Testes e Validação**: 15 pontos
- **Documentação**: 5 pontos

**Total**: 100 pontos

---

**Dica**: Marque cada item conforme for completando. Isso ajudará a garantir que nenhuma parte importante seja esquecida!