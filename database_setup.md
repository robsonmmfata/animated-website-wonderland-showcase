
# 000CRIARSITES - Configuração do Banco de Dados PostgreSQL

## 📋 Estrutura das Tabelas

### 1. Tabela de Usuários
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    avatar_url TEXT,
    email_verified BOOLEAN DEFAULT FALSE,
    subscription_id INTEGER,
    affiliate_code VARCHAR(20) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Tabela de Planos
```sql
CREATE TABLE plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    monthly_price DECIMAL(10,2) NOT NULL,
    annual_price DECIMAL(10,2) NOT NULL,
    features JSONB NOT NULL,
    storage_gb INTEGER NOT NULL,
    bandwidth_gb INTEGER,
    max_projects INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir planos padrão
INSERT INTO plans (name, slug, monthly_price, annual_price, features, storage_gb, max_projects) VALUES
('Padrão', 'padrao', 10.00, 96.00, '["Construtor de Arrastar e Soltar", "500 MB de Armazenamento", "Sem Anúncios", "Domínios Personalizados", "Subdomínio Grátis"]', 1, 3),
('Básico', 'basico', 28.00, 276.00, '["Construtor de Arrastar e Soltar", "1GB de Armazenamento", "Tráfego ilimitado", "Editor de Código", "Sem anúncios", "Domínios Personalizados", "Subdomínio Grátis", "Baixar Projetos"]', 1, 10),
('Profissional', 'profissional', 68.00, 672.00, '["Construtor de Arrastar e Soltar", "3GB de Armazenamento", "Tráfego ilimitado", "Editor de Código", "Sem Anúncios", "Domínios Personalizados", "Subdomínio Grátis", "Baixar Projetos"]', 3, 50),
('Empresarial', 'empresarial', 298.00, 2964.00, '["Construtor de Arrastar e Soltar", "15GB de Armazenamento", "Tráfego ilimitado", "Editor de Código", "Sem Anúncios", "Domínios Personalizados", "Subdomínio Grátis", "Baixar Projetos", "Exportar Projetos para GitHub"]', 15, -1);
```

### 3. Tabela de Assinaturas
```sql
CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    plan_id INTEGER REFERENCES plans(id),
    status VARCHAR(20) DEFAULT 'active', -- active, cancelled, expired, suspended
    payment_method VARCHAR(50), -- mozpayment, credit_card, bank_transfer
    payment_provider_id VARCHAR(255),
    starts_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE,
    cancelled_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Tabela de Pagamentos
```sql
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    subscription_id INTEGER REFERENCES subscriptions(id),
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'MZN',
    status VARCHAR(20) DEFAULT 'pending', -- pending, completed, failed, refunded
    payment_method VARCHAR(50) NOT NULL,
    provider VARCHAR(50) NOT NULL, -- mozpayment, stripe, etc
    provider_payment_id VARCHAR(255),
    provider_response JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Tabela de Afiliados
