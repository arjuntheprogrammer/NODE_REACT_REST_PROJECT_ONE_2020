## Nginx configuration for Mac OS X with Homebrew, using sites-enabled directory.

<https://gist.github.com/jimothyGator/543653

mkdir -p /usr/local/etc/nginx/sites-{enabled,available}
cd /usr/local/etc/nginx/sites-enabled
ln -s ../sites-available/default.conf
ln -s ../sites-available/default-ssl.conf

File locations:

    nginx.conf to /usr/local/etc/nginx/
    default.conf and default-ssl.conf to /usr/local/etc/nginx/sites-available
    homebrew.mxcl.nginx.plist to /Library/LaunchDaemons/

##  default.conf

server {
    listen       80;
    server_name  localhost;

    #access_log  logs/host.access.log  main;

    location / {
        root   html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}


## default-ssl.conf

server {
    listen       443;
    server_name  localhost;

    ssl                  on;
    ssl_certificate      server.crt;
    ssl_certificate_key  server.key;

    ssl_session_timeout  5m;

    ssl_protocols  SSLv2 SSLv3 TLSv1;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers   on;

    location / {
        root   html;
        index  index.html index.htm;
    }
}

## nginx.conf

#user  nobody;
worker_processes  1;

error_log  /Library/Logs/nginx/error.log;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /Library/Logs/nginx/access.log  main;

    sendfile        on;

    keepalive_timeout  65;

    index index.html index.php;

    upstream www-upstream-pool{
        server unix:/tmp/php-fpm.sock;
    }

    include /etc/nginx/conf.d/*.conf;
    include /usr/local/etc/nginx/sites-enabled/*.conf;
}

### COMMANDS

START
sudo nginx
RELOAD
sudo nginx -s reload
TEST
sudo nginx -t

---


# NODE SETUP

<https://pr0con.com/>

mkdir -p /usr/local/var/www/parcel_blueprint
cd /usr/local/var/www/parcel_blueprint
npm init -y


cd /usr/local/var/www/parcel_blueprint
npm init -y
npm install parcel-bundler --save
npm install --save @babel/core
npm install --save @babel/plugin-proposal-class-properties
npm install --save @babel/plugin-transform-runtime
npm install --save react react-dom
mkdir src
cd src
touch index.html
mkdir Components
mkdir fonts
mkdir css
cd css
touch master.css

---


### START THE PROJECT

npm run start
