# 🔄 Fluxos Principais da Aplicação

## 1. Autenticação e Autorização
- **Registo:** Utilizador cria conta -> Validação de email (opcional) -> Password hashed -> Guardado no DB.
- **Login:** Utilizador submete credenciais -> Servidor valida -> Gera Access Token (curto) + Refresh Token (longo, rotativo).
- **Refresh Token:** Access Token expira -> Frontend envia Refresh Token -> Servidor valida, revoga antigo, gera novo par.
- **RBAC:** Roles (ADMIN, USER, SELLER) controlam acesso a endpoints específicos.

## 2. Gestão de Veículos
- **Listagem:** Filtros por marca, modelo, preço, tipo de contrato (venda/aluguer).
- **Criação:** Seller submete dados do veículo + fotos -> Upload para Storage -> Registo no DB.
- **Destaque:** Admin pode marcar veículos como "Destaque".

## 3. Aluguer (Rentals)
- **Reserva:** Utilizador escolhe datas -> Sistema verifica disponibilidade -> Cria reserva "Pendente".
- **Pagamento (v2):** Integração com Stripe/Referência Multibanco.
- **Confirmação:** Reserva passa a "Confirmada" após sucesso.

## 4. Leads (Contactos)
- **Formulário:** Utilizador interessado preenche formulário no detalhe do veículo -> Notificação ao vendedor -> Registo da Lead no Backoffice.