```sql
CREATE TABLE affiliates (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    total_earnings DECIMAL(10,2) DEFAULT 0,
    available_earnings DECIMAL(10,2) DEFAULT 0,
    total_referrals INTEGER DEFAULT 0,
    conversion_rate DECIMAL(5,2) DEFAULT 30.00, -- 30% commission
    status VARCHAR(20) DEFAULT 'active', -- active, suspended, banned
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 6. Tabela de Comissões de Afiliados
```sql
CREATE TABLE affiliate_commissions (
    id SERIAL PRIMARY KEY,
    affiliate_id INTEGER REFERENCES affiliates(id),
    referred_user_id INTEGER REFERENCES users(id),
    payment_id INTEGER REFERENCES payments(id),
    commission_amount DECIMAL(10,2) NOT NULL,
    commission_rate DECIMAL(5,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, paid, cancelled
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 7. Tabela de Saques de Afiliados
```sql
CREATE TABLE affiliate_withdrawals (
    id SERIAL PRIMARY KEY,
    affiliate_id INTEGER REFERENCES affiliates(id),
    amount DECIMAL(10,2) NOT NULL,
    bank_name VARCHAR(255),
    bank_account VARCHAR(255),
    bank_agency VARCHAR(50),
    cpf_cnpj VARCHAR(20),
    status VARCHAR(20) DEFAULT 'pending', -- pending, processing, completed, rejected
    processed_at TIMESTAMP WITH TIME ZONE,
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 8. Tabela de Projetos
```sql
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    template_source VARCHAR(100), -- bootstrapmade, themewagon, custom
    template_name VARCHAR(255),
    html_content TEXT,
    css_content TEXT,
    js_content TEXT,
    assets JSONB, -- imagens, fontes, etc
    domain VARCHAR(255),
    subdomain VARCHAR(255),
    is_published BOOLEAN DEFAULT FALSE,
    last_saved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, slug)
);
```

### 9. Tabela de Templates
```sql
CREATE TABLE templates (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    source VARCHAR(100), -- bootstrapmade, themewagon, internal
    preview_url TEXT,
    download_url TEXT,
    html_content TEXT,
    css_content TEXT,
    js_content TEXT,
    assets JSONB,
    is_premium BOOLEAN DEFAULT FALSE,
    downloads_count INTEGER DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 10. Tabela de Configurações do Sistema
```sql
CREATE TABLE system_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(255) UNIQUE NOT NULL,
    value TEXT,
    type VARCHAR(50) DEFAULT 'string', -- string, number, boolean, json
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Configurações padrão
INSERT INTO system_settings (key, value, type, description) VALUES
('mozpayment_api_key', '', 'string', 'Chave da API do MozPayment'),
('mozpayment_secret', '', 'string', 'Chave secreta do MozPayment'),
('mozpayment_environment', 'sandbox', 'string', 'Ambiente do MozPayment (sandbox/production)'),
('affiliate_min_withdrawal', '1000.00', 'number', 'Valor mínimo para saque de afiliados'),
('affiliate_commission_rate', '30.00', 'number', 'Taxa de comissão padrão para afiliados'),
('whatsapp_number', '5511999999999', 'string', 'Número do WhatsApp para contato'),
('site_name', '000criarsites', 'string', 'Nome do site'),
('admin_email', 'admin@000criarsites.com', 'string', 'Email do administrador');
```

## 🔧 Índices para Performance

```sql
-- Índices para otimização
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_affiliate_code ON users(affiliate_code);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_affiliate_commissions_affiliate_id ON affiliate_commissions(affiliate_id);
CREATE INDEX idx_affiliate_withdrawals_affiliate_id ON affiliate_withdrawals(affiliate_id);
```

## 🚀 Configuração e Instalação

### 1. Pré-requisitos
- PostgreSQL 12+ instalado
- Node.js 18+ 
- npm ou yarn

### 2. Configuração do Banco
```bash
# Conectar ao PostgreSQL
psql -U postgres

# Criar banco de dados
CREATE DATABASE criarsites_db;

# Conectar ao banco
\c criarsites_db;

# Executar todas as queries acima para criar tabelas
```

### 3. Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/criarsites_db
MOZPAYMENT_API_KEY=sua_chave_api_mozpayment
MOZPAYMENT_SECRET=sua_chave_secreta_mozpayment
MOZPAYMENT_ENVIRONMENT=sandbox
JWT_SECRET=sua_chave_jwt_super_secreta
WHATSAPP_NUMBER=5511999999999
ADMIN_EMAIL=admin@000criarsites.com
```

### 4. Scripts de Backup
```bash
# Backup completo
pg_dump -U postgres criarsites_db > backup_$(date +%Y%m%d).sql

# Restaurar backup
psql -U postgres -d criarsites_db < backup_20241210.sql
```

### 5. Monitoramento
```sql
-- Verificar assinaturas ativas
SELECT COUNT(*) as assinaturas_ativas FROM subscriptions WHERE status = 'active';

-- Verificar pagamentos do mês
SELECT SUM(amount) as receita_mensal FROM payments 
WHERE status = 'completed' 
AND created_at >= DATE_TRUNC('month', CURRENT_DATE);

-- Verificar comissões pendentes
SELECT SUM(commission_amount) as comissoes_pendentes 
FROM affiliate_commissions WHERE status = 'pending';
```

## 🔐 Segurança

### Configurações importantes:
1. **Senhas**: Sempre usar hash bcrypt com salt
2. **JWT**: Tokens com expiração curta (24h)
3. **Rate Limiting**: Implementar para APIs críticas
4. **SSL**: Obrigatório em produção
5. **Backups**: Automatizados diariamente

## 📱 Integração MozPayment

### Endpoints necessários:
- **POST** `/api/payments/mozpayment/create` - Criar pagamento
- **POST** `/api/payments/mozpayment/callback` - Receber confirmação
- **GET** `/api/payments/mozpayment/status/:id` - Verificar status

### Fluxo de pagamento:
1. Cliente escolhe plano
2. Sistema cria registro na tabela `payments`
3. Envia dados para MozPayment
4. Recebe confirmação via webhook
5. Ativa assinatura do usuário

## 📊 Relatórios e Analytics

### Queries úteis para dashboard admin:
```sql
-- Usuários registrados por mês
SELECT DATE_TRUNC('month', created_at) as mes, COUNT(*) as usuarios
FROM users GROUP BY mes ORDER BY mes;

-- Receita por plano
SELECT p.name, SUM(pay.amount) as receita
FROM payments pay
JOIN subscriptions s ON pay.subscription_id = s.id
JOIN plans p ON s.plan_id = p.id
WHERE pay.status = 'completed'
GROUP BY p.name;

-- Top afiliados
SELECT u.name, a.total_earnings, a.total_referrals
FROM affiliates a
JOIN users u ON a.user_id = u.id
ORDER BY a.total_earnings DESC
LIMIT 10;
```

---

**⚠️ IMPORTANTE**: 
- Sempre faça backup antes de modificar a estrutura
- Teste todas as queries em ambiente de desenvolvimento primeiro
- Configure SSL para conexões de produção
- Monitore performance das queries regularmente
