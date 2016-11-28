# intro-docker
## Commands used
 * `docker pull ubuntu` #Pulling ubuntu image, you can skip this step and run it without pull and it will fetch it if not cached locally.
 * `docker ps` #Show running container.
 * `docker run -it ubuntu bash` #Start ubuntu container and go to terminal.
 * `docker exec -it <containerID> bash` #Connect to running container.
 * `docker logs <containerID>` #To see logs from container.
 * `docker stop <containerID>` #To stop container.
 * `docker-compose up -d --build` #To start both container -d flag for running as daemon --build flag to force build on start.
 * `docker-compose down` #To stop all containers in compose file.
 * The rest is in the Makefile with comments.

## Commands not used
 * `docker run -d --name <container-name> <image-name>` #Then you can use <container-name> instead of container id for command on running container.
 * `docker rm <container-name>` #If you use --name you can not run another container with the same name without removing first.
 * `docker start <container-name>` #Start container that you have named again with the same parameters.
