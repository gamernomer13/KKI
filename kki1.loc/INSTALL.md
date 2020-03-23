# Порядок развёртывания приложения

## Сервер базы данных

1. Установить PostgreSQL 9.6.

2. Создать нового пользователя c правами на создание БД

3. Создать пустую БД

4. Установить расширение PostGIS актуальной версии.

5. От имени созданного пользователя выполнить скрипт kki_db.sql из корневого каталога решения.



# Сервер приложения



1.Установить Ubuntu 16.04.

2.Установить .net core на Ubuntu 16.04:

 wget -q https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb

 sudo dpkg -i packages-microsoft-prod.deb

 sudo apt-get install apt-transport-https

 sudo apt-get update

 sudo apt-get install dotnet-hosting-2.0.0

3.Установить nodejs на Ubuntu 16.04:

 curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash – 

 sudo apt-get install -y nodejs

Установить Bower на Ubuntu 16.04:

sudo npm install -g bower

4.Установить дополнительные пакеты на Ubuntu 16.04:

 sudo apt-get install nginx supervisor

Файл конфигурации приложения должен находится по пути /mds_areas_web/appsettings.json.

5. Произвести публикацию (выполняется в каталоге с исходными кодами)

dotnet restore

 #dotnet publish -c Release -r ubuntu.16.04-x64

6. Скопировать полученные файлы в каталог размещения приложения

cd mds.areas.web\\bin\\Release\\netcoreapp2.0\\ubuntu.16.04-x64\\publish

copy %app_path%

7.Cоздать конфигурационный файл Nginx.

8.Cоздать конфигурационный файл supervisor.



# Сервис синхронизации



1.Установить Ubuntu 16.04.

2.Установить .net core на Ubuntu 16.04:

 wget -q https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb

 sudo dpkg -i packages-microsoft-prod.deb

 sudo apt-get install apt-transport-https

 sudo apt-get update

 sudo apt-get install dotnet-hosting-2.0.0

3.Установить дополнительные пакеты на Ubuntu 16.04:

 sudo apt-get install nginx supervisor

Файл конфигурации приложения должен находится по пути /mds.areas.synchronization/appsettings.json.

4. Произвести публикацию (выполняется в каталоге с исходными кодами)

dotnet restore

 #dotnet publish -c Release -r ubuntu.16.04-x64

5. Скопировать полученные файлы в каталог размещения приложения

cd mds.areas.synchronization\\bin\\Release\\netcoreapp2.0\\ubuntu.16.04-x64\\publish

copy %app_path%

6.Cоздать конфигурационный файл Nginx.

7.Cоздать конфигурационный файл supervisor.