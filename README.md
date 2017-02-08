# watchtower

# Installation instructions

1) Clone the repository:
```
git clone git@github.com:markusra/watchtower.git
```

2) Install MongoDB Community Edition:
- MacOS: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- Linux: https://docs.mongodb.com/manual/administration/install-on-linux/

3) Create the db-directory:
```
mkdir -p /data/db
```

4) Give the directory the right permissions:
```
sudo chown -R `id -un` /data/db
```

5) Start the mongodb daemon:
```
mongod
```
