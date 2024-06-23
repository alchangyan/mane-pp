rm -rf ./build
yarn
yarn build
cp -a  ./build/. /var/www/html/manebaghdasaryan.com/
