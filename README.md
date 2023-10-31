#  RADPAIR ASSIGNMENT FRONTEND
### Github links
Frontend code: https://github.com/rishabbahal9/RADPAIR_ASSIGNMENT_FE

## Overview
FRONTEND code is written in ReactJS. This React project is created with create-react-app. It contains 3 pages: Form page, submit page and page not found.

Irrespective of input in template Id, you will get report template. Both inputs are required to submit the form. On submission, this frontend app used backend end point`<backend link>/get-report-template` to access the report template. Then we navigate to form submit page where report template and user's report input is compared.

## How to run code

To run this code with frontend complete, use docker-compose.yaml that has been sent on email with Readme.md document for reference. It takes care of everything.

### To run this code individually via docker

 1. Clone this repository
 2. Create .env.development.local and .env.production.local files and populate as per .env.example.
  
 **Development mode**
 1. Make sure Docker is active on your computer. Create an image using:
 ```shell
 docker build -f Dockerfile.dev -t radpair-fe:1 .
 ```
2. Create a container and run with following command:
```shell
docker run -d -it --rm -p 3002:3000 --name radpair-container radpair-fe:1
```
**Production mode**
 1. Make sure Docker is active on your computer. Create an image using:
 ```shell
 docker build -t radpair-fe:2 . 
 ```
2. Create a container and run with following command:
```shell
docker run -d -it --rm -p 3003:80 --name radpair-prod-container radpair-fe:2
```

### To run this code individually without docker
1. Clone this repository
2. Download nodejs (version 16).
3. Run the following command on terminal to install the dependencies:
	 ```shell 
	 npm install --legacy-peer-deps
	 ```
4. Create .env.development.local and .env.production.local files and populate as per .env.example
5. To run the application use following commands:
	```shell
	npm start
	```
6. You should be able to access the endpoint on `http://localhost:<PORT>`
