# Gympass Style App

## Levantamento de Requisitos

### RFs (Requisitos Funcionais)

- [ ] RF01 - Deve ser possível cadastrar um novo usuário
- [ ] RF02 - Deve ser possível autenticar um usuário
- [ ] RF03 - Deve ser possível obter o perfil de um usuário logado e autenticado
- [ ] RF04 - Deve ser possível obter o numero de check-ins realizados pelo usuário logado
- [ ] RF05 - Deve ser possível o usuário obter seu histórico de check-ins
- [ ] RF06 - Deve ser possível o usuário buscar academias próximas
- [ ] RF07 - Deve ser possível buscar academia pelo nome
- [ ] RF08 - Deve ser possível o usuário realizar check-in em uma academia
- [ ] RF09 - Deve ser possível validar o check-in de um usuário
- [ ] RF10 - Deve ser possível cadastrar uma academia

### RNFs (Requisitos Não Funcionais)

- [ ] RNF01 - A senha do usuário precisa estar criptografada.
- [ ] RNF02 - Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] RNF03 - Todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] RNF04 - O usuário deve ser identificado por um JWT

### RNs (Regras de Negócio)

- [ ] RN01 - O usuário não deve se cadastrar com e-mail duplicado;
- [ ] RN02 - O usário não pode fazer 2 check-ins no mesmo dia;
- [ ] RN03 - O usuário não pode fazer check-in se não estiver pelo menos 100m da academia
- [ ] RN04 - O check-in só pode ser validado até 20 minutos após ser criado.
- [ ] RN05 - O check-in só pode ser validado por administradores
- [ ] RN06 - A academia só pode ser cadastrada por administradores
