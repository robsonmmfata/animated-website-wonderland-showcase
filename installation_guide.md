
# 🚀 000CRIARSITES - Guia Completo de Instalação

## 📋 Visão Geral do Sistema

Este sistema é uma plataforma completa de criação de sites com:
- ✅ Editor visual drag-and-drop
- ✅ Sistema de assinaturas e pagamentos
- ✅ Integração com MozPayment (Moçambique)
- ✅ Sistema de afiliados com comissões
- ✅ Suporte a templates Bootstrap/ThemeWagon
- ✅ Múltiplos planos de assinatura

## 🛠️ Pré-requisitos

### Software Necessário:
```bash
- Node.js 18+ (recomendado LTS)
- PostgreSQL 12+
- Git
- npm ou yarn
```

### Verificar instalações:
```bash
node --version     # v18.x.x ou superior
npm --version      # 8.x.x ou superior
psql --version     # 12.x ou superior
git --version      # 2.x.x ou superior
```

## 📦 Instalação do Sistema

### 1. Clone o Repositório
```bash
git clone https://github.com/seuusuario/000criarsites.git
cd 000criarsites
```

### 2. Instalar Dependências
```bash
# Instalar dependências do frontend
npm install

# Ou com yarn
yarn install
```

### 3. Configuração do Banco de Dados

#### 3.1 Criar Banco PostgreSQL
```bash
# Conectar ao PostgreSQL como superusuário
sudo -u postgres psql

# Criar usuário e banco
CREATE USER criarsites_user WITH PASSWORD 'sua_senha_segura';
CREATE DATABASE criarsites_db OWNER criarsites_user;
GRANT ALL PRIVILEGES ON DATABASE criarsites_db TO criarsites_user;

# Sair do psql
\q
```

#### 3.2 Executar Script de Criação das Tabelas
```bash
# Conectar ao banco criado
psql -U criarsites_user -d criarsites_db -h localhost

# Executar o conteúdo do arquivo database_setup.md
# (Copie e cole todas as queries CREATE TABLE)
```

### 4. Configuração de Variáveis de Ambiente

#### 4.1 Criar arquivo .env
```bash
cp .env.example .env
```

#### 4.2 Configurar .env
```env
# Banco de Dados
DATABASE_URL=postgresql://criarsites_user:sua_senha_segura@localhost:5432/criarsites_db

# JWT e Segurança
JWT_SECRET=sua_chave_jwt_super_secreta_aqui_min_32_chars
ENCRYPTION_KEY=sua_chave_de_criptografia_32_chars

# MozPayment (Moçambique)
MOZPAYMENT_API_KEY=sua_chave_api_mozpayment
MOZPAYMENT_SECRET=sua_chave_secreta_mozpayment
MOZPAYMENT_ENVIRONMENT=sandbox  # ou 'production'
MOZPAYMENT_WEBHOOK_URL=https://seudominio.com/api/payments/mozpayment/webhook

# Configurações do Site
SITE_URL=http://localhost:5173
API_URL=http://localhost:3001
ADMIN_EMAIL=admin@000criarsites.com
SUPPORT_EMAIL=suporte@000criarsites.com

# WhatsApp e Contato
WHATSAPP_NUMBER=5511999999999
WHATSAPP_MESSAGE_TEMPLATE="Olá! Vim do site 000criarsites..."

# Email (configurar com seu provedor)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASS=sua_senha_app_gmail

# Upload de Arquivos
MAX_FILE_SIZE=10485760  # 10MB
ALLOWED_FILE_TYPES=jpg,jpeg,png,gif,pdf,zip

# Rate Limiting
RATE_LIMIT_WINDOW=15  # minutos
RATE_LIMIT_MAX=100    # requests por janela

# Backup
BACKUP_SCHEDULE=0 2 * * *  # Todo dia às 2h
BACKUP_RETENTION_DAYS=30
```

## 🚀 Executar o Sistema

### 1. Modo Desenvolvimento
```bash
# Frontend (React + Vite)
npm run dev

# O site estará disponível em:
# http://localhost:5173
```

### 2. Modo Produção
```bash
# Build do frontend
npm run build

# Servir arquivos estáticos
npm run preview

# Ou usar um servidor web como nginx
```

## 🌐 Configuração do Servidor (Produção)

