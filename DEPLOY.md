# Hướng Dẫn Deploy Hải Hương Ceramics lên Hostinger VPS

## 1. Push lên GitHub

```bash
git init
git add .
git commit -m "feat: initial build - Hai Huong Ceramics website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hai-huong-ceramics.git
git push -u origin main
```

## 2. Cài đặt trên Hostinger VPS (Ubuntu)

SSH vào VPS:
```bash
ssh root@YOUR_VPS_IP
```

Cài Node.js 20 LTS:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Cài pnpm và PM2:
```bash
npm install -g pnpm pm2
```

Clone repo:
```bash
mkdir /var/www && cd /var/www
git clone https://github.com/YOUR_USERNAME/hai-huong-ceramics.git
cd hai-huong-ceramics
```

Tạo file `.env.local` (xem `.env.example`):
```bash
cp .env.example .env.local
nano .env.local
# Điền đầy đủ thông tin SMTP, ADMIN_SECRET, DATABASE_URL
```

Cài dependencies và build:
```bash
pnpm install
pnpm build
```

Chạy với PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 3. Nginx reverse proxy

```bash
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/haihuongceramics
```

Nội dung file:
```nginx
server {
    listen 80;
    server_name haihuongceramics.vn www.haihuongceramics.vn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/haihuongceramics /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 4. SSL với Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d haihuongceramics.vn -d www.haihuongceramics.vn
```

## 5. Cập nhật website sau này

```bash
cd /var/www/hai-huong-ceramics
git pull origin main
pnpm install
pnpm build
pm2 restart hai-huong-ceramics
```

## Truy cập Admin Panel

URL: https://haihuongceramics.vn/admin
Mật khẩu: giá trị ADMIN_SECRET trong .env.local
