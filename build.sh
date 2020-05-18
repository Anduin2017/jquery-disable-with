rm ./node_modules -rf
rm ./dist -rf
rm ./package-lock.json
npm i
npm run build
npm run build --production
start ./example.html