### 1. Servidor Web (Nginx)
```nginx
# /etc/nginx/sites-available/000criarsites
server {
    listen 80;
    server_name seudominio.com www.seudominio.com;
    
    # Redirecionar para HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name seudominio.com www.seudominio.com;
    
    # SSL Certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/seudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/seudominio.com/privkey.pem;
    
    # Site files
    root /var/www/000criarsites/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 2. SSL Certificate (Let's Encrypt)
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d seudominio.com -d www.seudominio.com

# Renovação automática
sudo crontab -e
# Adicionar linha:
0 12 * * * /usr/bin/certbot renew --quiet
```

### 3. PM2 para Gerenciamento de Processos
```bash
# Instalar PM2
npm install -g pm2

# Criar arquivo ecosystem.config.js
module.exports = {
  apps: [{
    name: '000criarsites',
    script: 'npm',
    args: 'run preview',
    cwd: '/var/www/000criarsites',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}

# Iniciar aplicação
pm2 start ecosystem.config.js

# Configurar inicialização automática
pm2 startup
pm2 save
```

## 🔧 Configurações Importantes

### 1. MozPayment Integration
```javascript
// Configuração básica MozPayment
const mozpaymentConfig = {
  apiKey: process.env.MOZPAYMENT_API_KEY,
  secret: process.env.MOZPAYMENT_SECRET,
  environment: process.env.MOZPAYMENT_ENVIRONMENT,
  currency: 'MZN',
  webhookUrl: process.env.MOZPAYMENT_WEBHOOK_URL
};
```

### 2. Sistema de Backup Automático
```bash
# Criar script de backup
#!/bin/bash
# /home/backup/backup_criarsites.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/backup/000criarsites"
DB_NAME="criarsites_db"
DB_USER="criarsites_user"

# Criar diretório se não existir
mkdir -p $BACKUP_DIR

# Backup do banco
pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql

# Backup dos arquivos
tar -czf $BACKUP_DIR/files_backup_$DATE.tar.gz /var/www/000criarsites

# Remover backups antigos (30 dias)
find $BACKUP_DIR -type f -mtime +30 -delete

echo "Backup concluído: $DATE"

# Tornar executável
chmod +x /home/backup/backup_criarsites.sh

# Agendar no crontab
0 2 * * * /home/backup/backup_criarsites.sh
```

## 📊 Monitoramento e Logs

### 1. Logs do Sistema
```bash
# Ver logs em tempo real
pm2 logs 000criarsites

# Logs do Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 2. Monitoramento do Banco
```sql
-- Verificar conexões ativas
SELECT count(*) FROM pg_stat_activity WHERE state = 'active';

-- Verificar tamanho do banco
SELECT pg_size_pretty(pg_database_size('criarsites_db'));

-- Queries mais lentas
SELECT query, mean_time, calls 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;
```

## 🔐 Segurança e Manutenção

### 1. Configurações de Segurança
```bash
# Firewall básico
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'

# Fail2Ban para proteção contra ataques
sudo apt install fail2ban
```

### 2. Atualizações
```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit
npm audit fix

# Backup antes de atualizações
./backup_criarsites.sh
```

## 📱 Testes e Validação

### 1. Testes do Sistema
```bash
# Testar conexão com banco
psql -U criarsites_user -d criarsites_db -c "SELECT version();"

# Testar build do frontend
npm run build

# Testar todas as rotas principais
curl -I http://localhost:5173/
curl -I http://localhost:5173/precos
curl -I http://localhost:5173/contato
```

### 2. Validação do MozPayment
```bash
# Teste de conectividade com API
curl -X POST https://api.mozpayment.co.mz/v1/test \
  -H "Authorization: Bearer SEU_API_KEY" \
  -H "Content-Type: application/json"
```

## 🆘 Solução de Problemas

### Problemas Comuns:

#### 1. Erro de Conexão com Banco
```bash
# Verificar se PostgreSQL está rodando
sudo systemctl status postgresql

# Reiniciar se necessário
sudo systemctl restart postgresql
```

#### 2. Erro de Permissões
```bash
# Corrigir permissões dos arquivos
sudo chown -R www-data:www-data /var/www/000criarsites
sudo chmod -R 755 /var/www/000criarsites
```

#### 3. Erro de Build
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Suporte e Contato

- **Email**: suporte@000criarsites.com
- **WhatsApp**: +55 11 99999-9999
- **Documentação**: [docs.000criarsites.com]
- **Status**: [status.000criarsites.com]

---

**🎉 Parabéns!** 
Seu sistema 000criarsites está pronto para usar!

Para qualquer dúvida, consulte a documentação ou entre em contato com nossa equipe de suporte.
