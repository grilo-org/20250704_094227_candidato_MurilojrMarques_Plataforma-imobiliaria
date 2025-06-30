# Projeto: CRUD de Imóveis para Plataforma Imobiliária
---

## 📌 Objetivo

Desenvolver um CRUD (Create, Read, Update, Delete) completo com API RESTful e interface web para cadastro, visualização, edição e exclusão de imóveis.

---

## Tecnologias Utilizadas

### Backend
- PHP 8+
- Laravel 10+
- MySQL
- Swagger

### Frontend
- React JS
- Axios (requisições HTTP)

---

## Funcionalidades

### Backend (API Laravel)

| Método | Rota               | Descrição                      |
|--------|--------------------|-------------------------------|
| POST   | /api/imoveis       | Cadastrar novo imóvel         |
| GET    | /api/imoveis       | Listar todos os imóveis       |
| GET    | /api/imoveis/{id}  | Detalhes de um imóvel         |
| PUT    | /api/imoveis/{id}  | Atualizar imóvel existente    |
| DELETE | /api/imoveis/{id}  | Deletar imóvel                |

---

### Frontend (React)

- ✅ Cadastro de novo imóvel
- ✅ Listagem de imóveis com filtros:
  - Finalidade (Venda / Locação)
  - Valor mínimo e máximo
- ✅ Edição e exclusão de imóveis
- ✅ Visualização dos detalhes de um imóvel
- ✅ Interface responsiva (desktop e mobile)

---

## Como Rodar o Projeto localmente

### Clonar o repositório

```bash
git clone https://github.com/MurilojrMarques/Plataforma-imobiliaria.git
cd Plataforma-imobiliaria

### Backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed(opcional para ter dados para teste)
php artisan serve
Configure as variáveis do .env com suas credenciais de banco 

### Frontend
cd frontend
npm install
npm run dev
Certifique-se de que o frontend esteja apontando para a URL correta da API no arquivo .env ou serviço de configuração (http://localhost:8000/api por padrão)

### Documentação
A documentação da API pode ser acessada em:
Swagger UI: http://localhost:8000/api/documentation